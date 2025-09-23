document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const chatContainer = document.getElementById("chat-container");
    const chatToggleButton = document.getElementById("chat-toggle-button");
    const closeButton = document.getElementById("close-button");
    const minimizeButton = document.getElementById("minimize-button");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Developer and Bot Information
    const DEVELOPER = "Sivashankar V.P";
    const DEVELOPER_ROLE = "2nd Year MCA Student & Web Developer";
    const COLLEGE = "Sona College of Technology";
    const BOT_NAME = "SympoTech AI";
    
    // Symposium constants
    const SYMPOSIUM_NAME = "CYBERTALK'25";
    const SYMPOSIUM_DATE = "March 15-17, 2025";
    const VENUE = COLLEGE;
    const REGISTRATION_LINK = "cybertalk.sonatech.edu";
    const REGISTRATION_FEE = "Free for Sona students (others please contact organizers)";

    // Event data structure (unchanged)
    const events = {
        technical: [
            {
                name: "Byte Battle",
                description: "A two-round coding contest to test your logic, speed, and problem-solving skills.",
                duration: "Round 1: 20 mins, Round 2: 1 hr",
                teamSize: "1 member (individual)",
                prize: "Exciting prizes for Winner and Runner-up",
                rules: [
                    "Participation is strictly individual.",
                    "Contest will consist of 2 rounds: Quiz (20 mins) and Coding Round (1 hr).",
                    "Solutions may be written in any programming language.",
                    "Plagiarism or malpractice will lead to immediate disqualification.",
                    "Evaluation will be based on accuracy and efficiency within the allotted time."
                ],
                contacts: [
                    { name: "Karthik K", phone: "9159447517" },
                    { name: "Vijay N", phone: "9360024508" }
                ]
            },
            {
                name: "Viz wiz",
                description: "Show your data visualization skills! Compete to design dashboards and present insights with creativity and clarity.",
                duration: "60 minutes + presentation",
                teamSize: "2 members per team",
                prize: "Prizes for top performers",
                rules: [
                    "Teams are limited to two participants.",
                    "Dataset and problem statement will be provided.",
                    "External resources, internet access and mobile phone use are prohibited.",
                    "All visualizations must be created during the allotted time.",
                    "Teams must submit a visual report; late submissions penalized.",
                    "Judges' decisions are final."
                ],
                contacts: [
                    { name: "Praveen S", phone: "934588968" },
                    { name: "Karunya S S", phone: "883882968" }
                ]
            },
            {
                name: "Brain spark",
                description: "Tech Quiz – Ignite Your Knowledge",
                duration: "Varies by round",
                teamSize: "2 members per team",
                prize: "Prizes for top teams",
                rules: [
                    "Each team must consist of 2 members.",
                    "No electronic gadgets allowed.",
                    "Preliminary Round: 20–25 MCQs, 1 mark each, no negative marks.",
                    "Final Round: Direct & pictorial questions, +10 correct, +5 passed, no negative.",
                    "Tie-breaker question in case of tie.",
                    "Final decision of the board is conclusive."
                ],
                contacts: [
                    { name: "Subitson M", phone: "6369169550" },
                    { name: "Sripriya G J", phone: "9363109699" }
                ]
            },
            {
                name: "Web Vision",
                description: "Code. Design. Evolve. Build stunning websites under pressure.",
                duration: "Varies by round",
                teamSize: "Max 2 members per team",
                prize: "Prizes for winners",
                rules: [
                    "Two screening rounds.",
                    "Max 2 participants per team.",
                    "Only highest-scoring team per college advances if multiple teams.",
                    "No external resources, internet, or mobile phones unless specified.",
                    "Use only approved tools/editors as instructed.",
                    "Website must be designed within allotted time.",
                    "Plagiarism leads to disqualification."
                ],
                contacts: [
                    { name: "Dhanyashri S", phone: "9487309047" },
                    { name: "Deeksha S", phone: "7010906756" }
                ]
            },
            {
                name: "INFO FUSION",
                description: "Innovating the Future with Technology through impactful presentations.",
                duration: "8-10 minutes per team",
                teamSize: "1-2 members",
                prize: "Prizes for best presentations",
                rules: [
                    "Teams of 1–2 participants allowed.",
                    "Presentations limited to 10 slides.",
                    "Time limit: 8–10 minutes including Q&A.",
                    "All members must actively participate.",
                    "Submission deadline: 03/10/2025.",
                    "Late submissions not accepted.",
                    "Judges’ decision is final."
                ],
                contacts: [
                    { name: "Gowthaman", phone: "9345339796" },
                    { name: "Sakthivel", phone: "9361075805" }
                ]
            }
        ],
        nonTechnical: [
            {
                name: "Mystery Hunt",
                description: "The Grand Pursuit - A treasure hunt testing your detective skills.",
                duration: "Varies",
                teamSize: "Max 2 members",
                prize: "Winner takes the grand prize!",
                rules: [
                    "Max 2 members per team.",
                    "Round 1: Find exact images via Google Search (no bots/tools).",
                    "Top 5 fastest/accurate teams advance.",
                    "Round 2: Follow physical clues sequentially.",
                    "Don’t tamper with other teams’ clues.",
                    "Replace any moved objects.",
                    "First team to retrieve final treasure wins."
                ],
                contacts: [
                    { name: "Dhanush D", phone: "9363557728" },
                    { name: "Jagathrachagan G", phone: "6374481761" }
                ]
            },
            {
                name: "The hidden harmony",
                description: "BGM Finder – Feel the Music. Crack the Clues.",
                duration: "Approx. 1.5 hrs",
                teamSize: "Exactly 2 members",
                prize: "Prizes for Winner & Runner-up",
                rules: [
                    "Exactly 2 participants per team.",
                    "Mobile phones and smart gadgets strictly prohibited.",
                    "Malpractice leads to immediate disqualification.",
                    "Tie-breakers decided by completion time.",
                    "Round 1: Paper & Pen Quiz (Tamil/English/Hindi music, negative marking).",
                    "Round 2: Guess the Dialogue (Buzzer Round).",
                    "Round 3: Lyric Finder (Tamil lyrics, Buzzer Round).",
                    "Round 4: Track Infos (Identify singer/composer/movie from track)."
                ],
                contacts: [
                    { name: "Harini Sri", phone: "9962912000" },
                    { name: "Kiruthika", phone: "7867037604" }
                ]
            },
            {
                name: "No oil No boil",
                description: "Flameless Cooking – Test your taste, presentation, and innovation without fire!",
                duration: "60 minutes",
                teamSize: "1 or 2 members",
                prize: "Prizes based on judging criteria",
                rules: [
                    "Preservatives and food colors not allowed.",
                    "Participants can use any suitable ingredients for fireless cooking.",
                    "Bring your own equipment (bowls, knives, spoons, mixer grinder, etc.).",
                    "Judging based on Taste, Presentation, Originality, and Creativity.",
                    "Time Limit: 60 minutes."
                ],
                contacts: [
                    { name: "Nithya V", phone: "7806930047" },
                    { name: "Sri Pradeep", phone: "9751629629" }
                ]
            },
            {
                name: "Connect & Crack",
                description: "A thrilling multi-round quiz event testing accuracy, speed, and quick thinking!",
                duration: "Varies by round",
                teamSize: "Exactly 2 members",
                prize: "Prizes for Winner and Runner-up teams",
                rules: [
                    "Each team must consist of exactly 2 members.",
                    "Points awarded based on accuracy and speed.",
                    "Tie-breakers based on time or additional questions.",
                    "Malpractice leads to disqualification.",
                    "Quizmaster’s decision is final.",
                    "Round 1: Preliminary Quiz (10-second timer per question).",
                    "Round 2: Connections (find common link between clues).",
                    "Round 3: Rapid Fire (buzzer round, answer immediately)."
                ],
                contacts: [
                    { name: "Rithikka R S", phone: "9360786055" },
                    { name: "Karolin R", phone: "8072589090" }
                ]
            },
            {
                name: "Beyond the Click",
                description: "Photography – Capture the Moment inside Sona College campus.",
                duration: "10:00 AM - 3:00 PM on 08th Oct 2025",
                teamSize: "Individual (1 participant)",
                prize: "Prizes for best photographs",
                rules: [
                    "Individual participation only.",
                    "Max 3 teams per college.",
                    "Location: Inside Sona College of Technology campus.",
                    "Theme announced at start of event.",
                    "Smartphone photos only – no editing allowed.",
                    "Disqualification for editing or pre-captured photos.",
                    "Judging criteria: Creativity, theme relevance, composition, visual impact.",
                    "Only highest-scoring team per college considered if multiple entries.",
                    "Jury decision final and binding."
                ],
                contacts: [
                    { name: "Dhannen", phone: "9360441944" },
                    { name: "Raj Kumar", phone: "9360216240" }
                ]
            },
            {
                name: "Pitch Perfect",
                description: "A debate event to showcase your confidence, clarity, and critical thinking skills.",
                duration: "Total: 2 hours (Screening + Final Debate)",
                teamSize: "Individual only",
                prize: "Winner & Runner-up awards",
                rules: [
                    "Individual participation only.",
                    "Topics revealed on the spot before each round.",
                    "Strict time limits enforced.",
                    "Test your logic, persuasion & rebuttal skills.",
                    "Speak. Convince. Win."
                ],
                contacts: [
                    { name: "Shanthini K", phone: "7010690087" },
                    { name: "Divyaraj M", phone: "9488121826" }
                ]
            }
        ]
    };

    // Create event card HTML
    function createEventCard(event) {
        return `
            <div class="event-card">
                <div class="event-title">
                    <i class="fas fa-calendar-alt"></i>
                    ${event.name}
                </div>
                <div class="event-detail"><strong>📝 Description:</strong> ${event.description}</div>
                <div class="event-detail"><strong>⏱ Duration:</strong> ${event.duration}</div>
                <div class="event-detail"><strong>👥 Team Size:</strong> ${event.teamSize}</div>
                <div class="event-detail"><strong>🏆 Prize:</strong> ${event.prize}</div>
                
                <div class="event-rules">
                    <div class="event-rules-title">📜 Event Rules:</div>
                    ${event.rules.map(rule => `<div class="event-rule">• ${rule}</div>`).join('')}
                </div>
                
                <div class="contact-details">
                    <strong>📞 Contact:</strong><br>
                    ${event.contacts.map(contact => 
                        `<div><i class="fas fa-user"></i> ${contact.name}: <i class="fas fa-phone"></i> ${contact.phone}</div>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    // Generate reusable Quick Actions Panel (note: type="button" to avoid form submits)
    function generateQuickActions(actions) {
        return `
            <div class="quick-actions mt-3">
                ${actions.map(action => `
                    <button type="button" class="quick-action-btn" data-query="${action.query}">
                        ${action.icon} ${action.label}
                    </button>
                `).join('')}
            </div>
        `;
    }

    // Process user input
    function processInput(input) {
        const lowerInput = input.toLowerCase().trim();
        
        // Developer info
        if (/(siva(shankar)?|siva|shankar|vp|creator|made you|who made|developer|your (creator|developer)|who (built|created) you|built you|created you|designer|programmer|coder|author|your (author|designer)|who (wrote|coded|programmed) you|your (maker|origin)|who is behind|mastermind|brains behind|who developed|your (father|mother|parent)|who is (behind|responsible for) you|your (inventor|architect)|who (invented|architected) you|your (boss|owner)|who (owns|controls) you|your (source|roots)|where do you come from|your beginning|your birth|your origin|your history)/i.test(lowerInput)) {
            return `👨‍💻 I was created by <strong>${DEVELOPER}</strong>, a ${DEVELOPER_ROLE} at ${COLLEGE}. 
                    <br><br>💡 <strong>Fun fact:</strong> I was specifically designed to help students navigate ${SYMPOSIUM_NAME}!`
                    + generateQuickActions([
                        { query: "technical events", icon: "💻", label: "Tech Events" },
                        { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                        { query: "help", icon: "🆘", label: "Help" }
                    ]);
        }
        
        // Greetings
        if (/(hello|hi|hey|greetings|good (morning|afternoon|evening)|sup|what('s| is) up|yo|howdy)/i.test(lowerInput)) {
            const greetings = [
                `👋 Hello! I'm your ${SYMPOSIUM_NAME} assistant. How can I help?`,
                `🤖 Hi there! I'm ${BOT_NAME}, here to tell you all about ${SYMPOSIUM_NAME}. Ask away!`,
                `🎉 Welcome to ${SYMPOSIUM_NAME} info center! What do you need?`
            ];
            return greetings[Math.floor(Math.random() * greetings.length)]
                   + generateQuickActions([
                        { query: "all events", icon: "🎯", label: "All Events" },
                        { query: "schedule", icon: "📅", label: "Schedule" },
                        { query: "registration", icon: "📝", label: "Register" }
                    ]);
        }
        
        // About bot
        if (/(about|who are you|what are you|your purpose|what can you do|abilities|features|capabilities|help)/i.test(lowerInput)) {
            return `🤖 <strong>I'm ${BOT_NAME}</strong>, your virtual assistant for ${SYMPOSIUM_NAME}. Here's what I can help with:
                <br><br>📅 <strong>Event Info</strong> — Rules, contacts, descriptions
                <br>📝 <strong>Registration</strong> — Fee, link, eligibility
                <br>📍 <strong>Venue & Schedule</strong> — Dates, timings, location
                
                <br><br>💡 <strong>Try asking:</strong>
                <br>"Tell me about Byte Battle"
                <br>"What are the technical events?"
                <br>"How do I register?"`
                + generateQuickActions([
                    { query: "technical events", icon: "💻", label: "Tech Events" },
                    { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                    { query: "help", icon: "🆘", label: "More Help" }
                ]);
        }

        // IMPORTANT: check non-technical BEFORE technical so "non-technical" isn't captured by the "technical" regex
        // Non-technical events
        if (/(non[ -]?technical|non[ -]?tech|creative|art|design|marketing|music|photo|photography|brand|story|tell|debate|puzzle|hunt|treasure|game)/i.test(lowerInput)) {
            return `🎨 <strong>Non-Technical Events at ${SYMPOSIUM_NAME}:</strong><br><br>
                ${events.nonTechnical.map(event => 
                    `• <strong>${event.name}</strong>: ${event.description}<br>`
                ).join('')}
                <br>🔍 <em>Ask about any event for details!</em>`
                + generateQuickActions([
                    { query: "Mystery Hunt", icon: "🕵️", label: "Mystery Hunt" },
                    { query: "Beyond the Click", icon: "📸", label: "Photography" },
                    { query: "Pitch Perfect", icon: "🎤", label: "Debate" }
                ]);
        }
        
        // Technical events
        if (/(technical|tech|computer|programming|coding|hacking|cyber|software|develop|debug|code|algorithm)/i.test(lowerInput)) {
            return `💻 <strong>Technical Events at ${SYMPOSIUM_NAME}:</strong><br><br>
                ${events.technical.map(event => 
                    `• <strong>${event.name}</strong>: ${event.description}<br>`
                ).join('')}
                <br>🔍 <em>Ask about any event for details!</em>`
                + generateQuickActions([
                    { query: "Byte Battle", icon: "⚔️", label: "Byte Battle" },
                    { query: "Viz wiz", icon: "📊", label: "Viz wiz" },
                    { query: "Web Vision", icon: "🌐", label: "Web Vision" }
                ]);
        }
        
        // All events
        if (/(all events|what events are available|list all events|events available)/i.test(lowerInput)) {
            return `🎯 <strong>All Events at ${SYMPOSIUM_NAME}:</strong><br><br>
                <strong>💻 Technical:</strong><br>
                ${events.technical.map(event => `• ${event.name}<br>`).join('')}
                <br>
                <strong>🎨 Non-Technical:</strong><br>
                ${events.nonTechnical.map(event => `• ${event.name}<br>`).join('')}`
                + generateQuickActions([
                    { query: "technical events", icon: "💻", label: "Tech Events" },
                    { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Specific event match
        for (const category of ['technical', 'nonTechnical']) {
            for (const event of events[category]) {
                const patterns = [event.name.toLowerCase()];
                if (event.name === 'Byte Battle') patterns.push('coding', 'programming contest');
                if (event.name === 'Viz wiz') patterns.push('data viz', 'visualization');
                if (event.name === 'Brain spark') patterns.push('quiz', 'brainstorm');
                if (event.name === 'Web Vision') patterns.push('web design', 'website');
                if (event.name === 'INFO FUSION') patterns.push('ppt', 'presentation');
                if (event.name === 'Mystery Hunt') patterns.push('treasure hunt', 'detective');
                if (event.name === 'The hidden harmony') patterns.push('bgm', 'music quiz');
                if (event.name === 'No oil No boil') patterns.push('cooking', 'flameless');
                if (event.name === 'Connect & Crack') patterns.push('connection', 'quiz game');
                if (event.name === 'Beyond the Click') patterns.push('photography', 'photo');
                if (event.name === 'Pitch Perfect') patterns.push('debate', 'public speaking');

                if (patterns.some(p => lowerInput.includes(p))) {
                    return createEventCard(event)
                           + generateQuickActions([
                                { query: "all events", icon: "🎯", label: "All Events" },
                                { query: "contact for " + event.name, icon: "📞", label: "Contact" },
                                { query: "rules for " + event.name, icon: "📜", label: "Rules" }
                            ]);
                }
            }
        }
        
        // Rules
        if (/rules|guidelines|instructions|requirements|how to participate/i.test(lowerInput)) {
            for (const category of ['technical', 'nonTechnical']) {
                for (const event of events[category]) {
                    if (lowerInput.includes(event.name.toLowerCase())) {
                        return createEventCard(event)
                               + generateQuickActions([
                                    { query: "contact for " + event.name, icon: "📞", label: "Contact" },
                                    { query: "all events", icon: "🎯", label: "All Events" },
                                    { query: "help", icon: "🆘", label: "Help" }
                                ]);
                    }
                }
            }
            return `📜 Need rules for an event? Try:<br>
                • "Rules for Byte Battle"<br>
                • "Viz wiz guidelines"<br>
                • "How to participate in Web Vision?"`
                + generateQuickActions([
                    { query: "technical events", icon: "💻", label: "Tech Events" },
                    { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Contacts
        if (/contact|phone|number|email|coordinator|reach|whom to contact/i.test(lowerInput)) {
            for (const category of ['technical', 'nonTechnical']) {
                for (const event of events[category]) {
                    if (lowerInput.includes(event.name.toLowerCase())) {
                        return createEventCard(event)
                               + generateQuickActions([
                                    { query: "rules for " + event.name, icon: "📜", label: "Rules" },
                                    { query: "all events", icon: "🎯", label: "All Events" },
                                    { query: "help", icon: "🆘", label: "Help" }
                                ]);
                    }
                }
            }
            return `📞 Looking for a coordinator? Try:<br>
                • "Who should I contact for Web Vision?"<br>
                • "Beyond the Click coordinator"<br>
                • "Byte Battle contact number"`
                + generateQuickActions([
                    { query: "technical events", icon: "💻", label: "Tech Events" },
                    { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Schedule
        if (/schedule|time|date|day|when|where|venue|location|place|timing/i.test(lowerInput)) {
            return `📅 <strong>Symposium Schedule</strong>
                <div class="event-detail"><i class="fas fa-calendar"></i> <strong>Date:</strong> ${SYMPOSIUM_DATE}</div>
                <div class="event-detail"><i class="fas fa-clock"></i> <strong>Time:</strong> 9:00 AM to 6:00 PM daily</div>
                <div class="event-detail"><i class="fas fa-map-marker-alt"></i> <strong>Venue:</strong> ${VENUE}</div>
                <div class="event-detail"><i class="fas fa-info-circle"></i> <strong>Note:</strong> Event-wise schedule shared after registration.</div>`
                + generateQuickActions([
                    { query: "registration", icon: "📝", label: "Register Now" },
                    { query: "all events", icon: "🎯", label: "All Events" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Registration
        if (/register|registration|sign up|fee|price|cost|participate|join|how to join|take part|entry|apply/i.test(lowerInput)) {
            return `📝 <strong>Registration Information</strong>
                <div class="event-detail"><i class="fas fa-rupee-sign"></i> <strong>Fee:</strong> ${REGISTRATION_FEE}</div>
                <div class="event-detail"><i class="fas fa-link"></i> <strong>Register at:</strong> ${REGISTRATION_LINK}</div>
                <div class="event-detail"><i class="fas fa-gift"></i> <strong>Includes:</strong> Lunch, swag kit, certificate</div>
                
                <div class="eligibility-details">
                    <strong><i class="fas fa-question-circle"></i> Eligibility & Rules:</strong>
                    <div class="event-rule"><i class="fas fa-user-graduate"></i> Open to UG Arts & Science students</div>
                    <div class="event-rule"><i class="fas fa-users"></i> Participate in multiple events</div>
                    <div class="event-rule"><i class="fas fa-id-card"></i> College ID required</div>
                </div>`
                + generateQuickActions([
                    { query: "eligibility", icon: "✅", label: "Eligibility" },
                    { query: "schedule", icon: "📅", label: "Schedule" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Eligibility
        if (/eligibility|who can participate|requirements|criteria|can i join|am i eligible/i.test(lowerInput)) {
            return `✅ <strong>Eligibility Details</strong>
                <div class="eligibility-details">
                    <div class="event-rule"><i class="fas fa-user-graduate"></i> UG students from Arts & Science background</div>
                    <div class="event-rule"><i class="fas fa-id-card"></i> Valid college ID required</div>
                    <div class="event-rule"><i class="fas fa-users"></i> Team members register individually</div>
                    <div class="event-rule"><i class="fas fa-calendar-check"></i> Can join multiple events</div>
                </div>`
                + generateQuickActions([
                    { query: "registration", icon: "📝", label: "Register" },
                    { query: "all events", icon: "🎯", label: "All Events" },
                    { query: "help", icon: "🆘", label: "Help" }
                ]);
        }
        
        // Help — NOW INCLUDES ALL QUICK OPTIONS
        if (/help|support|what can you do|assistance|guide|how to use|options|menu/i.test(lowerInput)) {
            return `🆘 <strong>How can I help you?</strong>
                <br><br>🎯 <strong>Quick Navigation:</strong>
                ${generateQuickActions([
                    { query: "technical events", icon: "💻", label: "Tech Events" },
                    { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                    { query: "all events", icon: "🎯", label: "All Events" },
                    { query: "schedule", icon: "📅", label: "Schedule" },
                    { query: "registration", icon: "📝", label: "Register" },
                    { query: "eligibility", icon: "✅", label: "Eligibility" }
                ])}
                
                <br>🔍 <strong>Popular Events:</strong>
                ${generateQuickActions([
                    { query: "Byte Battle", icon: "⚔️", label: "Byte Battle" },
                    { query: "Viz wiz", icon: "📊", label: "Viz wiz" },
                    { query: "Mystery Hunt", icon: "🕵️", label: "Mystery Hunt" },
                    { query: "Beyond the Click", icon: "📸", label: "Photography" },
                    { query: "Pitch Perfect", icon: "🎤", label: "Debate" }
                ])}`
        }
        
        // Thanks
        if (/thanks|thank you|appreciate|grateful|cheers|nice|good job|awesome|great/i.test(lowerInput)) {
            const thanks = [
                `😊 You're welcome! Let me know if you need anything else about ${SYMPOSIUM_NAME}.`,
                `👍 Glad I could help! What else would you like to know?`,
                `🎉 My pleasure! Feel free to ask more about the symposium.`
            ];
            return thanks[Math.floor(Math.random() * thanks.length)]
                   + generateQuickActions([
                        { query: "all events", icon: "🎯", label: "Explore Events" },
                        { query: "help", icon: "🆘", label: "Need Help?" },
                        { query: "registration", icon: "📝", label: "Register Now" }
                    ]);
        }
        
        // Farewell
        if (/bye|goodbye|see you|later|exit|quit|good night|take care|cya|ciao|adios/i.test(lowerInput)) {
            const farewells = [
                `👋 Goodbye! See you at ${SYMPOSIUM_NAME}!`,
                `😊 Have a great day! Come back if you have more questions.`,
                `🎉 Thanks for chatting! Good luck with the events!`,
                `🤖 It was nice helping you. Hope to see you at the symposium!`
            ];
            return farewells[Math.floor(Math.random() * farewells.length)];
        }
        
        // Default fallback
        return `🤔 I'm not sure I understand. Try one of these:
            ${generateQuickActions([
                { query: "technical events", icon: "💻", label: "Tech Events" },
                { query: "non-technical events", icon: "🎨", label: "Non-Tech" },
                { query: "all events", icon: "🎯", label: "All Events" },
                { query: "schedule", icon: "📅", label: "Schedule" },
                { query: "registration", icon: "📝", label: "Register" },
                { query: "help", icon: "🆘", label: "Help" }
            ])}
            
            <br>💡 Or ask:
            <br>"Tell me about Pitch Perfect"
            <br>"What are the rules for Beyond the Click?"
            <br>"Who should I contact for Mystery Hunt?"`;
    }

    // Create message element
    function createMessage(content, isUser = false) {
        const div = document.createElement("div");
        div.className = `message ${isUser ? "user-message" : "bot-message"}`;
        div.innerHTML = `
            <div class="message-content">
                <div class="message-text">${content}</div>
            </div>
        `;
        return div;
    }

    // Show typing indicator
    function showTyping() {
        const typingDiv = document.createElement("div");
        typingDiv.className = "message bot-message typing";
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        return typingDiv;
    }

    // Add message with typing animation
    function addMessage(message, isUser = false) {
        if (!isUser) {
            const typing = showTyping();
            chatMessages.appendChild(typing);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            const delay = 800 + Math.random() * 700;
            setTimeout(() => {
                chatMessages.removeChild(typing);
                const msgElement = createMessage(message);
                chatMessages.appendChild(msgElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Attach event listeners to new quick action buttons
                document.querySelectorAll('.quick-action-btn').forEach(btn => {
                    btn.removeEventListener('click', handleQuickAction); // Avoid duplicates
                    btn.addEventListener('click', handleQuickAction);
                });
            }, delay);
        } else {
            const msgElement = createMessage(message, true);
            chatMessages.appendChild(msgElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Handle quick action click (robust: use e.currentTarget so clicking inner elements works)
    function handleQuickAction(e) {
        e.preventDefault();
        const btn = e.currentTarget || e.target.closest('.quick-action-btn');
        if (!btn) return;
        const query = btn.dataset.query;
        if (!query) return;
        userInput.value = query;
        userInput.focus();
        handleSend();
    }

    // Handle send
    function handleSend() {
        const message = (userInput.value || "").trim();
        if (message) {
            addMessage(message, true);
            userInput.value = "";
            const response = processInput(message);
            addMessage(response);
        }
    }

    // Toggle chat visibility
    function toggleChat(showWelcome = false) {
        chatContainer.classList.toggle("visible");
        if (chatContainer.classList.contains("visible")) {
            chatContainer.style.display = "flex";
            chatToggleButton.style.display = "none";
            setTimeout(() => userInput.focus(), 300);

            // Clear messages only if it's first open or manually toggled
            if (showWelcome && !sessionStorage.getItem('welcomeShown')) {
                chatMessages.innerHTML = '';
                addMessage(`🎉 <strong>Welcome to ${SYMPOSIUM_NAME}!</strong> I'm ${BOT_NAME}, your virtual assistant. 
                    <br><br>Ask me about:
                    <br>• Events & Rules 📜
                    <br>• Registration & Fees 💰
                    <br>• Schedule & Venue 📍
                    <br>• Contacts & Help 🆘
                    
                    <br><br>💡 Start with:
                    <br>"What are the technical events?"
                    <br>"How do I register?"
                    <br>"Tell me about Byte Battle"`);
                sessionStorage.setItem('welcomeShown', 'true');
            }
        } else {
            setTimeout(() => {
                chatContainer.style.display = "none";
                chatToggleButton.style.display = "flex";
            }, 300);
        }
    }

    // Event Listeners
    chatToggleButton.addEventListener("click", () => toggleChat(true));
    closeButton.addEventListener("click", () => toggleChat());
    minimizeButton.addEventListener("click", () => toggleChat());
    sendButton.addEventListener("click", handleSend);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSend();
    });

    // Initialize UI
    chatContainer.style.display = "none";
    chatToggleButton.style.display = "flex";

    // Welcome bounce animation
    setTimeout(() => {
        chatToggleButton.classList.add('bounce');
        setTimeout(() => chatToggleButton.classList.remove('bounce'), 2000);
    }, 1000);
});
