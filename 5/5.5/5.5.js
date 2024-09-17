'use strict';

const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener('click', function () {
    modaali.close();
});

const apiURL = 'https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants';

async function getRestaurants() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

async function getRestaurantMenu(id) {
    try {
        const response = await fetch(`${apiURL}/daily/:${id}/:fi`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

async function main() {
    const restaurants = await getRestaurants();
    const menu = await getRestaurantMenu(id);

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    for (const restaurant of restaurants) {
        if (restaurant) {
            const nimi = document.createElement('td');
            nimi.innerText = restaurant.name;

            const osoite = document.createElement('td');
            osoite.innerText = restaurant.address;

            const rivi = document.createElement('tr');

            rivi.addEventListener('click', function () {
                const korostetut = document.querySelectorAll('.highlight');
                for (const korostettu of korostetut) {
                    korostettu.classList.remove('highlight');
                }

                rivi.classList.add('highlight');
                modaali.showModal();
                const ravintolaHTML = `
            <header>
              <h3>${restaurant.name}</h3>
              <p>${restaurant.company}</p>
            </header>
            <address>
              ${restaurant.address}<br>
              ${restaurant.postalCode} ${restaurant.city}<br>
              ${restaurant.phone}<br>
            </address>
          `;
                info.innerHTML = '';
                info.insertAdjacentHTML('beforeend', ravintolaHTML);
            });

            rivi.append(nimi, osoite);
            kohde.append(rivi);
        }
    }
}

main();
