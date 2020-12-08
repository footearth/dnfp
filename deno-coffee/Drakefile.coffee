import {
  desc
  run
  task
  sh
} from 'https://deno.land/x/drake@v1.4.5/mod.ts'

desc "Drake Builder"
task "blddr", []
, =>
  console.log "Drake Builder"

desc "Example Builder"
task "bldex", []
, =>

  await sh 'rm -rf ./example/js/*'
  await sh 'yarn coffee -ctb -o ./example/js ./example/coffee'
  await sh 'cp ./example/coffee/*.json ./example/js'

  console.log "Example Builder"

do run
