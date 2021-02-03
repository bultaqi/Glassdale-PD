import { getConvictions, useConvictions } from "./ConvictionProvider.js"
import { criminalList } from '../criminals/CriminalList.js'
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { individualCriminal } from "../criminals/Criminal.js"

const contentTarget = document.querySelector("#filters__crime");

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        const convictions = useConvictions()
        render(convictions);
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map((currentConvictionInLoop) => {
                const crimeName = currentConvictionInLoop.name
                return `<option>${crimeName}</option>`
                })}
        </select>`;
};

const eventHub = document.querySelector('main');
eventHub.addEventListener("change", (eventObject) => {
    // console.log("This is target.id", eventObject.target.id)
    getCriminals().then(() => {
        const criminals = useCriminals()
        let buildHTML =  ""
        for(let criminal of criminals) {
            if(eventObject.target.value === criminal.conviction){
               // const crimeChosen = eventObject.target.value
               buildHTML  += individualCriminal(criminal)
            }
        }

        if(eventObject.target.value === "0"){
            criminalList()
        }
        else {
        document.querySelector('#the-box').innerHTML =  `
        <h2>Criminals</h2>
        <div class="flex-container">${buildHTML}</div>`
        }
        
    })
    }
);
