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

// Function to reset chapel list
const reset = () => {
    const chapelListContainer = document.getElementById('chapelList');
    chapelListContainer.innerHTML = ''; // Clear previous data
};

// Function to display chapel list based on filters
const displayChapels = async () => {
    const locationFilter = document.getElementById('locationFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const chapelListContainer = document.getElementById('chapelList');
    reset(); // Reset chapel list before displaying filtered chapels

    const chapelsData = await fetchData(); // Fetch chapel data
    let filteredChapels = chapelsData; // Initialize filtered chapels with all chapels

    // Apply location filter
    if (locationFilter !== 'all') {
        filteredChapels = chapelsData.filter(chapel => chapel.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    // Apply year filter
    if (yearFilter !== 'all') {
        filteredChapels = filteredChapels.filter(chapel => new Date(chapel.dedicationDate).getFullYear() === parseInt(yearFilter));
    }

    // Sort filtered chapels alphabetically by templeName
    filteredChapels.sort((a, b) => a.templeName.localeCompare(b.templeName));

    // Display filtered chapels
    filteredChapels.forEach(chapel => {
        const chapelCard = document.createElement('div');
        chapelCard.classList.add('chapel-card');

        const chapelName = document.createElement('h2');
        chapelName.textContent = chapel.templeName;

        const chapelLocation = document.createElement('p');
        chapelLocation.textContent = `Location: ${chapel.location}`;

        const chapelImage = document.createElement('img');
        chapelImage.src = chapel.imageUrl;
        chapelImage.alt = chapel.templeName;

        chapelCard.appendChild(chapelName);
        chapelCard.appendChild(chapelLocation);
        chapelCard.appendChild(chapelImage);

        chapelListContainer.appendChild(chapelCard);
    });
};

// Add event listener to apply filters button
document.getElementById('applyFilters').addEventListener('click', displayChapels);

// Initial call to display chapels when the page loads
window.onload = displayChapels;