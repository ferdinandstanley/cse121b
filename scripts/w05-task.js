/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = temples => {
    temples.forEach(temple => {
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTempleData = function(templeList, filter) {
    switch(filter) {
        case 'utah':
            return templeList.filter(temple => temple.location.includes('Utah'));
        case 'nonutah':
            return templeList.filter(temple => !temple.location.includes('Utah'));
        case 'older':
            return templeList.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        case 'all':
        default:
            return templeList;
    }
};

window.onload = () => {
    getTemples();
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    const selectedFilter = document.getElementById("filtered").value;
    const filteredTemples = filterTempleData(templeList, selectedFilter);
    reset();
    displayTemples(filteredTemples);
});