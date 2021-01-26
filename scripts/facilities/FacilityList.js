import { individualFacility } from './Facility.js'
import { getFacilities, useFacilities } from './facilityProvider.js'

let facilityContainer = document.querySelector('.facility-list')

export const facilitiesList = () => {
    getFacilities().then(() => {
    
        let facilities = useFacilities();
        let facilityStringContainer = ''

        document.getElementById("facility-head").innerHTML = 'Facilities';
        
        for (const facility of facilities) {
            facilityStringContainer += individualFacility(facility)
        }
        facilityContainer.innerHTML = facilityStringContainer
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    facilitiesList()
})
