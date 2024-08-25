'use strict'

const kohde = document.querySelector('#target')

const sivu1 = +prompt('Sivu 1')
const sivu2 = +prompt('Sivu 2')
const sivu3 = +prompt('Sivu 3')

if (sivu1 === sivu2 && sivu2 === sivu3) {
    kohde.innerHTML = 'Tasasivuinen'
} else if (sivu1 !== sivu2 && sivu1 !== sivu3 && sivu2 !== sivu3) {
    kohde.innerHTML = 'Epäsäännöllinen'
} else {
    kohde.innerHTML = 'Tasakylkinen'
}
