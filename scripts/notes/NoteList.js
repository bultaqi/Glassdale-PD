

export function ContactList(){
    getContact()
    .then(() => {
        const allTheContacts = copyOfContacts()

        // This is an element we added!
        const contentTarget = document.querySelector("#contacts")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop
        
        contentTarget.innerHTML = allTheContacts.map(singleContact => Contacts(singleContact))
    })
}