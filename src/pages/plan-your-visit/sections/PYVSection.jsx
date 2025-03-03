import React from 'react';
import * as styles from './PYVSection.module.scss';
import "@scss/utilities/_all-utilities.scss";
import churchMembersCutout from "@assets/images/church-members-mixed-cutouts.png";
import Button from "@components/Button/Button";
import "@scss/utilities/_all-utilities.scss";

import bookIcon from "@assets/svg/icon-book.svg";
import userIcon from "@assets/svg/icon-user.svg";
import chatIcon from "@assets/svg/icon-chat-bubble.svg";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";
// import Button from "@components/Button/Button";

const PYVSection = () => {
    return (
        <div className="sectionContent">
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
                <ChalkDivider variant="black" className={styles.chalkDivider} />
                <div>
                    <p className={styles.pyvIncentivesHeadline}>Complete this form to...</p>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={bookIcon} alt="" className={styles.icon} />
                        <p className={styles.headline}>Get a personalized guide.</p>
                    </div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={userIcon} alt="" className={styles.icon} />
                        <div>
                            <p className={styles.headline}>Got little ones? Pre-Register</p>
                            <p>This will save you time, trust.</p>
                        </div>
                    </div>
                    <div className={`${styles.pyvIncentivesWrapper} mb-0`}>
                        <img src={chatIcon} alt="" className={styles.icon} />
                        <div>
                            <p className={styles.headline}>Get a personalized guide.</p>
                            <p>Ask questions or just say hello!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PYVSection;