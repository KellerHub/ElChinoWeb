const fecha = new Date();
const semana = new Date().getDay();
const mes = new Date().getMonth();

document.getElementById("day").innerHTML = fecha.getDate();
document.getElementById("year").innerHTML = fecha.getFullYear();

//Obtenemos la ID de la etiqueta que queremos que se sobreescriba
const week = document.getElementById("week");
const month = document.getElementById("month");

// segun el dia de la semana y del mes, mostramos un mensaje diferente
switch (semana) {
    case 0:
        week.innerHTML = ("Domingo");
        break;
    case 1:
        week.innerHTML = ("Lunes");
        break;
    case 2:
        week.innerHTML = ("Martes");
        break;
    case 3:
        week.innerHTML = ("Miércoles");
        break;
    case 4:
        week.innerHTML = ("Jueves");
        break;
    case 5:
        week.innerHTML = ("Viernes");
        break;
    case 6:
        week.innerHTML = ("Sábado");
        break;
}

switch (mes) {
    case 0:
        month.innerHTML = ("Enero");
        break;
    case 1:
        month.innerHTML = ("Febrero");
        break;
    case 2:
        month.innerHTML = ("Marzo");
        break;
    case 3:
        month.innerHTML = ("Abril");
        break;
    case 4:
        month.innerHTML = ("Mayo");
        break;
    case 5:
        month.innerHTML = ("Junio");
        break;
    case 6:
        month.innerHTML = ("Julio");
        break;
    case 7:
        month.innerHTML = ("Agosto");
        break;
    case 8:
        month.innerHTML = ("Septiembre");
        break;
    case 9:
        month.innerHTML = ("Octubre");
        break;
    case 10:
        month.innerHTML = ("Noviembre");
        break;
    case 11:
        month.innerHTML = ("Diciembre");
        break;
}