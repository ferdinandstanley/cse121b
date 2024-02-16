/* LESSON 3 - Programming Tasks */

// Declare and instantiate an object literal variable named myProfile
let myProfile = {};

/* Profile Object  */

// Creating myProfile object
myProfile.name = "Ferdinand Stanley Uchechukwu";
myProfile.photo = "images/ferdinand_stanley_uchechukwu.jpg";
myProfile.favoriteFoods = ["Rice & Stew", "Okro soup", "Sharwarma", "Fried eggs & Plantain"]; 
myProfile.hobbies = ["Writing", "Story telling", "Acting"]; 
myProfile.placesLived = []; // Initialize an empty array


/* Populate Profile Object with placesLive objects */
// placesLived array
myProfile.placesLived.push({ place: "Port Harcourt, Nigeria", length: "15 years" });
myProfile.placesLived.push({ place: "Abia State, Nigeria", length: "13 years" });
myProfile.placesLived.push({ place: "Akwa Ibom State, Nigeria", length: "1 year" });
myProfile.placesLived.push({ place: "Cross River State, Nigeria", length: "1 years" });
myProfile.placesLived.push({ place: "Lagos State, Nigeria", length: "Current Resident" });


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById("photo");
photoElement.setAttribute("src", myProfile.photo);
photoElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
let hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;

    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;

    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
});











