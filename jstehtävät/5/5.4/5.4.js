async function fetchData() {
    try {
        const user = {
            name: 'John Doe',
            job: 'Developer'
        };
        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchData();