import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');

let instance;

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
  window.addEventListener('keydown', onEscKeyPress);
  instance = basicLightbox.create(`<img src="${evt.target.getAttribute('data-source')}">`);
  instance.show();
};

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscKeyPress);
  }
}
divGallery.addEventListener('click', onDivGalleryClick);
