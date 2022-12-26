import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');

const instance = basicLightbox.create(`<img src="">`, {
  onShow: instance => {
    document.addEventListener('keydown', onEscKeyPress);
  },

  onClose: instance => {
    document.removeEventListener('keydown', onEscKeyPress);
  },
});

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
  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
};

function onEscKeyPress(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}
divGallery.addEventListener('click', onDivGalleryClick);
