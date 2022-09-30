# k42un0k0passwordmanager

## develop

```sh
npm i
npm run bootstrap
npm run start
```

## メモ

npm i 使わないでください
lerna add か lerna bootstrap をつかうこと

その後 app/node_modules/electron/install.js を実行してください（なぜか postinstall が実行されない）

rxjs 系のプロパティは name$ の形にする

### testing-library

双方向バインディングを実装した際のテストに関してだけは実装の詳細のテストを許容する(あくまで現状はの話)

### lib の扱いについて

なんか symlink 張られてるっぽいので build して再起すればいけるっぽい
