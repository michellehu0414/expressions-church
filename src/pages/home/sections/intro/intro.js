import './intro.scss';

import introTemplate from 'raw-loader!./intro.html';

export function renderIntro() {
    return introTemplate;
}
