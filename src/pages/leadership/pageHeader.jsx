import React from 'react';
import ReactDOM from 'react-dom/client';
import './leadership.module.scss';

import PageHeader from "./pageHeader";

const injectSection = (Component, elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        ReactDOM.render(<Component />, element);
    }
};

// Inject each section where its placeholder div exists
injectSection(PageHeader, "leadership-header");