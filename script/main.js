

    //Create a function that will start when user clicks on the start button

document.getElementById("start-button").onclick = function mainFunction() {

const userName = prompt("Insert here your name");   //Initialize a variable valued by a prompt where the user will insert his name

const userSurname = prompt("Insert here your surname");    //Initialize a variable valued by a prompt where the user will insert his surname

const userBirthYear = prompt("Insert here your birth year");    //Initialize a variable valued by a prompt where the user will insert his birth year

let userFavouriteColor = prompt("Insert here your favourite color");    //Initialize a variable valued by a prompt where the user will insert his favourite color

let currentYear = new Date().getFullYear();    // Declare a variable and create a new object called Date which is composed by current day, month, year, hour, minute and second
                                               // and use the instance ".getFullYear" to pick only the value of the year and valorize the variable
currentYear = currentYear.toString();   // Change the variable type from number to string

document.getElementById("ideal-password").innerHTML = userName + userSurname + userBirthYear + userFavouriteColor + currentYear;    //Print all the variables in an HTML element choosen via ID


    //Manage the appearing of HTML elements changind their CSS property

document.getElementById("team-sunglasses").style.display = "block";
document.getElementById("team-deal").style.display = "block";
}
