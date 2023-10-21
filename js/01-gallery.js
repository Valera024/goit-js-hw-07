import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

const listEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
  </a>
</li>`
).join("");

list.insertAdjacentHTML("afterbegin", listEl);

console.log(galleryItems);

function keydownHandler(event, modalImg) {
    if (event.key === "Escape") {
        modalImg.close();
    }
}

list.addEventListener("click", (event) => {
    event.preventDefault();
    const originalImg = event.target.dataset.source;
    
    const modalImg = basicLightbox.create(`<img src="${originalImg}">`, {     
        onShow: (modalImg) => {
            window.addEventListener("keydown", (event) => keydownHandler(event, modalImg))
        },
        onClose: (modalImg) => {
            window.removeEventListener("keydown", (event) => keydownHandler(event, modalImg))
        }
    });
    modalImg.show();
})
