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
  yarn coffee -ctb ./Drakefile.coffee
  deno run -A ./Drakefile.js $argv
  rm ./Drakefile.js
end
```

＊* bash

```bash
alias drake='_a(){
  yarn coffee -ctb ./Drakefile.coffee
  deno run -A Drakefile.js $@;
  };_a $1'
```

＊* compile

```bash
yarn coffee -ctb ./Drakefile.coffee
drake
```
