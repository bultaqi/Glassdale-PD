import { saveNote } from './NoteDataProvider.js'

document.querySelector('#notes-nav-link').addEventListener('click', (clickEvent) => {
    console.log(clickEvent.target)
})

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = `
    
            <input type="text" id="note-text">
            <input type="date" id="date-field">
            <input type="text" id="suspect-text">  
            <button id="saveNote">Save Note</button>
        `
}

// Handle browser-generated click event in component
const eventHub = document.querySelector('.noteFormContainer')
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        let noteText = document.querySelector('#note-text')
        console.log(noteText)
        let dateOfNote = document.querySelector('#date-field')
        console.log(dateOfNote)
        let suspect = document.querySelector('#suspect-text')
        console.log(suspect)

        const newNote = {
            // Key/value pairs here
            noteText: noteText.value,
            dateOfNote: dateOfNote.value,
            suspect: suspect.value,
        }

        console.log(newNote)
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})