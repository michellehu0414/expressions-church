import React from "react";
import * as styles from './IntroSection.module.scss';
import "@scss/utilities/_section-components.scss";
import "@scss/utilities/_backgrounds.scss";
import "@scss/utilities/_spacing.scss";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";
import { sectionWrapper } from "@scss/utilities/_section-components.scss";

const IntroSection = () => {
    return (
        <section className={styles.introSection}>
            <div className="sectionContent">
                <p id={styles.weBelieve} className={styles.largeText}>
                    We believe Jesus can transform us from the inside out—
                </p>
                <div className={styles.christopherHugWrapper}>
                    <img className={styles.imgChristopherHug}
                        src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2024/12/expressions-cutout-hug.png"
                        alt="" />
                    <div id={styles.cardBGPaper} className="bg-paper pd-16">
                        <p class="black mb-0">People can’t see God, but they can see his church, and we show that we know
                            who
                            God is by how we love others.</p>
                    </div>
                </div>
                <p className={styles.largeText}>
                    Our vision ?
                </p>
                <img className={styles.imgLaundryLove}
                    src="https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/laundry-love.webp"
                    alt="" />
                <p class={styles.largeText}>To express God’s love in the SGV.</p>
                <div className={styles.taglineWrapper}>
                    <p className={styles.largeText}><span>Experience</span> life with him.</p>
                    <p className={styles.largeText}><span>Explore</span> faith in Jesus.</p>
                    <p className={styles.largeText}> <span>Express</span> love like him.</p>
                </div>
            </div>
        </section >
    );
}

export default IntroSection;