// src/components/GetInvolvedCards.js

import { createCard } from '@components/Card';

export const insertGetInvolvedCards = () => {
    // Create individual cards
    const partner = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'Image 1',
        headline: 'Fire Relief',
        bodyText: 'Families affected by the Los Angeles fires—including us—need immediate support. There are many ways you can help rebuild SGV.',
        primaryButtonText: 'Volunteer',
        secondaryButtonText: 'See how you can help'
    });

    const fireRelief = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'Image 2',
        headline: 'Headline 2',
        bodyText: 'Description for card 2.',
        primaryButtonText: 'Button 3',
        secondaryButtonText: 'Button 4'
    });

    const give = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'Image 2',
        headline: 'Give',
        bodyText: 'We are a brand new church. Along with many families, we lost our building to the Eaton Fire. Help us rebuild and uplift SGV.',
        primaryButtonText: 'Give now',
        secondaryButtonText: 'Read our story'
    });

    const findCommunity = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'text',
        headline: 'Find your Community',
        bodyText: 'Our community groups and gatherings....',
        primaryButtonText: 'Sign up',
        secondaryButtonText: 'Explore community'
    });

    const serve = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'text',
        headline: 'Serve with a Team',
        bodyText: 'God has given all of us a gift from his great variety of spiritual gifts. Use them well to serve one another. We have 9 teams in total.',
        primaryButtonText: 'Get started',
        secondaryButtonText: 'Discover Teams'
    });

    const serveSGV = createCard({
        imageSrc: 'https://vrwpaviv.elementor.cloud/wp-content/uploads/2025/01/diverse-community-gathering-circle.webp',
        altText: 'text',
        headline: 'Serve SGV',
        bodyText: 'Join our community efforts and support our SGV neighbors.',
        primaryButtonText: 'Sign up now',
        secondaryButtonText: 'Learn more'
    });

    // Insert the card content into the corresponding divs by their IDs
    document.getElementById('partner-card').innerHTML = partner;
    document.getElementById('fire-relief-card').innerHTML = fireRelief;
    document.getElementById('give-card').innerHTML = give;
    document.getElementById('find-community-card').innerHTML = findCommunity;
    document.getElementById('serve-card').innerHTML = serve;
    document.getElementById('serve-sgv-card').innerHTML = serveSGV;
};