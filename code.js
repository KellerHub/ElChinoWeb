let dia = new Date().getDay();

//Obtenemos la ID de la etiqueta que queremos que se sobreescriba con el dia
const day = document.getElementById("day");

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        day.textContent = ("¡Domingo de descanso! 😴");
        break;
    case 1:
        day.textContent = ("¡Volvio el lunes! 😢");
        break;
    case 2:
        day.textContent = ("¡Hoy es martes! 🥵");
        break;
    case 3:
        day.textContent = ("¡Hoy es miércoles! 🤓");
        break;
    case 4:
        day.textContent = ("¡Ya es jueves! 🚀");
        break;
    case 5:
        day.textContent = ("¡Por fin viernes! 🚀");
        break;
    case 6:
        day.textContent = ("¡Sábado de gira! 🚀");
        break;
}



//Se supone que esto hace que el menú desplegable quede totaalmente anclaado al botón de "Productos"
window.addEventListener('load', () => {
    const spbutton = document.getElementById("spbutton");
    const ancla = document.getElementById("ancla");

    const rect = spbutton.getBoundingClientRect();

    ancla.style.position = 'absolute';
    ancla.style.top = `${rect.bottom + 15}px`;
    ancla.style.left = `${rect.left}px`;
});


//Queda todo como comentario para hacer pruebas

//    //Obtenemos la ID de imagen de portada y del boton
//    const imgportada = document.getElementById("portada");
//    const buttonportada = document.getElementById("buttonportada");
//    const buttonportada2 = document.getElementById("buttonportada2");
//
//    //Obtenemos el argumento de class (Siempre va a ser "portada1 portada")
//    let img1or2 = imgportada.getAttribute("class");
//
//    //Al hacer click en el boton, ejecutamos la funcion
//    buttonportada.addEventListener("click",(e)=>{
//    //Si la imagen es portada1, cambia a portada2 y reasigna la variable img1or2
//    if (img1or2 === "portada1 portada") {
//        imgportada.setAttribute("class","portada2 portada");
//        img1or2 = "portada2 portada"
//    }
//
//    //De lo contrario, hara lo mismo pero al revez
//    else {
//        imgportada.setAttribute("class","portada1 portada");
//        img1or2 = "portada1 portada"
//    }
//    });




document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.portada');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    document.getElementById('buttonprev').addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    document.getElementById('buttonnext').addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Initialize the slider
    showSlide(currentSlide);
});
