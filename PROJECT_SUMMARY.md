# KTV Promo Site — 項目總覽

## 基本資料

- **項目名稱**：KTV Promo Site（MidnightRose 午夜玫瑰暗黑旅遊團）
- **項目路徑**：`C:\Users\User\Documents\program\ktv-promo-site`
- **項目類型**：純前端靜態宣傳站
- **主要語言**：繁體中文（少量簡體文案）
- **Git 分支**：`main`

## 技術棧

| 類別 | 內容 |
|---|---|
| 前端 | 原生 HTML + CSS + JavaScript（無框架） |
| 建置工具 | 無（無 `package.json`、無打包） |
| 資料層 | 靜態 JSON 檔（`data/girls.json`），由前端 fetch 渲染 |
| 本地預覽 | `npx serve .`（避免 `fetch` 的 CORS 限制） |

## 目錄結構

```
ktv-promo-site/
├── index.html              # 首頁
├── about.html              # 關於我們
├── girls.html              # 好店與好妹
├── ducks.html              # 鴨子專區
├── README.md               # 使用說明
├── assets/
│   ├── css/
│   │   └── style.css       # 全站樣式
│   ├── js/
│   │   └── main.js         # 卡片渲染邏輯
│   └── images/
│       ├── banners/        # Banner 圖（1 張）
│       ├── figma/          # Figma 匯出圖（30 張）
│       └── hero/           # 頁首／背景圖（6 張）
└── data/
    └── girls.json          # 卡片資料源
```

## 頁面說明

| 檔案 | 行數 | 功能描述 |
|---|---|---|
| `index.html` | 100 | 首頁：Hero 區、適合人群圖示列、價值卡、精選推薦卡片網格、關於、聯絡 |
| `about.html` | 109 | 「關於我們」頁，使用 Figma 素材重建 |
| `girls.html` | 100 | 「好店與好妹」頁 |
| `ducks.html` | 133 | 「鴨子專區」頁（首屏視覺已優化） |
| `assets/css/style.css` | 784 | 全站樣式，行動裝置（H5）優先 |
| `assets/js/main.js` | 36 | 載入 JSON、依 `visible` 過濾、生成卡片 DOM |

## 資料格式

`data/girls.json`：

```json
{
  "profiles": [
    {
      "name": "Rose",
      "image": "./assets/images/figma/xxx.jpg",
      "link": "https://example.com/rose",
      "visible": true
    }
  ]
}
```

| 欄位 | 說明 |
|---|---|
| `name` | 卡片顯示名稱 |
| `image` | 圖片路徑 |
| `link` | 點擊跳轉的 URL |
| `visible` | 是否在頁面顯示（`false` 隱藏） |

目前共 **4 筆**：Rose / Mika / Nana / Suki。

## 日常維護流程

1. 將新圖片放入 `assets/images/`
2. 編輯 `data/girls.json`，新增／修改／隱藏卡片
3. 重新整理瀏覽器即生效（不需重新建置）

## 近期 Commits

```
4b818e5  feat: optimize ducks page first-screen visuals
b06a3c4  feat: rebuild about and ducks pages with figma assets
4a2b856  feat: update mobile h5 pages and assets
390e45f  feat: initialize ktv promo site starter
f93e804  Initial commit
```

## 待辦事項（來自 README）

- [ ] 接入真實聯絡方式（Zalo / WhatsApp / Telegram）
- [ ] 中文 ／ 越南語切換
- [ ] 接入 Analytics（Google Analytics 或 Plausible）
- [ ] 部署工作流（Netlify / Vercel）

## 啟動指令

```bash
cd ktv-promo-site
npx serve .
```

然後在瀏覽器開啟提示的 localhost URL。
