import React, { useEffect } from 'react';

const SubsplashEventsEmbed = () => {
    useEffect(() => {
        const target = document.getElementById('subsplash-embed-qtbc9rz');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function () {
          subsplashEmbed('+dwm2/lb/ca/+qtbc9rz?embed', 'https://subsplash.com/', 'subsplash-embed-qtbc9rz');
        };
        script.src = 'https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js';
        target.parentElement.insertBefore(script, target);
      }, []);

      return <div id="subsplash-embed-qtbc9rz"></div>;
};

export default SubsplashEventsEmbed;