import { officerList } from './officers/OfficerList.js'
import { criminalList } from './criminals/CriminalList.js'
import { facilitiesList } from './facilities/FacilityList.js'
import { getWitnessStatements, useWitnessStatements } from './witnesses/WitnessStatementProvider.js'
getWitnessStatements()
useWitnessStatements()



const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function() {
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
})




