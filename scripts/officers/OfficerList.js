import { individualOfficer } from './Officer.js'
import { getOfficers, useOfficers } from './OfficerProvider.js'

let officerContainer = document.querySelector('.officer-list')

export const officerList = () => {
    getOfficers().then(() => {
    
        let officers = useOfficers();
        let officerStringContainer = ''
        
        document.getElementById("officer-head").innerHTML = 'Officers';

        for (const officer of officers) {
            officerStringContainer += individualOfficer(officer)
        }
        officerContainer.innerHTML = officerStringContainer
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
})