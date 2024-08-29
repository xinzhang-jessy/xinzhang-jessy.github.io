document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const waterfallItems = document.querySelectorAll('.waterfall-item');
    console.log('Waterfall items:', waterfallItems.length);

    const popupOverlay = document.getElementById('popup-overlay');
    const closePopup = document.getElementById('close-popup');

    if (!popupOverlay || !closePopup) {
        console.error('Popup elements not found');
        return;
    }

    // Project data object
    const projectData = {
        "seagull-studio": {
            title: "Seagull Studio",
            abstract: "Seagull Studio is an online printing studio, producing photos into a varity of forms. The Logo is based on seagull's silhouette and associated with camera viewfinder to remind people of beautiful memories. As a designer at Seagull studio, my responsibilities encompass a range of tasks. I am actively involved in brainstorming branding strategies and crafting designs that are both user-friendly and visually attractive. My role also includes significant participation in UX (User Experience) related activities. This involves engaging with our initial users to gain insights into their preferences and requirements. Additionally, I collaborate closely with the product manager to continually refine and enhance the product.",
            toolkit: ["Sketch", "Photoshop", "Adobe Illustrator","Lightroom"],
            role: "Lead Designer UI/UX Designer Photographer",
            keywords: ["Mobile Application Deisng", "Branding", "Product Photography"],
            images: ["seagull studio/ss_dets1.png", "seagull studio/ss_dets2.png", "seagull studio/ss_dets3.png", "seagull studio/ss_dets4.png","seagull studio/ss_dets5.png","seagull studio/ss_dets6.png","seagull studio/ss_dets7.png","seagull studio/ss_dets8.png","seagull studio/ss_dets9.png","seagull studio/ss_dets10.png","seagull studio/ss_dets11.png"]
        },
        "uhn-project": {
            title: "UHN Project",
            abstract: "A responsive web design project for UHN, focusing on visual design and user experience.",
            toolkit: ["Adobe XD", "HTML", "CSS", "JavaScript"],
            role: "UI/UX Designer",
            keywords: ["Responsive Design", "Healthcare", "Web Development"],
            images: ["uhn/uhn_dets1.png", "uhn/uhn_dets2.png", "uhn/uhn_dets3.png", "uhn/uhn_dets4.gif", "uhn/uhn_dets5.gif","uhn/uhn_dets6.gif"]
        },
        "wv-project": {
            title: "Wonder Vision",
            abstract: "Wonder Vision is an Augmented Reality (AR) application, tailored specifically for individuals with visual impairments. The prototype integrates AR technology with a conversational system to assist visually impaired users in navigation and wayfinding. It's part of thesis work and involved a dedicated six-month effort to develop a functional prototype. The development process was comprehensive, beginning with brainstorming and extensive literature reviews. It further encompassed in-depth research and interviews with target users, culminating in the meticulous design and development of the application. This project not only showcases my technical and design skills but also my commitment to creating impactful, user-centered solutions.",
            toolkit: ["iOS ARKit", "Figma"],
            role: "Researcher UI/UX Designer Developer",
            keywords: ["AR & Voice Interface Design", "Accessibility Design"],
            images: ["wonder vision/wv_dets1.png", "wonder vision/wv_dets2.png", "wonder vision/wv_dets3.png", "wonder vision/wv_dets4.png", "wonder vision/wv_dets5.png","wonder vision/wv_dets6.png", "wonder vision/wv_dets7.webp"]
        },
        "lotes": {
            title: "LOTES",
            abstract: "LOTES is an innovative, location-triggered Augmented Reality (AR) social application. It enables users to discover hidden notes within a mixed reality environment upon reaching specific locations. For the initial prototype of this cutting-edge application, my responsibilities encompassed a variety of critical tasks. This included brainstorming feature development ideas, outlining the user journey, constructing detailed user flow and information architecture, and engaging in an iterative prototyping process. These efforts were pivotal in shaping the foundation of LOTES and enhancing its user experience.",
            toolkit: ["Adobe XD", "Figma"],
            role: "UX/UI Designer",
            keywords: ["AR Entertainment", "AR Mobile Application Design"],
            images: ["lotes/lotes_dets1.png", "lotes/lotes_dets2.png", "lotes/lotes_dets3.png", "lotes/lotes_dets4.png"]
        },
        
        "kin-care": {
            title: "Kin Care",
            abstract: "Kin Care is a solution tailored for caregivers, enabling them to remotely monitor and care for their dependents when they're away. This system allows caregivers to connect with in-home cameras, providing them the capability to oversee the surroundings and ensure the well-being of their care receivers. My role in this project involves brainstorming and developing feature ideas, structuring the information architecture, and continuously refining the user interface design through iterative prototyping.",
            toolkit: ["Flinto", "Figma"],
            role: "UX/UI Designer",
            keywords: ["Application Design", "Information Architecture"],
            images: ["kin care/kc_dets1.png", "kin care/kc_dets2.png", "kin care/kc_dets3.png", "kin care/kc_dets4.png", "kin care/kc_dets5.png"]
        },
        "mcd-project": {
            title: "Weather Iconic for MCD Website of China",
            abstract: "When redesigning this project, to meet with the trend of tablets and smartphones coming to browse websites, I changed the previous MCD web towards irregular layers and ultra-modern design. As there is mass of information need to be displayed, the key task is to build the layout easy for reading and convince customers to remain on the page. Meanwhile, keeping clean to show the key content.",
            toolkit: ["Sketch", "Adobe XD"],
            role: "Visual Designer",
            keywords: ["Visual Elements Design", "Graphic Design"],
            images: ["mcd/mcd_dets1.png", "mcd/mcd_dets2.png", "mcd/mcd_dets3.png", "mcd/mcd_dets4.png", "mcd/mcd_dets5.png"]
        },
        "more-studio": {
            title: "More Studio",
            abstract: "My objective in this role is to create a compelling online showcase for More Studio, which is an independent art design studio. My approach is to use white space within the designs, to highlight the unique character of each project. This way also ensures the artwork is presented in a way that is both direct and leaves a lasting impact.",
            toolkit: ["Sketch", "Photoshop"],
            role: "Visual Designer",
            keywords: ["Web Wireframe Design"],
            images: ["more studio/more_dets1.png", "more studio/more_dets2.png", "more studio/more_dets3.png", "more studio/more_dets4.png", "more studio/more_dets5.png", "more studio/more_dets6.png"]
        },
        "table-tennis": {
            title: "Table Tennis Registration System",
            abstract: "This platform serves as a hub for individuals and teams to sign up for table tennis events in China. In this project, my role involved a collaborative effort with the UI designer and product manager. Together, we were dedicated to crafting a robust information architecture and designing a seamless user interaction flow, ensuring an intuitive and efficient experience for all users registering for events.",
            toolkit: ["Sketch", "Figma"],
            role: "UI Designer",
            keywords: ["System Information Design", "Web Mobile System Interaction"],
            images: ["path/to/table-tennis-image1.jpg", "path/to/table-tennis-image2.jpg"]
        },


///Featured Work
        "cyber-box": {
            title: "Cyber Box",
            abstract: "Cyber Box is an interactive experience that unfolds through three engaging actions, linking a tangible interface with a digital screen in a sequential, narrative manner. Initially, users interact with dialog boxes that appear on-screen when stickers are placed in designated areas, simulating social media interactions like commenting or labeling. The second phase allows users to adjust sound levels, representing conversations. This adjustment is visually echoed by dynamic sound waves on the screen, symbolizing the overwhelming nature of overlapping dialogues. Lastly, users can press a 'button' to gradually inflate a virtual balloon on the screen, which ultimately bursts, signifying the climax of this interactive journey.",
            toolkit: ["Arduino", "Figma","Photoshop"],
            role: "Designer & Developer",
            keywords: ["Interaction Design", "Web Interface Design"],
            images: ["cyber box/cb_dets1.jpg", "cyber box/cb_dets2.png", "cyber box/cb_dets3.png"]
        },
        "pressure-pad": {
            title: "Pressure Pad",
            abstract: "The objective of this project is to create a pressure sensor using non-conductive materials to detect pressure and generate analog data. This concept is inspired by the 'Polymerization of pyrrole' method, which involves forming conductive polymers within and around textile fibers. Prior to building the prototype, I conducted comparative experiments and found that a sponge is effective for pressure sensing. The sponge is treated with a water-soluble graphite conductive solution, filling its pores with graphite particles to make it conductive. This treatment allows the sponge to function like Velostat, enabling it to output analog data when deformed. Additionally, conductive copper tape is applied to a non-conductive leather material. Finally, these elements are assembled in a layered 'sandwich' configuration to create the textile pressure sensor.",
            toolkit: ["Water-soluble conductive graphite pigment", "Non-conductive leather cloth", "Non-conductive sponge", "Bubble Wrap", "Double sided tape", "Arduino Nano 33 IOT", "Coper tapes"],
            role: "Designer & Developer",
            keywords: ["Textile Pressure Sensor", "Wearable Installation"],
            images: ["pressure pad/pp_dets1.png", "pressure pad/pp_dets2.png", "pressure pad/pp_dets3.png", "pressure pad/pp_dets4.png"]
        },
        "shoulder-feeling": {
            title: "Shoulder Feeling",
            abstract: "This prototype aims to make an intangible sense we experience from our surroundings tangible and measurable through two interfaces: a wearable vest and a digital mobile app. The vest, embedded with pressure sensors on the shoulders and an Arduino board on the back, detects the pressure exerted by carrying a bag. This pressure data is then communicated to the mobile app, enabling users to be aware of the invisible stress on their shoulders. The pressure levels are categorized into five stages: 'easy', 'comfortable', 'ok', 'hard', and 'can't hold', each triggered by corresponding sensor readings. This setup highlights how our bodies, rich in biological sensors, often don't fully convey sensory information to our brains. By externalizing this feedback through wearable technology, we can gain a clearer understanding and awareness of these otherwise unnoticed bodily sensations.",
            toolkit: ["Pressure Sensor", "Sensible Fabric ", "Arduino", "Arduino", "Photoshop"],
            role: "Designer & Developer",
            keywords: ["Interaction Design", "Wearable Design"],
            images: ["shoulder's feeling/sf_dets1.png", "shoulder's feeling/sf_dets2.png", "shoulder's feeling/sf_dets3.png", "shoulder's feeling/sf_dets4.png", "shoulder's feeling/sf_dets5.png"]
        },

        "ewuw": {
            title: "Eat What You Want",
            abstract:"'Eat What You Want' is an immersive multi-media art installation. Created against a backdrop of a stimulating narrative, this project leverages both web technology and Augmented Reality for its visual elements, enriched with sound and audio effects to narrate the story and deliver a comprehensive multi-media experience. As a collaborative team effort, I spearheaded the concept and worked closely with my team to craft the overarching storyline, design the interaction flow, and bring the visual aspects to life.",
            toolkit: ["Cargo", "Adobe Aero ","Photoshop"],
            role: "Designer",
            keywords: ["Interaction Design", "Wearable Design"],
            images: ["ewuw/ewuw_dets1.png", "ewuw/ewuw_dets2.png", "ewuw/ewuw_dets3.png", "ewuw/ewuw_dets4.png","ewuw/ewuw_dets5.webp"]
        },

        "eepo": {
            title: "Eepo",
            abstract: "Eepo is a smart home system that allows users to control their home appliances through voice commands. It's part of thesis work and involved a dedicated six-month effort to develop a functional prototype. The development process was comprehensive, beginning with brainstorming and extensive literature reviews. It further encompassed in-depth research and interviews with target users, culminating in the meticulous design and development of the application.",
            toolkit: ["Unity", "Figma","P5.js"],
            role: "Designer & Developer & Researcher",
            keywords: ["XR Interaction Design","Child-centered Design","Voice Interaction Design"],
            images: ["eepo/eepo_dets1.png", "eepo/eepo_dets2.png", "eepo/eepo_dets3.png", "eepo/eepo_dets4.png", "eepo/eepo_dets5.png","eepo/eepo_dets6.png","eepo/eepo_dets7.png"]
        },
    /// maker project 
        "green-splash": {
        title: "Green Splash",
        abstract: "In this collaborative project, each of the four players nurtures their own plant, watching it grow from a seed on their individual screen. Simultaneously, a shared screen displays the status of each player's plant, reflecting any changes made in real-time. Each player designs their own unique plant, and these plants are showcased together on the shared screen interface. The entire interface, integrating all these features, was developed using P5.js.",
        toolkit: ["P5.js", "Figma", "Mobile", "Tablet"],
        role: "Designer & Developer",
        keywords: ["Phone Controller","Remote Interaction"],
        images: ["green splash/gs_dets1.png", "green splash/gs_dets2.png", "green splash/gs_dets3.png","green splash/gs_dets4.webp","green splash/gs_dets5.webp"]
        },

        "light-measurement": {
            title: "Light Measurement Cup",
            abstract: "Light Measurement Cup is an interactive installation designed to measure light intensity in various environments. It comprises two main components: an LED Matrix display and internal light sensors housed within a transparent cup. The sensors detect light and send analog signals to an Arduino, which then translates this data into visual patterns on the LED matrix.",
            toolkit: ["Arduino","Glass Cup"],
            role: "Designer & Developer",
            keywords: ["Interactive Installation","Led Matrix"],
            images: ["light measurement/lm_dets1.png", "light measurement/lm_dets2.png", "light measurement/lm_dets3.gif","light measurement/lm_dets4.gif",""]
            },

        "body-gesture": {
                title: "Body Gesture",
                abstract: "This project consists of a series of innovative wearable prototypes that integrate sensitive elements with the human body. These elements are designed to respond to specific body movements by triggering visible signals. The primary aim of this work is to draw attention to and emphasize the importance of physical states and body language, creating a unique interaction between wearers and their movements.",
                toolkit: ["Arduino","Conductive Material","Cooper","Leds"],
                role: "Designer & Developer",
                keywords: ["Interaction Design","Interactive Installation"],
                images: ["body gesture/bg_dets1.png", "body gesture/bg_dets2.png", "body gesture/bg_dets3.png", "body gesture/bg_dets4.png", "body gesture/bg_dets5.png"]
             },

        "body-band": {
                title: "Body Band",
                abstract: "Body Band is an interactive experiment where the body acts as a sound controller, linking movement to screen-based audio. Participants trigger sounds by walking, raising hands, twisting, or squatting, starting from a natural stance in front of a screen. The project pairs everyday motions, usually silent, with musical sounds, exploring the relationship between physical movement and sound in five unique studies.",
                toolkit: ["Figma","P5.js"],
                role: "Designer & Developer",
                keywords: ["Interactive Graphic","Visual Art"],
                images: ["body band/bb_dets1.png", "body band/bb_dets2.png", "body band/bb_dets3.png", "body band/bb_dets4.png","body band/bb_dets5.png","body band/bb_dets6.png","body band/1.gif","body band/2.gif","body band/3.gif","body band/4.gif","body band/5.gif"]
             },
        
    //Photography 

        "oasis-in-hongkong": {
            title: "Oasis in Hong Kong",
            intro: "To many, Hong Kong epitomizes a modern metropolis, known for its dazzling neon lights, bustling streets, and perpetual motion. Yet, to me, Hong Kong reveals a more authentic, ecological side that showcases the vivid colors and textures of changing seasons",
            keywords: ["Landscape","Digital Photography"],
            images: ["oasis in hongkong/oihk_dets1.jpg", "oasis in hongkong/oihk_dets2.jpg", "oasis in hongkong/oihk_dets3.jpg", "oasis in hongkong/oihk_dets4.jpg", "oasis in hongkong/oihk_dets5.jpg","oasis in hongkong/oihk_dets6.jpg","oasis in hongkong/oihk_dets7","oasis in hongkong/oihk_dets8"]
        },
        
        "cherry-blossom": {
            title: "Cherry Blossom",
            intro: "",
            keywords: ["Landscape","Film Photography"],
            images: ["cherry blossom/cb_dets1.jpg", "cherry blossom/cb_dets2.jpg", "cherry blossom/cb_dets3.jpg", "cherry blossom/cb_dets4.jpg", "cherry blossom/cb_dets5.jpg"]
        },

        "early-autumn": {
            title: "Early Autumn",
            intro: "To many, Hong Kong epitomizes a modern metropolis, known for its dazzling neon lights, bustling streets, and perpetual motion. Yet, to me, Hong Kong reveals a more authentic, ecological side that showcases the vivid colors and textures of changing seasons",
            keywords: ["Landscape","Digital Photography"],
            images: ["early autumn/ea_dets1.jpg", "early autumn/ea_dets2.jpg", "early autumn/ea_dets3.jpg", "early autumn/ea_dets4.jpg", "early autumn/ea_dets5.jpg","early autumn/ea_dets6.jpg","early autumn/ea_dets7.jpg","early autumn/ea_dets8.jpg","ealy autumn/ea_dets9", "early autumn/ea_dets10.jpg","ealy autumn/ea_dets11", "early autumn/ea_dets12.jpg"]
        },


        "landscape-of-iceland": {   
            title: "Landscape of Iceland",
            intro: "This photo series captures the striking contrast between the intense cold and the powerful light of an Icelandic winter. Despite landscapes blanketed in snow, there's an undeniable strength in the light that shines during sunset, infusing the scenes with a dynamic energy.",
            keywords: ["Landscape","Digital Photography"],
            images: ["landscape of iceland/loi_dets1.jpg", "landscape of iceland/loi_dets2.jpg", "landscape of iceland/loi_dets3.jpg", "landscape of iceland/loi_dets4.jpg", "landscape of iceland/loi_dets5.jpg","landscape of iceland/loi_dets6.jpg","landscape of iceland/loi_dets7.jpg","landscape of iceland/loi_dets8.jpg"]
        },

        "radiant-darkness": {
            title: "Radiant Darkness",
            intro: "This photo series captures the striking contrast between the intense cold and the powerful light of an Icelandic winter. Despite landscapes blanketed in snow, there's an undeniable strength in the light that shines during sunset, infusing the scenes with a dynamic energy.",
            keywords: ["Urbanization","Digital Photography"],
            images: ["radiant darkness/rd_dets1.jpg", "radiant darkness/rd_dets2.jpg", "radiant darkness/rd_dets3.jpg", "radiant darkness/rd_dets4.jpg", "radiant darkness/rd_dets5.jpg", "radiant darkness/rd_dets6.jpg", "radiant darkness/rd_dets7.jpg"]
        },


        // ... Add data for other projects ...
    };

    // Check if we're on the photography page
    const isPhotographyPage = document.querySelector('.photography-item') !== null;

    if (isPhotographyPage) {
        // Apply the photography-specific event listeners
        const photographyItems = document.querySelectorAll('.photography-item');
        photographyItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = item.dataset.project;
                const project = projectData[projectId];
                
                if (project) {
                    populatePhotographyPopup(project);
                    popupOverlay.classList.remove('hidden');
                    
                    // Reset scroll position of popup content
                    document.getElementById('popup-content').scrollTop = 0;
                }
            });
        });
    }

    // Regular project click handler (will apply to all pages)
    const regularItems = document.querySelectorAll('.waterfall-item:not(.photography-item)');
    regularItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = item.dataset.project;
            const project = projectData[projectId];
            
            if (project) {
                populateRegularPopup(project);
                popupOverlay.classList.remove('hidden');
                
                // Reset scroll position of popup content
                document.getElementById('popup-content').scrollTop = 0;
            }
        });
    });

    // Function to populate the popup for regular projects
    function populateRegularPopup(project) {
        const popupContent = document.getElementById('popup-content');
        popupContent.innerHTML = `
            <div class="popup-header">
                <div class="popup-main-image">
                    <img src="${project.images[0]}" alt="${project.title}">
                </div>
                <div class="popup-info">
                    <h2 id="popup-title">${project.title}</h2>
                    <p id="popup-abstract">${project.abstract}</p>
                    <h3>Toolkit:</h3>
                    <ul id="popup-toolkit">${project.toolkit.map(tool => `<li>${tool}</li>`).join('')}</ul>
                    <h3>Role:</h3>
                    <p id="popup-role">${project.role}</p>
                    <h3>Keywords:</h3>
                    <ul id="popup-keywords">${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}</ul>
                </div>
            </div>
            <div id="popup-images">
                ${project.images.slice(1).map(image => `
                    <div class="popup-image-container">
                        <img src="${image}" alt="${project.title}">
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Function to populate the popup for photography projects
    function populatePhotographyPopup(project) {
        const popupContent = document.getElementById('popup-content');
        popupContent.innerHTML = `
            <div class="popup-header">
                <h2 id="popup-title">${project.title}</h2>
                <p id="popup-intro">${project.intro}</p>
                <h3>Keywords:</h3>
                <ul id="popup-keywords">${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}</ul>
            </div>
            <div id="popup-slideshow">
                <div id="slideshow-container">
                    <!-- Slides will be dynamically added here -->
                </div>
                <button id="prev-slide" aria-label="Previous slide">&#10094;</button>
                <button id="next-slide" aria-label="Next slide">&#10095;</button>
            </div>
        `;

        // Set up slideshow
        let currentSlide = 0;
        let slides = project.images || [];

        function showSlides() {
            const slideshowContainer = document.getElementById('slideshow-container');
            slideshowContainer.innerHTML = '';
            slides.forEach((slide, index) => {
                const img = document.createElement('img');
                img.src = slide;
                img.classList.add('slide');
                img.style.display = index === currentSlide ? 'block' : 'none';
                slideshowContainer.appendChild(img);
            });
        }

        function changeSlide(n) {
            currentSlide += n;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlides();
        }

        document.getElementById('prev-slide').addEventListener('click', () => changeSlide(-1));
        document.getElementById('next-slide').addEventListener('click', () => changeSlide(1));

        showSlides();
    }

    closePopup.addEventListener('click', () => {
        console.log('Close button clicked');
        popupOverlay.classList.add('hidden');
    });

    // Close popup when clicking outside the content area
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
        }
    });

    // Prevent closing when clicking inside the popup content
    document.getElementById('popup-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Optional: Close popup with 'Esc' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popupOverlay.classList.add('hidden');
        }
    });
});