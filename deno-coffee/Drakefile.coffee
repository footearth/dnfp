import {
  desc
  run
  task
} from "https://deno.land/x/drake@v1.4.5/mod.ts"

desc "Minimal Drake task"
task "hello", []
, => console.log "Hello World!"

do run
