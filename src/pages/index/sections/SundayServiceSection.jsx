import React from "react";
import "./SundayServiceSection.scss";
import "./IntroSection.module.scss";
import "@scss/utilities/_all-utilities.scss";
import locationMap from "/wp-image-optimizer/output/originals/expressions-church-location-map.png";
import calendarIcon from "/assets/svg/icon-calendar.svg";
import locationIcon from "/assets/svg/icon-location.svg";
import pastorWelcomeFamily from "/wp-image-optimizer/local/compressed/pastor-christopher-welcome-family.jpg";
import AddToCalendar from "@components/AddToCalendar/AddToCalendar";
// import smilingWomanChild from "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/02/fire-relief-smiling-woman-child.webp";

// Function to get the upcoming Sunday
const getThisSunday = () => {
    const today = new Date();
    const thisSunday = new Date(today);
    thisSunday.setDate(today.getDate() + (7 - today.getDay()) % 7);
    return thisSunday.toISOString().split('T')[0];
};

const GetInvolvedSection = () => {
    const thisSunday = getThisSunday();

    const event = {
        title: "Sunday Service at Expressions Church",
        description: "Join us this Sunday for our weekly service. Come as you are!",
        location: "2540 E. Orange Grove Blvd, Pasadena, CA 91107",
    };

    return (
        <section className="sundayServiceSection">
            <h2><span className="outlined">sunday</span> service</h2>
            <div className="sectionContent">
                <img src={pastorWelcomeFamily} alt="" className="pastorWelcomeFamily" />
                <h2 className="largeText">Join us this Sunday @ 10AM. Come as you are.</h2>
                {/* <img className="width-100 mb-16" src={smilingWomanChild} alt="Smiling woman and child" /> */}
                <p className="sundayServiceIntroText">We’d love to see you this Sunday. Whether it’s your first time at church or you’re looking for a new church home, we welcome you.</p>
                <div className="service-details">
                    <h2 className="largeText">Service Info</h2>
                    {/* <h2><span className="outlined">service</span> info</h2> */}
                    <iframe className="googleMapsEmbed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.5537896810156!2d-118.10043738825618!3d34.15775627300545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dcbafc2237e7%3A0xa10377d1ca962ed3!2s2540%20E%20Orange%20Grove%20Blvd%2C%20Pasadena%2C%20CA%2091107!5e0!3m2!1sen!2sus!4v1740636300776!5m2!1sen!2sus" loading=" lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="sundayServiceInfoWrapper">
                        <div className="serviceInfoContent serviceTimeInfo">
                            <div className="serviceInfoContent">
                                <img src={calendarIcon} className="calendarIcon"></img>
                                <p className="serviceTimeText">Sunday @10AM</p>
                            </div>
                        </div>
                        <div className="serviceInfoContent">
                            <img src={locationIcon} className="locationIcon"></img>
                            <a href="https://maps.app.goo.gl/fRevrAzcmgLNRoqA7">
                                <p>2540 E. Orange Grove Blvd, Pasadena, CA 91107</p>
                            </a>
                        </div>
                    </div>
                    <button className="addToCalendarButton bgWhite primaryButton">
                        <span className="addToCalendarText">Add to Calendar</span></button>
                    <button className="bgWhite primaryButton">Get Directions</button>
                    <button className="bgWhite primaryButton">Plan your first visit</button>
                </div>
            </div>
        </section >
    );
};

export default GetInvolvedSection;
