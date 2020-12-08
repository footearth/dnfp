// let text = Deno.readTextFile('./example/coffee/01_HelloWorld.coffee')
let text = Deno.readTextFile('./example/coffee/02_Ramda.coffee')

let trim = x =>
  x.replace(/^\s+|\s+$/gm,'')

let prtRes = res => {
  console.log(JSON.stringify(res, null, 1))
  return(res)
}

let recA = (codeArr) => {

  let result =
    codeArr
    .reduce(
      (r, c) => {

        let _r =
          r.temp.length !== 0
          && c.code.slice(0, 2) !== '  '
          ? {
            result: [
              ...(
                r.result.slice(0, r.result.length - 1)
              )
            , {
                ...r.result[r.result.length - 1]
              , sub: recA(r.temp)
              }
            ]
            , temp: []
          }
          : r

        return({
          result:
            c.code.slice(0, 2) !== '  '
            ? [
              ..._r.result
            , c
            ]
            : _r.result
        , temp: [
            ...(
              c.code.slice(0, 2) === '  '
              ? [
                ..._r.temp
              , {
                ...c
              , code: c.code.slice(2)
              }
              ]
              : _r.temp
            )
          ]
        })
      }

    , {
      result: []
    , temp: []
    })

  return(
    result.temp.length !== 0
    ? [
      ...result.result.slice(0, result.result.length - 1)
    , {
        ...result.result[result.result.length - 1]
      , sub: result.temp
      }
    ]
    : result.result
  )
}

text

.then(
  res => {
    return({
      line: res.split('\n')
    })
  }
)

.then(
  res => {
    return({
      line: res.line.reduce(
        (r, c, i) => {
          return([
              ...r
            , {
                line: i + 1
              , code: c
              }
          ])
        }
      , []
      )
    })
  }
)

.then(
  res => {
    return({
      line:
        res.line.reduce(
          (r, c) => {
            return(
              trim(c.code) === ''
              ? r
              : [
                ...r
              , c
              ]
            )
          }
        , []
        )
    })
  }
)

.then(
  res => {
    return({
      line:
        recA(res.line)
    })
  }
)

.then(prtRes)
