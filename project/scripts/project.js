// Fetch data from the JSON API
const fetchData = async () => {
    try {
        const response = await fetch('https://ferdinandstanley.github.io/cse121b/cse121b-project-chapel.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Function to display chapel list based on location filter
const displayChapels = async () => {
    const locationFilter = document.getElementById('locationFilter').value;
    const chapelListContainer = document.getElementById('chapelList');
    chapelListContainer.innerHTML = ''; // Clear previous data

    const chapelsData = await fetchData();
    const filteredChapels = locationFilter === 'all' ? chapelsData : chapelsData.filter(chapel => chapel.location === locationFilter);

    filteredChapels.forEach(chapel => {
        const chapelCard = document.createElement('div');
        chapelCard.classList.add('chapel-card');

        const chapelName = document.createElement('h2');
        chapelName.textContent = chapel.name;

        const chapelLocation = document.createElement('p');
        chapelLocation.textContent = `Location: ${chapel.location}`;

        const chapelImage = document.createElement('img');
        chapelImage.src = chapel.imageUrl;
        chapelImage.alt = chapel.name;

        chapelCard.appendChild(chapelName);
        chapelCard.appendChild(chapelLocation);
        chapelCard.appendChild(chapelImage);

        chapelListContainer.appendChild(chapelCard);
    });
};

/* filterChapels Function */
const filterChapels = chapels => {
    reset();
    const filter = document.getElementById("filtered").value;

    switch(filter) {
        case 'aba':
            displayChapels(chapels.filter(chapel => chapel.location.includes('aba')));
            break;
        case 'abuja':
            displayChapels(chapels.filter(chapel => !chapel.location.includes('abuja')));
            break;
        case 'older':
            displayChapels(chapels.filter(chapel => new Date(chapel.dedicatedDate) < new Date(2000, 0, 1)));
            break;
        case 'all':
        default:
            displayChapels(chapels);
            break;
    }
};

window.onload = () => {
    getChapels();
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterChapels(chapelList);
});
