import type { $ } from './01_types'
import type { LS } from './02_type_classes'
import type { Semigroupoid } from './10_Semigroupoid'

type CategoryFn<T, L extends LS> = {
  1: {
    <A>(): $<T, [A, A]>;
    <A, B>(): $<T, [A, B]>;
  };
  2: {
    <E, A>(): $<T, [E, A, A]>;
    <E, A, B>(): $<T, [E, A, B]>;
  };
  3: {
    <R, E, A>(): $<T, [R, E, A, A]>;
    <R, E, A, B>(): $<T, [R, E, A, B]>;
  };
  4: {
    <S, R, E, A>(): $<T, [S, R, E, A, A]>;
    <S, R, E, A, B>(): $<T, [S, R, E, A, B]>;
  };
}[L];

type Category<
  T
, L extends LS = 1
> =
    Semigroupoid<T, L>
  & {
    readonly id: CategoryFn<T, L>
  }

export {
  CategoryFn
, Category
}
