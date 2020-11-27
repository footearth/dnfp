import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Extend } from './14_Extend'

type ComonadFn<
  T
, L extends LS
> = {
  1: <A>(
      ta: $<T, [A]>
    ) => A
  2: <E, A>(
      ta: $<T, [E, A]>
    ) => A
  3: <R, E, A>(
      ta: $<T, [R, E, A]>
    ) => A
  4: <S, R, E, A>(
      ta: $<T, [S, R, E, A]>
    ) => A
}[L]

type Comonad<
  T
, L extends LS = 1
> =
    Extend<T, L>
  & {
    readonly extract: ComonadFn<T, L>
  }

export {
  ComonadFn
, Comonad
}
