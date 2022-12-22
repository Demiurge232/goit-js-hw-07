import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divGallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`
  )
  .join('');
divGallery.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
