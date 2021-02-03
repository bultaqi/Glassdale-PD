// Eventually export a function that prints associates to  DOM

import { useCriminals } from "../criminals/CriminalProvider.js"

// Event listener for main container
document.querySelector("main").addEventListener("click", (eventObject) => {

    // Conditional to test if the thing they clicked on was the known associates button
    if(eventObject.target.id.includes("associates--")){

        // The id of the known associates button is "associates--id", so we split the id up and just steal the number at the end
        const idOfCriminalClicked = eventObject.target.id.split("--").pop()

        // Now we have to use that number to find the correct criminal from our collection

        // Get all the criminals
        const allTheCriminals = useCriminals()

        // Find the criminal that matches the id of the one we clicked on
        const matchingCriminal = allTheCriminals.find((singleCriminalInLoop) => {
            return singleCriminalInLoop.id === +idOfCriminalClicked
        })

        // console.log("this should be the matching criminal's associates", matchingCriminal.known_associates)

        document.querySelector("#the-box").innerHTML = ""
        
        for(let i = 0; i < matchingCriminal.known_associates.length; i++){
            document.querySelector("#the-box").innerHTML += `
            <p>${matchingCriminal.known_associates[i].name}</p>
            <p>${matchingCriminal.known_associates[i].alibi}</p>
            `
        }
    }
})