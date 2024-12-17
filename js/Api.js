
async function postDataToBackend(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
        return { error: 'Error posting data to backend' };
    }
}

async function putDataToBackend(url, data) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error updating data:', error);
        return { error: 'Error updating data in backend' };
    }
}

async function deleteData(url) {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error deleting data:', error);
        return { error: 'Error deleting data in backend' };
    }
}

async function getDataFromBackend(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('backendResponse').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('backendResponse').innerText = 'Error fetching data from backend';
    }
}

document.getElementById('postDataForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const postData = document.getElementById('postDataInput').value;
    const backendURL = 'http://localhost:8080/Quote/add'; // Replace with actual backend URL
    const responseData = await postDataToBackend(backendURL, { data: postData });

    document.getElementById('backendResponse').innerText = JSON.stringify(responseData);
});

document.getElementById('putDataForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const putData = document.getElementById('putDataInput').value;
    const backendURL = 'http://localhost:8080/Quote'; // Replace with actual backend URL
    const responseData = await putDataToBackend(backendURL, { data: putData });

    document.getElementById('backendResponse').innerText = JSON.stringify(responseData);
});

async function deleteData(url) {
    try {
        const backendURL = 'http://localhost:8080/Quote'; // Replace with actual backend URL
        const responseData = await deleteData(backendURL);

        document.getElementById('backendResponse').innerText = JSON.stringify(responseData);
    } catch (error) {
        console.error('Error deleting data:', error);
        document.getElementById('backendResponse').innerText = 'Error deleting data from backend';
    }
}

async function getDataFromBackend() {
    try {
        const backendURL = 'http://localhost:8080/Quote'; // Replace with actual backend URL
        const response = await fetch(backendURL);
        const data = await response.json();
        document.getElementById('backendResponse').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('backendResponse').innerText = 'Error fetching data from backend';
    }
}
