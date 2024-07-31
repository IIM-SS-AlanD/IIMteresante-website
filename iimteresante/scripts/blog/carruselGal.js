document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const dotsContainer = document.querySelector(".carousel-dots");
    const Btn1 = document.querySelector(".Btn1");
    const Btn2 = document.querySelector(".Btn2");
    const Btn3 = document.querySelector(".Btn3");
    const Btn4 = document.querySelector(".Btn4");
    const Btn5 = document.querySelector(".Btn5");
    const Btn6 = document.querySelector(".Btn6");
    const Btn7 = document.querySelector(".Btn7");
    const Btn8 = document.querySelector(".Btn8");
    const Btn9 = document.querySelector(".Btn9");
    const Btn10 = document.querySelector(".Btn10");
    const Btn11 = document.querySelector(".Btn11");
    const Btn12 = document.querySelector(".Btn12");
    const Btn13 = document.querySelector(".Btn13");
    const Btn14 = document.querySelector(".Btn14");
    
    let jsonPath = carousel.getAttribute("data-json-path");

    // Función para cargar y mostrar el carrusel
    function loadCarousel(jsonPath) {
        fetch(jsonPath)
            .then((response) => response.json())
            .then((data) => {
                // Limpia el contenido actual del carrusel
                carousel.innerHTML = '';

                // Llena el carrusel con los nuevos datos
                data.forEach((contenido) => {
                    const carouselItem = document.createElement("div");
                    carouselItem.classList.add("carousel-item");
                    const imagen = document.createElement("img");
                    imagen.src = contenido.imagePath;
                    const text = document.createElement("div");
                    carouselItem.appendChild(imagen);
                    carousel.appendChild(carouselItem);
                });

                const carouselItems = document.querySelectorAll(".carousel .carousel-item");

                // Agrega puntos de navegación
                dotsContainer.innerHTML = ''; // Limpia los puntos existentes
                carouselItems.forEach(() => {
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    dotsContainer.appendChild(dot);
                });

                // Inicia el carrusel con auto-desplazamiento
                currentIndex = 0;
                updateCarousel();
                startAutoPlay();
            })
            .catch((error) => {
                console.error("Error al cargar el archivo JSON:", error);
            });
    }

    loadCarousel(jsonPath); // Carga el carrusel al inicio

    let currentIndex = 0;
    let autoPlayInterval;

    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }, 6000); // Cambia la velocidad de desplazamiento aquí (en milisegundos)
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function restartAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    function updateCarousel() {
        const carouselItems = document.querySelectorAll(".carousel .carousel-item");
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualiza la clase "active" en los puntos de navegación
        const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Maneja la navegación hacia la izquierda
    prevButton.addEventListener("click", function () {
        const carouselItems = document.querySelectorAll(".carousel .carousel-item");
        currentIndex =
            (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
        restartAutoPlay();
    });

    // Maneja la navegación hacia la derecha
    nextButton.addEventListener("click", function () {
        const carouselItems = document.querySelectorAll(".carousel .carousel-item");
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
        restartAutoPlay();
    });

    // Evento para el botón de cambio de dirección
    Btn1.addEventListener("click", function(){
        // Define el nuevo path
        const newJsonPath = "/data/blog/carruselGaleria.json"; 
        // Carga el carrusel con los datos del nuevo archivo JSON
        loadCarousel(newJsonPath);
    });
    Btn2.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG2.json"; 
        loadCarousel(newJsonPath);
    });
    Btn3.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG3.json"; 
        loadCarousel(newJsonPath);
    });
    Btn4.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG4.json"; 
        loadCarousel(newJsonPath);
    });
    Btn5.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG5.json"; 
        loadCarousel(newJsonPath);
    });
    Btn6.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG6.json"; 
        loadCarousel(newJsonPath);
    });
    Btn7.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG7.json"; 
        loadCarousel(newJsonPath);
    });
    Btn8.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG8.json"; 
        loadCarousel(newJsonPath);
    });
    Btn9.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG9.json"; 
        loadCarousel(newJsonPath);
    });
    Btn10.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG10.json"; 
        loadCarousel(newJsonPath);
    });
    Btn11.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG11.json"; 
        loadCarousel(newJsonPath);
    });
    Btn12.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG12.json"; 
        loadCarousel(newJsonPath);
    });
    Btn13.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG13.json"; 
        loadCarousel(newJsonPath);
    });
    Btn14.addEventListener("click", function(){
        const newJsonPath = "/data/blog/carruselG14.json"; 
        loadCarousel(newJsonPath);
    });
    
});
