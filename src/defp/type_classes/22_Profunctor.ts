import type { $ } from './01_types'
import type { LS } from './02_type_classes'

type ProfunctorFn<
  T
, L extends LS
> = {
  1: never
  2: <A, B, C, D>(
      fab: (x: A) => B
    , fcd: (x: C) => D
    , tbc: $<T, [B, C]>
    ) => $<T, [A, D]>
  3: <R, A, B, C, D>(
      fab: (x: A) => B
    , fcd: (x: C) => D
    , tbc: $<T, [R, B, C]>
    ) => $<T, [R, A, D]>
  4: <S, R, A, B, C, D>(
      fab: (x: A) => B
    , fcd: (x: C) => D
    , tbc: $<T, [S, R, B, C]>
    ) => $<T, [S, R, A, D]>
}[L]

type Profunctor<
  T
, L extends LS = 2
> = {
  readonly promap: ProfunctorFn<T, L>
}

export {
  ProfunctorFn
, Profunctor
}
