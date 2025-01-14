import { Header } from './components/Header.js';
import { ImageSection } from './components/ImageSection.js';
import { MainContent } from './components/MainContent.js';
import { Features } from './components/Features.js';
import { Footer } from './components/Footer.js';

document.getElementById('header-container').appendChild(Header());
document.getElementById('image-section-container').appendChild(ImageSection());
document.getElementById('main-content-container').appendChild(MainContent());
document.getElementById('features-container').appendChild(Features());
document.getElementById('footer-container').appendChild(Footer());
