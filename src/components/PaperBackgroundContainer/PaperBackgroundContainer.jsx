import React from "react";
import * as styles from "./PaperBackgroundContainer.modules.scss";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";

const PaperBackgroundContainer = ({
  headline,
  showDivider = true,
  content,
  className
}) => {
  return (
    <section
      className={`${styles.container} ${className}`}>
      {/* Headline */}
      {headline && <h3 className={styles.containerHeadline}>{headline}</h3>}

      {/* Divider */}
      {showDivider && <ChalkDivider variant="black" />}

      {/* Dynamic Content */}
      <div>{content}</div>
    </section >
  );
};

export default PaperBackgroundContainer;

// how to use
// <PaperBackgroundContainer headline="Our Mission" showDivider={false} content={missionContent}