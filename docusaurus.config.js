const title = "CodeSandbox ガイド";
const description = "CodeSandbox 非公式日本語ドキュメント";
const owner = "csb-jp";
const repo = "csb-jp.github.io";

module.exports = {
  url: "https://csb-jp.github.io",
  baseUrl: "/",
  title,
  favicon: "img/favicon.ico",
  tagline: description,
  organizationName: owner,
  projectName: repo,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${owner}/${repo}/edit/master`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title,
      logo: {
        alt: `${title} ロゴ`,
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          label: "ドキュメント",
        },
        {
          href: `https://github.com/${owner}/${repo}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  customFields: {
    lang: "ja",
    features: [
      {
        title: "このサイトについて",
        description: [
          "Web アプリケーション開発のためのオンラインエディター CodeSandbox の使い方や機能をまとめたサイトです。",
          "誤字・脱字の修正、ドキュメント追加、その他改善するための Pull Request を歓迎します。",
          "また、質問、提案などあれば GitHub Issues にてお気軽にご報告ください。",
        ].join(""),
      },
    ],
  },
};
