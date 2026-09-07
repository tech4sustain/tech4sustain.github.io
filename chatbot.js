(() => {
    const launcher = document.getElementById('chatLauncher');
    const panel = document.getElementById('conferenceChat');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const clean = text => text.replace(/\s+/g, ' ').trim();
    const sectionText = id => {
        const section = document.getElementById(id);
        return section ? clean(section.innerText) : '';
    };
    function addMessage(text, user = false, link) {
        const bubble = document.createElement('div');
        bubble.className = 'chat-message' + (user ? ' chat-user' : '');
        const label = document.createElement('small');
        label.className = 'chat-speaker';
        label.textContent = user ? 'You' : 'Conference Assistant';
        const content = document.createElement('div');
        content.textContent = text;
        bubble.append(label, content);
        if (link) {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.label;
            if (!link.href.startsWith('#')) {
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
            }
            bubble.append(anchor);
        }
        messages.append(bubble);
        messages.scrollTop = messages.scrollHeight;
    }
    function answer(question) {
        const q = question.toLowerCase();
        const words = text => text.toLowerCase().match(/[a-z]{3,}/g)?.filter(word => !['the','and','for','what','how','can','are','with','does','this','that','conference'].includes(word)) || [];
        const queryWords = words(q);
        const faqs = [...document.querySelectorAll('.faq-item')].map(item => {
            const title = item.querySelector('.faq-question')?.textContent || '';
            const tokens = new Set(words(title));
            return { score: queryWords.filter(word => tokens.has(word)).length, text: clean(item.querySelector('.faq-answer')?.textContent || '') };
        }).sort((a,b) => b.score - a.score);
        if (faqs[0]?.score >= 2 && !/download|brochure/.test(q)) return [faqs[0].text, {href:'#faq',label:'View frequently asked questions'}];
        const linkTo = (id, label) => ({ href: '#' + id, label });
        if (/brochure/.test(q)) return ['Open the conference brochure below.', {href: 'downloads/Brochure_Tech4Sustain_2026.pdf', label: 'Open brochure'}];
        if (/guideline|format|manuscript|template|page limit/.test(q)) return ['The submission guidelines include manuscript structure and formatting requirements.', {href: 'downloads/Submission_Guidelines_Tech4Sustain_2026.pdf', label: 'Open submission guidelines'}];
        if (/contact|email|phone|coordinator|help.*person/.test(q)) return [sectionText('contact'), linkTo('contact', 'Contact the organizers')];
        if (/deadline|date|when|camera.ready|acceptance/.test(q)) return [sectionText('dates'), linkTo('dates', 'View conference timeline')];
        if (/track|research|topic|discipline|pharmacy|engineering|medical|management/.test(q)) {
            const tracks = [...document.querySelectorAll('#domainTracks > li')].map((item, i) => `${i + 1}. ${clean(item.textContent)}`).join('\n');
            return [tracks + '\nExplore the discipline groups below the tracks for specific subtopics.', linkTo('participation', 'Explore research areas')];
        }
        if (/register|registration|fee|cost|payment/.test(q)) return ['Use the Register on ATAL button to register. See the conference timeline for registration deadlines.', {href: 'https://atalacademy.aicte.gov.in/login', label: 'Register on ATAL'}];
        if (/submit|submission|paper/.test(q)) {
            const button = document.querySelector('[data-track-event="paper_submission"]');
            return ['Submit your research paper using the official submission form. Consult the submission guidelines before uploading.', {href: button.href, label: 'Submit research paper'}];
        }
        if (/venue|where|location|address|travel/.test(q)) return ['Dharmsinh Desai University, Multimedia Hall, College Road, Nadiad – 387001, Gujarat, India.', {href: 'https://www.google.com/maps/search/Dharmsinh+Desai+University+Nadiad', label: 'View location'}];
        if (/publication|isbn|proceeding|review/.test(q)) return [sectionText('publication'), linkTo('publication', 'Publication information')];
        if (/sponsor/.test(q)) return [sectionText('sponsorship'), linkTo('sponsorship', 'Sponsorship opportunities')];
        if (/^(hi|hello|hey|thanks|thank you)[!. ]*$/.test(q)) return ['Hello! I can help you find deadlines, tracks, registration, submission guidelines, the brochure, and contact details.'];
        return ['I could not match that question to the conference information. Try “submission deadline”, “research tracks”, or “guidelines”, or contact the organizers for a specific answer.', linkTo('contact', 'Contact organizers')];
    }
    function send(text) {
        text = text.trim();
        if (!text) return;
        addMessage(text, true);
        const [reply, link] = answer(text);
        addMessage(reply, false, link);
        input.value = '';
    }
    function toggle(open) {
        panel.hidden = !open;
        launcher.setAttribute('aria-expanded', String(open));
        (open ? input : launcher).focus();
    }
    launcher.addEventListener('click', () => toggle(panel.hidden));
    document.getElementById('chatClose').addEventListener('click', () => toggle(false));
    panel.addEventListener('keydown', event => { if (event.key === 'Escape') toggle(false); });
    document.getElementById('chatForm').addEventListener('submit', event => { event.preventDefault(); send(input.value); });
    document.querySelectorAll('.chat-suggestions button').forEach(button => button.addEventListener('click', () => send(button.textContent)));
    messages.addEventListener('click', event => { if (event.target.closest('a[href^="#"]')) toggle(false); });
    function welcome() {
        messages.replaceChildren();
        addMessage('Welcome to Tech4Sustain 2026. How can I help you?\n\nChoose a topic below or ask a question about your paper, registration, or the conference.');
    }
    document.getElementById('chatReset').addEventListener('click', () => { welcome(); input.value = ''; input.focus(); });
    panel.querySelector('.chat-footer a').addEventListener('click', () => toggle(false));
    welcome();
})();
