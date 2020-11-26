import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Alt } from './04_Alt'

type PlusFn<T, L extends LS> = {
  1: <A>()
    => $<T, [A]>
  2: <E, A>()
    => $<T, [E, A]>
  3: <R, E, A>()
    => $<T, [R, E, A]>
  4: <S, R, E, A>()
    => $<T, [S, R, E, A]>
}[L]

type Plus<
  T
, L extends LS = 1
> =
    Alt<T, L>
  & {
    readonly zero: PlusFn<T, L>
  }

export {
  PlusFn
, Plus
}
