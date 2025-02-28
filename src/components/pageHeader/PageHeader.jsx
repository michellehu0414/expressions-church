import React from 'react';
import * as styles from './PageHeader.module.scss';
import Button from '@components/Button/Button';

const PageHeader = ({
  backgroundImage,
  titleOutlinedText,
  titleFilledText,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showPrimaryButton = true,
  showSecondaryButton = false,
}) => {

  const inlineStyle = {
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('${backgroundImage}') no-repeat center bottom / cover`
  };

  return (
    <header className={styles.pageHeader} style={inlineStyle}>
      <h1 className={styles.pageTitle}>
        <span className={styles.outlined}>{titleOutlinedText}</span> {titleFilledText}
      </h1>
      <div className={styles.buttonContainer}>
        {showPrimaryButton && (
          <Button to={primaryButtonLink} variant="primary" className="bgBlack">{primaryButtonText}</Button>
        )}
        {showSecondaryButton && (
          <Button to={secondaryButtonLink} variant="secondary" className="bgWhite">{secondaryButtonText}</Button>
        )}
      </div>
    </header >
  );
};

export default PageHeader;
// Usage example
// import React from 'react';
// import ReactDOM from 'react-dom';
// import PageHeader from './PageHeader';
//
// const App = () => (
//   <div>
{/* <PageHeader
  backgroundImage="path/to/image.jpg"
  titleOutlinedText="Welcome"
  titleFilledText="to our site"
  primaryButtonText="Get Started"
  primaryButtonLink="/get-started"
  secondaryButtonText="Learn More"
  secondaryButtonLink="/learn-more"
  showPrimaryButton={true}
  showSecondaryButton={true}
/> */}
//   </div>
// );
//
// ReactDOM.render(<App />, document.getElementById('root'));