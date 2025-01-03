import { AnimateInView } from "../../components/AnimateInView/AnimateInView"; // Corrected import path

const classAnimationMap = {
    'fade-in': 'animate__fadeIn',
    'fade-in-right': 'animate__fadeInRight',
    'fade-in-left': 'animate__fadeInLeft',
    'slide-up': 'animate__slideInUp',
    'bounce-in': 'animate__bounceIn'
};

function Footer() {
    const existingFooter = document.querySelector("footer");
    if (!existingFooter) {
        const footerHTML = `
            <footer id="footer">
                <div class="wrapper">
                    <p class="headline fadeInLeft_inView">Let's make a difference together.</p>
                    <div class="fadeInRight_inView">
                        <div class="social-links-wrapper">
                            <div class="social-link">
                                <a href="https://www.linkedin.com/in/itsmichellehu" target="_blank"
                                    rel="noopener noreferrer">
                                    <span class="anchor-text">LinkedIn</span>
                                </a>
                            </div>
                            <div class="social-link">
                                <a href="assets/files/MichelleHuResume.pdf" target="_blank"
                                    rel="noopener noreferrer">
                                    <span class="anchor-text">Resume</span>
                                </a>
                            </div>
                            <div class="social-link mobile-only">
                                <a href="mailto:mhu.contact@gmail.com" target="_blank"
                                    rel="noopener noreferrer">
                                    <span class="anchor-text">Email me</span>
                                </a>
                            </div>
                            <div class="social-link last-child">
                                <a href="about" target=""
                                    rel="noopener noreferrer">
                                    <span class="anchor-text">About me</span>
                                </a>
                            </div>
                        </div>
                        <div class="email-link-wrapper">
                        <span class="text-decoration-none">✉️</span>
                            <p class="email-link"><span class="email-link-text">mhu.contact@gmail.com</span></p>
                        </div>
                        <p class="tagline">Designed and coded with love by yours truly.</p>
                        <p class="copyright-text">Michelle Hu © 2024</p>
                    </div>
                    <div class="cta-buttons hide">
                        <button id="scrollToProjects-2" class="btn-primary scroll-button">See my
                            work</button>
                        <button class="btn-secondary">View my resume</button>
                    </div>
                </div>
            </footer>
        `;

        document.body.insertAdjacentHTML("beforeend", footerHTML);

        // Add scroll event to the button
        const scrollToProjectsButton = document.getElementById("scrollToProjects-2");
        scrollToProjectsButton.addEventListener("click", () => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        });

        // Ensure AnimateInView is called after the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            AnimateInView({ classAnimationMap });
        });
    }
}

export default Footer;
