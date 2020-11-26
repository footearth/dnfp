import type { $ } from './01_types'
import type { LS } from './02_type_classes'

type FoldableFn<
  T
, L extends LS
> = {
  1: <A, B>(
      faba: (a: A, b: B) => A
    , a: A
    , tb: $<T, [B]>
    ) => A
  2: <E, A, B>(
      faba: (a: A, b: B) => A
    , a: A
    , tb: $<T, [E, B]>
    ) => A
  3: <R, E, A, B>(
      faba: (a: A, b: B) => A
    , a: A
    , tb: $<T, [R, E, B]>
    ) => A
  4: <S, R, E, A, B>(
      faba: (a: A, b: B) => A
    , a: A
    , tb: $<T, [S, R, E, B]>
    ) => A
}[L]

type Foldable<
  T
, L extends LS = 1
> = {
  readonly reduce: FoldableFn<T, L>
}

export {
  FoldableFn
, Foldable
}
