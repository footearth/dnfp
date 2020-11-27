import type { $ } from '../01_types'

type ProfunctorP<T> = {
  readonly promap: <A, B, C, D>(
    fab: (x: A) => B
  , fcd: (x: C) => D
  )
  => (tbc: $<T, [B, C]>)
  => $<T, [A, D]>
}

export {
  ProfunctorP
}
