/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ferdinand Stanley Uchechukwu";
const currentYear = new Date ().getFullYear(); // 2024
const profilePicture = "images/ferdinand_stanley_uchechukwu.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is a web developer`);
nameElement.innerHTML = `<strong>${fullName}</strong>`;




/* Step 5 - Array */

let favfoods = ["pizza", "rice", "fish pepper soup", "chicken pie"];

foodElement.innerHTML = favfoods
let newfood = 'Garri and egusi soup'
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;




