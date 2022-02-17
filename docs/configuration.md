---
id: configuration
title: 設定
---

サンドボックスの設定方法とそれぞれのオプションを説明します。

## package.json

パッケージに必要なモジュールの管理などの設定を行います。詳しくは[npm 公式の package.json のドキュメント](https://docs.npmjs.com/files/package.json)を参照してください。

## sandbox.config.json

サンドボックスの設定は sandbox.config.json ファイルの内容を変更することで行います。左端のアクティビティの中から[Configuration Files]→[sandbox.config.json]→[Create]または[Edit]選択すると sandbox.config.json の内容を変更できます

Infinite Loop Protection

: `infiniteLoopProtection`
無限ループを検知したとき実行を停止するかどうか設定します。(デフォルト: `false` 停止しない)

:::info
無限ループを動作したい場合は`true`に設定しましょう。
:::

Hard Reload on Change

: `hardReloadOnChange`
ファイルを変更するたび強制的にリロードするかどうか設定します。(デフォルト: `false` 強制的なリロードをしない)

:::info
`setInterval()`などグローバルな状態を扱う際は`true`に設定しましょう。
:::

Template

: [`template`](https://github.com/codesandbox/codesandbox-importers/blob/97d52141aa025ac7baf83b9574a9e5ae4f771df7/packages/types/index.d.ts#L38-L65)
選択したテンプレートを使用します。(`static` 静的ファイル、`node` Node.js コンテナー環境)

## .prettierrc

コードの自動整形の設定を行います。詳しくは[Prettier の設定ファイルのドキュメント](https://prettier.io/docs/en/configuration.html)を参照してください。

## netlify.toml

:::warning
デプロイに関する設定です。
:::

Netlify へのデプロイに関わる設定ファイルです。詳しくは[Netlify の設定ファイルのドキュメント](https://docs.netlify.com/configure-builds/file-based-configuration/)を参照してください。

## now.json (vercel.json)

:::warning
デプロイに関する設定です。
:::

Vercel へのデプロイに関わる設定ファイルです。詳しくは[Vercel の設定ファイルのドキュメント](https://vercel.com/docs/configuration)を参照してください。
