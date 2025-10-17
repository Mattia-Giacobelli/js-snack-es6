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
//let lowerWeight = Math.min(...bicycles.map(item => item.weight))
// console.log(lowerWeight);
let bicycleLight = bicycles[0]
for (let i = 0; i  < bicycles.length; i ++) {
    const bicycle = bicycles[i];
    
    if (bicycle.weight < bicycleLight.weight) {
        bicycleLight = bicycle
    }
}
console.log(bicycleLight);


//Stamp the one that has the lower weight

const bicycleEl = document.querySelector('h1')

bicycleEl.innerHTML = `${bicycleLight.name} is the lighter`