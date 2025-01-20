export const Footer = () => {
    const footer = document.createElement('div');
    footer.className = 'footer';
    footer.style.fontFamily = 'Arial, sans-serif';
    footer.style.padding = '20px';
    footer.style.lineHeight = '1.6';

    footer.innerHTML = `
        <h4 class="footer-heading">Ut enim ad minim:</h4>
        <p class="footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="footer-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        
        <h4 class="footer-heading">Sint occaecat cupidatat:</h4>
        <ul class="footer-list">
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</li>
        </ul>
        
        <hr class="custom-line" />
        
        <p class="footer-center-text">Sed do eiusmod tempor incididunt ut labore.</p>
        
        <div class="image-module">
            <img src="https://i.pinimg.com/736x/5b/1b/6c/5b1b6ccf5c2a522b4be30a4cb8ca7aee.jpg" 
                 alt="Center Aligned Image" 
                 class="footer-image" />
        </div>
    `;

    return footer;
};
