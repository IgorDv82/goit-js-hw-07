import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryLocation = document.querySelector(".gallery");

const listOfImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
  )
  .join("");

galleryLocation.insertAdjacentHTML("beforeend", listOfImg);

const clickOnImage = (evt) => {
  evt.preventDefault();
  const imageEl = evt.target;
  const currentImgEl = imageEl.classList.contains("gallery__image");
  if (!currentImgEl) {
    return;
  }
  const imageUrl = imageEl.dataset.source;

  const galleryInstance = basicLightbox.create(`<img src="${imageUrl}"/>`);

  galleryInstance.show();

  galleryLocation.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      galleryInstance.close();
    }
  });
};

galleryLocation.addEventListener("click", clickOnImage);
