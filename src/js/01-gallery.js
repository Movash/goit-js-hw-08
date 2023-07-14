// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const allGallery = document.querySelector('.gallery');

const imagesListArr = galleryItems
.map(image => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"
        />
    </a>
    </li>`;
})
.join('');

allGallery.insertAdjacentHTML('beforeend', imagesListArr);

const lightbox = new SimpleLightbox('.gallery a', {
    aptionsData: 'alt',
    captionDelay: 250,
});