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
let galleryInstance;

function closeInstance(evt) {
  if (evt.code === "Escape") {
    galleryInstance.close();
  }
}

function clickOnImage(evt) {
  evt.preventDefault();
  const imageEl = evt.target;
  const currentImgEl = imageEl.classList.contains("gallery__image");

  if (!currentImgEl) {
    return;
  }
  const imageUrl = imageEl.dataset.source;

  galleryInstance = basicLightbox.create(`<img src="${imageUrl}"/>`, {
    onShow: () => galleryLocation.addEventListener("keydown", closeInstance),
    onClose: () =>
      galleryLocation.removeEventListener("keydown", closeInstance),
  });

  galleryInstance.show();
}

galleryLocation.addEventListener("click", clickOnImage);
