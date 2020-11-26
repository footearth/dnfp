import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Functor } from './03_Functor'

type ExtendFn<
  T
, L extends LS
> = {
  1: <A, B>(
      ftab: (t: $<T, [A]>) => B
    , ta: $<T, [A]>
    ) => $<T, [B]>
  2: <E, A, B>(
      ftab: (t: $<T, [E, A]>) => B
    , ta: $<T, [E, A]>
    ) => $<T, [E, B]>
  3: <R, E, A, B>(
      ftab: (t: $<T, [R, E, A]>) => B
    , ta: $<T, [R, E, A]>
    ) => $<T, [R, E, B]>
  4: <S, R, E, A, B>(
      ftab: (t: $<T, [S, R, E, A]>) => B
    , ta: $<T, [S, R, E, A]>
    ) => $<T, [S, R, E, B]>
}[L]

type Extend<
  T
, L extends LS = 1
> =
    Functor<T, L>
  & {
    readonly extend: ExtendFn<T, L>
  }

export {
  ExtendFn
, Extend
}
