import React from 'react';
import './PYVSection.scss';
import "@scss/utilities/_all-utilities.scss";
import churchMembersCutout from "@assets/images/church-members-mixed-cutouts.png";
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
                <img src={churchMembersCutout} alt="" className="churchMembersCutout" />
            </div>

        </section>
    );
};
export default PYVSection;