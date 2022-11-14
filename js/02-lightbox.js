import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryLocation = document.querySelector(".gallery");

const listOfImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                style="display: block"
            />
        </a>
    </li>`
  )
  .join("");

galleryLocation.insertAdjacentHTML("beforeend", listOfImg);

const lighbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
