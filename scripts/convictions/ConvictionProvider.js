let listOfCrimes = []

export const useConvictions = () => listOfCrimes.slice()


export const getConvictions = () => {
    return fetch('https://criminals.glassdale.us/crimes')
        .then(response => response.json())
        .then(listOfCrimeData => {
            listOfCrimes = listOfCrimeData
        }
    )
};