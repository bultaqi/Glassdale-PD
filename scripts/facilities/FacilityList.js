import { individualFacility } from './Facility.js'
import { getFacilities, useFacilities } from './facilityProvider.js'

let facilityContainer = document.querySelector('#the-box')

export const facilitiesList = () => {
    getFacilities().then(() => {
    
        let facilities = useFacilities();
        let facilityStringContainer = ''
        
        for (const facility of facilities) {
            facilityStringContainer += individualFacility(facility)
        }
        facilityContainer.innerHTML = `
        <h2>Facilities</h2>
        <div class="flex-container">${facilityStringContainer}</div>`
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    facilitiesList()
})

