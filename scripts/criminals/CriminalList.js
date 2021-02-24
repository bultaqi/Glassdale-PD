import { getCriminalFacilities, useCriminalFacilities } from '../facilities/criminalFacilityProvider.js';
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js';
import { individualCriminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js'


export const criminalList = () => {
    getCriminals()
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
        
        const facilities = useFacilities()
        const criminals = useCriminals()
        const crimFac = useCriminalFacilities()
        
        render(criminals, facilities, crimFac) 
    })
}

let contentTarget = document.querySelector("#the-box")

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            
            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return individualCriminal(criminalObject, facilities)
        }
    ).join("")
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    criminalList()
})

