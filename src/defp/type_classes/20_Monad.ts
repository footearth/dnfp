import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Applicative } from './06_Applicative'
import type { Chain } from './12_Chain'

type MonadFn<
  T
, L extends LS
> = {
  1: <A>(
      tta: $<T, [$<T, [A]>]>
    ) => $<T, [A]>
  2: <E, A>(
      tta: $<T, [E, $<T, [E, A]>]>
    ) => $<T, [E, A]>
  3: <R, E, A>(
      tta: $<T, [R, E, $<T, [R, E, A]>]>
    ) => $<T, [R, E, A]>
  4: <S, R, E, A>(
      tta: $<T, [S, R, E, $<T, [S, R, E, A]>]>
    ) => $<T, [S, R, E, A]>
}[L]

type Monad<
  T
, L extends LS = 1
> =
  & Applicative<T, L>
  & Chain<T, L>
  & {
    readonly join: MonadFn<T, L>
  }

export {
  MonadFn
, Monad
}
