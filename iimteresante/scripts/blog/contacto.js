/*Este codigo es del FOOTER
Usa un event Listener de la seccion footer*/

const contactoGenerator = `
<h2 class="titulo">CONTACTO</h2>
        <div class="contenedores">
            <div class="contenedor contactoLeft">
                <div class="fila">
                    <div class="circulo">
                        <a href="https://www.facebook.com/iimunam/?ref=br_rs" target="_blank">
                            <img src="/iimteresante/assets/images/facebook-02.svg">
                        </a>
                    </div>
                    <div class="circulo">
                        <a href="https://www.tiktok.com/@vinculacioniim?is_from_webapp=1&sender_device=pc" target="_blank">
                            <img src="/iimteresante/assets/images/logo-tiktok-svgrepo-com.svg">
                        </a>
                    </div>
                    <div class="circulo">
                        <a href="https://www.youtube.com/@vinculacioniim" target="_blank">
                            <img src="/iimteresante/assets/images/youtube-02.svg">
                        </a>
                    </div>
                    <div class="circulo">
                        <a href="https://www.linkedin.com/company/instituto-de-investigaciones-en-materiales/"
                            target="_blank">
                            <img src="/iimteresante/assets/images/linkedin-02.svg">
                        </a>
                    </div>
                    <div class="circulo">
                        <a href="https://www.instagram.com/vinculacioniim"
                            target="_blank">
                            <img src="/iimteresante/assets/images/instagram_black_logo_icon_147122.svg">
                        </a>
                    </div>
                </div>
                <img src="/iimteresante/assets/images/Logo Instituto-01.png" alt="Contacto" />
                <!--
                <div class="fila">
                    <input type="text" placeholder="Nombre">
                </div>
                <div class="fila">
                    <input type="email" placeholder="Correo">
                </div>
                <div class="fila">
                    <textarea class="contactoTextarea" placeholder="Mensaje"></textarea>
                </div>
                <div class="fila">
                    <button class="buttonContacto">Enviar</button>
                </div>-->
            </div>
            <div class="linea"></div>
            <div class="contenedor contactoRight">
                <div class="fila">
                    <p>
                        IIMteresante
                        </br>
                        Coordinación de Comunicación y Divulgación Científica
                        </br></br>Secretaría de Vinculación
                        </br>
                        Instituto de Investigaciones en Materiales
                        </br>UNAM
                    </p>
                </div>
                <div class="fila">
                    <p>
                        Circuito Exterior S/N Circuito de la,</br> Investigación Científica, Ciudad Universitaria, 04510,
                        CDMX
                    </p>
                </div>
                <div class="fila">
                    <p class="nombres">
                        M. en C. Julieta Reyes Arango
                        <br>
                        Coordinadora de Comunicación y Divulgación Científica
                        <br></br>
                        Dra. Rocío de la Torre Sánchez
                        <br>
                        Secretaria de Vinculación
                    </p>
                </div>
                <div class="fila">
                    <p>
                        Email: <a class="mailto" href="mailto:iimteresante@materiales.unam.mx" target="_blank">iimteresante@materiales.unam.mx</a>
                    </p>
                </div>
                <div class="fila">
                    <p>
                        Tel. (55) 56 22 45 81
                    </p>
                </div>
                
            </div>
        </div>
        <p class="copy-right">Instituto de Investigaciones en Materiales © 2024</h2>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = contactoGenerator;
});