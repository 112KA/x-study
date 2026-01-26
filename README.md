# x-study

## Setup

※開発環境はowner以外は構築できません。

1. `.npmrc` の準備（重要）

- トークンをリポジトリにコミットしない。プロジェクトにはテンプレートファイル `.npmrc.org` が含まれている。
- ローカルで使う場合はコピーして必要な値を置き換える:
```bash
cp .npmrc.org .npmrc
# - ★エディタで .npmrc を開き、%%PERSONAL_ACCESS_TOKEN%% を自分の Personal Access Token に置き換える
```

2. 依存関係をインストール
```bash
pnpm install
```