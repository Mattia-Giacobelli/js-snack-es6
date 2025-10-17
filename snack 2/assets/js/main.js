console.log('It works');

/*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli
subiti”.Infine, creiamo un nuovo array i cui elementi contengono solo nomi e 
falli subiti e stampiamo tutto in console.
*/


//Create array of objects
//-every object has name, points and fouls
const soccerTeams = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    }
];


//Generate random numbers for points and fouls property
//-For in cycle to reassign property values
for (let key in soccerTeams) {
    soccerTeams[key].points = Math.floor(Math.random() * 100);
    soccerTeams[key].fouls = Math.floor(Math.random() * 50);
}
//Create a new array
//Push objects with names and generated fouls in the array