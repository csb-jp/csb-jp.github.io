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

:::info
サインインが必要です。
:::

サンドボックスを GitHub リポジトリとして書き出せます。
画面左端のアクティビティバーの中から[GitHub]を選択します。

![activitybar-github](https://i.gyazo.com/bdcd5e1c9701aa6412dc787a0543d74d.png)

[Export to new GitHub repository] ペインの中で新しいリポジトリの名前を入力し、[Create new repository on GitHub] を選択すると、新しい GitHub リポジトリへの書き出しが開始されます。

![new-repo](https://i.gyazo.com/114a6615162e3bffe711df9664d9f7db.png)

成功すると、GitHub リポジトリ `https://github.com/{自分の GitHub アカウント名}/{入力したリポジトリ名}` が作成されます。

:::info
"Unable to create the repo. Please refresh and try again or report issue." と通知され、書き出しに失敗した場合、GitHub リポジトリ側を操作して手動で片付けましょう。
:::

## リポジトリとの紐づけ

:::info
サインインが必要です。
:::

サンドボックスを GitHub リポジトリと紐づけます。
[Link to GitHub repository] ペインの中の [Link Sandbox] を選択します。

![link-to-github](https://i.gyazo.com/722f4e40161ab4e0989a0df224d7b0f0.png)

## Pull Request

:::info
サインインが必要です。
:::

紐づく GitHub リポジトリへの Pull Request を作成できます。

### コミット

コミットしたいファイルの変更を保存したら、[Changes] ペインの中の [Summary (required)] に変更内容の概要を入力します。

![commit-changes](https://i.gyazo.com/10cc7cffec0c7048d4e38890d316b226.png)

「ブランチを作成し PR を開始する ("Create branch csb-\* for the commit and start a PR")」を選択し [Commit changes] を選択すると変更内容のコミットの含まれるブランチが作られ Pull Request が作成されます。
