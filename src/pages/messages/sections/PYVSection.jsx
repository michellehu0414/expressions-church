import React from 'react';
import * as styles from './PYVSection.module.scss';
import "@scss/utilities/_all-utilities.scss";
import churchMembersCutout from "@assets/images/expressions-church-members-cutout.webp";
import Button from "@components/Button/Button";
import "@scss/utilities/_all-utilities.scss";

import bookIcon from "@assets/svg/icon-book.svg";
import userIcon from "@assets/svg/icon-user.svg";
import chatIcon from "@assets/svg/icon-chat-bubble.svg";
import ChalkDivider from "@components/ChalkDivider/-ChalkDivider";
// import Button from "@components/Button/Button";

const PYVSection = () => {
    return (
        <section>
            <h2>
                <span className="outlined">Ready to</span>
                <br />
                plan a visit?
            </h2>
            <div className="sectionContent">
                <img src={churchMembersCutout} alt="" className={styles.churchMembersCutout} />
                <p>
                    Find out what to expect, like where to park, where to check in, . And if you're ready, let us know you're coming to get a personalized welcome guide and a chance to chat with Pastor Christopher before your visit!</p>
                <div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={bookIcon} alt="" className={styles.icon} />
                        <p className={styles.headline}>Find out exactly what to expect.</p>
                    </div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={bookIcon} alt="" className={styles.icon} />
                        <p className={styles.headline}>Get a welcome guide.</p>
                    </div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={userIcon} alt="" className={styles.icon} />
                        <div>
                            <p className={styles.headline}>Got little ones? Register them!</p>
                        </div>
                    </div>
                    <div className={`${styles.pyvIncentivesWrapper} mb-0`}>
                        <img src={chatIcon} alt="" className={styles.icon} />
                        <div>
                            <p className={styles.headline}>Get a text from Pastor Christopher!</p>
                            <p>Ask questions or just say hello!</p>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button variant="primary" className="btn-bg-white flex width-100">Yes!</Button>
                    <Button variant="secondary" className="bgBlack flex width-100">Not yet</Button>
                </div>
                <div className="flex-col gap-8">
                    <Button variant="primary" className="btn-bg-white flex width-100">Yes, let's plan it!</Button>
                    <Button variant="primary" className="btn-bg-white flex width-100">I'll do it later!</Button>

                    <p>Not ready yet? That's totally fine!</p>
                    <Button variant="secondary" className="bgBlack flex width-100">No, I'm not.</Button>
                    <Button variant="secondary" className="bgBlack flex width-100">No, but I'm interested.</Button>
                </div>
                <div className={styles.textPYVFormLink}><a href="">Send me a link—I'll do it later!</a></div>
                <h3 className="bigType">We're so excited to meet you!</h3>
                <p>Submit the form below to let us know you're coming so we can plan for your visit.</p>
                <div className={`${styles.pyvContainer} bg-paper`} >
                    <div className={styles.intro}>
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/NlvmkQ3xO5uUJWEo6rzK"
                            className={styles.pyvFormEmbed}
                            id="inline-NlvmkQ3xO5uUJWEo6rzK"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="PYV Form (New Website)"
                            data-height="1307"
                            data-layout-iframe-id="inline-NlvmkQ3xO5uUJWEo6rzK"
                            data-form-id="NlvmkQ3xO5uUJWEo6rzK"
                            title="PYV Form (New Website)"
                        >
                        </iframe>


                    </div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={bookIcon} alt="" className={styles.icon} />
                        <p>Do I need to submit a form?</p>
                    </div>
                    <div className={styles.intro}>
                        <p>We know visiting a new church can feel like a big step, but it doesn't have to be. That's why we've made it simple, welcoming, and most importantly—<em>personal</em>.</p>

                    </div>
                    <-chalk-divider variant="black" className={styles.chalk - divider} />

                </div>
            </div>
        </section >
    );
};
export default PYVSection;