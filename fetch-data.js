// Initialize the Async Function:
async function fetchUserData() {
    // Code for fetching and displaying data will go here
}

// Define the API URL:
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data

    // Code for fetching and displaying data will go here
}

// Select the Data Container Element:

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display API data

    // Code for fetching and displaying data will go here
}

// Fetch Data Using try-catch:
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display API data

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        // Code to display the data will go here

    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// Clear the Loading Message:

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display API data

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        const userList = document.createElement('ul'); // Create a <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to userList
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// Error Handling:
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display API data

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        const userList = document.createElement('ul'); // Create a <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to userList
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
        console.error('Error fetching data:', error); // Log the error
    }
}

// Invoke fetchUserData on DOMContentLoaded:

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData(); // Invoke fetchUserData when the document is fully loaded
});

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Select the element to display API data

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON

        const userList = document.createElement('ul'); // Create a <ul> element

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a <li> element
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to userList
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer

    } catch (error) {
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Set error message
        console.error('Error fetching data:', error); // Log the error
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData(); // Invoke fetchUserData when the document is fully loaded
});s