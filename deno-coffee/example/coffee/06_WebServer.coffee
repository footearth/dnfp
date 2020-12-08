import { serve } from 'https://deno.land/std@0.79.0/http/server.ts'

server = serve
  hostname: '0.0.0.0'
  port: 8080

console.log "HTTP webserver running.  Access it at:  http://localhost:8080/"

#@for-await-of
for request of server

  bodyContent = "Your user-agent is:\n\n"
  bodyContent += (
    request.headers.get "user-agent"
  ) || "Unknown"

  request.respond
    status: 200
    body: bodyContent
