import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

galleryItems.map(item => {
    list.insertAdjacentHTML('beforeend', `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`)
});


new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250
 });
   