import React, { useState, useEffect } from "react";

import * as styles from "./SundayServiceSection.module.scss";
import "./IntroSection.module.scss";
import "@scss/utilities/_all-utilities.scss";
import calendarIcon from "../../../assets/svg/icon-calendar.svg";
import locationIcon from "../../../assets/svg/icon-location.svg";
import pastorWelcomeFamily from "../../../assets/images/pastor-christopher-welcome-family.jpg";
import AddSundayServiceToCalendar from "@components/AddToCalendar/AddToCalendar";
import MapsEmbedButton from "@components/MapsEmbedButton/MapsEmbedButton";

// Function to get the upcoming Sunday
const getThisSunday = () => {
    const today = new Date();
    const thisSunday = new Date(today);
    thisSunday.setDate(today.getDate() + (7 - today.getDay()) % 7);
    return thisSunday.toISOString().split('T')[0];
};

const SundayServiceSection = () => {
    const thisSunday = getThisSunday();

    const event = {
        title: "Sunday Service at Expressions Church",
        description: "Join us this Sunday for our weekly service. Come as you are!",
        location: "2540 E. Orange Grove Blvd, Pasadena, CA 91107",
    };

    return (
        <section>
            <div className="sectionContent">
                <h2><span className="outlined">sunday</span> service</h2>
            </div>
            <div className="sectionContent">
                <img src={pastorWelcomeFamily} alt="" className={styles.pastorWelcomeFamily} />
                <h2 className={`${styles.bigType} bigType`}>Join us this Sunday @ 10AM. Come as you are.</h2>
                <p className={styles.sundayServiceIntroText}>We’d love to see you this Sunday. Whether it’s your first time at church or you’re looking for a new church home, we welcome you.</p>
                <div>
                    <h3>Service Info</h3>
                    {/* <h2><span className="outlined">service</span> info</h2> */}
                    <div className={styles.sundayServiceInfoWrapper}>
                        <MapsEmbedButton />
                        <div className={`${styles.serviceInfoContent} ${styles.serviceTimeWrapper}`}>
                            <img src={calendarIcon} className={styles.calendarIcon} />
                            <p>Every Sunday | 10:00 AM </p>
                        </div>
                        <div className={styles.serviceInfoContent}>
                            <img src={locationIcon} className={styles.locationIcon} />
                            <a href="https://maps.app.goo.gl/1vADDLsqh1g5mKf69">2540 E Orange Grove Blvd, Pasadena, CA 91107</a>
                        </div>
                        <AddSundayServiceToCalendar />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SundayServiceSection;
