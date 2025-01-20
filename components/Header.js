export const Header = () => {
    const header = document.createElement('div');
    header.className = 'header';

    // Create logo
    const logo = document.createElement('img');
    logo.src = 'https://i.pinimg.com/736x/5b/1b/6c/5b1b6ccf5c2a522b4be30a4cb8ca7aee.jpg';
    logo.alt = 'Logo';
    logo.className = 'header-logo';

    // Create header text
    const text = document.createElement('p');
    text.className = 'header-text';
    text.textContent =
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    // Append elements to header
    header.appendChild(logo);
    header.appendChild(text);

    return header;
};
