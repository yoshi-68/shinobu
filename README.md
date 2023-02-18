# シノブ

## 概要

プリンセスコネクトのバトル/プリンセスアリーナの防衛突破編成の検索ツール。

## 操作方法

相手の防衛編成のキャラクターを選択して、検索すると防衛突破編成が表示される。

![シノブ](images/shinobu.png)

# 開発方法

## バージョン

- Node.js v16.18.0
- React v18.2.0
- Electron v23.1.0
- Typescript v4.9.5

## インストール

package-lock.json から依存関係をインストールする。

```shell
npm ci
```

## プログラムの実行

package.json の scripts にコマンド一覧がある。

```shell
npm run dev
```

# デプロイ

dist 配下に Windows のインストーラ（シノブ Setup~.exe）を作成する。

```shell
npm run electron:build:nis
```
