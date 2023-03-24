// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkUp);

function createGalleryItems(galleryItems) {
    return galleryItems.map(
        ({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
        }
    ).join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',

 });