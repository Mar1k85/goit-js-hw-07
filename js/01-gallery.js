import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMurkup = createGalleryMurkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMurkup);
galleryContainer.addEventListener("click", onGalleryItemClick);

function createGalleryMurkup(Items) {
  return Items.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  }).join(" ");
}

function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <div class="modal">
  <img src='${e.target.dataset.source}'>
  </div>
`);

  instance.show();
}
