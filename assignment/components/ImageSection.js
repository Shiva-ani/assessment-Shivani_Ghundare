export const ImageSection = () => {
    const section = document.createElement('div');
    section.className = 'image-section';

    const img = document.createElement('img');
    img.src = 'https://i.pinimg.com/736x/0a/91/ae/0a91aec786b27dbd0430895eed933d31.jpg';
    img.alt = 'Description';
    img.className = 'responsive-image';

    section.appendChild(img);
    return section;
};
