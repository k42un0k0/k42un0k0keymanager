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

window の config の show を false にして ready-to-show の後に show を true にすると変な画面は見えない(electron みたいにある程度を html に任せればいい感じに skeleton になりそう)

### auto update

mac だと調整が必要らしい

https://blog.katsubemakito.net/nodejs/electron/autoupdater

### testing-library

双方向バインディングを実装した際のテストに関してだけは実装の詳細のテストを許容する(あくまで現状はの話)
