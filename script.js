/* =========================================================
   TECH4SUSTAIN 2026
   COMPLETE SCRIPT.JS
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           1. CONFERENCE DOMAIN DATA
        ================================================= */

        const conferenceDomains = {


            /* =================================================
               ENGINEERING
            ================================================= */

            engineering: {

                title:
                    "Engineering Participation Areas",

                description:
                    "UG/PG engineering students, PhD scholars, faculty members, researchers, R&D engineers, start-up innovators and interdisciplinary teams are invited to contribute original research, reviews, prototypes, implementations, simulations, case studies and technology-led innovations.",

                eligibility: [
                    "UG Engineering Students",
                    "PG Engineering Students",
                    "PhD Scholars",
                    "Research Fellows",
                    "Faculty Members",
                    "Academic Researchers",
                    "R&D Engineers",
                    "Industry Professionals",
                    "Start-up Innovators",
                    "Interdisciplinary Teams"
                ],

                tracks: [

                    {
                        title:
                            "Artificial Intelligence, Machine Learning & Data Analytics",

                        description:
                            "Intelligent computing, analytics and AI-enabled engineering systems.",

                        topics: [
                            "Machine Learning & Deep Learning",
                            "Generative AI & Large Language Models",
                            "AI Agents & Autonomous Systems",
                            "Computer Vision",
                            "Natural Language Processing",
                            "Explainable & Responsible AI",
                            "Data Science & Big Data Analytics",
                            "Predictive & Prescriptive Analytics",
                            "Edge AI & TinyML",
                            "Scientific Machine Learning",
                            "Reinforcement Learning",
                            "Federated Learning",
                            "AI for Engineering Design",
                            "AI for Healthcare",
                            "AI for Agriculture",
                            "AI for Energy Systems",
                            "AI for Manufacturing",
                            "AI for Education",
                            "AI for Business & Society",
                            "Digital Twins",
                            "Intelligent Decision-Support Systems",
                            "Pattern Recognition",
                            "Knowledge Graphs",
                            "Intelligent Optimisation",
                            "Multimodal AI",
                            "AI-based Fault Diagnosis",
                            "Anomaly Detection"
                        ]
                    },


                    {
                        title:
                            "IoT, Embedded Systems & Smart Infrastructure",

                        description:
                            "Connected sensing, intelligent devices and embedded infrastructure.",

                        topics: [
                            "Internet of Things",
                            "Industrial IoT",
                            "Embedded Systems",
                            "Real-Time Systems",
                            "Microcontrollers & Microprocessors",
                            "Edge / Fog Computing",
                            "Sensors & Actuators",
                            "MEMS",
                            "Wireless Sensor Networks",
                            "Smart Homes & Smart Buildings",
                            "Smart Agriculture",
                            "Smart Healthcare",
                            "Smart Manufacturing",
                            "Smart Energy Systems",
                            "Smart Metering",
                            "Remote Monitoring",
                            "Energy Harvesting",
                            "Connected Devices",
                            "IoT Security",
                            "Low-Power Embedded Systems",
                            "Embedded AI",
                            "Cyber-Physical Systems",
                            "Robotics Controllers",
                            "Raspberry Pi / Arduino / FPGA Applications",
                            "Intelligent Instrumentation",
                            "Predictive Maintenance using IoT"
                        ]
                    },


                    {
                        title:
                            "Sustainable Technologies, Energy & Environment",

                        description:
                            "Engineering pathways for renewable energy, resilience and sustainable development.",

                        topics: [
                            "Renewable Energy",
                            "Solar, Wind & Hybrid Energy Systems",
                            "Energy Storage",
                            "Battery Technologies",
                            "Electric Vehicles",
                            "Wireless EV Charging",
                            "Smart Grids",
                            "Microgrids",
                            "Power Electronics",
                            "Energy Management Systems",
                            "Hydrogen Energy",
                            "Fuel Cells",
                            "Green Manufacturing",
                            "Sustainable Materials",
                            "Waste & E-Waste Management",
                            "Water & Wastewater Treatment",
                            "Environmental Monitoring",
                            "Carbon Capture & Carbon Management",
                            "Climate-Resilient Engineering",
                            "Green Buildings",
                            "Sustainable Transportation",
                            "Energy-Efficient Systems",
                            "Circular Economy",
                            "Life-Cycle Assessment",
                            "Sustainable Product Design",
                            "Green Computing",
                            "Energy-Efficient Communication Networks"
                        ]
                    },


                    {
                        title:
                            "Communication Systems, Signal Processing & Networks",

                        description:
                            "Next-generation communication, networking and signal intelligence.",

                        topics: [
                            "5G & 6G Communication",
                            "Wireless Communication",
                            "Massive MIMO",
                            "mmWave & THz Systems",
                            "Integrated Sensing & Communication",
                            "Satellite Communication",
                            "Space Communication",
                            "Optical Communication",
                            "Free-Space Optical Systems",
                            "Software Defined Radio",
                            "Cognitive Radio",
                            "Antenna & RF Systems",
                            "Digital Signal Processing",
                            "Image Processing",
                            "Speech & Audio Processing",
                            "Biomedical Signal Processing",
                            "Wireless Sensor Networks",
                            "Vehicular Networks",
                            "Drone Communication",
                            "Network Security",
                            "IoT Communication",
                            "AI/ML for Communication Systems",
                            "Channel Coding",
                            "Modulation & Detection",
                            "Communication Networks",
                            "Next-Generation Internet",
                            "Quantum Communication",
                            "Visible Light Communication"
                        ]
                    },


                    {
                        title:
                            "Industry 4.0/5.0, Automation & Digital Manufacturing",

                        description:
                            "Smart production, robotics, industrial AI and human-centric manufacturing.",

                        topics: [
                            "Smart Factories",
                            "Industrial Automation",
                            "PLC & SCADA",
                            "Robotics",
                            "Collaborative Robots",
                            "Autonomous Systems",
                            "Industrial IoT",
                            "Cyber-Physical Production Systems",
                            "Digital Twins",
                            "Predictive Maintenance",
                            "Condition Monitoring",
                            "Smart Quality Control",
                            "Industrial AI",
                            "Additive Manufacturing",
                            "3D Printing",
                            "CNC & Advanced Manufacturing",
                            "Flexible Manufacturing Systems",
                            "Human-Machine Interaction",
                            "AR/VR for Industry",
                            "Intelligent Supply Chains",
                            "Digital Manufacturing",
                            "Process Automation",
                            "Machine Vision",
                            "Industrial Safety",
                            "Human-Centric Industry 5.0",
                            "Sustainable Manufacturing",
                            "Intelligent Production Planning"
                        ]
                    },


                    {
                        title:
                            "Smart Cities, Mobility & Cyber-Physical Systems",

                        description:
                            "Intelligent urban infrastructure, mobility and resilient cities.",

                        topics: [
                            "Smart Infrastructure",
                            "Urban IoT",
                            "Intelligent Transportation Systems",
                            "Electric Mobility",
                            "Autonomous Vehicles",
                            "Connected Vehicles",
                            "V2X Communication",
                            "Smart Public Transportation",
                            "Smart Parking",
                            "Traffic Monitoring & Control",
                            "Smart Buildings",
                            "Smart Water Systems",
                            "Smart Waste Management",
                            "Smart Street Lighting",
                            "GIS & Geospatial Technologies",
                            "Urban Disaster Management",
                            "Digital Twins for Cities",
                            "Smart Governance",
                            "Digital Public Infrastructure",
                            "Smart Energy Management",
                            "Smart Surveillance",
                            "Public Safety Systems",
                            "Drone-based Urban Monitoring",
                            "Smart Logistics",
                            "Urban Sustainability",
                            "Cyber-Physical Infrastructure",
                            "Resilient Cities"
                        ]
                    },


                    {
                        title:
                            "Semiconductor, VLSI & Emerging Electronics",

                        description:
                            "Advanced chip design, devices, architectures and electronic technologies.",

                        topics: [
                            "VLSI Design",
                            "ASIC Design",
                            "FPGA Systems",
                            "RISC-V",
                            "Processor Architecture",
                            "AI/ML Hardware",
                            "AI Accelerators",
                            "Semiconductor Fabrication",
                            "IC Design & Prototyping",
                            "Analog & Mixed-Signal ICs",
                            "Digital IC Design",
                            "RF & Microwave ICs",
                            "MEMS & NEMS",
                            "Advanced Packaging",
                            "Chiplets",
                            "2.5D / 3D Integration",
                            "Power Electronics",
                            "SiC & GaN Devices",
                            "Emerging Memory Technologies",
                            "In-Memory Computing",
                            "Neuromorphic Computing",
                            "Flexible Electronics",
                            "Wearable Electronics",
                            "Semiconductor Testing",
                            "Reliability Engineering",
                            "Hardware Security",
                            "Low-Power VLSI",
                            "Electronic Design Automation",
                            "Nanoelectronics",
                            "Sensor ICs",
                            "Embedded Hardware"
                        ]
                    },


                    {
                        title:
                            "Interdisciplinary Innovations Aligned with ATAL Priorities",

                        description:
                            "Deep-tech and technology-led solutions addressing national and societal priorities.",

                        topics: [
                            "Deep-Tech Innovation",
                            "Healthcare Technology",
                            "AgriTech",
                            "Climate Technology",
                            "Environmental Technology",
                            "Disaster Management",
                            "Assistive & Inclusive Technologies",
                            "Defence Technologies",
                            "Strategic Technologies",
                            "Space & Aerospace Engineering",
                            "Advanced Materials",
                            "Robotics & Autonomous Systems",
                            "Cybersecurity",
                            "Digital Public Infrastructure",
                            "Smart Education & EdTech",
                            "Technology Entrepreneurship",
                            "Frugal Innovation",
                            "Affordable Engineering Solutions",
                            "Human-Centric Technology",
                            "Rural Technology",
                            "Water Technology",
                            "Food Technology",
                            "Biomedical Engineering",
                            "Sustainable Infrastructure",
                            "AI-enabled Engineering",
                            "Smart Energy",
                            "Industry-Academia Innovation",
                            "Technology Commercialisation",
                            "Social Innovation"
                        ]
                    }

                ],


                disciplines: [

                    {
                        name:
                            "Electronics & Communication Engineering",

                        areas:
                            "Communication, signal processing, IoT, embedded systems, VLSI, RF, AI hardware and satellite systems."
                    },

                    {
                        name:
                            "Computer Engineering / IT / AI & Data Science",

                        areas:
                            "AI/ML, cybersecurity, cloud/edge computing, data analytics, generative AI and intelligent systems."
                    },

                    {
                        name:
                            "Electrical Engineering",

                        areas:
                            "Power systems, renewable energy, smart grids, EVs, power electronics, energy storage and control."
                    },

                    {
                        name:
                            "Mechanical Engineering",

                        areas:
                            "Robotics, automation, Industry 4.0/5.0, manufacturing, thermal systems, EVs and sustainable design."
                    },

                    {
                        name:
                            "Civil Engineering",

                        areas:
                            "Smart cities, sustainable infrastructure, structural monitoring, GIS, water management and green buildings."
                    },

                    {
                        name:
                            "Chemical Engineering",

                        areas:
                            "Green chemistry, sustainable processing, hydrogen, fuel cells, waste treatment and environmental engineering."
                    },

                    {
                        name:
                            "Instrumentation & Control Engineering",

                        areas:
                            "Sensors, industrial automation, process control, instrumentation, PLC/SCADA and predictive maintenance."
                    },

                    {
                        name:
                            "Biomedical Engineering",

                        areas:
                            "Medical devices, biosensors, biomedical signal processing, healthcare IoT and assistive technologies."
                    },

                    {
                        name:
                            "Automobile Engineering",

                        areas:
                            "Electric mobility, autonomous vehicles, V2X, battery management and intelligent transportation."
                    },

                    {
                        name:
                            "Aerospace / Aeronautical Engineering",

                        areas:
                            "UAVs, satellite systems, communication, remote sensing and autonomous navigation."
                    },

                    {
                        name:
                            "Mechatronics / Robotics",

                        areas:
                            "Industrial robots, cobots, autonomous systems, intelligent control and cyber-physical systems."
                    },

                    {
                        name:
                            "Environmental Engineering",

                        areas:
                            "Pollution control, waste management, water treatment, carbon management and sustainability."
                    }

                ]

            },



            /* =================================================
               MEDICAL & HEALTHCARE
            ================================================= */

            medical: {

                title:
                    "Medical & Healthcare Participation Areas",

                description:
                    "Students, researchers, clinicians, faculty members and professionals from Medicine, Dentistry, Pharmacy, Nursing, Physiotherapy, Public Health, Biomedical Sciences and Allied Health Sciences may contribute where their work connects healthcare with technology, sustainability, data science, digital health, medical devices or human-centred innovation.",

                eligibility: [
                    "MBBS / MD / MS",
                    "BDS / MDS",
                    "B.Pharm / M.Pharm",
                    "Pharm.D",
                    "Nursing",
                    "Physiotherapy",
                    "Public Health",
                    "Biomedical Sciences",
                    "Laboratory Sciences",
                    "Medical Imaging",
                    "Optometry",
                    "Nutrition",
                    "Allied Health Sciences"
                ],

                tracks: [

                    {
                        title:
                            "Artificial Intelligence, Machine Learning & Data Analytics",

                        description:
                            "Clinical AI, healthcare analytics and intelligent decision support.",

                        topics: [
                            "AI in Disease Diagnosis & Prognosis",
                            "Clinical Decision-Support Systems",
                            "Medical Image Analysis",
                            "Computer-Aided Diagnosis",
                            "AI in Radiology",
                            "AI in Pathology",
                            "AI in Oncology",
                            "Predictive Analytics for Disease Risk",
                            "Personalised & Precision Medicine",
                            "Healthcare Data Analytics",
                            "Clinical Informatics",
                            "NLP for Clinical Records",
                            "AI-assisted Drug Discovery",
                            "Drug Repurposing",
                            "AI in Dental Diagnosis",
                            "Explainable & Responsible Healthcare AI",
                            "Generative AI for Medical Education",
                            "Generative AI for Clinical Documentation",
                            "Epidemiological Modelling",
                            "Outbreak Analytics",
                            "AI for Preventive Healthcare",
                            "Population Health Analytics"
                        ]
                    },


                    {
                        title:
                            "IoT, Embedded Systems & Smart Infrastructure",

                        description:
                            "Connected healthcare, biosensors and remote patient monitoring.",

                        topics: [
                            "IoT-based Patient Monitoring",
                            "Wearable Healthcare Devices",
                            "Physiological Monitoring",
                            "Smart Hospitals",
                            "Smart Ward Systems",
                            "Remote Health Monitoring",
                            "Home-based Health Monitoring",
                            "Elderly & Assisted Living Care",
                            "Smart ICU Monitoring",
                            "Critical-care Monitoring",
                            "Embedded Medical Devices",
                            "Embedded Diagnostic Devices",
                            "Biosensor-based Monitoring",
                            "Smart Ambulance Systems",
                            "Pre-hospital Care Systems",
                            "Connected Point-of-Care Diagnostics",
                            "IoT for Maternal & Child Healthcare",
                            "Rural Tele-health",
                            "Remote Diagnostic Platforms",
                            "Sensor-based Rehabilitation",
                            "Sensor-based Physiotherapy"
                        ]
                    },


                    {
                        title:
                            "Sustainable Technologies, Energy & Environment",

                        description:
                            "Green healthcare, environmental health and sustainable medical systems.",

                        topics: [
                            "Sustainable Healthcare Systems",
                            "Green Hospitals",
                            "Biomedical Waste Management",
                            "Clinical Waste Management",
                            "Medical Waste Segregation",
                            "Medical Waste Recycling",
                            "Safe Medical Waste Disposal",
                            "Energy-efficient Hospitals",
                            "Sustainable Pharmaceutical Manufacturing",
                            "Environmental Health",
                            "Exposure Assessment",
                            "Air Pollution & Human Health",
                            "Water Pollution & Human Health",
                            "Climate Change & Human Health",
                            "Occupational Health",
                            "Environmental Risk Monitoring",
                            "Reusable Medical Devices",
                            "Sustainable Medical Devices",
                            "Low-power Diagnostic Systems",
                            "Healthcare Carbon-footprint Assessment",
                            "Healthcare Carbon Reduction",
                            "Renewable-powered Rural Health Centres",
                            "Sustainable WASH Solutions"
                        ]
                    },


                    {
                        title:
                            "Communication Systems, Signal Processing & Networks",

                        description:
                            "Biomedical signals, telemedicine networks and secure medical communication.",

                        topics: [
                            "Biomedical Signal Processing",
                            "ECG Analysis",
                            "EEG Analysis",
                            "EMG Analysis",
                            "PPG Analysis",
                            "PCG Analysis",
                            "Medical Image Transmission",
                            "Medical Signal Transmission",
                            "Telemedicine Communication Networks",
                            "Wireless Body-Area Networks",
                            "Remote Patient Monitoring Networks",
                            "5G/6G Healthcare Applications",
                            "Medical IoT Communication",
                            "Healthcare Interoperability",
                            "Healthcare Wireless Sensor Networks",
                            "Speech Analysis for Clinical Assessment",
                            "Voice Analysis for Neurological Assessment",
                            "AI-assisted Biomedical Signal Processing",
                            "Satellite Communication for Rural Healthcare",
                            "Secure Medical Data Transmission"
                        ]
                    },


                    {
                        title:
                            "Industry 4.0/5.0, Automation & Digital Manufacturing",

                        description:
                            "Healthcare automation, robotics, digital twins and biomedical manufacturing.",

                        topics: [
                            "Healthcare Automation",
                            "Hospital Automation",
                            "Medical Robotics",
                            "Rehabilitation Robotics",
                            "Robotic Surgery",
                            "Image-guided Intervention Systems",
                            "Automated Clinical Laboratories",
                            "Smart Pharmaceutical Manufacturing",
                            "Automated Medication Systems",
                            "Drug-dispensing Systems",
                            "Digital Twins for Patients",
                            "Digital Twins for Organs",
                            "Digital Twins for Healthcare Systems",
                            "3D Printed Prostheses",
                            "3D Printed Implants",
                            "3D Printed Anatomical Models",
                            "Additive Manufacturing for Biomedical Applications",
                            "AI-enabled Medical-device Manufacturing",
                            "Predictive Maintenance of Medical Equipment",
                            "Human-Robot Collaboration in Healthcare",
                            "AR/VR for Surgical Training",
                            "AR/VR for Rehabilitation",
                            "AR/VR for Medical Education"
                        ]
                    },


                    {
                        title:
                            "Smart Cities, Mobility & Cyber-Physical Systems",

                        description:
                            "Smart public health, connected care and emergency-response infrastructure.",

                        topics: [
                            "Smart Healthcare Infrastructure",
                            "Connected Hospitals",
                            "Integrated Health Services",
                            "Smart Ambulance Systems",
                            "Emergency-response Systems",
                            "Intelligent Transport for Emergency Services",
                            "Urban Public-health Monitoring",
                            "Smart Epidemic Surveillance",
                            "Disease-surveillance Systems",
                            "Emergency Healthcare Systems",
                            "Disaster Healthcare Systems",
                            "GIS for Public Health",
                            "Geospatial Healthcare Applications",
                            "Digital Health Infrastructure",
                            "Smart Mobility for Elderly Persons",
                            "Smart Mobility for Differently-abled Persons",
                            "Public-health Dashboards",
                            "Healthcare Decision-support Platforms",
                            "Location-based Healthcare",
                            "Location-based Emergency Services",
                            "Smart Sanitation",
                            "Technology-enabled Disease Prevention"
                        ]
                    },


                    {
                        title:
                            "Semiconductor, VLSI & Emerging Electronics",

                        description:
                            "Medical electronics, biosensors and next-generation diagnostic devices.",

                        topics: [
                            "Biomedical Sensors",
                            "Biosensors",
                            "Wearable Medical Electronics",
                            "Flexible Medical Electronics",
                            "Implantable Medical Devices",
                            "Implantable Monitoring Devices",
                            "Low-power Healthcare Electronics",
                            "Lab-on-Chip",
                            "Microfluidic Systems",
                            "Point-of-Care Diagnostic Devices",
                            "Medical Instrumentation",
                            "Electronic Diagnostic Systems",
                            "ASIC for Biomedical Signal Processing",
                            "FPGA for Biomedical Signal Processing",
                            "AI Accelerators for Medical Imaging",
                            "AI Accelerators for Health Analytics",
                            "MEMS-based Biomedical Devices",
                            "Smart Prosthetics",
                            "Assistive Electronic Systems",
                            "Semiconductor Devices for Diagnostics",
                            "RF/Microwave Medical Sensing",
                            "Continuous Physiological Monitoring"
                        ]
                    },


                    {
                        title:
                            "Interdisciplinary Innovations Aligned with ATAL Priorities",

                        description:
                            "Inclusive, affordable and translational healthcare innovation.",

                        topics: [
                            "Healthcare Technology",
                            "Digital Health",
                            "Medical Innovation",
                            "Dental Innovation",
                            "Pharmaceutical Innovation",
                            "Assistive Healthcare Technologies",
                            "Inclusive Healthcare Technologies",
                            "Affordable Healthcare",
                            "Frugal Healthcare Innovation",
                            "Rural Healthcare Technologies",
                            "Community Healthcare Technologies",
                            "Telemedicine",
                            "Remote-care Platforms",
                            "Rehabilitation Technologies",
                            "Physiotherapy Technologies",
                            "Medical Education Technology",
                            "Healthcare Education Technology",
                            "Public-health Innovation",
                            "Population Health Solutions",
                            "Drug Discovery",
                            "Pharmaceutical Technology",
                            "Nutrition & Lifestyle",
                            "Preventive Healthcare",
                            "Mental-health Technologies",
                            "Digital Therapeutics",
                            "Maternal & Child Health Technologies",
                            "Disaster Healthcare Innovation",
                            "Emergency Healthcare Innovation",
                            "Precision Medicine",
                            "Personalised Medicine",
                            "Human-centred Healthcare Innovation"
                        ]
                    }

                ],


                disciplines: [

                    {
                        name:
                            "Medical Sciences",

                        areas:
                            "MBBS, MD/MS, clinical specialties, community medicine, public health and healthcare research."
                    },

                    {
                        name:
                            "Dental Sciences",

                        areas:
                            "BDS/MDS, oral diagnostics, dental materials, digital dentistry and oral-health technologies."
                    },

                    {
                        name:
                            "Pharmacy",

                        areas:
                            "Drug discovery, pharmaceutical analytics, formulation, pharmaceutical technology and manufacturing."
                    },

                    {
                        name:
                            "Nursing",

                        areas:
                            "Patient-care technology, clinical monitoring, nursing informatics and community-health innovation."
                    },

                    {
                        name:
                            "Physiotherapy",

                        areas:
                            "Rehabilitation engineering, motion analysis, assistive devices and digital rehabilitation."
                    },

                    {
                        name:
                            "Allied Health Sciences",

                        areas:
                            "Biomedical sciences, laboratory sciences, imaging, optometry, nutrition and allied disciplines."
                    }

                ]

            },



            /* =================================================
               MANAGEMENT
            ================================================= */

            management: {

                title:
                    "Management Participation Areas",

                description:
                    "Management students, research scholars, faculty members, entrepreneurs and professionals may submit work connecting management practice with technology, sustainability, innovation, digital transformation and societal impact.",

                eligibility: [
                    "BBA",
                    "MBA",
                    "PGDM",
                    "M.Com.",
                    "PhD Scholars",
                    "Faculty Members",
                    "Entrepreneurs",
                    "Start-up Teams",
                    "Consultants",
                    "Managers",
                    "Policy Researchers",
                    "Industry Professionals"
                ],

                tracks: [

                    {
                        title:
                            "Artificial Intelligence, Machine Learning & Data Analytics",

                        description:
                            "Business AI, analytics, decision-making and digital transformation.",

                        topics: [
                            "AI in Business Decision-Making",
                            "Business Analytics",
                            "Predictive Analytics",
                            "Prescriptive Analytics",
                            "AI in Marketing",
                            "AI in Finance",
                            "AI in Human Resource Management",
                            "AI in Supply Chain Management",
                            "Customer Analytics",
                            "Consumer Behaviour Analytics",
                            "Business Intelligence",
                            "Generative AI for Business",
                            "AI-enabled Strategic Planning",
                            "Intelligent Decision-Support Systems",
                            "AI in Risk Management",
                            "AI in Banking",
                            "AI in Insurance",
                            "AI in Financial Services",
                            "Data-Driven Management",
                            "Performance Analytics",
                            "Enterprise Analytics",
                            "Explainable AI in Business",
                            "Responsible AI",
                            "AI Governance",
                            "Ethical AI Adoption",
                            "Digital Transformation Strategy",
                            "AI Adoption in SMEs",
                            "AI Adoption in MSMEs",
                            "AI Adoption in Start-ups",
                            "Technology Acceptance",
                            "Organisational Readiness"
                        ]
                    },


                    {
                        title:
                            "IoT, Embedded Systems & Smart Infrastructure",

                        description:
                            "Connected enterprise models and technology-enabled operations.",

                        topics: [
                            "IoT-enabled Business Models",
                            "Connected Enterprise Systems",
                            "Digital Service Innovation",
                            "Smart Retail",
                            "Smart Supply Chains",
                            "Smart Inventory Management",
                            "Smart Warehouse Management",
                            "Asset Tracking",
                            "Logistics Visibility",
                            "IoT-enabled Operational Control",
                            "IoT in Manufacturing Management",
                            "Industrial Operations",
                            "Smart Facility Management",
                            "Connected Workplace",
                            "Infrastructure Management",
                            "Smart Healthcare Management",
                            "IoT-enabled Service Delivery",
                            "Smart Agriculture Business Models",
                            "Agri-IoT Entrepreneurship",
                            "IoT Adoption in SMEs",
                            "Technology Acceptance Studies",
                            "Operational Efficiency through IoT",
                            "Remote Workforce Monitoring",
                            "Remote Asset Monitoring",
                            "IoT Risk Management",
                            "Privacy & Security",
                            "Connected-enterprise Governance",
                            "IoT Return on Investment"
                        ]
                    },


                    {
                        title:
                            "Sustainable Technologies, Energy & Environment",

                        description:
                            "ESG, green finance, circular economy and sustainable enterprise.",

                        topics: [
                            "Sustainable Business Models",
                            "Corporate Sustainability",
                            "ESG Management",
                            "Green Finance",
                            "Sustainable Finance",
                            "Climate Finance",
                            "Responsible Investment",
                            "Carbon Accounting",
                            "Carbon Markets",
                            "Carbon Disclosure",
                            "Net-Zero Strategy",
                            "Green Marketing",
                            "Sustainable Consumer Behaviour",
                            "Green Branding",
                            "Circular Economy",
                            "Sustainable Supply Chain Management",
                            "Green Procurement",
                            "Renewable Energy Economics",
                            "Energy Management Strategy",
                            "Energy Transition",
                            "Sustainable Operations",
                            "Green Manufacturing Management",
                            "Waste Management Business Models",
                            "E-Waste Management Business Models",
                            "Resource Recovery",
                            "Recycling Economics",
                            "Environmental Accounting",
                            "Sustainability Reporting",
                            "Integrated Reporting",
                            "Climate Risk Management",
                            "Business Resilience",
                            "Climate Adaptation Strategy",
                            "Sustainable Entrepreneurship",
                            "Green HRM",
                            "Sustainable Tourism",
                            "Sustainable Hospitality"
                        ]
                    },


                    {
                        title:
                            "Communication Systems, Signal Processing & Networks",

                        description:
                            "Telecom strategy, digital platforms and communication-economy research.",

                        topics: [
                            "Digital Business Communication",
                            "Technology-enabled Organisational Communication",
                            "Telecom Management",
                            "5G Business Models",
                            "6G Business Models",
                            "Telecom Economics",
                            "Digital Service Innovation",
                            "Customer Experience in Telecom",
                            "Digital-service Pricing Strategies",
                            "Revenue Models",
                            "Digital-service Monetisation",
                            "Technology Adoption",
                            "Digital Inclusion",
                            "Rural Connectivity Business Models",
                            "Network Service Management",
                            "Quality-of-Service Management",
                            "Platform Economy",
                            "Data Monetisation",
                            "Digital Ecosystems",
                            "Digital Infrastructure Investment",
                            "Infrastructure Financing",
                            "Cyber Risk Management",
                            "Information Security Governance",
                            "Business Continuity",
                            "Communication Technology Policy",
                            "Technology Regulation",
                            "Satellite Communication Business Models",
                            "New-Space Commercial Opportunities",
                            "Digital Media Management"
                        ]
                    },


                    {
                        title:
                            "Industry 4.0/5.0, Automation & Digital Manufacturing",

                        description:
                            "Smart operations, workforce transformation and manufacturing strategy.",

                        topics: [
                            "Industry 4.0 Strategy",
                            "Industry 5.0",
                            "Human-Centric Management",
                            "Smart Manufacturing Management",
                            "Digital Transformation in Manufacturing",
                            "Operations Management",
                            "Lean Operations",
                            "Smart Operations",
                            "Operational Excellence",
                            "Supply Chain 4.0",
                            "Digital Supply Chains",
                            "Procurement 4.0",
                            "Predictive Maintenance Economics",
                            "Asset Life-Cycle Management",
                            "Automation & Workforce Transformation",
                            "Future of Work",
                            "Human-Machine Collaboration",
                            "Workforce Acceptance of Automation",
                            "Digital Twin Business Applications",
                            "Digital Operations Management",
                            "Smart Quality Management",
                            "Manufacturing Analytics",
                            "Industrial AI Adoption",
                            "Technology Adoption in Manufacturing",
                            "Productivity Improvement",
                            "Reskilling",
                            "Upskilling",
                            "Innovation Management",
                            "Manufacturing Strategy",
                            "Sustainable Manufacturing"
                        ]
                    },


                    {
                        title:
                            "Smart Cities, Mobility & Cyber-Physical Systems",

                        description:
                            "Urban governance, mobility services, infrastructure financing and smart-city economics.",

                        topics: [
                            "Smart City Management",
                            "Urban Governance",
                            "Smart Mobility Business Models",
                            "Mobility-as-a-Service",
                            "Public-Private Partnerships",
                            "Urban Infrastructure Financing",
                            "Smart Transportation Management",
                            "Sustainable Urban Mobility",
                            "Smart Parking Business Models",
                            "Intelligent Transport Services",
                            "Digital Governance",
                            "Digital Public Infrastructure",
                            "Smart City Economics",
                            "Municipal Finance",
                            "Urban Investment Models",
                            "Public Service Innovation",
                            "Citizen-Centric Digital Services",
                            "Smart Logistics",
                            "Urban Supply Chains",
                            "EV Ecosystem Management",
                            "Charging-Infrastructure Business Models",
                            "Smart Tourism",
                            "Urban Entrepreneurship",
                            "Disaster Management Planning",
                            "Urban Resilience",
                            "Emergency-Service Management",
                            "GIS-based Business Decision-Making",
                            "Smart Infrastructure Investment",
                            "Citizen Engagement",
                            "Social Innovation",
                            "Sustainable Urban Development"
                        ]
                    },


                    {
                        title:
                            "Semiconductor, VLSI & Emerging Electronics",

                        description:
                            "Semiconductor ecosystem, deep-tech commercialisation and chip-industry strategy.",

                        topics: [
                            "Semiconductor Industry Management",
                            "Semiconductor Ecosystem Development",
                            "Semiconductor Supply Chain Management",
                            "Global Chip Supply Chains",
                            "Chip Industry Strategy",
                            "Electronics Manufacturing Strategy",
                            "Technology Commercialisation",
                            "Deep-Tech Go-to-Market Strategy",
                            "Semiconductor Investment",
                            "Semiconductor Finance",
                            "Project Economics",
                            "Procurement",
                            "Vendor Development",
                            "Strategic Sourcing",
                            "Semiconductor Market Analysis",
                            "Competitive Intelligence",
                            "Intellectual Property Management",
                            "Innovation Strategy",
                            "R&D Management",
                            "Technology Transfer",
                            "Fab Economics",
                            "Capacity Planning",
                            "Semiconductor Manufacturing Strategy",
                            "Semiconductor Start-up Management",
                            "Venture Creation",
                            "Electronics Industry Policy",
                            "Domestic Semiconductor Ecosystem",
                            "Semiconductor Talent Management",
                            "Semiconductor Skill Development",
                            "Deep-Tech Product Management",
                            "Supply-chain Risk Management",
                            "Semiconductor Supply-chain Resilience"
                        ]
                    },


                    {
                        title:
                            "Interdisciplinary Innovations Aligned with ATAL Priorities",

                        description:
                            "Technology entrepreneurship, inclusion, sustainability and societal impact.",

                        topics: [
                            "Technology Entrepreneurship",
                            "Start-up Management",
                            "Venture Creation",
                            "Innovation Management",
                            "Business Model Innovation",
                            "Digital Transformation",
                            "Social Entrepreneurship",
                            "Frugal Innovation",
                            "Inclusive Innovation",
                            "Sustainable Entrepreneurship",
                            "Climate-Tech Business Models",
                            "Healthcare Management",
                            "Health-Tech Entrepreneurship",
                            "Agri-Business Management",
                            "AgriTech Entrepreneurship",
                            "EdTech Management",
                            "Technology-enabled Education Models",
                            "Defence Business Strategy",
                            "Space Business Strategy",
                            "Strategic Technology Management",
                            "Rural Entrepreneurship",
                            "Inclusive Business Models",
                            "Digital Public Infrastructure",
                            "Smart Governance",
                            "Technology Commercialisation",
                            "Intellectual Property Strategy",
                            "Women Entrepreneurship",
                            "Inclusive Enterprise Development",
                            "MSME Competitiveness",
                            "Technology Adoption",
                            "Family Business Transformation",
                            "Venture Capital",
                            "Start-up Finance",
                            "Entrepreneurial Finance",
                            "Technology Policy",
                            "Human-Centric Innovation",
                            "Societal Impact"
                        ]
                    }

                ],


                disciplines: [

                    {
                        name:
                            "Marketing Management",

                        areas:
                            "Digital marketing, green marketing, customer analytics, AI in marketing, consumer behaviour, smart retail and technology-driven customer experience."
                    },

                    {
                        name:
                            "Finance",

                        areas:
                            "Green finance, ESG, sustainable investment, climate finance, fintech, risk analytics and deep-tech investment."
                    },

                    {
                        name:
                            "Human Resource Management",

                        areas:
                            "Future of work, automation, Industry 5.0, reskilling, AI in HR, green HRM and human-machine collaboration."
                    },

                    {
                        name:
                            "Operations Management",

                        areas:
                            "Smart manufacturing, logistics, supply chain 4.0, lean systems, sustainable operations and operational excellence."
                    },

                    {
                        name:
                            "Supply Chain & Logistics",

                        areas:
                            "IoT-enabled logistics, digital and sustainable supply chains, smart warehousing and strategic sourcing."
                    },

                    {
                        name:
                            "Business Analytics",

                        areas:
                            "Predictive analytics, AI-driven decision-making, business intelligence, customer and operational analytics."
                    },

                    {
                        name:
                            "Entrepreneurship & Innovation",

                        areas:
                            "Start-ups, technology commercialisation, deep-tech ventures, frugal innovation and business-model innovation."
                    },

                    {
                        name:
                            "International Business",

                        areas:
                            "Global technology markets, semiconductor trade, cross-border supply chains and international technology strategy."
                    },

                    {
                        name:
                            "Banking & Insurance",

                        areas:
                            "AI in finance, fintech, risk analytics, digital banking, ESG finance, insurtech and financial inclusion."
                    },

                    {
                        name:
                            "Healthcare Management",

                        areas:
                            "Digital hospitals, healthcare operations, AI adoption, health-tech models and telemedicine management."
                    },

                    {
                        name:
                            "Public Policy & Governance",

                        areas:
                            "Smart governance, urban policy, digital public infrastructure, sustainability policy and technology regulation."
                    },

                    {
                        name:
                            "Rural & Agri-Business",

                        areas:
                            "AgriTech, rural entrepreneurship, IoT in agriculture and sustainable agriculture business models."
                    },

                    {
                        name:
                            "Strategic Management",

                        areas:
                            "Digital transformation, technology strategy, Industry 4.0 adoption, innovation and sustainability strategy."
                    },

                    {
                        name:
                            "Retail & Service Management",

                        areas:
                            "Smart retail, automation, digital customer experience, platforms and service innovation."
                    },

                    {
                        name:
                            "Sustainability Management",

                        areas:
                            "ESG, circular economy, carbon accounting, net-zero strategy, climate risk and sustainability reporting."
                    }

                ]

            }

        };



        /* =================================================
           2. DOMAIN RENDERER
        ================================================= */

        const domainTabs =
            document.querySelectorAll(
                ".domain-tab"
            );


        const domainOverview =
            document.getElementById(
                "domainOverview"
            );


        const domainTracks =
            document.getElementById(
                "domainTracks"
            );


        const disciplineSection =
            document.getElementById(
                "disciplineSection"
            );


        const selectedDomainTitle =
            document.getElementById(
                "selectedDomainTitle"
            );


        let activeDomain =
            "engineering";


        function renderDomain(domainKey) {

            const domain =
                conferenceDomains[
                    domainKey
                ];


            if (!domain) {
                return;
            }


            activeDomain =
                domainKey;


            domainTabs.forEach(
                tab => {

                    tab.classList.toggle(
                        "active",
                        tab.dataset.domain ===
                        domainKey
                    );

                }
            );


            if (selectedDomainTitle) {

                selectedDomainTitle.textContent =
                    domain.title;

            }


            if (domainOverview) {

                domainOverview.innerHTML = `

                    <div class="domain-overview-grid">

                        <div>

                            <span class="section-tag">
                                PARTICIPATION SCOPE
                            </span>

                            <h3>
                                ${domain.title}
                            </h3>

                            <p>
                                ${domain.description}
                            </p>

                        </div>

                        <div>

                            <span class="eligibility-label">
                                WHO MAY PARTICIPATE
                            </span>

                            <div class="eligibility-chips">

                                ${domain.eligibility
                                    .map(
                                        item =>
                                            `<span class="eligibility-chip">${item}</span>`
                                    )
                                    .join("")
                                }

                            </div>

                        </div>

                    </div>

                `;

            }


            if (
                disciplineSection
            ) {

                let heading =
                    "Discipline-wise Participation";


                if (
                    domainKey ===
                    "medical"
                ) {

                    heading =
                        "Indicative Healthcare Participant Categories";

                }


                if (
                    domainKey ===
                    "management"
                ) {

                    heading =
                        "Suggested Management-area Participation";

                }


                disciplineSection.innerHTML = `

                    <div class="discipline-section-header">

                        <span>
                            DISCIPLINE MAPPING
                        </span>

                        <h3>
                            ${heading}
                        </h3>

                    </div>


                    <div class="discipline-grid">

                        ${domain.disciplines
                            .map(
                                discipline => `

                                    <article class="discipline-card">

                                        <strong>
                                            ${discipline.name}
                                        </strong>

                                        <p>
                                            ${discipline.areas}
                                        </p>

                                    </article>

                                `
                            )
                            .join("")
                        }

                    </div>

                `;

            }


            /*
             Recalculate animations
             after content changes.
            */

            setTimeout(
                recalculateOpenFaq,
                50
            );

        }



        domainTabs.forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    function () {

                        renderDomain(
                            this.dataset.domain
                        );

                    }
                );

            }
        );



        /* =================================================
           3. RESEARCH TRACK ACCORDION
        ================================================= */

        function initialiseResearchTracks() {

            const researchTracks =
                document.querySelectorAll(
                    ".research-track"
                );


            researchTracks.forEach(
                track => {

                    const button =
                        track.querySelector(
                            ".research-track-button"
                        );


                    const content =
                        track.querySelector(
                            ".research-track-content"
                        );


                    const toggle =
                        track.querySelector(
                            ".track-toggle"
                        );


                    if (
                        !button ||
                        !content
                    ) {

                        return;

                    }


                    button.addEventListener(
                        "click",
                        function () {

                            const open =
                                track.classList
                                    .contains(
                                        "open"
                                    );


                            track.classList.toggle(
                                "open",
                                !open
                            );


                            button.setAttribute(
                                "aria-expanded",
                                !open
                                    ? "true"
                                    : "false"
                            );


                            content.style.maxHeight =
                                !open
                                    ? content.scrollHeight +
                                      "px"
                                    : "0px";


                            if (toggle) {

                                toggle.textContent =
                                    !open
                                        ? "−"
                                        : "+";

                            }

                        }
                    );

                }
            );

        }



        const expandAllTracks =
            document.getElementById(
                "expandAllTracks"
            );


        const collapseAllTracks =
            document.getElementById(
                "collapseAllTracks"
            );


        if (expandAllTracks) {

            expandAllTracks.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".research-track"
                        )
                        .forEach(
                            track => {

                                const button =
                                    track.querySelector(
                                        ".research-track-button"
                                    );

                                const content =
                                    track.querySelector(
                                        ".research-track-content"
                                    );

                                const toggle =
                                    track.querySelector(
                                        ".track-toggle"
                                    );


                                track.classList.add(
                                    "open"
                                );


                                if (button) {

                                    button.setAttribute(
                                        "aria-expanded",
                                        "true"
                                    );

                                }


                                if (content) {

                                    content.style.maxHeight =
                                        content.scrollHeight +
                                        "px";

                                }


                                if (toggle) {

                                    toggle.textContent =
                                        "−";

                                }

                            }
                        );

                }
            );

        }


        if (collapseAllTracks) {

            collapseAllTracks.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".research-track"
                        )
                        .forEach(
                            track => {

                                const button =
                                    track.querySelector(
                                        ".research-track-button"
                                    );

                                const content =
                                    track.querySelector(
                                        ".research-track-content"
                                    );

                                const toggle =
                                    track.querySelector(
                                        ".track-toggle"
                                    );


                                track.classList.remove(
                                    "open"
                                );


                                if (button) {

                                    button.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }


                                if (content) {

                                    content.style.maxHeight =
                                        "0px";

                                }


                                if (toggle) {

                                    toggle.textContent =
                                        "+";

                                }

                            }
                        );

                }
            );

        }



        /* =================================================
           4. FOOTER DOMAIN LINKS
        ================================================= */

        document
            .querySelectorAll(
                "[data-open-domain]"
            )
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        function () {

                            const domain =
                                this.dataset
                                    .openDomain;


                            setTimeout(
                                function () {

                                    renderDomain(
                                        domain
                                    );

                                },
                                400
                            );

                        }
                    );

                }
            );



        /* =================================================
           5. INITIAL DOMAIN
        ================================================= */

        renderDomain(
            activeDomain
        );



        /* =================================================
           6. MOBILE NAVIGATION
        ================================================= */

        const menuBtn =
            document.getElementById(
                "menuBtn"
            );


        const navbar =
            document.getElementById(
                "navbar"
            );


        if (
            menuBtn &&
            navbar
        ) {

            menuBtn.addEventListener(
                "click",
                function (
                    event
                ) {

                    event.stopPropagation();


                    navbar.classList.toggle(
                        "active"
                    );


                    menuBtn.setAttribute(
                        "aria-expanded",
                        navbar.classList
                            .contains(
                                "active"
                            )
                            ? "true"
                            : "false"
                    );

                }
            );


            document
                .querySelectorAll(
                    ".navbar a"
                )
                .forEach(
                    link => {

                        link.addEventListener(
                            "click",
                            function () {

                                navbar.classList.remove(
                                    "active"
                                );


                                menuBtn.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }
                        );

                    }
                );

        }



        /* =================================================
           7. COUNTDOWN
        ================================================= */

        const conferenceDate =
            new Date(
                "2026-12-19T09:00:00+05:30"
            ).getTime();


        const daysElement =
            document.getElementById(
                "days"
            );


        const hoursElement =
            document.getElementById(
                "hours"
            );


        const minutesElement =
            document.getElementById(
                "minutes"
            );


        const secondsElement =
            document.getElementById(
                "seconds"
            );


        function updateCountdown() {

            if (
                !daysElement ||
                !hoursElement ||
                !minutesElement ||
                !secondsElement
            ) {

                return;

            }


            const distance =
                conferenceDate -
                Date.now();


            if (
                distance <=
                0
            ) {

                daysElement.textContent =
                    "000";

                hoursElement.textContent =
                    "00";

                minutesElement.textContent =
                    "00";

                secondsElement.textContent =
                    "00";

                return;

            }


            const days =
                Math.floor(
                    distance /
                    86400000
                );


            const hours =
                Math.floor(
                    (
                        distance %
                        86400000
                    ) /
                    3600000
                );


            const minutes =
                Math.floor(
                    (
                        distance %
                        3600000
                    ) /
                    60000
                );


            const seconds =
                Math.floor(
                    (
                        distance %
                        60000
                    ) /
                    1000
                );


            daysElement.textContent =
                String(
                    days
                ).padStart(
                    3,
                    "0"
                );


            hoursElement.textContent =
                String(
                    hours
                ).padStart(
                    2,
                    "0"
                );


            minutesElement.textContent =
                String(
                    minutes
                ).padStart(
                    2,
                    "0"
                );


            secondsElement.textContent =
                String(
                    seconds
                ).padStart(
                    2,
                    "0"
                );

        }


        updateCountdown();


        setInterval(
            updateCountdown,
            1000
        );



        /* =================================================
           8. PROGRAMME TABS
        ================================================= */

        const programmeTabs =
            document.querySelectorAll(
                ".programme-tab"
            );


        const programmeTables =
            document.querySelectorAll(
                ".programme-table"
            );


        programmeTabs.forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    function () {

                        programmeTabs.forEach(
                            item =>
                                item.classList
                                    .remove(
                                        "active"
                                    )
                        );


                        programmeTables.forEach(
                            item =>
                                item.classList
                                    .remove(
                                        "active"
                                    )
                        );


                        this.classList.add(
                            "active"
                        );


                        const target =
                            document.getElementById(
                                this.dataset.day
                            );


                        if (target) {

                            target.classList.add(
                                "active"
                            );

                        }

                    }
                );

            }
        );



        /* =================================================
           9. FAQ ACCORDION
        ================================================= */

        const faqItems =
            document.querySelectorAll(
                ".faq-item"
            );


        faqItems.forEach(
            item => {

                const question =
                    item.querySelector(
                        ".faq-question"
                    );


                const answer =
                    item.querySelector(
                        ".faq-answer"
                    );


                const icon =
                    item.querySelector(
                        ".faq-icon"
                    );


                if (
                    !question ||
                    !answer
                ) {

                    return;

                }


                question.addEventListener(
                    "click",
                    function () {

                        const isOpen =
                            item.classList
                                .contains(
                                    "active"
                                );


                        faqItems.forEach(
                            other => {

                                other.classList.remove(
                                    "active"
                                );


                                const otherQuestion =
                                    other.querySelector(
                                        ".faq-question"
                                    );


                                const otherAnswer =
                                    other.querySelector(
                                        ".faq-answer"
                                    );


                                const otherIcon =
                                    other.querySelector(
                                        ".faq-icon"
                                    );


                                if (
                                    otherQuestion
                                ) {

                                    otherQuestion
                                        .setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );

                                }


                                if (
                                    otherAnswer
                                ) {

                                    otherAnswer
                                        .style
                                        .maxHeight =
                                        "0px";

                                }


                                if (
                                    otherIcon
                                ) {

                                    otherIcon
                                        .textContent =
                                        "+";

                                }

                            }
                        );


                        if (
                            !isOpen
                        ) {

                            item.classList.add(
                                "active"
                            );


                            question.setAttribute(
                                "aria-expanded",
                                "true"
                            );


                            answer.style.maxHeight =
                                answer.scrollHeight +
                                "px";


                            if (icon) {

                                icon.textContent =
                                    "−";

                            }

                        }

                    }
                );

            }
        );



        function recalculateOpenFaq() {

            document
                .querySelectorAll(
                    ".faq-item.active"
                )
                .forEach(
                    item => {

                        const answer =
                            item.querySelector(
                                ".faq-answer"
                            );


                        if (answer) {

                            answer.style
                                .maxHeight =
                                answer.scrollHeight +
                                "px";

                        }

                    }
                );


            document
                .querySelectorAll(
                    ".research-track.open"
                )
                .forEach(
                    item => {

                        const content =
                            item.querySelector(
                                ".research-track-content"
                            );


                        if (content) {

                            content.style
                                .maxHeight =
                                content.scrollHeight +
                                "px";

                        }

                    }
                );

        }



        /* =================================================
           10. FONT SIZE
        ================================================= */

        const fontDecrease =
            document.getElementById(
                "fontDecrease"
            );


        const fontReset =
            document.getElementById(
                "fontReset"
            );


        const fontIncrease =
            document.getElementById(
                "fontIncrease"
            );


        let currentFontSize =
            Number(
                localStorage.getItem(
                    "tech4sustainFontSize"
                )
            ) || 100;


        currentFontSize =
            Math.min(
                120,
                Math.max(
                    85,
                    currentFontSize
                )
            );


        function applyFontSize() {

            document.documentElement
                .style
                .fontSize =
                `${currentFontSize}%`;


            localStorage.setItem(
                "tech4sustainFontSize",
                currentFontSize
            );


            setTimeout(
                recalculateOpenFaq,
                50
            );

        }


        applyFontSize();


        if (fontIncrease) {

            fontIncrease.addEventListener(
                "click",
                function () {

                    currentFontSize =
                        Math.min(
                            120,
                            currentFontSize +
                            5
                        );


                    applyFontSize();

                }
            );

        }


        if (fontDecrease) {

            fontDecrease.addEventListener(
                "click",
                function () {

                    currentFontSize =
                        Math.max(
                            85,
                            currentFontSize -
                            5
                        );


                    applyFontSize();

                }
            );

        }


        if (fontReset) {

            fontReset.addEventListener(
                "click",
                function () {

                    currentFontSize =
                        100;


                    applyFontSize();

                }
            );

        }



        /* =================================================
           11. HIGH CONTRAST
        ================================================= */

        const contrastToggle =
            document.getElementById(
                "contrastToggle"
            );


        if (
            localStorage.getItem(
                "tech4sustainContrast"
            ) === "true"
        ) {

            document.body
                .classList
                .add(
                    "high-contrast"
                );

        }


        if (contrastToggle) {

            contrastToggle.addEventListener(
                "click",
                function () {

                    document.body
                        .classList
                        .toggle(
                            "high-contrast"
                        );


                    const enabled =
                        document.body
                            .classList
                            .contains(
                                "high-contrast"
                            );


                    localStorage.setItem(
                        "tech4sustainContrast",
                        enabled
                    );


                    contrastToggle.setAttribute(
                        "aria-pressed",
                        enabled
                            ? "true"
                            : "false"
                    );

                }
            );

        }



        /* =================================================
           12. LANGUAGE SWITCHER
        ================================================= */

        const languageButtons =
            document.querySelectorAll(
                ".language-btn"
            );


        function updateLanguageButtons(
            lang
        ) {

            languageButtons.forEach(
                button => {

                    button.classList.toggle(
                        "active-language",
                        button.dataset.lang ===
                        lang
                    );

                }
            );

        }


        function changeLanguage(
            lang,
            attempt = 0
        ) {

            const select =
                document.querySelector(
                    ".goog-te-combo"
                );


            if (!select) {

                if (
                    attempt <
                    12
                ) {

                    setTimeout(
                        function () {

                            changeLanguage(
                                lang,
                                attempt + 1
                            );

                        },
                        400
                    );

                }

                return;

            }


            select.value =
                lang;


            select.dispatchEvent(
                new Event(
                    "change"
                )
            );


            localStorage.setItem(
                "tech4sustainLanguage",
                lang
            );


            updateLanguageButtons(
                lang
            );

        }


        languageButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        changeLanguage(
                            this.dataset.lang
                        );

                    }
                );

            }
        );


        updateLanguageButtons(
            localStorage.getItem(
                "tech4sustainLanguage"
            ) || "en"
        );



        /* =================================================
           13. SMOOTH INTERNAL LINKS
        ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
                anchor => {

                    anchor.addEventListener(
                        "click",
                        function (
                            event
                        ) {

                            const href =
                                this.getAttribute(
                                    "href"
                                );


                            if (
                                !href ||
                                href === "#"
                            ) {

                                return;

                            }


                            const target =
                                document.querySelector(
                                    href
                                );


                            if (!target) {
                                return;
                            }


                            event.preventDefault();


                            const header =
                                document.querySelector(
                                    ".site-header-bars"
                                );


                            const headerHeight =
                                header
                                    ? header.offsetHeight
                                    : 0;


                            const position =
                                target
                                    .getBoundingClientRect()
                                    .top +
                                window.pageYOffset -
                                headerHeight -
                                10;


                            window.scrollTo({

                                top:
                                    position,

                                behavior:
                                    "smooth"

                            });

                        }
                    );

                }
            );



        /* =================================================
           14. BACK TO TOP
        ================================================= */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        if (backToTop) {

            window.addEventListener(
                "scroll",
                function () {

                    backToTop.style.display =
                        window.scrollY >
                        550
                            ? "block"
                            : "none";

                }
            );


            backToTop.addEventListener(
                "click",
                function () {

                    window.scrollTo({

                        top: 0,

                        behavior:
                            "smooth"

                    });

                }
            );

        }



        /* =================================================
           15. REVEAL ANIMATION
        ================================================= */

        const revealTargets =
            document.querySelectorAll(

                ".section-heading," +
                ".logo-card," +
                ".fact-card," +
                ".theme-box," +
                ".guideline-highlight," +
                ".submission-method," +
                ".timeline-card," +
                ".process-card," +
                ".contact-card"

            );


        if (
            "IntersectionObserver"
            in window
        ) {

            revealTargets.forEach(
                target =>
                    target.classList
                        .add(
                            "reveal"
                        )
            );


            const revealObserver =
                new IntersectionObserver(

                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );


                                    revealObserver
                                        .unobserve(
                                            entry.target
                                        );

                                }

                            }
                        );

                    },

                    {

                        threshold:
                            .08

                    }

                );


            revealTargets.forEach(
                target =>
                    revealObserver
                        .observe(
                            target
                        )
            );

        }



        /* =================================================
           16. RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth >
                    1100 &&
                    navbar
                ) {

                    navbar.classList
                        .remove(
                            "active"
                        );

                }


                recalculateOpenFaq();

            }
        );



        /* =================================================
           17. OPTIONAL GA4 EVENT TRACKING
        ================================================= */

        document
            .querySelectorAll(
                "[data-track-event]"
            )
            .forEach(
                element => {

                    element.addEventListener(
                        "click",
                        function () {

                            if (
                                typeof gtag ===
                                "function"
                            ) {

                                gtag(
                                    "event",
                                    this.dataset
                                        .trackEvent,
                                    {
                                        event_category:
                                            "Tech4Sustain 2026"
                                    }
                                );

                            }

                        }
                    );

                }
            );


    }
);



/* =========================================================
   GOOGLE TRANSLATE CALLBACK
========================================================= */

function googleTranslateElementInit() {

    if (
        typeof google ===
        "undefined" ||
        !google.translate
    ) {

        return;

    }


    new google.translate.TranslateElement(

        {

            pageLanguage:
                "en",

            includedLanguages:
                "en,gu,hi",

            autoDisplay:
                false

        },

        "google_translate_element"

    );

}