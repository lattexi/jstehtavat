async function getData() {
    const url = 'https://reqres.in/api/unknown/23';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('GET error: ', error);
    }
}

async function postData() {
    const url = 'https://reqres.in/api/unknown/23';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'test' })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('POST error: ', error);
    }
}

async function putData() {
    const url = 'https://reqres.in/api/unknown/23';
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'test' })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('PUT error: ', error);
    }
}

async function deleteData() {
    const url = 'https://reqres.in/api/unknown/23';
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Resource deleted successfully');
    } catch (error) {
        console.error('DELETE error: ', error);
    }
}

getData();
postData();
putData();
deleteData();

// Only GET throws an error other methods are successful.