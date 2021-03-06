import type { $ } from './01_types'
import type { LS } from './02_type_classes'

type BifunctorFn<
  T
, L extends LS
> = {
  1: never
  2: <A, B, C, D>(
      fab: (a: A) => B
    , fcd: (c: C) => D
    , tac: $<T, [A, C]>
    ) => $<T, [B, D]>
  3: <R, A, B, C, D>(
      fab: (a: A) => B
    , fcd: (c: C) => D
    , tac: $<T, [R, A, C]>
    ) => $<T, [R, B, D]>
  4: <S, R, A, B, C, D>(
      fab: (a: A) => B
    , fcd: (c: C) => D
    , tac: $<T, [S, R, A, C]>
    ) => $<T, [S, R, B, D]>
}[L]

type BifunctorMapFn<
  T
, L extends LS
> = {
  1: never
  2: <E, F, A>(
      fef: (e: E) => F
    , tea: $<T, [E, A]>
    ) => $<T, [F, A]>
  3: <R, E, F, A>(
      fef: (e: E) => F
    , tea: $<T, [R, E, A]>
    ) => $<T, [R, F, A]>
  4: <S, R, E, F, A>(
      fef: (e: E) => F
    , tea: $<T, [S, R, E, A]>
    ) => $<T, [S, R, F, A]>
}[L]

type Bifunctor<
  T
, L extends LS = 2> = {
  readonly bimap: BifunctorFn<T, L>
  readonly mapLeft: BifunctorMapFn<T, L>
}

export {
  BifunctorFn
, BifunctorMapFn
, Bifunctor
}
