import './intro.scss';

export function renderIntro() {
    document.getElementById("intro").innerHTML = `
        <div class="section-content">
            <p class="large-text">
                We believe Jesus can transform us from the inside out—
            </p>
            <div class="christopher-hug_wrapper">
                <img class="img-christopher-hug"
                    src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png"
                    alt="">
                <div class="card-bg-paper">
                    <p>People can’t see God, but they can see his church, and we show that we know
                        who
                        God is by how we love others.</p>
                </div>
            </div>
            <p class="large-text">
                Our vision?<br>
                To be an expression of God’s love in the SGV.
            </p>
            <img class="img-laundry-love"
                src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp"
                alt="">
            <div class="card-bg-paper">
                <p class="large-text black">At Expressions, everyone is invited to explore faith in
                    Jesus, experience
                    life with him,
                    and express love like him.
                </p>
            </div>
        </div>
    `;
}