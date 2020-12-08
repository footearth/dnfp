text = Deno.readTextFile './example/js/04_people.json'

text.then (response) => console.log response

writeJson = (path, data) =>
  try
    Deno
    .writeTextFileSync path
    , JSON.stringify data

    "Written to " + path
  catch
    (e) => e.message

console.log(
  writeJson "./example/js/04_people.json"
  ,
    hello: "World"
)
