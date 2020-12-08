[0..Deno.args.length].forEach (i) =>
  return if i
  filename = Deno.args[i]
  file = await Deno.open filename
  await Deno.copy file, Deno.stdout
  file.close()
