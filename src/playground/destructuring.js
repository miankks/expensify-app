// const person = {
//     name: 'Mian',
//     age: '35',
//     location: {
//         city: 'Stockholm',
//         temp: '22'
//     }
// }

// const {name: firsName = 'Anonymous', age} = person;
// console.log(`${firsName} is ${age}`);

// const { city, temp: temprature} = person.location;
// console.log(`It is ${temprature} in ${city}`)

const address = [ '1299 S Juniper Street', 'Sigtuna', 'Stockhol', '19565' ]

const coffee = ['Coffee (hot)', '2.00', '2.50', '2.75']
const [coffe, , cost] = coffee

console.log(`A medium ${coffe} costs ${cost}`)