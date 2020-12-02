## deno

* deno

```bash
apt install -y unzip
curl -fsSL https://deno.land/x/install/install.sh | sh

export DENO_INSTALL="/root/.deno" 
export PATH="$DENO_INSTALL/bin:$PATH"
```

* drake

** fish

```fish
function drake
  deno run -A Drakefile.ts $argv
end
```

＊* bash

```bash
alias drake='_a(){ deno run -A Drakefile.ts $@;};_a $1'
```

＊* compile

```bash
yarn coffee -ctb -o ./src ./source
mv ./src/example/01_HelloWorld.js ./src/example/01_HelloWorld.ts
drake
```
