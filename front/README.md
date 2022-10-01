# front

## ページ追加のコマンド

```sh
> ng g module name --route path --module module
```

- `--route`
  - `--module`で指定したモジュールに対して、指定したパスでの lazy load の記述をしてくれる

## amplify

### 環境の追加

```cmd
> amplify env add
?Do you want to use an existing environment? No
?Enter a name for the environment / {{name}}
```

## test の timer について

jest のタイマーを使うとなぜかうまくいかないことがあるので、fakeAsync を使う

## window の注入について

なんかコンポーネントに対して注入するとテストで「 Can't resolve all parameters for MainComponent:」って言われる
多分、`createComponent`と`inject`で話が違うのかもしれない
