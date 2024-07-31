document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.getElementById('news-section');
    const newsContainer = document.getElementById('news-container');
    
    // Función para cargar imágenes desde la carpeta /eventosproximos
    const loadEventImages = async () => {
        try {
            const images = ['evento.png'];
            
            if (images.length > 0) {
                images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = `../../assets/eventos/${image}`;
                    // imgElement.src = `../eventosproximos/${image}`;
                    imgElement.alt = 'Próximo evento';
                    newsContainer.appendChild(imgElement);
                });
                newsSection.style.display = 'block'; // Muestra la sección de noticias
            }
        } catch (error) {
            console.error('Error cargando imágenes de eventos:', error);
        }
    };

    loadEventImages();
});