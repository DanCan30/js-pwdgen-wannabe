
function mainFunction() {

const userName = prompt("Insert here your name");

const userSurname = prompt("Insert here your surname");

const userBirthYear = prompt("Insert here your birth year");

let userFavouriteColor = prompt("Insert here your favourite color");

let currentYear = new Date().getFullYear();
currentYear = currentYear.toString();

document.getElementById("ideal-password").innerHTML = userName + userSurname + userBirthYear + userFavouriteColor + currentYear;

console.log(typeof userName, userSurname, userBirthYear, userFavouriteColor, currentYear)

document.getElementById("team-sunglasses").style.display = "block";
document.getElementById("team-deal").style.display = "block";
}

