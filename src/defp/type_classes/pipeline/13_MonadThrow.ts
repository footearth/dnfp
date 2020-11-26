import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { MonadP } from './12_Monad'

type MonadThrowFnP<
  T
, L extends LS
> = {
  1: <E, A>(e: E)
    => $<T, [A]>
  2: <E, A>(e: E)
    => $<T, [E, A]>
  3: <R, E, A>(e: E)
    => $<T, [R, E, A]>
  4: <S, R, E, A>(e: E)
    => $<T, [S, R, E, A]>
}[L]

type MonadThrowP<
  T
, L extends LS = 1
> =
    MonadP<T, L>
  & {
    readonly throwError: MonadThrowFnP<T, L>
  }

export {
  MonadThrowFnP
, MonadThrowP
}
