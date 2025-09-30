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
const SYMPOSIUM_DATE = "Oct 08, 2025";
const VENUE = COLLEGE;
const REGISTRATION_LINK = "https://forms.gle/LUheUi5L89bGctMP6";
const REGISTRATION_FEE = "₹200 per participant";
const MAP_LOCATION = "11.678231072308295, 78.12589462421487";
const MAP_LINK = `https://www.google.com/maps?q=${MAP_LOCATION}`;

// Function to create button HTML
function createLinkButton(text, url, icon = "🔗", className = "link-button") {
    return `<a href="${url}" target="_blank" class="${className} animate__animated animate__fadeIn">
        ${icon} ${text}
    </a>`;
}

// Then in the processInput function, replace the plain links with buttons:

// Eligibility criteria - SIMPLIFIED WITH EMOJIS
const ELIGIBILITY = {
    general: [
        "🎓 UG Arts & Science students welcome",
        "🎓 PG MCA & MSC-CS students welcome", 
        "🆔 College ID card mandatory",
        "👥 Each team member must register individually",
        "✅ Single registration for multiple events"
    ],
    facilities: [
        "🎁 Registration kit provided",
        "🍽️ Refreshment & lunch included", 
        "📄 E-certificates for all participants",
        "🏆 Winner & runner-up prizes"
    ],
    schedule: [
        "⏰ 8:00 AM - Entry begins",
        "📅 Full day events",
        "📋 Schedule at registration desk"
    ]
};
   // Event data structure
