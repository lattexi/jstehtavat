'use strict';
import { restaurantModal, restaurantRow } from './components.js';
import { fetchData } from './fetchData.js';

const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');

closeModal.addEventListener('click', () => {
  modaali.close();
});

const apiURL = 'https://media1.edu.metropolia.fi/restaurant';

const haeRavintolat = async () => {
  try {
    const restaurants = await fetchData(apiURL + '/api/v1/restaurants');
    return restaurants;
  } catch (error) {
    kohde.textContent = 'Virhe haettaessa ravintoloita';
    console.error('Virhe haettaessa ravintoloita', error);
  }
};

const teeRavintolaLista = async (restaurants) => {

  const sodexoBTN = document.querySelector('#sodexo-btn');
  sodexoBTN.addEventListener('click', () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.company === 'Sodexo';
    });
    kohde.innerHTML = '';
    teeRavintolaLista(filteredRestaurants);
  });



  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  restaurants.forEach((restaurant) => {
    if (restaurant) {
      const { _id } = restaurant;

      // ravintolan HTML rivi
      const rivi = restaurantRow(restaurant);

      rivi.addEventListener('click', async () => {
        const korostetut = document.querySelectorAll('.highlight');
        korostetut.forEach((korostettu) => {
          korostettu.classList.remove('highlight');
        });

        rivi.classList.add('highlight');
        // hae päivän ruokalista
        try {
          const paivanLista = await fetchData(
            apiURL + `/api/v1/restaurants/daily/${_id}/fi`
          );
        } catch (error) {
          info.textContent = 'Virhe haettaessa päivän ruokalistaa';
          console.error('Virhe haettaessa päivän ruokalistaa', error);
        }

        console.log('päivan lista', paivanLista.courses);
        // tulosta päivän ruokalista
        const ravintolaHTML = restaurantModal(restaurant, paivanLista.courses);
        info.innerHTML = '';
        info.insertAdjacentHTML('beforeend', ravintolaHTML);

        modaali.showModal();
      });

      kohde.append(rivi);
    }
  });
};

const raflat = await haeRavintolat();
teeRavintolaLista(raflat);