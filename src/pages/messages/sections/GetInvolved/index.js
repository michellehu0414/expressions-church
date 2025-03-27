import "./GetInvolvedSection.scss";

function injectGetInvolvedSection() {
    document.getElementById("intro-section").innerHTML = `
            <div class="section-content">
                <!-- <div id="find-community-card"></div>
                <div id="serve-sgv-card"></div> -->
                <div class="serve-teams">
                    <div id="serve-card"></div>
                    <div class="bg-paper-container serve-teams-list mt-0">
                        <h3 class="paper-ink-black">Our Teams</h3>
                        <img src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/black-chalk-line-divider.webp"
                            class="chalk-divider" alt="">
                        <div id="serve-teams-accordions"></div>
                    </div>
                    <div class="teamsCTA">
                        <h3>Not sure which team to join? Let's chat!</h3>
                        <p>Submit an interest form anyway, and we'll discern how you can
                            contribute
                            your God-given gifts or talents.</p>
                        <div class="buttons-container">
                            <a href="/firerelief" class="btn-primary">Submit Interest Form</a>
                            <a href="/firerelief" class="btn-secondary">Learn more about
                                Teams</a>
                        </div>
                    </div>
                </div>
                <div id="fire-relief-card"></div <div id="give-card">
                <div id="partner-card"></div>
                <div id="prayer-request-card"></div>
                <div id="baptism-card"></div>
                <div id="newcomer-connect-card"></div>
            </div>
            <section id="sunday-service-section"></section>
            </div>
    `;
}

export { injectGetInvolvedSection };