const events = {
    technical: [
        {
            name: "Byte Battle",
            keywords: ["byte battle", "coding", "programming", "hackathon", "code", "software", "developer", "algorithm", "debug", "compile", "java", "python", "c++", "javascript", "html", "css", "web development", "app development", "competitive programming", "coding competition"],
            description: "⚔️ Coding contest testing logic & problem-solving skills",
            duration: "⏱️ Round 1: 20 mins, Round 2: 1 hr",
            teamSize: "👤 Individual",
            prize: "🏆 Winner & Runner-up prizes",
            eligibility: "🎓 Programming knowledge required",
            rules: [
                "✅ Individual participation only",
                "📝 2 rounds: Quiz + Coding",
                "💻 Any programming language allowed",
                "🚫 No plagiarism"
            ],
            contacts: [
                { name: "Karthik K", phone: "9159447517" },
                { name: "Vijay N", phone: "9360024508" }
            ]
        },
        {
            name: "Viz wiz",
            keywords: ["viz wiz", "data visualization", "dashboard", "charts", "graphs", "analytics", "business intelligence", "power bi", "tableau", "excel", "data analysis", "insights", "reporting", "metrics", "kpi", "data presentation"],
            description: "📊 Data visualization & dashboard design challenge",
            duration: "⏱️ 60 mins + presentation",
            teamSize: "👥 2 members",
            prize: "🏆 Top performer prizes",
            eligibility: "🎓 Basic data visualization knowledge",
            rules: [
                "👥 Max 2 per team",
                "📈 Dataset provided on spot",
                "🚫 No external resources",
                "⏰ Create during allotted time"
            ],
            contacts: [
                { name: "Praveen S", phone: "934588968" },
                { name: "Karunya S S", phone: "883882968" }
            ]
        },
        {
            name: "Brain spark",
            keywords: ["brain spark", "tech quiz", "quiz", "technology", "trivia", "q&a", "mcq", "multiple choice", "general knowledge", "tech news", "innovation", "gadgets", "science", "computer", "it", "information technology"],
            description: "🧠 Tech quiz - Ignite your knowledge",
            duration: "⏱️ Multiple rounds",
            teamSize: "👥 2 members",
            prize: "🏆 Top team prizes",
            eligibility: "🎓 Interest in technology",
            rules: [
                "👥 2 members per team",
                "📵 No electronic gadgets",
                "📋 Round 1: 20-25 MCQs",
                "🎯 Final: Direct & pictorial Qs"
            ],
            contacts: [
                { name: "Subitson M", phone: "6369169550" },
                { name: "Sripriya G J", phone: "9363109699" }
            ]
        },
        {
            name: "Web Vision",
            keywords: ["web vision", "web design", "website", "frontend", "ui/ux", "user interface", "user experience", "responsive design", "html5", "css3", "bootstrap", "javascript", "react", "angular", "vue", "web development", "portfolio", "landing page"],
            description: "🌐 Build stunning websites under pressure",
            duration: "⏱️ Multiple rounds",
            teamSize: "👥 Max 2 members",
            prize: "🏆 Winner prizes",
            eligibility: "🎓 Web development knowledge",
            rules: [
                "🔄 Two screening rounds",
                "👥 Max 2 per team",
                "📵 No internet/mobile phones",
                "⏰ Design within time limit"
            ],
            contacts: [
                { name: "Dhanyashri S", phone: "9487309047" },
                { name: "Deeksha S", phone: "7010906756" }
            ]
        },
        {
            name: "Info fusion",
            keywords: ["info fusion", "presentation", "ppt", "powerpoint", "slides", "public speaking", "pitch", "demo", "showcase", "idea presentation", "business pitch", "innovation presentation", "tech talk", "seminar"],
            description: "💡 Tech presentations - Innovate the future",
            duration: "⏱️ 8-10 mins per team",
            teamSize: "👥 1-2 members",
            prize: "🏆 Best presentation prizes",
            eligibility: "🎓 Good presentation skills",
            rules: [
                "👥 1-2 participants",
                "📊 Max 10 slides",
                "⏰ 8-10 mins including Q&A",
                "📅 Submit by 03/10/2025"
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
            keywords: ["mystery hunt", "treasure hunt", "scavenger hunt", "detective", "clue", "puzzle", "riddle", "adventure", "exploration", "search", "find", "discover", "investigation", "sherlock", "mystery solving"],
            description: "🕵️ Treasure hunt - Test your detective skills",
            duration: "⏱️ Varies",
            teamSize: "👥 Max 2 members",
            prize: "🏆 Grand prize for winner",
            eligibility: "🎓 No tech knowledge needed",
            rules: [
                "👥 Max 2 per team",
                "🔍 Round 1: Image search",
                "🧩 Round 2: Physical clues",
                "⚡ First to treasure wins"
            ],
            contacts: [
                { name: "Dhanush D", phone: "9363557728" },
                { name: "Jagathrachagan G", phone: "6374481761" }
            ]
        },
        {
            name: "BGM Finder",
            keywords: ["bgm finder", "bgm", "music", "song", "harmony", "melody", "tune", "soundtrack", "background music", "audio", "rhythm", "beat", "song identification", "shazam", "music quiz", "tamil songs", "english songs", "bollywood"],
            description: "🎵 Music identification challenge",
            duration: "⏱️ ~1.5 hours",
            teamSize: "👥 Exactly 2 members",
            prize: "🏆 Winner & Runner-up",
            eligibility: "🎓 Music enthusiasts",
            rules: [
                "👥 Exactly 2 members",
                "📵 No phones/gadgets",
                "⚖️ Judge's decision final",
                "🎶 Tamil/English song knowledge"
            ],
            contacts: [
                { name: "Harini Sri", phone: "9962912000" },
                { name: "Kiruthika", phone: "7867037604" }
            ]
        },
        {
            name: "No oil No boil",
            keywords: ["no oil no boil", "cooking", "food", "flameless", "culinary", "recipe", "chef", "cook", "food preparation", "salad", "sandwich", "dessert", "baking", "no fire cooking", "cold cooking", "healthy food", "nutrition"],
            description: "🍲 Flameless cooking - Taste & presentation",
            duration: "⏱️ 60 mins",
            teamSize: "👥 1-2 members",
            prize: "🏆 Judging criteria based",
            eligibility: "🎓 Culinary enthusiasts",
            rules: [
                "🚫 No preservatives/colors",
                "🔪 Bring own equipment",
                "⭐ Taste 40%, Presentation 30%, Originality 30%",
                "⏰ 60 mins strict limit"
            ],
            contacts: [
                { name: "Nithya V", phone: "7806930047" },
                { name: "Sri Pradeep", phone: "9751629629" }
            ]
        },
        {
            name: "Connect & Crack",
            keywords: ["connect & crack", "quiz", "puzzle", "connections", "brain teaser", "riddle", "logic", "pattern", "matching", "association", "word game", "mind game", "cognitive", "problem solving", "lateral thinking"],
            description: "🧩 Multi-round quiz - Accuracy & speed",
            duration: "⏱️ Multiple rounds",
            teamSize: "👥 Exactly 2 members",
            prize: "🏆 Winner & Runner-up",
            eligibility: "🎓 General knowledge",
            rules: [
                "👥 Exactly 2 members",
                "🎯 Points for accuracy/speed",
                "⚖️ Quizmaster decision final",
                "🔄 3 rounds: Quiz, Connections, Rapid Fire"
            ],
            contacts: [
                { name: "Rithikka R S", phone: "9360786055" },
                { name: "Karolin R", phone: "8072589090" }
            ]
        },
        {
            name: "Beyond the Click",
            keywords: ["beyond the click", "photography", "photo", "camera", "picture", "snap", "shot", "mobile photography", "smartphone", "composition", "lighting", "angle", "creative", "artistic", "nature", "architecture", "portrait", "landscape"],
            description: "📸 Photography - Capture campus moments",
            duration: "⏱️ 10:00 AM - 3:00 PM",
            teamSize: "👤 Individual",
            prize: "🏆 Best photo prizes",
            eligibility: "🎓 Photography enthusiasts",
            rules: [
                "👤 Individual only",
                "🏫 Sona campus only",
                "🎨 Theme announced on spot",
                "📱 Phone only - No DSLR/editing"
            ],
            contacts: [
                { name: "Dhannen", phone: "9360441944" },
                { name: "Raj Kumar", phone: "9360216240" }
            ]
        },
        {
            name: "Pitch Perfect",
            keywords: ["pitch perfect", "debate", "speech", "presentation", "public speaking", "argument", "discussion", "persuasion", "rhetoric", "eloquence", "oration", "talk", "speech competition", "debate competition", "extempore", "impromptu"],
            description: "🎤 Debate - Confidence & critical thinking",
            duration: "⏱️ 2 hours total",
            teamSize: "👤 Individual",
            prize: "🏆 Winner & Runner-up",
            eligibility: "🎓 Communication skills",
            rules: [
                "👤 Individual only",
                "🎭 Topics on the spot",
                "⏰ 3-5 mins per speaker",
                "⭐ Content, delivery, rebuttal judged"
            ],
            contacts: [
                { name: "Shanthini K", phone: "7010690087" },
                { name: "Divyaraj M", phone: "9488121826" }
            ]
        }
    ]
};

    // Flatten all events for easy lookup
    const allEvents = [...events.technical, ...events.nonTechnical];

    // Quick Action Categories - UPDATED: Removed facilities and added venue
    const quickActionCategories = {
        main: [
            { query: "technical events", icon: "💻", label: "Tech Events" },
            { query: "non-technical events", icon: "🎨", label: "Non-Tech Events" },
            { query: "all events", icon: "🎯", label: "All Events" },
            { query: "eligibility", icon: "✅", label: "Eligibility" },
            { query: "registration fee", icon: "💰", label: "Fee Details" },
            { query: "venue", icon: "📍", label: "Venue" },
            { query: "help", icon: "❓", label: "Help" }
        ],
        technical: events.technical.map(e => ({ 
            query: e.name, 
            icon: getEventIcon(e.name), 
            label: e.name
        })),
        nonTechnical: events.nonTechnical.map(e => ({ 
            query: e.name, 
            icon: getEventIcon(e.name), 
            label: e.name
        })),
        support: [
            { query: "contacts", icon: "📞", label: "Contacts" },
            { query: "rules", icon: "📜", label: "Rules" },
            { query: "eligibility", icon: "✅", label: "Eligibility" },
            { query: "venue", icon: "📍", label: "Venue" },
            { query: "certificates", icon: "📄", label: "Certificates" }
        ]
    };

    // Helper: Get icon for event
    function getEventIcon(eventName) {
        const icons = {
            "Byte Battle": "⚔️",
            "Viz wiz": "📊",
            "Brain spark": "🧠",
            "Web Vision": "🌐",
            "Info fusion": "💡",
            "Mystery Hunt": "🕵️",
            "BGM Finder": "🎵",
            "No oil No boil": "🍲",
            "Connect & Crack": "🧩",
            "Beyond the Click": "📸",
            "Pitch Perfect": "🎤"
        };
        return icons[eventName] || "📌";
    }

    // Create event card HTML
    function createEventCard(event) {
        const roundsHTML = event.rounds ? `
            <div class="event-detail"><strong>🎯 Rounds:</strong>
                ${event.rounds.map(round => `<div style="margin-left: 15px;">• ${round}</div>`).join('')}
            </div>
        ` : '';

        return `
            <div class="event-card">
                <div class="event-title">
                    <i class="fas fa-calendar-alt"></i> ${event.name}
                </div>
                <div class="event-detail"><strong>📝 Description:</strong> ${event.description}</div>
                <div class="event-detail"><strong>⏱ Duration:</strong> ${event.duration}</div>
                <div class="event-detail"><strong>👥 Team Size:</strong> ${event.teamSize}</div>
                <div class="event-detail"><strong>✅ Eligibility:</strong> ${event.eligibility}</div>
                <div class="event-detail"><strong>🏆 Prize:</strong> ${event.prize}</div>
                
                ${roundsHTML}
                
                <div class="event-rules">
                    <div class="event-rules-title">📜 Rules:</div>
                    ${event.rules.map(rule => `<div class="event-rule">• ${rule}</div>`).join('')}
                </div>
                
                <div class="contact-details">
                    <strong>📞 Contacts:</strong><br>
                    ${event.contacts.map(contact => 
                        `<div><i class="fas fa-user"></i> ${contact.name}: <a href="tel:${contact.phone}"><i class="fas fa-phone"></i> ${contact.phone}</a></div>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    // Generate Quick Actions Panel
    function generateQuickActions(category = 'main') {
        const actions = quickActionCategories[category] || quickActionCategories.main;
        if (!actions || actions.length === 0) return '';
        
        return `
            <div class="quick-actions mt-3">
                <div class="quick-actions-title">💡 Quick Options:</div>
                <div class="quick-actions-grid">
                    ${actions.map(action => `
                        <button type="button" class="quick-action-btn animate__animated animate__fadeInUp" data-query="${action.query}">
                            ${action.icon} ${action.label}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // State to track last context
    let currentContext = 'main';

    // Get relevant quick actions based on context
    function getContextualQuickActions(inputType) {
        currentContext = inputType;
        switch(inputType) {
            case 'technical':
                return generateQuickActions('technical');
            case 'nonTechnical':
                return generateQuickActions('nonTechnical');
            case 'eventDetail':
                return generateQuickActions('support');
            case 'registration':
                return generateQuickActions('support');
            case 'eligibility':
                return generateQuickActions('support');
            default:
                return generateQuickActions('main');
        }
    }

    // Enhanced event matching function with comprehensive keyword matching
    function findEventByName(input) {
        const lowerInput = input.toLowerCase().trim();
        
        // First, try exact match or contains
        for (const event of allEvents) {
            const eventNameLower = event.name.toLowerCase();
            if (lowerInput.includes(eventNameLower) || eventNameLower.includes(lowerInput)) {
                return event;
            }
        }
        
        // Then try comprehensive keyword matching
        for (const event of allEvents) {
            for (const keyword of event.keywords) {
                if (lowerInput.includes(keyword.toLowerCase())) {
                    return event;
                }
            }
        }
        
        // Enhanced fuzzy matching for common abbreviations and variations
        const fuzzyMatches = {
            'byte': 'Byte Battle',
            'coding': 'Byte Battle',
            'programming': 'Byte Battle',
            'hackathon': 'Byte Battle',
            'viz': 'Viz wiz',
            'data': 'Viz wiz',
            'dashboard': 'Viz wiz',
            'analytics': 'Viz wiz',
            'brain': 'Brain spark',
            'quiz': 'Brain spark',
            'tech quiz': 'Brain spark',
            'web': 'Web Vision',
            'website': 'Web Vision',
            'design': 'Web Vision',
            'info': 'Info fusion',
            'presentation': 'Info fusion',
            'ppt': 'Info fusion',
            'mystery': 'Mystery Hunt',
            'treasure': 'Mystery Hunt',
            'hunt': 'Mystery Hunt',
            'bgm': 'BGM Finder',
            'music': 'BGM Finder',
            'song': 'BGM Finder',
            'no oil': 'No oil No boil',
            'cooking': 'No oil No boil',
            'food': 'No oil No boil',
            'connect': 'Connect & Crack',
            'puzzle': 'Connect & Crack',
            'beyond': 'Beyond the Click',
            'photo': 'Beyond the Click',
            'photography': 'Beyond the Click',
            'pitch': 'Pitch Perfect',
            'debate': 'Pitch Perfect',
            'speech': 'Pitch Perfect'
        };
        
        for (const [fuzzyKey, eventName] of Object.entries(fuzzyMatches)) {
            if (lowerInput.includes(fuzzyKey)) {
                return allEvents.find(e => e.name === eventName);
            }
        }
        
        return null;
    }

    // Enhanced processInput function with comprehensive keyword coverage
    function processInput(input) {
        const lowerInput = input.toLowerCase().trim();
        let context = 'main';
        
        // Enhanced Developer info keywords
        if (/(siva|shankar|developer|creator|who made you|built this|created you|your creator|sivashankar|vp)/i.test(lowerInput)) {
            context = 'support';
            return `👨‍💻 Created by <strong>${DEVELOPER}</strong> (${DEVELOPER_ROLE}) at ${COLLEGE}.` 
                   + getContextualQuickActions(context);
        }
        
        // Enhanced Greetings keywords
        if (/(hello|hi|hey|greetings|good morning|good afternoon|good evening|namaste|hola|what's up|sup|yo)/i.test(lowerInput)) {
            return `👋 Hello! I'm ${BOT_NAME}, your ${SYMPOSIUM_NAME} assistant. Ask me about events, eligibility, registration, or venue!`
                   + getContextualQuickActions(context);
        }
        
        // Enhanced About bot keywords
        if (/(about|who are you|what can you do|help|assistance|support|guide|information|details|explain|what is this)/i.test(lowerInput)) {
            return `🤖 I'm ${BOT_NAME}! I can help with:<br>
                • Event details & rules 📜<br>
                • Eligibility criteria ✅<br>
                • Registration & fees 💰<br>  
                • Venue & location 📍<br>
                • Schedule & timing 📅<br>
                • Contacts 📞<br>
                Just ask or tap quick options below!`
                   + getContextualQuickActions(context);
        }

        // Enhanced Eligibility specific queries
        if (/(eligibility|who can participate|can i participate|qualification|criteria|requirements|who is eligible|am i eligible|can join|take part|participate|join|entry requirements)/i.test(lowerInput)) {
            context = 'eligibility';
            
            return `✅ <strong>Eligibility Criteria:</strong><br>
                ${ELIGIBILITY.general.map(rule => `• ${rule}`).join('<br>')}<br><br>
                <strong>🎁 Facilities Provided:</strong><br>
                ${ELIGIBILITY.facilities.map(facility => `• ${facility}`).join('<br>')}<br><br>
                <strong>📅 Event Timing:</strong><br>
                ${ELIGIBILITY.schedule.map(schedule => `• ${schedule}`).join('<br>')}`
                   + getContextualQuickActions(context);
        }

        // Enhanced Venue queries
        if (/(venue|location|place|address|where|map|directions|how to reach|sona college|salem|google maps|gps|coordinates)/i.test(lowerInput)) {
            context = 'support';
            return `📍 <strong>Venue Information</strong><br>
                • <strong>Event:</strong> ${SYMPOSIUM_NAME}<br>
                • <strong>Venue:</strong> ${VENUE}<br>
                • <strong>Date:</strong> ${SYMPOSIUM_DATE}<br>
                • <strong>Time:</strong> Entry begins at 8:00 AM<br>
                • <strong>Map:</strong> <a href="${MAP_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">🗺️ Open in Google Maps</a>`
                   + getContextualQuickActions(context);
        }

        // Enhanced Certificates queries
        if (/(certificate|certification|e-certificate|digital certificate|participation certificate|winner certificate|award|prize|recognition)/i.test(lowerInput)) {
            return `📄 <strong>Certificates:</strong><br>
                • Participant certificates will be provided as E-certificates<br>
                • Winner and runner-up prizes will be awarded<br>
                • All participants receive digital certificates`
                   + getContextualQuickActions('support');
        }

        // Enhanced Registration fee queries
        if (/(fee|cost|price|payment|how much|registration fee|amount|pay|payment|cost|price|rupees|money|charges|fees)/i.test(lowerInput)) {
            return `💰 <strong>Registration Fee Details</strong><br>
                • <strong>Amount:</strong> ${REGISTRATION_FEE}<br>
                • <strong>Includes:</strong> Registration kit, refreshment, lunch, e-certificate<br>
                • <strong>Covers:</strong> Participation in multiple events<br>
                • <strong>Team Registration:</strong> Each member must register individually<br>
                • <strong>Register here:</strong> <a href="${REGISTRATION_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">📝 Registration Link</a>`
                   + getContextualQuickActions('registration');
        }

        // Enhanced Multiple events participation
        if (/(multiple events|how many events|participate in|several events|more than one|all events|different events|various events|multiple competitions)/i.test(lowerInput)) {
            return `🎯 <strong>Multiple Events Participation</strong><br>
                • Participants can participate in multiple events with a single registration<br>
                • Registration fee covers all events<br>
                • Each team member must be individually registered<br>
                • Plan your schedule to avoid timing conflicts`
                   + getContextualQuickActions('main');
        }

        // Enhanced ID card requirement
        if (/(id card|identification|college id|identity proof|id proof|college identification|student id|identity card)/i.test(lowerInput)) {
            return `🆔 <strong>Identification Requirement</strong><br>
                • Participants must wear their college ID card as proof of identity<br>
                • ID verification required at entry<br>
                • Without valid college ID, participation may not be allowed`
                   + getContextualQuickActions('support');
        }

        // Enhanced Team registration
        if (/(team registration|team member|each member|individual registration|team formation|group|partner|teammate|team size|how many in team)/i.test(lowerInput)) {
            return `👥 <strong>Team Registration Policy</strong><br>
                • Each member of the team must be individually registered<br>
                • Single registration allows participation in multiple events<br>
                • Team formation can be across different colleges<br>
                • Verify team details during registration`
                   + getContextualQuickActions('support');
        }

        // Enhanced Event timing
        if (/(time|timing|schedule|8:00|8 am|entry begins|when does it start|start time|end time|duration|how long|timings|schedule|agenda|program schedule)/i.test(lowerInput)) {
            return `⏰ <strong>Event Timing</strong><br>
                • Entry begins at 8:00 AM<br>
                • Events run throughout the day<br>
                • Detailed schedule provided at registration<br>
                • Arrive early for smooth registration process`
                   + getContextualQuickActions('support');
        }

        // Enhanced Non-technical events
        if (/(non[ -]?technical|non[ -]?tech|creative|art|music|photo|game|fun|entertainment|recreational|leisure|hobby|extracurricular)/i.test(lowerInput)) {
            context = 'nonTechnical';
            const eventList = events.nonTechnical.map(event => `• ${event.name}`).join('<br>');
            return `🎨 <strong>Non-Tech Events:</strong><br>${eventList}<br><br>Click any event name below for details 👇` 
                   + getContextualQuickActions(context);
        }
        
        // Enhanced Technical events
        if (/(technical|tech|computer|coding|programming|hack|software|it|information technology|computer science|engineering|developer|code)/i.test(lowerInput)) {
            context = 'technical';
            const eventList = events.technical.map(event => `• ${event.name}`).join('<br>');
            return `💻 <strong>Tech Events:</strong><br>${eventList}<br><br>Click any event name below for details 👇` 
                   + getContextualQuickActions(context);
        }
        
        // Enhanced All events
        if (/(all events|list events|every event|show me events|what events|available events|competitions|activities|programs|what's happening)/i.test(lowerInput)) {
            const techEvents = events.technical.map(e => `• ${e.name}`).join('<br>');
            const nonTechEvents = events.nonTechnical.map(e => `• ${e.name}`).join('<br>');
            return `🎯 <strong>All ${SYMPOSIUM_NAME} Events:</strong><br>
                <strong>💻 Technical:</strong><br>${techEvents}
                <br><br><strong>🎨 Non-Tech:</strong><br>${nonTechEvents}`
                   + getContextualQuickActions('main');
        }
        
        // Enhanced Specific event match
        const matchedEvent = findEventByName(lowerInput);
        if (matchedEvent) {
            context = 'eventDetail';
            return createEventCard(matchedEvent) + getContextualQuickActions(context);
        }
        
        // Enhanced Rules
        if (/(rules|guidelines|how to participate|instructions|regulation|policy|procedure|protocol|what are the rules|rulebook)/i.test(lowerInput)) {
            context = 'support';
            
            // Check if user is asking about specific event rules
            for (const event of allEvents) {
                const eventNameLower = event.name.toLowerCase();
                if (lowerInput.includes(eventNameLower)) {
                    return `📜 <strong>Rules for ${event.name}:</strong><br>` +
                           event.rules.map(rule => `• ${rule}`).join('<br>') +
                           getContextualQuickActions('eventDetail');
                }
            }
            
            return `📜 Ask about specific event rules like:<br>"rules for Mystery Hunt" or "BGM Finder rules"` 
                   + getContextualQuickActions(context);
        }
        
        // Enhanced Contacts
        if (/(contact|phone|number|coordinator|who to call|reach|get in touch|contact person|organizer|event head|faculty|professor|staff)/i.test(lowerInput)) {
            context = 'support';
            
            // Check if user is asking about specific event contacts
            for (const event of allEvents) {
                const eventNameLower = event.name.toLowerCase();
                if (lowerInput.includes(eventNameLower)) {
                    return `📞 <strong>Contacts for ${event.name}:</strong><br>` +
                           event.contacts.map(contact => 
                               `• ${contact.name}: <a href="tel:${contact.phone}">${contact.phone}</a>`
                           ).join('<br>') +
                           getContextualQuickActions('eventDetail');
                }
            }
            
            return `📞 Ask about event contacts like:<br>"contact for Pitch Perfect" or "Byte Battle contacts"` 
                   + getContextualQuickActions(context);
        }
        
        // Enhanced Schedule
        if (/(schedule|date|when|where|venue|location|place|address|timeline|agenda|program|itinerary|calendar|october 8|8th october)/i.test(lowerInput)) {
            return `📅 <strong>${SYMPOSIUM_NAME} Schedule</strong><br>
                • <strong>Date:</strong> ${SYMPOSIUM_DATE}<br>
                • <strong>Time:</strong> Entry begins at 8:00 AM<br>
                • <strong>Venue:</strong> ${VENUE}<br>
                • <strong>Map Link:</strong> <a href="${MAP_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">📍 Get Directions to Sona College</a>`
                   + getContextualQuickActions('support');
        }
        
        // Enhanced Registration
        if (/(register|registration|sign up|join|how to register|apply|enroll|participate|entry form|application|signup|enrollment)/i.test(lowerInput)) {
            context = 'registration';
            return `📝 <strong>Registration Information</strong><br>
                • <strong>Registration Fee:</strong> ${REGISTRATION_FEE}<br>
                • <strong>Eligibility:</strong> UG Arts/Science & PG MCA/MSC-CS students<br>
                • <strong>Registration Link:</strong> <a href="${REGISTRATION_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">👉 Click here to Register</a><br>
                • <strong>Includes:</strong> Registration kit, refreshment, lunch, e-certificate<br>
                • <strong>Multiple Events:</strong> Single registration covers all events<br>
                • <strong>Team Registration:</strong> Each member must register individually<br>
                • <strong>ID Requirement:</strong> College ID card mandatory<br><br>
                <strong>📍 Venue:</strong> ${VENUE}<br>
                <strong>🗺️ Location:</strong> <a href="${MAP_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">View on Google Maps</a>`
                   + getContextualQuickActions(context);
        }

        // Enhanced Location/Venue specific
        if (/(location|map|directions|how to reach|where is|venue|address|place|site|google maps|gps|coordinates|sona college|salem)/i.test(lowerInput)) {
            return `📍 <strong>Venue Information</strong><br>
                • <strong>Event:</strong> ${SYMPOSIUM_NAME}<br>
                • <strong>Venue:</strong> ${VENUE}<br>
                • <strong>Date:</strong> ${SYMPOSIUM_DATE}<br>
                • <strong>Time:</strong> Entry begins at 8:00 AM<br>
                • <strong>Map:</strong> <a href="${MAP_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">🗺️ Open in Google Maps</a>`
                   + getContextualQuickActions('support');
        }
        
        // Enhanced Thanks
        if (/(thanks|thank you|appreciate|grateful|helpful|awesome|great|good job|nice|perfect|excellent|fantastic|wonderful|amazing)/i.test(lowerInput)) {
            return `😊 You're welcome! Happy to help. See you at ${SYMPOSIUM_NAME} on ${SYMPOSIUM_DATE}!` 
                   + getContextualQuickActions('main');
        }

        // Farewell keywords
        if (/(bye|goodbye|see you|exit|later|farewell|catch you)/i.test(lowerInput)) {
            return `👋 Goodbye! Register at: <a href="${REGISTRATION_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">${REGISTRATION_LINK}</a><br>See you at ${SYMPOSIUM_NAME}! 🎉`;
        }

        // Symposium info keywords
        if (/(cybertalk|symposium|sona symposium|tech fest|tech event|conference|tech meet)/i.test(lowerInput)) {
            return `🎉 <strong>${SYMPOSIUM_NAME} - Technical Symposium</strong><br>
                • <strong>Date:</strong> ${SYMPOSIUM_DATE}<br>
                • <strong>Time:</strong> Entry begins at 8:00 AM<br>
                • <strong>Venue:</strong> ${VENUE}<br>
                • <strong>Eligibility:</strong> UG Arts/Science & PG MCA/MSC-CS<br>
                • <strong>Registration:</strong> ${REGISTRATION_FEE} per participant<br>
                • <strong>Events:</strong> ${allEvents.length} exciting competitions`
                   + getContextualQuickActions('main');
        }

        // Registration keywords
        if (/(register|registration|sign up|enroll|join)/i.test(lowerInput)) {
            return `📝 You can register for ${SYMPOSIUM_NAME} here: <a href="${REGISTRATION_LINK}" target="_blank" style="color: #007bff; text-decoration: none;">${REGISTRATION_LINK}</a><br>
                    Fee per participant: ${REGISTRATION_FEE}`;
        }

        // Events-related keywords
        if (/(events|competitions|contests|challenges|quiz|hackathon|music quiz|bgm finder)/i.test(lowerInput)) {
            return `🎯 ${SYMPOSIUM_NAME} has ${allEvents.length} exciting events:<br>` 
                + allEvents.map(event => `• ${event.name}`).join('<br>')
                + `<br>Use quick buttons below to explore more.` 
                + getContextualQuickActions('events');
        }

        // Eligibility keywords
        if (/(eligibility|criteria|who can participate|qualification)/i.test(lowerInput)) {
            return `✅ Eligibility for ${SYMPOSIUM_NAME}:<br>
                • UG Arts/Science students<br>
                • PG MCA/MSC-CS students<br>
                Ask me about registration, events, or venue!`
                + getContextualQuickActions('eligibility');
        }

        // Default fallback
        return `🤔 I didn't understand that. Try asking about:<br>
            • "What is the eligibility criteria?"<br>
            • "How much is registration fee?"<br>
            • "Tell me about BGM Finder"<br>
            • "Where is the venue?"<br>
            • "Can I participate in multiple events?"<br>
            • Or use quick buttons below 👇`
               + getContextualQuickActions(currentContext);
    }

    // Create message element
    function createMessage(content, isUser = false) {
        const div = document.createElement("div");
        div.className = `message ${isUser ? "user-message" : "bot-message"} animate__animated animate__fadeIn`;
        div.innerHTML = `<div class="message-content"><div class="message-text">${content}</div></div>`;
        return div;
    }

    // Show typing indicator
    function showTyping() {
        const typingDiv = document.createElement("div");
        typingDiv.className = "message bot-message typing";
        typingDiv.innerHTML = `<div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
        return typingDiv;
    }

    // Add message with typing animation
    function addMessage(message, isUser = false) {
        if (!isUser) {
            const typing = showTyping();
            chatMessages.appendChild(typing);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                if (chatMessages.contains(typing)) chatMessages.removeChild(typing);
                const msgElement = createMessage(message);
                chatMessages.appendChild(msgElement);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                attachQuickActionListeners();
            }, 800);
        } else {
            const msgElement = createMessage(message, true);
            chatMessages.appendChild(msgElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Attach event listeners to quick action buttons
    function attachQuickActionListeners() {
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.removeEventListener('click', handleQuickAction);
            btn.addEventListener('click', handleQuickAction);
        });
    }

    // Handle quick action click
    function handleQuickAction(e) {
        const button = e.target.closest('.quick-action-btn');
        if (!button) return;
        const query = button.dataset.query;
        userInput.value = query;
        userInput.focus();
        handleSend();
        button.classList.add('animate__pulse');
        setTimeout(() => button.classList.remove('animate__pulse'), 600);
    }

    // Handle send message
    function handleSend() {
        const message = userInput.value.trim();
        if (!message) {
            userInput.placeholder = "Please type something...";
            userInput.classList.add('shake');
            setTimeout(() => userInput.classList.remove('shake'), 800);
            return;
        }
        addMessage(message, true);
        userInput.value = "";
        userInput.placeholder = "Ask me anything...";
        const response = processInput(message);
        addMessage(response);
    }

    // Toggle chat visibility
    function toggleChat(showWelcome = false) {
        const isVisible = chatContainer.classList.contains("visible");
        if (!isVisible) {
            chatContainer.classList.add("visible");
            chatContainer.style.display = "flex";
            chatToggleButton.style.display = "none";
            setTimeout(() => userInput.focus(), 300);
            if (showWelcome && !sessionStorage.getItem('welcomeShown')) {
                chatMessages.innerHTML = '';
                addMessage(`🎉 <strong>Welcome to ${SYMPOSIUM_NAME}!</strong><br><br>
                    Hi, I'm <strong>${BOT_NAME}</strong> 🤖 — your symposium guide for <strong>${SYMPOSIUM_DATE}</strong>.<br><br>
                    <strong>📅 Date:</strong> ${SYMPOSIUM_DATE}<br>
                    <strong>⏰ Time:</strong> Entry begins at 8:00 AM<br>
                    <strong>📍 Venue:</strong> ${VENUE}<br>
                    <strong>💰 Fee:</strong> ${REGISTRATION_FEE}<br>
                    <strong>✅ Eligibility:</strong> UG Arts/Science & PG MCA/MSC-CS students<br><br>
                    Ask me about events, eligibility, venue, registration, or just say "help"!` 
                    + generateQuickActions('main'));
                sessionStorage.setItem('welcomeShown', 'true');
            }
        } else {
            chatContainer.classList.remove("visible");
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
        if (e.key === "Enter") { e.preventDefault(); handleSend(); }
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