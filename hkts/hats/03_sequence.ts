import type { $ } from "./type_classes/01_types";
import type { Apply, LS } from "./type_classes";

/*
 * Ap Function Constructors
 */

const loopTuple
= <T>(
    len: number
  , init: T[] = []
  )
  : T[]
    | (
        (t: T) => any
      ) =>
        len === 0
        ? init
        : (t: T) =>
            loopTuple(
              len - 1
            , [...init, t]
            )

const loopRecord = (
  keys: ReadonlyArray<string>
, i = 0
, init: Record<string, any> = {}
)
: Record<string, any>
  | (
      (a: unknown) => any
    ) =>
      i === keys.length
      ? init
      : (a: unknown) =>
          loopRecord(
            keys
          , i + 1
          , {
              ...init
            , [keys[i]]: a
            }
          )

/*
 * Ap Function Constructors
 */

type NonEmptyArray<T> = [
  T
, ...T[]
]

type SequenceTuple<
  T
, R extends NonEmptyArray<$<T, any[]>>
, L extends LS = 1
> = {
  1:
    $<T, [{
      [K in keyof R]
      : R[K] extends $< T
          , [infer A]
          >
        ? A : never
    }]>
  2:
    $<T, [
      { [K in keyof R]
        : R[K] extends $<
              T
            , [
                infer E
              , infer A
              ]
            >
          ? E : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
              T
            , [
                infer E
              , infer A
              ]
            >
          ? A : never
      }
    ]>
  3:
    $<T, [
      { [K in keyof R]
        : R[K] extends $<
              T
            , [
                infer R
              , infer E
              , infer A
              ]
            >
          ? R : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer R
            , infer E
            , infer A
            ]
          >
        ? E : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer R
            , infer E
            , infer A
            ]
          >
        ? A : never
      }
    ]>
  4:
    $<T, [
      { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer S
            , infer R
            , infer E
            , infer A
            ]
          >
        ? S : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer S
            , infer R
            , infer E
            , infer A
            ]
          >
        ? R : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer S
            , infer R
            , infer E
            , infer A
            ]
          >
        ? E : never
      }[number]
    , { [K in keyof R]
        : R[K] extends $<
            T
          , [
              infer S
            , infer R
            , infer E
            , infer A
            ]
          >
        ? A : never
      }
  ]>
}[L]

type CreateSequenceTuple = {
  < T, L extends 1>(
    A: Apply<T, L>
  ):
    <R extends NonEmptyArray<
      $<T, [any]>
    >>(...r: R) =>
      SequenceTuple<T, R, L>
  < T, L extends 2>(
    A: Apply<T, L>
  ):
    <R extends NonEmptyArray<
      $<T, [any, any]>
    >>(...r: R) =>
      SequenceTuple<T, R, L>
  <T, L extends 3>(
    A: Apply<T, L>
  ):
    <R extends NonEmptyArray<
      $<T, [any, any, any]>
    >>(...r: R) =>
      SequenceTuple<T, R, L>
  <T, L extends 4>(A: Apply<T, L>)
  :
    <R extends NonEmptyArray<
      $<T, [any, any, any, any]>
    >>(...r: R) =>
      SequenceTuple<T, R, L>
}

/*
 * Create a sequence over tuple function from Apply
 */
export const createSequenceTuple
: CreateSequenceTuple
= <T>(A: Apply<T>) =>
    < R extends NonEmptyArray<
      $<T, [any]>
    >>(...r: R)
    : SequenceTuple<T, R> => {
      const [head, ...tail] = r
      return tail.reduce(
        A.ap as any
      , A.map(
          loopTuple(r.length) as any
        , head
        )
      ) as any
    }
