// Importing exported functions from other js files.
import { individualCriminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalProvider.js'

// Creating a storage container to catch the function results and targert my html.
let criminalContainer = document.querySelector('.criminal-list')

// This function is taking the imported data and processing it for the final product to be placed in the html.
export const criminalList = () => {
    // The function is invoked to fetch the API and told to "then" store that data.
    getCriminals().then(() => {
        // A copy of the data is invoked and caught in a variable.
        let criminals = useCriminals();
        // A variable is assigned to an empty string, so it can act as container for what we produce.
        let criminalStringContainer = ''
        document.getElementById("criminal-head").innerHTML = 'Criminals';
        
        // The loop, loops through each of the objects in the array (otherwise known as the data we fetced & caught).
        for (const criminal of criminals) {
            criminalStringContainer += individualCriminal(criminal)
        }

        // That empty string, now filled with information is declared, and placed into the target.
        criminalContainer.innerHTML = criminalStringContainer

    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    criminalList()
})

