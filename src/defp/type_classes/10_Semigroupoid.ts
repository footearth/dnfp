import type { $ } from './01_types'
import type { LS } from './02_type_classes'

type SemigroupoidFn<
  T
, L extends LS
> = {
  1: <A, B, C>(
      tij: $<T, [A, B]>
    , tjk: $<T, [B, C]>
    ) => $<T, [A, C]>
  2: <E, A, B, C>(
      tij: $<T, [E, A, B]>
    , tjk: $<T, [E, B, C]>
    ) => $<T, [E, A, C]>
  3: <R, E, A, B, C>(
      tij: $<T, [R, E, A, B]>
    , tjk: $<T, [R, E, B, C]>
    ) => $<T, [R, E, A, C]>
  4: <S, R, E, A, B, C>(
      tij: $<T, [S, R, E, A, B]>
    , tjk: $<T, [S, R, E, B, C]>
    ) => $<T, [S, R, E, A, C]>
}[L]

type Semigroupoid<
  T
, L extends LS = 1
> = {
  readonly compose: SemigroupoidFn<T, L>
}

export {
  SemigroupoidFn
, Semigroupoid
}
