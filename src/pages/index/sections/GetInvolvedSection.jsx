import React from "react";
import * as styles from "./GetInvolvedSection.module.scss";
import GetInvolvedCards from "@components/GetInvolvedCards/GetInvolvedCards";
import TeamsAccordionList from "@components/TeamsAccordionList/TeamsAccordionList";
import ChalkDivider from "@components/ChalkDivider/-ChalkDivider";
import Button from "@components/Button/Button";
import "@scss/utilities/_all-utilities.scss";

const GetInvolvedSection = () => {
  return (
    <div>
      <GetInvolvedCards id="find-community-card" className={styles.card} />
      <GetInvolvedCards id="serve-sgv-card" className={styles.card} />
      <GetInvolvedCards id="fire-relief-card" className={styles.card} />
      <GetInvolvedCards id="give-card" className={styles.card} />
      <div className={styles.teams}>
        <GetInvolvedCards id="serve-card" className={styles.card} />
      </div>
      <GetInvolvedCards id="partner-card" className={styles.card} />
      <GetInvolvedCards id="newcomer-connect-card" className={`{styles.card}, mb-0`} />
    </div>
  );
};

export default GetInvolvedSection;
