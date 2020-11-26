import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Functor } from './03_Functor'

type AltFn<
  T
, L extends LS
> = {
  1: <A>(
      ta: $<T, [A]>
    , tb: $<T, [A]>
    ) => $<T, [A]>
  2: <E, A>(
      ta: $<T, [E, A]>
    , tb: $<T, [E, A]>
    ) => $<T, [E, A]>
  3: <R, E, A>(
      ta: $<T, [R, E, A]>
    , tb: $<T, [R, E, A]>
    ) => $<T, [R, E, A]>
  4: <S, R, E, A>(
      ta: $<T, [S, R, E, A]>
    , tb: $<T, [S, R, E, A]>
    ) => $<T, [S, R, E, A]>
}[L]

type Alt<
  T
, L extends LS = 0
> =
    Functor<T, L>
  & {
    readonly alt: AltFn<T, L>
  }

export {
  AltFn
, Alt
}
