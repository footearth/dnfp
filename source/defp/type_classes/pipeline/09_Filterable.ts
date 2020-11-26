import type { $, Predicate } from '../01_types'
import type { LS } from '../02_type_classes'

type FilterableFnP<
  T
, L extends LS
> = {
  1: <A>(
      predicate: Predicate<A>
    )
    => (ta: $<T, [A]>)
    => $<T, [A]>
  2: <E, A>(
      predicate: Predicate<A>
    )
    => (ta: $<T, [E, A]>)
    => $<T, [E, A]>
  3: <R, E, A>(
      predicate: Predicate<A>
    )
    => (ta: $<T, [R, E, A]>)
    => $<T, [R, E, A]>
  4: <S, R, E, A>(
      predicate: Predicate<A>
    )
    => (ta: $<T, [S, R, E, A]>)
    => $<T, [S, R, E, A]>
}[L]

type FilterableP<
  T
, L extends LS = 1
> = {
  readonly filter: FilterableFnP<T, L>
}

export {
  FilterableFnP
, FilterableP
}
