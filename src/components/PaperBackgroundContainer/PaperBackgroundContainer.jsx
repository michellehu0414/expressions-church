import React from "react";
import * as containerStyles from "./PaperBackgroundContainer.modules.scss";
import ChalkDivider from "@components/ChalkDivider/ChalkDivider";

const PaperBackgroundContainer = ({
  headline,
  showDivider = true,
  content,
  className = '',
}) => {
  return (
    <section
      className={`${containerStyles.container} ${className}`}
    >
      {/* Headline */}
      {headline && <h3 className={containerStyles.containerHeadline}>{headline}</h3>}

      {/* Divider */}
      {showDivider && <ChalkDivider variant="black" height={0.35} />}

      {/* Dynamic Content */}
      <div>{content}</div>
    </section>
  );
};

export default PaperBackgroundContainer;

// how to use
// <PaperBackgroundContainer headline="Our Mission" showDivider={false} content={missionContent}