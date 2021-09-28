import * as R from "ramda"

const oa: number[] = [1, 2, 3]
const ra = R.pipe(
    R.add(1)
)(oa)

console.log(oa, ra)