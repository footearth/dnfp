import type { LS } from './02_type_classes'
import type { Applicative } from './06_Applicative'
import type { Plus } from './07_Plus'

type Alternative<
  T
, L extends LS = 1
> =
    Applicative<T, L>
  & Plus<T, L>

export {
  Alternative
}
