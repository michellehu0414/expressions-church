import "./Intro.scss";

function injectIntroSection() {
    document.getElementById("intro-section").innerHTML = `
            <div class="section-content">
                <p class="big-type we-believe">We believe Jesus can transform us from the inside
                    out—</p>
                <div class="img-christopher-hug-wrapper">
                    <img src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png"
                        alt="" />
                    <div class="bg-paper tagline-wrapper">
                        <p class="black mb-0">People can’t see God, but they can see his church, and
                            we show
                            that we know
                            who God is by how we love others.</p>
                    </div>
                </div>
                <p class="big-type">Our vision?</p>
                <img class="img-laundry-love"
                    src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp"
                    alt="" />
                <p class="big-type">To express God’s love in the SGV.</p>
                <div class="tagline-wrapper">
                    <p class="big-type"><span>Experience</span> life with him.</p>
                    <p class="big-type"><span>Explore</span> faith in Jesus.</p>
                    <p class="big-type mb-0"><span>Express</span> love like him.</p>
                </div>
            </div>
    `;
}

export { injectIntroSection };
