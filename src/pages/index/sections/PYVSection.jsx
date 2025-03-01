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
        <section>
            <h2>
                <span className="outlined">Ready to</span>
                <br />
                plan a visit?
            </h2>
            <div className="sectionContent">
                <img src={churchMembersCutout} alt="" className={styles.churchMembersCutout} />
                <div className={styles.buttonWrapper}>
                    <Button variant="primary" className="bgWhite flex width-100">Yes!</Button>
                    <Button variant="secondary" className="bgBlack flex width-100">Not yet</Button>
                </div>
                <h3 className="bigType">We're so excited to meet you!</h3>
                <div className={`${styles.pyvContainer} bg-paper`} >
                    <div className={styles.intro}>
                        <p>Submit the form below to let us know you're coming so we can plan for your visit.</p>

                    </div>
                    <div className={styles.pyvIncentivesWrapper}>
                        <img src={bookIcon} alt="" className={styles.icon} />
                        <p>Learn more</p>
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
                        <div className={styles.pyvIncentivesWrapper}>
                            <img src={chatIcon} alt="" className={styles.icon} />
                            <div>
                                <p className={styles.headline}>Get a personalized guide.</p>
                                <p>Ask questions or just say hello!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PYVSection;