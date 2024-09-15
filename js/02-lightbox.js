import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

galleryItems.map(item => {
    list.insertAdjacentHTML('beforeend', `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`)
});


list.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault();

    const imgUrl = evt.target.dataset.source
    const instance = basicLightbox.create(`<img src="${imgUrl}" width="800" height="600">`)

    instance.show()

    document.addEventListener('keydown', onPress)

    function onPress(evt) {
        if (evt.code === "Escape") {
            instance.close()
            document.removeEventListener('keydown', onPress)
        }
    }
}

