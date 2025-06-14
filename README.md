# chrome-extension-shorten-amazon-url

Chrome で表示中の Amazon の商品ページの URL を短縮する拡張です。

## はじめに

Amazon の商品ページを他の人に共有したい際、長い URL をそのまま送るのは不便です。
この拡張を使うと、Amazon の商品ページの URL を短縮して簡単に共有できます。

なお、このプロジェクトはChrome拡張の開発の学習のための題材として作ったものではありますが、実際に使えるものになっています。

## 利用要件

後述の開発要件を満たし、ビルドすることでChrome拡張が生成されます。
生成後に利用するための要件は次の通りです。

- Google Chrome

## 開発要件

- Node.js v22+
- npm v10+

## ビルド

```bash
npm run build
```

## インストール、アップデート

1. Chrome で `chrome://extensions` を開く
2. 右上の「デベロッパーモード」をオンにする
3. 「パッケージ化されていない拡張機能を読み込む」をクリックして、このリポジトリの `dist` フォルダを選択
4. コードを変更したら、拡張機能ページの🔄リロードボタンをクリックして更新

## 使い方

1. Amazon の商品ページを開く
2. 拡張のアイコンをクリックする
3. 短縮された URL が表示される

![alt text](image.png)

## 開発

```bash
npm run watch
```

```bash
npm test
```

## TODO

- CI

## ライセンス

MIT
