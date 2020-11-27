import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { ApplicativeP } from './04_Applicative'
import type { ChainP } from './06_Chain'

type MonadFnP<
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

type MonadP<
  T
, L extends LS = 1
> =
  & ApplicativeP<T, L>
  & ChainP<T, L>
  & {
    readonly join: MonadFnP<T, L>
  }

export {
  MonadFnP
, MonadP
}
