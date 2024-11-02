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