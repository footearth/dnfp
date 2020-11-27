import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { ApplyP } from './03_Apply'

type ChainFnP<
  T
, L extends LS
> = {
  1: <A, B>(
      fatb: (a: A) => $<T, [B]>
    )
    => (ta: $<T, [A]>)
    => $<T, [B]>
  2: <E, A, B>(
      fatb: (a: A) => $<T, [E, B]>
    )
    => <D>(ta: $<T, [D, A]>)
    => $<T, [D | E, B]>
  3: <R, E, A, B>(
      fatb: (a: A) => $<T, [R, E, B]>
    )
    => <P, D>(ta: $<T, [P, D, A]>)
    => $<T, [P | R, D | E, B]>
  4: <S, R, E, A, B>(
      fatb: (a: A) => $<T, [S, R, E, B]>
    )
    => <Q, P, D>(ta: $<T, [Q, P, D, A]>)
    => $<T, [Q | S, P | R, D | E, B]>
}[L]

type ChainP<
  T
, L extends LS = 1
> =
    ApplyP<T, L>
  & {
    readonly chain: ChainFnP<T, L>
  }

export {
  ChainFnP
, ChainP
}
