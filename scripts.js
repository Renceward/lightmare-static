console.log("Lightmare scripts loaded");

const galleryImages = [
    { src: "images/Pumpkins.jpg", alt: "Pumpkins" },
    { src: "images/XmasTrees.jpg", alt: "Christmas trees" },
    { src: "images/HalloweenPorch.jpg", alt: "Halloween porch" },
    { src: "images/Garage.jpg", alt: "Garage lights" },
    { src: "images/TuneTo.jpg", alt: "Tune to sign" },
    { src: "images/XmasHouse.jpg", alt: "Christmas house" },
    { src: "images/HalloweenHouse.jpg", alt: "Halloween house" }
];

let currentGalleryIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const previousButton = document.querySelector(".gallery-button-prev");
const nextButton = document.querySelector(".gallery-button-next");

function showGalleryImage(index) {
    currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;

    galleryImage.src = galleryImages[currentGalleryIndex].src;
    galleryImage.alt = galleryImages[currentGalleryIndex].alt;
}

previousButton.addEventListener("click", () => {
    showGalleryImage(currentGalleryIndex - 1);
    resetGalleryTimer();
});

nextButton.addEventListener("click", () => {
    showGalleryImage(currentGalleryIndex + 1);
    resetGalleryTimer();
});

let galleryTimer = setInterval(nextGalleryImage, 3000);

function nextGalleryImage() {
    showGalleryImage(currentGalleryIndex + 1);
}

function resetGalleryTimer() {
    clearInterval(galleryTimer);
    galleryTimer = setInterval(nextGalleryImage, 3000);
}