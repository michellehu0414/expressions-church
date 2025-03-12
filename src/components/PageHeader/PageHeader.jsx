import React from 'react';
import "./PageHeader.scss";
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
    <div className="page-header-wrapper" style={inlineStyle}>
      <h1 className="page-header-title">
        <span className="outlined">{titleOutlinedText}</span> {titleFilledText}
      </h1>
      <div className="page-header-buttons">
        {showPrimaryButton && (
          <Button to={primaryButtonLink} variant="primary" className="bgBlack">{primaryButtonText}</Button>
        )}
        {showSecondaryButton && (
          <Button to={secondaryButtonLink} variant="secondary" className="bgWhite">{secondaryButtonText}</Button>
        )}
      </div>
    </div>
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