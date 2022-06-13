
function mainFunction() {

const userName = prompt("Insert here your name");

const userSurname = prompt("Insert here your surname");

let userBirthYear = prompt("Insert here your birth year");
userBirthYear = parseInt(userBirthYear);

let userFavouriteColor = prompt("Insert here your favourite color");

let currentYear = new Date().getFullYear();



document.getElementById("ideal-password").innerHTML = userName + userSurname + userBirthYear + userFavouriteColor + currentYear
}


