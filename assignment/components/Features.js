export const Features = () => {
    const features = document.createElement('div');
    features.className = 'features';

    const heading = document.createElement('h2');
    heading.textContent = 'Sint cupidatat occaecat ut';
    heading.className = 'features-heading';
    features.appendChild(heading);

    const featureItems = [
        {
            title: 'Nisi ut ade',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Duis aute irure',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'features-container';

    featureItems.forEach((item) => {
        const feature = document.createElement('div');
        feature.className = 'feature';

        const icon = document.createElement('div');
        icon.className = 'feature-icon';

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.className = 'feature-title';

        const description = document.createElement('p');
        description.textContent = item.description;
        description.className = 'feature-description';

        feature.appendChild(icon);
        feature.appendChild(title);
        feature.appendChild(description);
        featuresContainer.appendChild(feature);
    });

    features.appendChild(featuresContainer);

    return features;
};
