import IPerson from './person/IPerson'
import Person from './person/Person'
const Chance = require('chance')
import * as R from 'ramda'

// const testMakePerson = (): void => {
//     let jane: IPerson = makePerson('Jane')
//     let jack: IPerson = makePerson('Jack')
//     console.log(jane, jack)
// }

// testMakePerson();

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2).map((n: number) => {
    return new Person(chance.name(), chance.age())
})

console.log(persons)
