import React from "react";
import * as styles from './IntroSection.module.scss';
import "../../../scss/utilities/_section-components.scss";

const IntroSection = () => {
    return (
        <section className={styles.introSection}>
            <div className="sectionContent">
                <p className={styles.largeText}>
                    We believe Jesus can transform us from the inside out—
                </p>
                <div className={styles.christopherHugWrapper}>
                    <img className={styles.imgChristopherHug}
                        src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png"
                        alt="" />
                    <div className={styles.cardBGPaper}>
                        <p>People can’t see God, but they can see his church, and we show that we know
                            who
                            God is by how we love others.</p>
                    </div>
                </div>
                <p className={styles.largeText}>
                    Our vision ?
                    <br />
                    To be an expression of God’s love in the SGV.
                </p>
                <img className={styles.imgLaundryLove}
                    src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp"
                    alt="" />
                <div className={styles.cardBGPaper}>
                    <p className={styles.largeText}>At Expressions, everyone is invited to explore faith in
                        Jesus, experience
                        life with him,
                        and express love like him.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;