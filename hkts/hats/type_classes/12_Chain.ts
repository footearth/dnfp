import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Apply } from './05_Apply'

type ChainFn<
  T
, L extends LS
> = {
  1: <A, B>(
      fatb: (a: A) => $<T, [B]>
    , ta: $<T, [A]>
    ) => $<T, [B]>
  2: <E, A, B>(
      fatb: (a: A) => $<T, [E, B]>
    , ta: $<T, [E, A]>
    ) => $<T, [E, B]>
  3: <R, E, A, B>(
      fatb: (a: A) => $<T, [R, E, B]>
    , ta: $<T, [R, E, A]>
    ) => $<T, [R, E, B]>
  4: <S, R, E, A, B>(
      fatb: (a: A) => $<T, [S, R, E, B]>
    , ta: $<T, [S, R, E, A]>
    ) => $<T, [S, R, E, B]>
}[L]

type Chain<
  T
, L extends LS = 1
> =
    Apply<T, L>
  & {
    readonly chain: ChainFn<T, L>
  }

export {
  ChainFn
, Chain
}
