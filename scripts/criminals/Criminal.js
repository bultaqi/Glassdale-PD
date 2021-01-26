export function individualCriminal(criminalObject) {
    return `
        <section class="criminal-card">
            <p>${criminalObject.name}</p>
            <p>${criminalObject.age}</p>
            <p>${criminalObject.conviction}</p>
            <p>${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
        </section>
`
}