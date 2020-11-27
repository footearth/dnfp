// deno-lint-ignore-file no-explicit-any

/*
 * Utility Types
 */ 

type Fn<
  AS extends unknown[]
, B
> =
  (...as: AS) => B

type UnknownFn =
  Fn<
    unknown[]
  , unknown
  >

type Nil =
  undefined
| null

interface Lazy<A> {
  (): A
}

interface Predicate<A> {
  (a: A): boolean
}

interface Refinement<
  A
, B extends A
> {
  (a: A): a is B
}

type Ordering =
  -1
| 0
| 1

/*
 * Hole Types
 */

declare const index: unique symbol

interface _<
  N extends number = 0
> {
  [index]: N
}

type _0 = _<0>
type _1 = _<1>
type _2 = _<2>
type _3 = _<3>
type _4 = _<4>
type _5 = _<5>
type _6 = _<6>
type _7 = _<7>
type _8 = _<8>
type _9 = _<9>

/*
 * Fix Type
 */

declare const Fix: unique symbol

interface Fix<T> {
  [Fix]: T
}

/*
 * Substitution Type
 */
type $<
  T
, S extends any[]
> =
    T extends Fix<infer U>
  ? U
  : T extends _<infer N>
  ? S[N]
  : T extends any[]
  ? {
      [K in keyof T]: $<T[K], S>
    }
  : T extends Promise<infer I>
  ? Promise<$<I, S>>
  : T extends Refinement<
      infer A
    , infer B
    >
  ? Refinement<
      $<A, S>
    , $<B, S>
    >
  : T extends (...x: infer I) => infer O
  ? (...x: $<I, S>) => $<O, S>
  : T extends Record<string, unknown> // object
  ? { [K in keyof T]: $<T[K], S> }
  : T extends undefined | null | boolean | string | number
  ? T
  : T

export {
  Fn
, UnknownFn
, Nil
, Lazy
, Predicate
, Refinement
, Ordering
, _
, _0
, _1
, _2
, _3
, _4
, _5
, _6
, _7
, _8
, _9
, Fix
, $
}
