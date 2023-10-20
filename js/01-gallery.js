import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const img = document.createElement("img");
    li.classList.add("gallery__item");
    link.classList.add("gallery__link");
    img.classList.add("gallery__image");
    img.src = preview;
    img.alt = description;
    img.dataset.source = original;
    link.href = original;
    link.appendChild(img);
    li.appendChild(link);
    list.appendChild(li);
});

console.log(galleryItems);

list.addEventListener("click", (event) => {
    event.preventDefault();
    const originalImg = event.target.dataset.source;
    
    const instance = basicLightbox.create(`<img src="${originalImg}">`);
    instance.show();
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close()
        }
    })
})
