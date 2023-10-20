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
    link.href = original;
    img.src = preview;
    img.alt = description;
    link.appendChild(img);
    li.appendChild(link);
    list.appendChild(li);
})
console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250",
    close: true,
});

