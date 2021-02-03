import { officerList } from './officers/OfficerList.js'
import { criminalList } from './criminals/CriminalList.js'
import { facilitiesList } from './facilities/FacilityList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
ConvictionSelect()
import { NoteForm } from './notes/NoteForm.js'
NoteForm()


import { } from './associates/AssociateList.js'



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



