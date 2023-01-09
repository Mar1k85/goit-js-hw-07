import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMurkup = createGalleryMurkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMurkup);

function createGalleryMurkup(Items) {
  return Items.map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a> </li>`;
  }).join(" ");
}
const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
