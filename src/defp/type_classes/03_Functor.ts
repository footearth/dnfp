import type { $ } from './01_types'
import type { LS } from './02_type_classes'

type FunctorFn<
  T
, L extends LS
> = {
  1: <A, B>(
      fab: (a: A) =>
        B, ta: $<T, [A]>
    ) => $<T, [B]>
  2: <E, A, B>(
      fab: (a: A) => B
    , ta: $<T, [E, A]>
    ) => $<T, [E, B]>
  3: <R, E, A, B>(
      fab: (a: A) => B
    , ta: $<T, [R, E, A]>
    ) => $<T, [R, E, B]>
  4: <S, R, E, A, B>(
      fab: (a: A) => B
    , ta: $<T, [S, R, E, A]>
    ) => $<T, [S, R, E, B]>
}[L]

type Functor<
  T
, L extends LS = 1
> = {
  readonly map: FunctorFn<T, L>
}

export {
  FunctorFn
, Functor
}
