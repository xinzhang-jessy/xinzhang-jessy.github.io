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
            images: ["path/to/seagull-studio-image1.jpg", "path/to/seagull-studio-image2.jpg"]
        },
        "uhn-project": {
            title: "UHN Project",
            abstract: "A responsive web design project for UHN, focusing on visual design and user experience.",
            toolkit: ["Adobe XD", "HTML", "CSS", "JavaScript"],
            role: "UI/UX Designer",
            keywords: ["Responsive Design", "Healthcare", "Web Development"],
            images: ["path/to/uhn-image1.jpg", "path/to/uhn-image2.jpg"]
        },
        "wv-project": {
            title: "Wonder Vision",
            abstract: "Wonder Vision is an Augmented Reality (AR) application, tailored specifically for individuals with visual impairments. The prototype integrates AR technology with a conversational system to assist visually impaired users in navigation and wayfinding. It's part of thesis work and involved a dedicated six-month effort to develop a functional prototype. The development process was comprehensive, beginning with brainstorming and extensive literature reviews. It further encompassed in-depth research and interviews with target users, culminating in the meticulous design and development of the application. This project not only showcases my technical and design skills but also my commitment to creating impactful, user-centered solutions.",
            toolkit: ["iOS ARKit", "Figma"],
            role: "Researcher UI/UX Designer Developer",
            keywords: ["AR & Voice Interface Design", "Accessibility Design"],
            images: ["path/to/wv-image1.jpg", "path/to/wv-image2.jpg"]
        },
        "lotes": {
            title: "LOTES",
            abstract: "LOTES is an innovative, location-triggered Augmented Reality (AR) social application. It enables users to discover hidden notes within a mixed reality environment upon reaching specific locations. For the initial prototype of this cutting-edge application, my responsibilities encompassed a variety of critical tasks. This included brainstorming feature development ideas, outlining the user journey, constructing detailed user flow and information architecture, and engaging in an iterative prototyping process. These efforts were pivotal in shaping the foundation of LOTES and enhancing its user experience.",
            toolkit: ["Adobe XD", "Figma"],
            role: "UX/UI Designer",
            keywords: ["AR Entertainment", "AR Mobile Application Design"],
            images: ["path/to/lotes-image1.jpg", "path/to/lotes-image2.jpg"]
        },
        
        "kin-care": {
            title: "Kin Care",
            abstract: "Kin Care is a solution tailored for caregivers, enabling them to remotely monitor and care for their dependents when they're away. This system allows caregivers to connect with in-home cameras, providing them the capability to oversee the surroundings and ensure the well-being of their care receivers. My role in this project involves brainstorming and developing feature ideas, structuring the information architecture, and continuously refining the user interface design through iterative prototyping.",
            toolkit: ["Flinto", "Figma"],
            role: "UX/UI Designer",
            keywords: ["Application Design", "Information Architecture"],
            images: ["path/to/kincare-image1.jpg", "path/to/kincare-image2.jpg"]
        },
        "mcd-project": {
            title: "Weather Iconic for MCD Website of China",
            abstract: "When redesigning this project, to meet with the trend of tablets and smartphones coming to browse websites, I changed the previous MCD web towards irregular layers and ultra-modern design. As there is mass of information need to be displayed, the key task is to build the layout easy for reading and convince customers to remain on the page. Meanwhile, keeping clean to show the key content.",
            toolkit: ["Sketch", "Adobe XD"],
            role: "Visual Designer",
            keywords: ["Visual Elements Design", "Graphic Design"],
            images: ["path/to/mcd-image1.jpg", "path/to/mcd-image2.jpg"]
        },
        "more-studio": {
            title: "More Studio",
            abstract: "My objective in this role is to create a compelling online showcase for More Studio, which is an independent art design studio. My approach is to use white space within the designs, to highlight the unique character of each project. This way also ensures the artwork is presented in a way that is both direct and leaves a lasting impact.",
            toolkit: ["Sketch", "Photoshop"],
            role: "Visual Designer",
            keywords: ["Web Wireframe Design"],
            images: ["path/to/morestudio-image1.jpg", "path/to/morestudio-image2.jpg"]
        },
        "table-tennis": {
            title: "Table Tennis Registration System",
            abstract: "This platform serves as a hub for individuals and teams to sign up for table tennis events in China. In this project, my role involved a collaborative effort with the UI designer and product manager. Together, we were dedicated to crafting a robust information architecture and designing a seamless user interaction flow, ensuring an intuitive and efficient experience for all users registering for events.",
            toolkit: ["Sketch", "Figma"],
            role: "UI Designer",
            keywords: ["System Information Design", "Web Mobile System Interaction"],
            images: ["path/to/table-tennis-image1.jpg", "path/to/table-tennis-image2.jpg"]
        },


        // ... Add data for other projects ...
    };

    // Event listener for project clicks
    waterfallItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = item.dataset.project;
            const project = projectData[projectId];
            
            if (project) {
                populatePopup(project);
                popupOverlay.classList.remove('hidden');
            }
        });
    });

    // Function to populate the popup with project data
    function populatePopup(project) {
        document.getElementById('popup-title').textContent = project.title;
        document.getElementById('popup-abstract').textContent = project.abstract;
        document.getElementById('popup-toolkit').innerHTML = project.toolkit.map(tool => `<li>${tool}</li>`).join('');
        document.getElementById('popup-role').textContent = project.role;
        document.getElementById('popup-keywords').innerHTML = project.keywords.map(keyword => `<li>${keyword}</li>`).join('');
        
        const popupImages = document.getElementById('popup-images');
        popupImages.innerHTML = project.images.map(image => `<img src="${image}" alt="${project.title}">`).join('');
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