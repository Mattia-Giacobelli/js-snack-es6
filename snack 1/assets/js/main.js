console.log('It works');


/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/


//Create an array of objects (bicycles)
const bicycles = [
    {
        name: 'Bianchi',
        weight: 7
    },
    {
        name: 'Pinarello',
        weight: 6
    },
    {
        name: 'Specialized',
        weight: 8
    },
    {
        name: 'Trek',
        weight: 5
    }
];


//Take the lower weight one
let lowerWeight = Math.min(...bicycles.map(item => item.weight))
console.log(lowerWeight);


function getBicycleByWeight(array, bicycleWeight) {

    for (let i = 0; i < array.length; i++) {
        const weight = array[i].weight;
        
        if (weight === bicycleWeight) {
            return array[i].name
        }

    }
}
let lowerWeightBicycle = getBicycleByWeight(bicycles, lowerWeight)
console.log(lowerWeightBicycle);

//Stamp the one that has the lower weight

const bicycleEl = document.querySelector('h1')

