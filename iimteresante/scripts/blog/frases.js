// Ruta de la carpeta que contiene las imágenes
const imageLinks = ["/iimteresante/assets/images/Frases de cientifico/006_Stephen Hawking.png",
"/iimteresante/assets/images/Frases de cientifico/007_Arthur C. Clarke.png",
"/iimteresante/assets/images/Frases de cientifico/008_Michael Faraday.png",
"/iimteresante/assets/images/Frases de cientifico/009_José Vasconcelos.png",
"/iimteresante/assets/images/Frases de cientifico/010_Iris Murdoch.png",
"/iimteresante/assets/images/Frases de cientifico/011_Ángela Ruiz Robles.png",
"/iimteresante/assets/images/Frases de cientifico/012_Bill Bryson.png",
"/iimteresante/assets/images/Frases de cientifico/013_Fred Hoyle.png",
"/iimteresante/assets/images/Frases de cientifico/014_Demócrito.png",
"/iimteresante/assets/images/Frases de cientifico/015_Max Born.png",
"/iimteresante/assets/images/Frases de cientifico/016_Niels Bohr.png",
"/iimteresante/assets/images/Frases de cientifico/017_Terry Pratchett.png",
"/iimteresante/assets/images/Frases de cientifico/018_Albert Einstein.png",
"/iimteresante/assets/images/Frases de cientifico/019_Sir William Bragg.png",
"/iimteresante/assets/images/Frases de cientifico/020_Woody Allen.png",
"/iimteresante/assets/images/Frases de cientifico/021_Protágoras.png",
"/iimteresante/assets/images/Frases de cientifico/022_Kofi Annan.png",
"/iimteresante/assets/images/Frases de cientifico/023_C. Watson.png",
"/iimteresante/assets/images/Frases de cientifico/024_Stephen Hawking.png",
"/iimteresante/assets/images/Frases de cientifico/025_Michael S. Turner.png",
"/iimteresante/assets/images/Frases de cientifico/026_Sir William Bragg.png",
"/iimteresante/assets/images/Frases de cientifico/027_Carl Sagan.png",
"/iimteresante/assets/images/Frases de cientifico/028_Albert Einstein.png",
"/iimteresante/assets/images/Frases de cientifico/029_Carl Sagan.png",
"/iimteresante/assets/images/Frases de cientifico/030_Albert Einstein.png",
"/iimteresante/assets/images/Frases de cientifico/031_Galileo Galilei.png",
"/iimteresante/assets/images/Frases de cientifico/032_Francis Bacon.png",
"/iimteresante/assets/images/Frases de cientifico/033_Max Born.png",
"/iimteresante/assets/images/Frases de cientifico/034_Georg Cantor.png",
"/iimteresante/assets/images/Frases de cientifico/035_Werner Heisenberg.png",
"/iimteresante/assets/images/Frases de cientifico/036_Sofía Kovalévskaya.png",
"/iimteresante/assets/images/Frases de cientifico/037_Bertrand Russell.png",
"/iimteresante/assets/images/Frases de cientifico/038_David Hilbert.png",
"/iimteresante/assets/images/Frases de cientifico/039_Carl Gauss.png",
"/iimteresante/assets/images/Frases de cientifico/040_Werner Heisenberg.png",
"/iimteresante/assets/images/Frases de cientifico/041_René Descartes.png",
"/iimteresante/assets/images/Frases de cientifico/042_Pierre-Simon Laplace.png",
"/iimteresante/assets/images/Frases de cientifico/043_Robert Recorde.png",
"/iimteresante/assets/images/Frases de cientifico/044_Hans Bethe.png",
"/iimteresante/assets/images/Frases de cientifico/045_Albert Einstein.png",
"/iimteresante/assets/images/Frases de cientifico/046_René Descartes.png",
"/iimteresante/assets/images/Frases de cientifico/047_Albert Einstein.png",
"/iimteresante/assets/images/Frases de cientifico/048_Charles Babbage.png",
"/iimteresante/assets/images/Frases de cientifico/049_Pierre-Simon Laplace.png",
"/iimteresante/assets/images/Frases de cientifico/050_Paul Dirac.png",
"/iimteresante/assets/images/Frases de cientifico/051_David Bohm.png",
"/iimteresante/assets/images/Frases de cientifico/052_Steven Wright.png",
"/iimteresante/assets/images/Frases de cientifico/053_Werner von Braun.png",
"/iimteresante/assets/images/Frases de cientifico/054_Alan Turing.png",
"/iimteresante/assets/images/Frases de cientifico/055_Sophie Germain.png",
"/iimteresante/assets/images/Frases de cientifico/056_Andreas Knauf.png",
"/iimteresante/assets/images/Frases de cientifico/057_Henri Lebesgue.png",
"/iimteresante/assets/images/Frases de cientifico/058_Gottlob Frege.png",
"/iimteresante/assets/images/Frases de cientifico/059_Augustin Fresnel.png",
"/iimteresante/assets/images/Frases de cientifico/060_Pitágoras.png",
"/iimteresante/assets/images/Frases de cientifico/061_Blaise Pascal.png",
"/iimteresante/assets/images/Frases de cientifico/062_Subrahmanyan Chandrasekhar.png",
"/iimteresante/assets/images/Frases de cientifico/063_Blaise Pascal (2).png",
"/iimteresante/assets/images/Frases de cientifico/064_Jacob Bernoulli.png",
"/iimteresante/assets/images/Frases de cientifico/065_Leonhard Euler (1).png",
"/iimteresante/assets/images/Frases de cientifico/066_Joyce Carol Oates.png",
"/iimteresante/assets/images/Frases de cientifico/067_Leonhard Euler (2).png",
"/iimteresante/assets/images/Frases de cientifico/068_David Percy.png",
"/iimteresante/assets/images/Frases de cientifico/069_Ernest Rutherford.png",
"/iimteresante/assets/images/Frases de cientifico/070_Paul Dirac.png",
"/iimteresante/assets/images/Frases de cientifico/071_Ernest Rutherford.png",
"/iimteresante/assets/images/Frases de cientifico/072_Jean d_Alembert.png",
"/iimteresante/assets/images/Frases de cientifico/073_Gottfried Leibniz.png",
"/iimteresante/assets/images/Frases de cientifico/074_Niels Bohr.png",
"/iimteresante/assets/images/Frases de cientifico/075_Enrico Fermi.png",
"/iimteresante/assets/images/Frases de cientifico/076_Niels Bohr.png",
"/iimteresante/assets/images/Frases de cientifico/077_Václav Havel.png",
"/iimteresante/assets/images/Frases de cientifico/078_G. H. Gardy.png",
"/iimteresante/assets/images/Frases de cientifico/079_Alan Guth.png",
"/iimteresante/assets/images/Frases de cientifico/080_Isaac Asimov.png"
];

document.addEventListener("DOMContentLoaded", () => {

            // Elige una imagen aleatoria
            const randomIndex = Math.floor(Math.random() * imageLinks.length);
            const randomImageSrc = imageLinks[randomIndex];
            // Muestra la imagen en el contenedor
            const randomImage = document.getElementById('randomImage');
            
            randomImage.src = randomImageSrc;

});
