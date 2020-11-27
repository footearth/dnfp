import * as O from "https://deno.land/x/hkts/option.ts"
import { pipe } from "https://deno.land/x/hkts/fns.ts"

const result = pipe(
  O.sequenceTuple(
    O.some(1)
  , O.fromNullable([1, 2, 3][2])
  , O.some(-1)
  )
, O.map(
    ([a, b, c]) => // {
      // console.log('...')
      // console.log({
      //   a: a
      // , b: b
      // , c: c
      // })
      // return(
        a + b + c
      // )
    // }
  )
, O.chain(
    (n) => // {
      // console.log({
      //   n: n
      // })
      // return(
        n % 2 === 0
        ? O.none
        : O.some(n)
      // )
    // }
  )
)

console.log(result, result === O.none)
