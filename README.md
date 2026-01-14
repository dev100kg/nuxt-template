# Nuxt Template

私的Nuxt 4テンプレートリポジトリ。

## 推奨環境

- **Node.js 22.x** (LTS)
- **pnpm 10.x**

## 技術スタック

- **Nuxt 4** - フロントエンドフレームワーク
- **TypeScript** - 型安全性（strict mode）
- **TailwindCSS** - スタイリング
- **VueUse** - Vueユーティリティ
- **Nuxt Icon** - アイコン
- **Nuxt SEO** - SEO対策
- **Zod** - バリデーション
- **dayjs** - 日付操作

## 開発環境

- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマット
- **Husky + lint-staged** - Git hooks（コミット前自動チェック）
- **pnpm** - パッケージマネージャー

## セットアップ

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# 静的サイト生成
pnpm generate

# プレビュー
pnpm preview

# Lintチェック
pnpm lint

# Lint自動修正
pnpm lint:fix

# コードフォーマット
pnpm format
```

## Git Hooks

コミット時に自動で以下が実行されます：

- ESLintチェック＆自動修正
- Prettierフォーマット

無効化したい場合：

```bash
git commit --no-verify
```

## ディレクトリ構成

```
app/
├── app.vue           # ルートコンポーネント
├── pages/            # ページ
├── components/       # コンポーネント（必要時作成）
├── composables/      # Vueロジック（必要時作成）
├── utils/            # ユーティリティ（必要時作成）
└── types/            # 型定義（必要時作成）
```

## 使い方

このテンプレートをベースに新規プロジェクトを作成：

```bash
git clone <this-repo> my-new-project
cd my-new-project
rm -rf .git
git init
pnpm install
```
