import React from "react";
import "../Button/Button.scss";
// import Button from "../Button/Button"; // Import Button component
import * as styles from "./Card.module.scss"; // Import styles

const Card = ({
  image,
  altText,
  headline,
  bodyText,
  primaryButtonText,
  primaryButtonLink,
  // primaryButtonExternal = false, // Defaults to internal
  secondaryButtonText,
  secondaryButtonLink,
  // secondaryButtonExternal = false, // Defaults to internal
  showPrimaryButton = true, // New prop to toggle primary button
  showSecondaryButton = false, // New prop to toggle secondary button
}) => {
  return (
    <div className={styles.card}> {/* Apply styles */}
      <img
        src={image || "https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp"}
        alt={altText || "Default image"}
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardHeadline}>{headline}</h3>
        <p className={styles.cardBody}>{bodyText}</p>
        <div className={styles.buttonContainer}>
          {showPrimaryButton && (
            <button href={primaryButtonLink} class="primaryButton">{primaryButtonText}</button>
          )}
          {showSecondaryButton && (
            <button href={secondaryButtonLink} class="secondaryButton">{secondaryButtonText}</button>
          )}
        </div>
        {/* <div className={styles.buttonContainer}>
          {primaryButtonText && primaryButtonLink && (
            <Button
              {...(primaryButtonExternal ? { href: primaryButtonLink } : { to: primaryButtonLink })}
              variant="primary"
            >
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Button
              {...(secondaryButtonExternal ? { href: secondaryButtonLink } : { to: secondaryButtonLink })}
              variant="secondary"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div> */}
      </div>
    </div >
  );
};

export default Card;

// ----------------------------------------------------------
// Usage examples
// ----------------------------------------------------------
// 1️⃣ Primary Button → Internal, Secondary → External
// <Card
// headline="Join Our Community"
// bodyText="Become a part of something bigger!"
// primaryButtonText="Get Started"
// primaryButtonLink="/signup" // Internal route (React Router)
// secondaryButtonText="Learn More"
// secondaryButtonLink="https://example.com" // External link
// secondaryButtonExternal={true} // Opens in a new tab
// showPrimaryButton={true} // Toggle primary button
// showSecondaryButton={true} // Toggle secondary button
// />

// 2️⃣ Both Buttons Lead to Internal Pages
// <Card
// headline="Follow Us"
// bodyText="Stay connected on social media."
// primaryButtonText="Twitter"
// primaryButtonLink="https://twitter.com/example"
// primaryButtonExternal={true}
// secondaryButtonText="Instagram"
// secondaryButtonLink="https://instagram.com/example"
// secondaryButtonExternal={true}
// showPrimaryButton={true} // Toggle primary button
// showSecondaryButton={true} // Toggle secondary button
// />

// 3️⃣ Both Buttons Lead to External Links
// <Card
//   headline="Follow Us"
//   bodyText="Stay connected on social media."
//   primaryButtonText="Twitter"
//   primaryButtonLink="https://twitter.com/example"
//   primaryButtonExternal={true}
//   secondaryButtonText="Instagram"
//   secondaryButtonLink="https://instagram.com/example"
//   secondaryButtonExternal={true}
//   showPrimaryButton={true} // Toggle primary button
//   showSecondaryButton={true} // Toggle secondary button
// />