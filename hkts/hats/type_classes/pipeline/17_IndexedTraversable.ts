import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { Applicative } from '../06_Applicative'
import type { FunctorP } from './01_Functor'
import type { IndexedFoldableP } from './11_IndexedFoldable'

type IndexedTraversableFnP<
  T
, L extends LS, I
> = {
  1: {
    <U>(
      A: Applicative<U, 1>
    ): <A, B>(
        faUb: (a: A, i: I) => $<U, [B]>
      )
      => (Ta: $<T, [A]>)
      => $<U, [$<T, [B]>]>
    <U>(
      A: Applicative<U, 2>
    ): <A, B, J>(
        faUb: (a: A, i: I) => $<U, [J, B]>
      )
      => (Ta: $<T, [A]>)
      => $<U, [J, $<T, [B]>]>
    <U>(
      A: Applicative<U, 3>
    ): <A, B, J, K>(
        faUb: (a: A, i: I) => $<U, [J, K, B]>
      )
      => (Ta: $<T, [A]>)
      => $<U, [J, K, $<T, [B]>]>
    <U>(
      A: Applicative<U, 4>
    ): <A, B, J, K, L>(
        faUb: (a: A, i: I) => $<U, [J, K, L, B]>
      )
      => (Ta: $<T, [A]>)
      => $<U, [J, K, L, $<T, [B]>]>
  }
  2: {
    <U>(
      A: Applicative<U, 1>
    ): <A, B, E>(
        faUb: (a: A, i: I) => $<U, [B]>
      )
      => (Ta: $<T, [E, A]>)
      => $<U, [$<T, [E, B]>]>
    <U>(
      A: Applicative<U, 2>
    ): <A, B, E, J>(
        faUb: (a: A, i: I) => $<U, [J, B]>
      )
      => (Ta: $<T, [E, A]>)
      => $<U, [J, $<T, [E, B]>]>
    <U>(
      A: Applicative<U, 3>
    ): <A, B, E, J, K>(
        faUb: (a: A, i: I) => $<U, [J, K, B]>
      )
      => (Ta: $<T, [E, A]>)
      => $<U, [J, K, $<T, [E, B]>]>
    <U>(
      A: Applicative<U, 4>
    ): <A, B, E, J, K, L>(
        faUb: (a: A, i: I) => $<U, [J, K, L, B]>
      )
      => (Ta: $<T, [E, A]>)
      => $<U, [J, K, L, $<T, [E, B]>]>
  }
  3: {
    <U>(
      A: Applicative<U, 1>
    ): <A, B, R, E>(
        faUb: (a: A, i: I) => $<U, [B]>
      )
      => (Ta: $<T, [R, E, A]>)
      => $<U, [$<T, [R, E, B]>]>
    <U>(
      A: Applicative<U, 2>
    ): <A, B, R, E, J>(
        faUb: (a: A, i: I) => $<U, [J, B]>
      )
      => (Ta: $<T, [R, E, A]>)
      => $<U, [J, $<T, [R, E, B]>]>
    <U>(
      A: Applicative<U, 3>
    ): <A, B, R, E, J, K>(
        faUb: (a: A, i: I) => $<U, [J, K, B]>
      )
      => (Ta: $<T, [R, E, A]>)
      => $<U, [J, K, $<T, [R, E, B]>]>
    <U>(
      A: Applicative<U, 4>
    ): <A, B, R, E, J, K, L>(
        faUb: (a: A, i: I) => $<U, [J, K, L, B]>
      )
      => (Ta: $<T, [R, E, A]>)
      => $<U, [J, K, L, $<T, [R, E, B]>]>
  }
  4: {
    <U>(
      A: Applicative<U, 1>
    ): <A, B, S, R, E>(
        faUb: (a: A, i: I) => $<U, [B]>
      )
      => (Ta: $<T, [S, R, E, A]>)
      => $<U, [$<T, [S, R, E, B]>]>
    <U>(
      A: Applicative<U, 2>
    ): <A, B, S, R, E, J>(
        faUb: (a: A, i: I) => $<U, [J, B]>
      )
      => (Ta: $<T, [S, R, E, A]>)
      => $<U, [J, $<T, [S, R, E, B]>]>
    <U>(
      A: Applicative<U, 3>
    ): <A, B, S, R, E, J, K>(
        faUb: (a: A, i: I) => $<U, [J, K, B]>
      )
      => (Ta: $<T, [S, R, E, A]>)
      => $<U, [J, K, $<T, [S, R, E, B]>]>
    <U>(
      A: Applicative<U, 4>
    ): <A, B, S, R, E, J, K, L>(
        faUb: (a: A, i: I) => $<U, [J, K, L, B]>
      )
      => (Ta: $<T, [S, R, E, A]>)
      => $<U, [J, K, L, $<T, [S, R, E, B]>]>
  }
}[L]

type IndexedTraversableP<
  T
, L extends LS = 1
, I = number
> =
  & FunctorP<T, L>
  & IndexedFoldableP<T, L, I>
  & {
    readonly traverse: IndexedTraversableFnP<T, L, I>
  }

export {
  IndexedTraversableFnP
, IndexedTraversableP
}
