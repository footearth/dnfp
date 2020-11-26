import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Apply } from './05_Apply'

type ApplicativeFn<T, L extends LS> = {
  1: <A>(a: A)
    => $<T, [A]>
  2: <E, A>(a: A)
    => $<T, [E, A]>
  3: <R, E, A>(a: A)
    => $<T, [R, E, A]>
  4: <S, R, E, A>(a: A)
    => $<T, [S, R, E, A]>
}[L]

type Applicative<
  T
, L extends LS = 1
> =
    Apply<T, L>
  & {
    readonly of: ApplicativeFn<T, L>
  }

export {
  ApplicativeFn
, Applicative
}
