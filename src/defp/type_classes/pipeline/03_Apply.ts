import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { FunctorP } from './01_Functor'

type ApplyFnP<
  T
, L extends LS
> = {
  1: <A, B>(
      tfab: $<T, [(a: A) => B]>
    )
    => (ta: $<T, [A]>)
    => $<T, [B]>
  2: <E, A, B>(
      tfab: $<T, [E, (a: A) => B]>
    )
    => (ta: $<T, [E, A]>)
    => $<T, [E, B]>
  3: <R, E, A, B>(
    tfab: $<T, [R, E, (a: A) => B]>
    )
    => (ta: $<T, [R, E, A]>)
    => $<T, [R, E, B]>
  4: <S, R, E, A, B>(
      tfab: $<T, [S, R, E, (a: A) => B]>,
    )
    => (ta: $<T, [S, R, E, A]>)
    => $<T, [S, R, E, B]>
}[L]

type ApplyP<
  T
, L extends LS = 1
> =
    FunctorP<T, L>
  & {
    readonly ap: ApplyFnP<T, L>
  }

export {
  ApplyFnP
, ApplyP
}
