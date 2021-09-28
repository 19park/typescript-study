export function makePerson(name: string, age: number) {
    return {
        name,
        age
    }
}
export function testMakePerson() {
    console.log(
        makePerson('Park', 22),
        makePerson('Jane', 23)
    )
}