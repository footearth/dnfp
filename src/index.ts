import * as O from 'https://deno.land/x/hkts/option.ts'
import { pipe } from 'https://deno.land/x/hkts/fns.ts'

const result = pipe(
  O.sequenceTuple(
    O.some(1)
  , O.fromNullable([1, 2, 3][4])
  , O.some(-1)
  )
, O.map(([a, b, c]) => a + b + c)
, O.chain(n => n % 2 === 0 ? O.none : O.some(n))
)

console.log(result)
