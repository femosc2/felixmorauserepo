var site;

function siteLoader() {
    site = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("app").style.display = "block";
}



new Vue({
    el: "#app",
    data: {
        currentH1: "My Projects",
        currentH3: null,
        currentActive: "myProjects",
        mainContent: null,
        javaScriptProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js, CSS"},

            {name: "Vue Bloodborne", 
            github: "https://github.com/femosc2/vue-bloodborne",
            description: "An inventory management game made with Vue", 
            image: "images/bloodborne.jpg", 
            language: "Vue.js"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with Vue", 
            image: "images/florence.png", 
            language: "Vue.js, CSS"},

            {name: "Politweet", 
            github: "https://github.com/femosc2/politweet", 
            description: "Project for the course System Development and Project, created with React", 
            image: "images/politweet.png", 
            language: "React.js, CSS"},

            {name: "Jonas Sjöstedt Bird", 
            github: "https://github.com/femosc2/svpol-bird", 
            description: "Help Jonas Sjöstedt avoid the Nazis.", 
            image: "images/communism.png", 
            language: "JavaScript"},

            {name: "Electron-todo", 
            github: "https://github.com/femosc2/electron-todo", 
            description: "Todo app made with Electron", 
            image: "images/electron.jpg", 
            language: "JavaScript"}
        ],
        webProjects: [
            {name: "Personal Website", 
            github: "https://github.com/femosc2/felix-morau-website", 
            description: "A personal website made with Vue", 
            image: "images/background.jpg", 
            language: "Vue.js, CSS"},

            {name: "Felix Inspo", 
            github: "https://github.com/femosc2/felix-inspo", 
            description: "An inspo site made with Vue", 
            image: "images/florence.png", 
            language: "Vue.js, CSS"}
        ],
        pythonProjects: [
            {name: "Bus Database",
            github: "https://github.com/femosc2/db-project-mortfors", 
            description: "Database assignment made with Python and PSQL", 
            image: "images/background.jpg", 
            language: "Python"},

            {name: "Discord Bot", 
            github: "https://github.com/femosc2/ia-discord-bot", 
            description: "A discord bot for the IA discord channel made with Python.", 
            image: "images/florence5.png", 
            language: "Python"}
        ],
        universityProjects: [
            {name: "Bus Database",
            github: "https://github.com/femosc2/db-project-mortfors", 
            description: "Database assignment made with Python and PSQL", 
            image: "images/background.jpg", 
            language: "Python"},

            {name: "Politweet", 
            github: "https://github.com/femosc2/politweet", 
            description: "Project for the course System Development and Project, created with React", 
            image: "images/politweet.png", 
            language: "React.js, CSS"}
        ],
        contactLinks: [
            {
                name: "moraufelix",
                fa: "fab fa-twitter",
                link: "http://www.twitter.com/moraufelix"
            },
            {
                name: "FeMoSC2",
                fa: "fab fa-github",
                link: "http://www.github.com/femosc2"
            },
            {
                name: "moraufelix",
                fa: "fab fa-instagram",
                link: "http://www.instagram.com/moraufelix"
            },
            {
                name: "Felixmorau@gmail.com",
                fa: "far fa-envelope",
                link: "http://www.instagram.com/moraufelix"
            },
            {
                name: "Felix Morau",
                fa: "fab fa-linkedin-in",
                link: "https://www.linkedin.com/in/felix-morau-0193a2163/"
            }
        ],
        sideBarIcons: [
            {
                fa: "fab fa-js sidebarIcon",
                fontsize: 40,
                method: "JavaScript"
            },
            {
                fa: "fab fa-css3-alt sidebarIcon",
                fontsize: 40,
                method: "Web"
            },
            {
                fa: "fab fa-python sidebarIcon",
                fontsize: 40,
                method: "Python"
            },
            {
                fa: "fas fa-graduation-cap sidebarIcon",
                fontsize: 30,
                method: "Uni"
            }
        ]
    },

    methods: {
        about() {
            this.currentH1 = "Felix Morau";
            this.currentActive = "about";
            this.mainContent = "Hello!";
            this.scrollToTop();
            this.currentH3 = "About";
            
        },
        myProjects() {
            this.currentH1 = "My Projects";
            this.currentActive = "myProjects";
            this.mainContent = null;
            this.scrollToTop();
            this.currentH3 = null;
        },
        contact() {
            this.currentH1 = "Contact";
            this.currentActive = "contact";
            this.mainContent = "Do not hesitate to contact me!";
            this.scrollToTop();
            this.currentH3 = "Contact";
        },
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        },
        scrollToJavaScript() {
        document.querySelector('.projectH3JavaScript').scrollIntoView({ 
            behavior: 'smooth' 
          });
        },
        scrollToWeb(element) {
            document.querySelector(element).scrollIntoView({ 
                behavior: 'smooth' 
              });
        },
        scrollToPython() {
            document.querySelector('.projectH3Python').scrollIntoView({ 
                behavior: 'smooth' 
              });
        },
        scrollToUniversity() {
            document.querySelector('.projectH3Uni').scrollIntoView({ 
                behavior: 'smooth' 
              });
        },
    },

});