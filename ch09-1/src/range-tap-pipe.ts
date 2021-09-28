import * as R from "ramda"

const numbers: number[] = R.range(1, 10)
const log = (n: number[]) => console.log(n)

R.pipe(
    R.tap(console.log)
)(numbers)


const inc = (n:number): number => {
    return R.add(1)(n)
}