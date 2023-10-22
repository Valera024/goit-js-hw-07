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

list.addEventListener("click", (event) => {
    event.preventDefault();
    const originalImg = event.target.dataset.source;
    
    const instance = basicLightbox.create(`<img src="${originalImg}">`, {     
        onShow: (instance) => {
            window.addEventListener("keydown", onKeyPress)
        },
        onClose: (instance) => {
            window.removeEventListener("keydown", onKeyPress)
        }
    });

    const onKeyPress = (event) => {
        if (event.key === "Escape") {
            instance.close();
        }
    }
    instance.show();
})
