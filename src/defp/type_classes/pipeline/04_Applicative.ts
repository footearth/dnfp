import type { $ } from '../01_types'
import type { LS } from '../02_type_classes'
import type { ApplyP } from './03_Apply'

type ApplicativeFnP<
  T
, L extends LS
> = {
  1: <A>(a: A)
    => $<T, [A]>
  2: <
      E = never
    , A = never
    >(a: A) => $<T, [E, A]>
  3: <
      R = never
    , E = never
    , A = never
    >(a: A) => $<T, [R, E, A]>
  4: <
      S = never
    , R = never
    , E = never
    , A = never
    >(a: A) => $<T, [S, R, E, A]>
}[L]

type ApplicativeP<
  T
, L extends LS = 1
> =
    ApplyP<T, L>
  & {
    readonly of: ApplicativeFnP<T, L>
  }

export {
  ApplicativeFnP
, ApplicativeP
}
