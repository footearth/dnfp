import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'

type ContravariantFnP<
  T
, L extends LS
> = {
  1: <A, B>(
      fab: (a: A) => B
    )
    => (tb: $<T, [B]>)
    => $<T, [A]>
  2: <E, A, B>(
      fab: (a: A) => B
    )
    => (tb: $<T, [E, B]>)
    => $<T, [E, A]>
  3: <R, E, A, B>(
      fab: (a: A) => B
    )
    => (tb: $<T, [R, E, B]>)
    => $<T, [R, E, A]>
  4: <S, R, E, A, B>(
      fab: (a: A) => B
    )
    => (tb: $<T, [S, R, E, B]>)
    => $<T, [S, R, E, A]>
}[L]

type ContravariantP<
  T
, L extends LS = 1
> = {
  readonly contramap: ContravariantFnP<T, L>
}

export {
  ContravariantFnP
, ContravariantP
}
