import type { $ } from '../01_types'

type SemigroupoidP<T> = {
  readonly compose: <I, J, K>(
    tij: $<T, [I, J]>
  )
  => (tjk: $<T, [J, K]>)
  => $<T, [I, K]>
}

export {
  SemigroupoidP
}
