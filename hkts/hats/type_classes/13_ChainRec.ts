import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Chain } from './12_Chain'

type ChainRecFn<
  T
, L extends LS
> = {
  1: <A, B, C>(
      f: (
        next: (a: A) => C
      , done: (b: B) => C
      , a: A
      ) => $<T, [C]>
    , a: A
    ) => $<T, [B]>
  2: <E, A, B, C>(
      f: (
        next: (a: A) => C
      , done: (b: B) => C
      , a: A
      ) => $<T, [E, C]>
    , a: A
    ) => $<T, [E, B]>
  3: <R, E, A, B, C>(
      f: (
        next: (a: A) => C
      , done: (b: B) => C
      , a: A
      ) => $<T, [R, E, C]>
    , a: A
    ) => $<T, [R, E, B]>
  4: <S, R, E, A, B, C>(
      f: (
        next: (a: A) => C
      , done: (b: B) => C
      , a: A
      ) => $<T, [S, R, E, C]>
    , a: A
    ) => $<T, [S, R, E, B]>
}[L]

type ChainRec<
  T
, L extends LS = 1
> =
    Chain<T, L>
  & {
    readonly chainRec: ChainRecFn<T, L>
  }

export {
  ChainRecFn
, ChainRec
}
