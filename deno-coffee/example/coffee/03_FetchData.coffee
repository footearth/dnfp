# Output: JSON Data
json = fetch 'https://api.github.com/users/denoland'

json
.then (response) =>
  response.json()
.then (jsonData) =>
  console.log jsonData

# Output: HTML Data
text = fetch 'https://deno.land/'

text
.then (response) =>
  response.text()
.then (textData) =>
  console.log textData

# Output: Error Message
error = fetch 'https://does.not.exist/'

error.catch (error) =>
  console.log error.message
