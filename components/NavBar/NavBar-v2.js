function NavBar() {
    const navbarHTML = `
        <nav id="navbar" class="navbar default-nav-color">
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="navbar-logo-wrapper show-sm-flex"><a href="/"><img src="assets/svg/home/logo-mhu-black.svg" class="navbar-logo-image" alt="Logo" /></a>

                </div>
                <ul class="navbar-menu" id="menu">
                    <li class="nav-item"><a href="/">Work</a></li>
                    <li class="nav-item"><a href="/about">About</a></li>
                    <li class="nav-item"><a href="assets/files/MichelleHuResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
</li>
                    <li class="nav-item hide-sm"><a href="www.linkedin.com/in/itsmichellehu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</li>
                    <li class="nav-item"><a href="mailto:mhu.contact@gmail.com">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Check if the navbar already exists before inserting it
    if (!document.getElementById("navbar")) {
        document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    }

    // Ensure the classes are applied after the DOM is fully loaded and the HTML is inserted
    window.addEventListener("DOMContentLoaded", () => {
        let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');

        // Function to get the current navbar height based on screen size
        function getNavbarHeight() {
            return window.innerWidth >= 768 ? 64 : 48; // 4rem = 64px, 3rem = 48px
        }

        window.addEventListener('scroll', () => {
            const navbarHeight = getNavbarHeight();

            // Always show the navbar when at the top of the page
            if (window.scrollY === 0) {
                navbar.classList.remove('navbar-hidden');
            } else if (window.scrollY > lastScrollY && window.scrollY > navbarHeight) {
                // Scroll down and passed navbar height: hide the navbar
                navbar.classList.add('navbar-hidden');
            } else {
                // Scroll up: show the navbar
                navbar.classList.remove('navbar-hidden');
            }
            // Update last scroll position
            lastScrollY = window.scrollY;
        });


        // Set active class based on current URL
        const navItems = document.querySelectorAll(".nav-item a");
        navItems.forEach((navItem) => {
            if (navItem.href === window.location.href) {
                navItem.parentElement.classList.add("active");
            }
        });

                const menu = document.getElementById('menu');
                const menuIcon = document.querySelector('.menu-icon');
                const menuToggle = document.querySelector('.navbar-menu-toggle');

                function toggleMenu() {
                    menu.classList.toggle('show-menu');
                }

                menuIcon.addEventListener('click', function (event) {
                    event.stopPropagation(); // Prevent document click event from closing the menu
                    toggleMenu();
                });

                document.addEventListener('click', function (event) {
                    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
                        menu.classList.remove('show-menu');
                    }
                });

                menuToggle.addEventListener('click', function (event) {
                    event.stopPropagation(); // Prevent document click event from closing the menu
                    toggleMenu();
                });

                document.addEventListener('click', function (event) {
                    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                        menu.classList.remove('show-menu');
                    }
                });
    });
}

export default NavBar;
