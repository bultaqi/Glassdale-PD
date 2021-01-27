import { individualOfficer } from './Officer.js'
import { getOfficers, useOfficers } from './OfficerProvider.js'

let officerContainer = document.querySelector('#the-box')

export const officerList = () => {
    getOfficers().then(() => {
    
        let officers = useOfficers();
        let officerStringContainer = ''

        for (const officer of officers) {
            officerStringContainer += individualOfficer(officer)
        }
        officerContainer.innerHTML = `
        <h2>Officers</h2>
        <div class="flex-container">${officerStringContainer}</div>`
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    officerList()
})