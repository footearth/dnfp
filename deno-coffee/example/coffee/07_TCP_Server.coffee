listener =
  Deno.listen
    port: 8080

console.log "listening on 0.0.0.0:8080"

#@for-await-of
for conn of listener
  Deno.copy conn, conn
