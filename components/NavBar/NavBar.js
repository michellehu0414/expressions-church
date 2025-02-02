function NavBar() {
    const navbarHTML = `
        <nav id="navbar" class="navbar default-nav-color">
            <div id="navbar-wrapper" class="navbar-wrapper">
                <div class="navbar-logo-wrapper show-sm-flex">
                    <a href="/"><img src="assets/svg/home/logo-mhu-black.svg" class="navbar-logo-image" alt="Logo" /></a>
                </div>
                <ul class="navbar-menu" id="menu">
                    <li class="nav-item"><a href="/"><span class="nav-link-text">Work</span></a></li>
                    <li class="nav-item"><a href="/about"><span class="nav-link-text">About</span></a></li>
                    <li class="nav-item"><a href="assets/files/MichelleHuResume.pdf" target="_blank" rel="noopener noreferrer"><span class="nav-link-text">Resume</span></a></li>
                    <li data-scroll-target="footer" class="nav-item last-child"><a role="button"><span class="nav-link-text">Connect with me</span></a></li>
                </ul>
            </div>
        </nav>
    `;

    // Insert the navbar HTML if it's not already in the document
    if (!document.getElementById("navbar")) {
        document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    }

    window.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;

        // Apply transition to navbar styles
        navbar.style.transition = "top 0.3s ease, opacity 0.3s ease";

        // Get the navbar's dynamic height
        const getNavbarHeight = () => navbar.offsetHeight; // Now dynamically gets the actual navbar height
        const navbarHeight = getNavbarHeight();

        // Function to throttle events like scrolling
        const throttle = (func, limit) => {
            let lastFunc;
            let lastRan;
            return function () {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                    func.apply(context, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(() => {
                        if (Date.now() - lastRan >= limit) {
                            func.apply(context, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            };
        };

        // Handle scroll event to hide/show the navbar based on scroll position
        const handleScroll = throttle(() => {
            if (window.scrollY <= 5) {
                navbar.classList.remove("navbar-hidden");
            } else if (window.scrollY > lastScrollY) {
                navbar.classList.add("navbar-hidden");
                navbar.style.top = `-${navbarHeight}px`; // Hides the navbar by its height
            } else if (window.scrollY < lastScrollY) {
                navbar.classList.remove("navbar-hidden");
                navbar.style.top = "0"; // Resets the navbar to show
            }

            lastScrollY = window.scrollY;
        }, 100);

        // Listen to scroll event
        window.addEventListener("scroll", handleScroll);

        // Set active navigation item based on the current page
        const setActiveNavItem = () => {
            const navItems = document.querySelectorAll(".nav-item a");
            navItems.forEach((navItem) => {
                if (navItem.href === window.location.href) {
                    navItem.parentElement.classList.add("active");
                }
            });
        };

        setActiveNavItem();
    });
}

export default NavBar;
