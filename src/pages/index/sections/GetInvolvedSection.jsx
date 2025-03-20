import React from "react";
import * as styles from "./GetInvolvedSection.module.scss";
import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";
import TeamsAccordionList from "@components/TeamsAccordionList/TeamsAccordionList";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";
import Button from "@components/Button/Button";
import "@scss/utilities/_all-utilities.scss";

const GetInvolvedSection = () => {
  return (
    <section>
      <h2><span className="outlined">Get</span> Involved</h2>
      <div className="sectionContent">
        <GetInvolvedCards id="serve-sgv-card" className={styles.card} />
        <GetInvolvedCards id="find-community-card" className={styles.card}  />
        <div>
          <GetInvolvedCards id="serve-card" className={styles.card}  />
          <TeamsAccordionList />
          <h3>Not sure? Let's chat!</h3>
          <p>Submit an dinterest form anyway, and we'll discern how you can contribute your God-given gifts or talents.</p>
          <Button href="/" variant="primary" className="bgWhite">
            Submit Interest Form
          </Button>
        </div>
        <GetInvolvedCards id="give-card" className={styles.card}  />

        <GetInvolvedCards id="fire-relief-card" className={styles.card}  />
        <GetInvolvedCards id="partner-card" className={styles.card}  />

        <GetInvolvedCards id="newcomer-connect-card" className={styles.card}  />
      </div>
    </section >
  );
};

export default GetInvolvedSection;
