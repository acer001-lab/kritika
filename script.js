const images = ["1.png", "2.png", "3.png","4.png","5.png","6.png"];
let currentIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById("slider-image");
  imageElement.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
