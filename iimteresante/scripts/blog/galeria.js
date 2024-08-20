
document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".gallery-trigger");

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", function () {
            const galleryId = this.getAttribute("data-gallery");
            const gallery = document.getElementById(galleryId);
            hideAllGalleries();
            gallery.classList.remove("hidden");
            addGalleryNavigation(gallery);
        });
    });

    function hideAllGalleries() {
        const galleries = document.querySelectorAll(".gallery");
        galleries.forEach((gallery) => {
            gallery.classList.add("hidden");
        });
    }

    function addGalleryNavigation(gallery) {
        const images = gallery.querySelectorAll("img");
        const prevBtn = gallery.querySelector(".prev-btn");
        const nextBtn = gallery.querySelector(".next-btn");
        let currentIndex = 0;
    
        showImage(currentIndex);
    
        prevBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    
        nextBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    
        function showImage(index) {
            images.forEach((image) => {
                image.style.display = "none";
            });
            images[index].style.display = "block";
        }
    }
    
});
