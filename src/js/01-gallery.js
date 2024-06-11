import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

ulEl.insertAdjacentHTML("beforeend", createMar(galleryItems));

function createMar(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `
    )
    .join("");
}

ulEl.style.listStyle = "none";

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
