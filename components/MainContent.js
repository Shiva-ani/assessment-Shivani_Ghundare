export const MainContent = () => {
    const content = document.createElement('div');
    content.className = 'main-content';
    content.style.textAlign = 'center';
    content.style.fontFamily = 'Arial, sans-serif';
    content.style.padding = '20px';

    const heading = document.createElement('h2');
    heading.textContent = 'Excepteur sint occaecat cupidatat';
    heading.style.color = '#00695c';
    heading.style.fontSize = '1.5rem';
    heading.style.marginBottom = '10px';

    const paragraph = document.createElement('p');
    paragraph.textContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    paragraph.style.color = '#333';
    paragraph.style.fontSize = '1rem';
    paragraph.style.lineHeight = '1.5';
    paragraph.style.marginBottom = '20px';

    const button = document.createElement('button');
    button.textContent = 'Ut enim ad minim veniam';
    button.style.backgroundColor = '#00695c';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.padding = '10px 20px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1rem';

    // Adding hover effect for the button
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#004d40';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#00695c';
    });

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(button);

    return content;
};
