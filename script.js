let currentIndex = 0;
let images = document.querySelectorAll('.imagini');
let slideshowContainer = document.getElementById('slideshow');

function toggleSlideshow() {
    // Dacă slideshow-ul este deja activ, oprește-l
    if (slideshowContainer.classList.contains('active')) {
        clearInterval(slideshowInterval);
        slideshowContainer.classList.remove('active');
    } else {
        // Activează slideshow-ul și pornește-l
        slideshowContainer.classList.add('active');
        startSlideshow();
    }
}

function startSlideshow() {
    // Afișează prima imagine
    images[currentIndex].style.display = 'inline-block';
    // Începe intervalul pentru schimbarea imaginilor
    slideshowInterval = setInterval(() => {
        // Ascunde imaginea curentă
        images[currentIndex].style.display = 'none';
        // Crește indexul pentru imaginea următoare
        currentIndex = (currentIndex + 1) % images.length;
        // Afișează următoarea imagine
        images[currentIndex].style.display = 'inline-block';
    }, 3000); // Schimbă imaginea la fiecare 3 secunde
}