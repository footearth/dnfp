// Generated by CoffeeScript 2.5.1
var ref;
(function () {
  var results = [];

  for (var j = 0, ref = Deno.args.length; 0 <= ref ? j <= ref : j >= ref; 0 <= ref ? j++ : j--) {
    results.push(j);
  }

  return results;
}).apply(this).forEach(async i => {
  var file, filename;

  if (i) {
    return;
  }

  filename = Deno.args[i];
  file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  return file.close();
});