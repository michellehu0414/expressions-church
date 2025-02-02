function NavBarBackground() {
    const navbar = document.getElementById('navbar');
    const firstSection = document.querySelector('section');
    const sectionTop = firstSection.offsetTop;
    const sectionHeight = firstSection.clientHeight;

    const throttle = (callback, limit) => {
        let waiting = false;
        return function () {
            if (!waiting) {
                callback.apply(this, arguments);
                waiting = true;
                setTimeout(() => {
                    waiting = false;
                }, limit);
            }
        };
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Set navbar background to transparent if in the first section, white otherwise
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navbar.style.backgroundColor = 'transparent';
        } else {
            navbar.style.backgroundColor = 'white';
        }
    };

    document.addEventListener('scroll', throttle(handleScroll, 100));
}

export default NavBarBackground;
