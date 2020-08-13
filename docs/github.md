---
id: github
title: GitHub 連携
---

サンドボックスを GitHub リポジトリと同期したり、サンドボックスからフォークして Pull Request を作成できます。

## GitHub からインポート

GitHub のリポジトリを元にしてサンドボックスにインポートできます。
[サンドボックスの作成ウィザード](https://codesandbox.io/s/)から、[Import Project]を選択し、インポートしたい GitHub リポジトリの URL を貼り付け、[Import and Fork]を選択します。

![import-from-github](https://i.gyazo.com/199b75a0ef972b50793a34a6c10d5e0d.png)

ブランチやサブディレクトリもサポートしており、対応する URL を指定することでインポート可能です。

### 別の方法: GitHubBox.com を使う

GitHubBox.com を使うことでブラウザーのアドレスバーから簡単にインポートすることもできます。
インポートしたい GitHub リポジトリの URL のホスト名 `github.com` を `githubbox.com` に書き換えます。
たとえば、このサイトの GitHub リポジトリ (`https://github.com/csb-jp/csb-jp.github.io`)をインポートするには、URL [https://githubbox.com/csb-jp/csb-jp.github.io](https://githubbox.com/csb-jp/csb-jp.github.io) にアクセスします。

## リポジトリの作成

サンドボックスを GitHub リポジトリとして書き出せます。

## Pull Request

GitHub からインポートしたサンドボックスは、フォークして Pull Request を作成できます。
