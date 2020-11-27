type LS =
    1
  | 2
  | 3
  | 4

type AddLength<
  A extends LS
, B extends LS
> = {
  1: {
    1: 1
    2: 2
    3: 3
    4: 4
  }
  2: {
    1: 2
    2: 3
    3: 4
    4: never
  }
  3: {
    1: 3
    2: 4
    3: never
    4: never
  }
  4: {
    1: 4
    2: never
    3: never
    4: never
  }
}[A][B]

type Group<T> =
  Monoid<T>
& {
  readonly invert: (x: T) => T
}

type Semigroup<T> = {
  readonly concat: (a: T, b: T) => T
}

type Monoid<T> =
  Semigroup<T>
& {
  readonly empty: () => T
}

type Setoid<T> = {
  readonly equals: (a: T, b: T) => boolean
}

type Ord<T> = Setoid<T> & {
  readonly lte: (a: T, b: T) => boolean
}

type Show<T> = {
  readonly show: (t: T) => string
}

export {
  LS
, AddLength
, Group
, Semigroup
, Monoid
, Setoid
, Ord
, Show
}
