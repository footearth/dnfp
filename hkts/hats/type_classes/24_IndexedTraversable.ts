import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Applicative } from './06_Applicative'
import type { Functor } from './03_Functor'
import type { IndexedFoldable } from './19_IndexedFoldable'

type IndexedTraversableFn<
  T
, L extends LS, I
> = {
  1: {
    <U, A, B>(
      A: Applicative<U, 1>
    , faUb: (a: A, i: I) => $<U, [B]>
    , Ta: $<T, [A]>
    ): $<U, [$<T, [B]>]>
    <U, A, B, J>(
      A: Applicative<U, 2>
    , faUb: (a: A, i: I) => $<U, [J, B]>
    , Ta: $<T, [A]>
    ): $<U, [J, $<T, [B]>]>
    <U, A, B, J, K>(
      A: Applicative<U, 3>
    , faUb: (a: A, i: I) => $<U, [J, K, B]>
    , Ta: $<T, [A]>
    ): $<U, [J, K, $<T, [B]>]>
    <U, A, B, J, K, L>(
      A: Applicative<U, 4>
    , faUb: (a: A, i: I) => $<U, [J, K, L, B]>
    , Ta: $<T, [A]>
    ): $<U, [J, K, L, $<T, [B]>]>
  }
  2: {
    <U, A, B, E>(
      A: Applicative<U, 1>
    , faUb: (a: A, i: I) => $<U, [B]>
    , Ta: $<T, [E, A]>
    ): $<U, [$<T, [E, B]>]>
    <U, A, B, E, J>(
      A: Applicative<U, 2>
    , faUb: (a: A, i: I) => $<U, [J, B]>
    , Ta: $<T, [E, A]>
    ): $<U, [J, $<T, [E, B]>]>
    <U, A, B, E, J, K>(
      A: Applicative<U, 3>
    , faUb: (a: A, i: I) => $<U, [J, K, B]>
    , Ta: $<T, [E, A]>
    ): $<U, [J, K, $<T, [E, B]>]>
    <U, A, B, E, J, K, L>(
      A: Applicative<U, 4>
    , faUb: (a: A, i: I) => $<U, [J, K, L, B]>
    , Ta: $<T, [E, A]>
    ): $<U, [J, K, L, $<T, [E, B]>]>
  }
  3: {
    <U, A, B, R, E>(
      A: Applicative<U, 1>
    , faUb: (a: A, i: I) => $<U, [B]>
    , Ta: $<T, [R, E, A]>
    ): $<U, [$<T, [R, E, B]>]>
    <U, A, B, R, E, J>(
      A: Applicative<U, 2>
    , faUb: (a: A, i: I) => $<U, [J, B]>
    , Ta: $<T, [R, E, A]>
    ): $<U, [J, $<T, [R, E, B]>]>
    <U, A, B, R, E, J, K>(
      A: Applicative<U, 3>
    , faUb: (a: A, i: I) => $<U, [J, K, B]>
    , Ta: $<T, [R, E, A]>
    ): $<U, [J, K, $<T, [R, E, B]>]>
    <U, A, B, R, E, J, K, L>(
      A: Applicative<U, 4>
    , faUb: (a: A, i: I) => $<U, [J, K, L, B]>
    , Ta: $<T, [R, E, A]>
    ): $<U, [J, K, L, $<T, [R, E, B]>]>
  }
  4: {
    <U, A, B, S, R, E>(
      A: Applicative<U, 1>
    , faUb: (a: A, i: I) => $<U, [B]>
    , Ta: $<T, [S, R, E, A]>
    ): $<U, [$<T, [S, R, E, B]>]>
    <U, A, B, S, R, E, J>(
      A: Applicative<U, 2>
    , faUb: (a: A, i: I) => $<U, [J, B]>
    , Ta: $<T, [S, R, E, A]>
    ): $<U, [J, $<T, [S, R, E, B]>]>
    <U, A, B, S, R, E, J, K>(
      A: Applicative<U, 3>
    , faUb: (a: A, i: I) => $<U, [J, K, B]>
    , Ta: $<T, [S, R, E, A]>
    ): $<U, [J, K, $<T, [S, R, E, B]>]>
    <U, A, B, S, R, E, J, K, L>(
      A: Applicative<U, 4>
    , faUb: (a: A, i: I) => $<U, [J, K, L, B]>
    , Ta: $<T, [S, R, E, A]>
    ): $<U, [J, K, L, $<T, [S, R, E, B]>]>
  }
}[L]

type IndexedTraversable<
  T
, L extends LS = 1
, I = number
> =
  & Functor<T, L>
  & IndexedFoldable<T, L, I>
  & {
    readonly traverse: IndexedTraversableFn<T, L, I>
  }

export {
  IndexedTraversableFn
, IndexedTraversable
}
