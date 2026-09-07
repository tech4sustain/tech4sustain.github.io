/* Conference answers are read from page content, including collapsed details. */
(function () {
'use strict';
const clean = value => (value || '').replace(/\s+/g, ' ').trim();
function respond(question, data, context = {}) {
 const q = clean(question).toLowerCase();
 const result = (title, text, links = [], choices = []) => ({title, text, links, choices});
 const link = (href, label) => ({href, label});
 const topics = ['Important dates', 'Submit a paper', 'Research tracks', 'Registration', 'Manuscript format', 'Brochure', 'Venue', 'Contact organizers'];
 if (/^(topics|help|hello|hi|start|menu)[!. ]*$/.test(q)) return result('How can I help?', 'Find the right track, prepare your manuscript, or check the next deadline. Choose a topic or type your question.', [], topics);
 if (/^(thank|thanks)/.test(q)) return result('You are welcome', 'You can return to Topics whenever you need more conference information.', [], topics.slice(0,4));
 if (/brochure|guideline.*pdf|download guidelines|download.*guideline/.test(q)) {
  const brochure = /brochure/.test(q);
  return result(brochure ? 'Conference brochure' : 'Submission guidelines', 'Open the official PDF in a new tab. You can save or print it using your browser PDF viewer.', [link(brochure ? data.brochure : data.guidelines, brochure ? 'Open brochure (PDF)' : 'Open guidelines (PDF)')], ['Manuscript format', 'Submit a paper']);
 }
 if (/my.*(paper|submission|registration).*(status|accepted|received|approved)|(?:status|accepted|received).*my|acceptance status/.test(q)) return result('Check your submission status', 'I cannot access individual submissions or registration records. Please contact the organizing team with your submission details.', [link('#contact','Contact organizers')]);
 if (/deadline|dates?|when|camera.ready|acceptance/.test(q)) {
  let dates = data.dates;
  const filter = /camera|registration/.test(q) ? /camera|registration/i : /acceptance/.test(q) ? /acceptance/i : /submission|paper deadline/.test(q) ? /submission deadline/i : null;
  if (filter) dates = dates.filter(item => filter.test(item.label));
  return result('Conference timeline', (dates.length ? dates : data.dates).map(item => item.label + ': ' + item.date).join('\n\n'), [link('#dates','View all important dates')], ['Submit a paper','Registration']);
 }
 if (/contact|email address|phone|coordinator|human|organizer/.test(q)) return result('Contact the organizing team', data.contact, [link('mailto:'+data.email,'Email the team'),link(data.phone,'Call coordinator')], ['Venue','Important dates']);
 if (/venue|location|where|address|travel|hotel|accommodation/.test(q)) return result('Plan your visit', data.venue + (/hotel|accommodation/.test(q) ? '\n\nFor accommodation arrangements, please contact the organizing team.' : ''), [link(data.map,'Open map'),link('#contact','Contact organizers')], ['Important dates']);
 const discipline = data.disciplines.find(item => q.includes(item.key));
 const number = q.match(/\btrack\s*(\d+)\b/);
 if (discipline) context.discipline = discipline.key;
 if (number) {
  const index = Number(number[1])-1;
  const group = discipline || data.disciplines.find(item => item.key === context.discipline);
  const track = group ? group.tracks[index] : null;
  if (!data.tracks[index]) return result('Choose a track from 1 to 8', 'The conference has eight common tracks.', [], ['Research tracks']);
  return result(track?.title || data.tracks[index], track ? track.text : 'Choose your discipline to see its research subtopics for this track.', [link('#participation','View tracks and discipline details')], group ? ['Track '+(index === 7 ? 1 : index+2),'Research tracks'] : data.disciplines.map(item=>item.name));
 }
 if (discipline) return result(discipline.name, 'All eight common tracks include applications for this discipline. Select a track for the full subtopic list.\n\n'+discipline.tracks.map((item,i)=>(i+1)+'. '+item.title.replace(/^Track \d+:\s*/i,'')).join('\n'), [link('#participation','Explore discipline research areas')], discipline.tracks.map((item,i)=>'Track '+(i+1)));
 if (/track|research|topic|discipline/.test(q) && !/submit|paper|publication/.test(q)) {
  context.discipline = null;
  return result('Eight common tracks',data.tracks.map((item,i)=>(i+1)+'. '+item).join('\n\n'),[link('#participation','Explore all research areas')],data.disciplines.map(item=>item.name));
 }
 if (/format|manuscript|guideline|reference|abstract|font|margin|page|template/.test(q)) return result('Prepare your manuscript', data.format.join('\n')+'\n\nManuscript structure: '+data.structure.join(' · '),[link(data.guidelines,'Full submission guidelines (PDF)')],['Submit a paper','Submission deadline']);
 if (/register|registration|fee|cost|pay/.test(q)) return result('Registration', data.registration || 'Use the official ATAL portal to register. Check the conference timeline for the registration deadline.',[link(data.register,'Open ATAL registration'),link('#dates','Registration deadline')],['Contact organizers','Submission guidelines PDF']);
 if (/submit|submission|paper|upload/.test(q)) return result('Submit your research paper','1. Review the submission guidelines.\n2. Select a relevant conference track.\n3. Prepare your manuscript and author details.\n4. Submit through the official form.\n\n'+data.submission,[link(data.submit,'Open paper submission form'),link(data.guidelines,'Read submission guidelines (PDF)')],['Submission deadline','Manuscript format','Contact organizers']);
 if (/programme|program|schedule|session|day 1|day 2/.test(q)) return result('Conference programme',data.programme,[link('#programme','View detailed programme')],['Important dates','Venue']);
 if (/publication|proceeding|isbn|review|plagiarism/.test(q)) return result('Publication and review',data.publication,[link('#publication','Full publication information')],['Submission guidelines PDF','Contact organizers']);
 if (/sponsor/.test(q)) return result('Sponsorship',data.sponsorship,[link('#sponsorship','View sponsorship opportunities')],['Contact organizers']);
 if (/governance|patron|convener|committee/.test(q)) return result('Conference governance',data.governance,[link('#governance','View governance')],['Contact organizers']);
 const tokens = q.match(/[a-z]{3,}/g)?.filter(w=>!['the','what','how','can','are','for','and','conference','does','with'].includes(w)) || [];
 const ranked = data.faqs.map(faq=>({...faq,score:tokens.filter(w=>faq.question.toLowerCase().includes(w)).length})).sort((a,b)=>b.score-a.score);
 if (ranked[0]?.score >= 1 && ranked[0].score >= tokens.length * .5) return result(ranked[0].question,ranked[0].answer,[link('#faq','Read conference FAQs')],['Contact organizers']);
 return result('Let me point you in the right direction','I could not find a reliable answer to that question in the website information. Choose a topic below, or ask the organizing team for help.',[link('#contact','Contact the organizing team')],topics);
}
if (typeof module !== 'undefined' && module.exports) { module.exports = {respond}; return; }
const $ = s => document.querySelector(s), all = s => [...document.querySelectorAll(s)];
if (!$('#ca-panel')) return;
const text = s => clean($(s)?.textContent);
const href = (s, fallback) => $(s)?.getAttribute('href') || fallback;
const paragraphs = s => all(s+' p').map(e=>clean(e.textContent)).filter(Boolean).join('\n\n');
const data = {
 dates: all('#dates .timeline-card').map(e=>({label:clean(e.querySelector('.date-label')?.textContent),date:clean(e.querySelector('h3')?.textContent)})),
 tracks: all('#domainTracks > li').map(e=>clean(e.textContent)),
 disciplines: all('.discipline-research-group').map(e=>{const name=clean(e.querySelector('summary')?.textContent); return {name,key:name.toLowerCase().includes('medical')?'medical':name.split(/\s/)[0].toLowerCase(),tracks:[...e.querySelectorAll('.discipline-track')].map(t=>({title:clean(t.querySelector('h5')?.textContent),text:clean(t.querySelector('p')?.textContent)}))};}),
 faqs: all('.faq-item').map(e=>({question:clean(e.querySelector('.faq-question')?.textContent).replace(/\+$/,''),answer:clean(e.querySelector('.faq-answer')?.textContent)})),
 format: all('.format-row').map(e=>clean(e.querySelector('span')?.textContent)+': '+clean(e.querySelector('strong')?.textContent)),
 structure: all('.structure-grid strong').map(e=>clean(e.textContent)),
 contact: text('.contact-command'), email: href('#contact a[href^="mailto:"]','mailto:tech4sustain@ddu.ac.in').replace('mailto:',''),phone:href('#contact a[href^="tel:"]','#contact'),
 venue: text('.venue-grid h2')+'\n'+text('.venue-hall')+'\n'+text('.venue-address'),map:href('.venue-grid a','https://www.google.com/maps/search/Dharmsinh+Desai+University+Nadiad'),
 brochure:href('a[href*="Brochure_"]','downloads/Brochure_Tech4Sustain_2026.pdf'),guidelines:href('a[href*="Submission_Guidelines_"]','downloads/Submission_Guidelines_Tech4Sustain_2026.pdf'),
 submit:href('[data-track-event="paper_submission"]','#guidelines'),register:href('[data-track-event="registration"]','https://atalacademy.aicte.gov.in/login'),
 submission: paragraphs('.submission-methods'),programme:paragraphs('#programme'),publication:paragraphs('#publication'),sponsorship:paragraphs('#sponsorship'),governance:text('#governance'),registration:''
};
const registrationFAQ=data.faqs.find(f=>/registration fee/i.test(f.question));
if(registrationFAQ) data.registration=registrationFAQ.answer;
const panel=$('#ca-panel'), input=$('#ca-input'), log=$('#ca-log'), choices=$('#ca-choices');
let history=[],context={};
function append(reply,user=false){
 const article=document.createElement('article');article.className='ca-message'+(user?' ca-user':'');
 const label=document.createElement('small');label.textContent=user?'You':'Tech4Sustain Assistant';article.append(label);
 if(reply.title){const title=document.createElement('h3');title.textContent=reply.title;article.append(title);}
 const body=document.createElement('p');body.textContent=reply.text;article.append(body);
 (reply.links||[]).forEach(item=>{if(!item.href)return;const a=document.createElement('a');a.href=item.href;a.textContent=item.label;if(!/^(#|mailto:|tel:)/.test(item.href)){a.target='_blank';a.rel='noopener noreferrer';a.textContent+=' ↗';}article.append(a);});
 log.append(article);history.push((user?'You':'Assistant')+': '+(reply.title||'')+'\n'+reply.text);log.scrollTop=log.scrollHeight;
 if(!user){choices.replaceChildren();(reply.choices||[]).forEach(label=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',()=>send(label));choices.append(b);});}
}
function send(value){const q=clean(value).slice(0,500);if(!q)return;append({text:q},true);append(respond(q,data,context));input.value='';input.focus();}
function toggle(open){panel.hidden=!open;$('#ca-launch').setAttribute('aria-expanded',String(open));(open?input:$('#ca-launch')).focus();}
function reset(){history=[];context={};log.replaceChildren();append(respond('topics',data,context));}
$('#ca-launch').addEventListener('click',()=>toggle(panel.hidden));$('#ca-close').addEventListener('click',()=>toggle(false));
$('#ca-home').addEventListener('click',()=>{context={};append(respond('topics',data,context));input.focus();});
$('#ca-reset').addEventListener('click',()=>{reset();input.value='';input.focus();});
$('#ca-form').addEventListener('submit',e=>{e.preventDefault();send(input.value);});
panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();toggle(false);}});
panel.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const target=$(a.getAttribute('href'));if(target){e.preventDefault();toggle(false);target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}});
$('#ca-export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob(['Tech4Sustain 2026 — Conference conversation\n\n'+history.join('\n\n')],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Tech4Sustain-conversation.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
reset();
})();
