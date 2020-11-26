import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Monad } from './20_Monad'

type MonadThrowFn<
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

type MonadThrow<
  T
, L extends LS = 1
> =
    Monad<T, L>
  & {
    readonly throwError: MonadThrowFn<T, L>
  }

export {
  MonadThrowFn
, MonadThrow
}
