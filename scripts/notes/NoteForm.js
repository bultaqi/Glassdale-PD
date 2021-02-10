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


export function NoteList(){
    getNotes()
    .then(() => {
        const allTheNotes = useNotes()

        // This is an element we added!
        const contentTarget = document.querySelector(".noteListContainer")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop
        contentTarget.innerHTML = allTheNotes.map(singleNote => Note(singleNote))
    })
}