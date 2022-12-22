import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" ></a></div>`
  )
  .join('');
divGallery.innerHTML = markup;

const onDivGalleryClick = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`<img src="${evt.target.getAttribute('data-source')}">`);
  instance.show();
};

divGallery.addEventListener('click', onDivGalleryClick);
