let dia = new Date().getDay();

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        alert("¡Domingo de descanso! 😴");
        break;
    case 1:
        alert("¡Volvio el lunes! 😢");
        break;
    case 2:
        alert("¡Hoy es martes! 🥵");
        break;
    case 3:
        alert("¡Hoy es miércoles! 🤓");
        break;
    case 4:
        alert("¡Ya es Jueves! 🚀");
        break;
    case 5:
        alert("¡Por fin Viernes! 🚀");
        break;
    case 6:
        alert("¡Sábado de gira! 🚀");
        break;
}