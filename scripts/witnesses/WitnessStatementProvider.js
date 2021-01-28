let witnessStatements = []

export const useWitnessStatements = () => {
    // console.log(witnessStatements)
    return witnessStatements.slice()
}

export const getWitnessStatements = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
        .then(r => r.json())
        .then(statementsOfWitnesses => {
            witnessStatements = statementsOfWitnesses
        }
    )      
}


let statementContainer = document.querySelector('#the-box')

export const witnessStatementList = () => {
    getWitnessStatements().then(() => {

        let statements = useWitnessStatements()
        let statementStringContainer = ''

        for(const statement of statements) {
            statementStringContainer += `
            <div>
                <h3>${statement.name}</h3>
                <p>${statement.statements}</p>
            </div>`
        }
        statementContainer.innerHTML = `<h2>Witness Statements</h2>${statementStringContainer}`
    }
    )
}

document.querySelector("#witness-statements").addEventListener("click", () => {
    witnessStatementList()
})

