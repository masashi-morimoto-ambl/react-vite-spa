# これなに
React+TypeScript+Viteでフロント(SPA)開発するためのベースプロジェクト

# 主要技術
| 名称 | バージョン | 主な用途 |
| :--- | :--- | :--- |
| React | 18.2.0 | フロントFW |
| TypeScript | 5.2.2 | フロント言語 |
| TanStack Router | 1.16.5 | File Based Routing |
| TanStack Query | 5.22.2 | Data Fetching<br/>Suspense |
| Biome | 1.5.3 | Linter<br/>Formatter |
| Mock Service Worker | 2.2.1 | API Mocking |
| Node | 20.10.0 | JavaScriptランタイム環境 |

# 前提
1. Visual Studio Code
2. Volta

- Visual Studio Codeダウンロード  
https://code.visualstudio.com/download

- Voltaインストール
```
% curl https://get.volta.sh | bash
```

# 開発環境起動
```
% yarn install
% yarn dev
```

# Build
```
% yarn build
```

# TODO
- ヘッドレスUI
  - shadcn(tailWind系) / ark(panda系)
- スタイル
  - Tailwind or Panda
- Vitest
- Storybook
  - 不要かも
