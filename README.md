# 智慧班級管理系統 (Classroom Hub)

智慧班級管理系統（Classroom Hub）是一套專為導師與科任教師打造的輕量化、現代化網頁管理工具。免安裝任何伺服器或資料庫，開箱即用，全面涵蓋出缺勤點名、座位配置、學生名冊、課堂加扣分獎勵以及多元實用的課堂互動工具。

🌐 **線上展示 (Demo)**：[https://rongrong33.github.io/kanban-app/](https://rongrong33.github.io/kanban-app/)  
📦 **原始碼倉庫 (Repository)**：[https://github.com/RongRong33/kanban-app](https://github.com/RongRong33/kanban-app)

---

## 🌟 核心特色 (Features)

* 📊 **班級概況儀表板 (Dashboard)**：
  * 即時統計班級總人數、今日到校出席率、缺席假別人數與現任幹部數。
  * 出缺席即時視覺化進度條（出席、事假、病假、遲到、曠課）。
  * 班級動態待辦事項與重要公告提醒清單。

* 👥 **學生名冊管理 (Students Management)**：
  * 完整紀錄學生座號、姓名、性別、幹部職務、榮譽積分、家長緊急聯絡電話與個別備註（如過敏或特殊需求）。
  * 支援關鍵字即時搜尋（座號/姓名/幹部）以及性別、幹部快速過濾篩選。
  * 彈出式視窗（Modal）便利新增與編輯學生資訊。

* 📝 **智能點名簽到簿 (Attendance Tracker)**：
  * 支援自選日期檢視與點名，紀錄自動保存。
  * 提供「一鍵全員到齊」快速標記功能。
  * 點擊學生卡片即可循環切換出缺席狀態，顏色清楚標示。

* 🪑 **教室座位配置圖 (Seating Chart)**：
  * 直觀對照講台與黑板方位，標準化 6 排 5 列座位配置。
  * 智慧換位機制：依序點選兩位同學座位即可完成**快速互換對調**。
  * 支援「依座號排序」與「隨機洗牌換位」，並可直接以瀏覽器格式化列印。

* ⭐ **榮譽表現榜與快速獎懲 (Leaderboard & Points)**：
  * 自動依累積點數計算即時班級英雄榜。
  * 提供 6 組常用情境快速加減分按鈕（課堂踴躍、作業優良、熱心助人、表現優異、違規吵鬧、未交作業）。
  * 具備詳細的加扣分歷史紀錄時間軸。

* 🎲 **課堂互動工具箱 (Classroom Tools)**：
  * **隨機抽籤機**：可自選是否自動排除今日請假缺席學生，並保留已抽名單防重複。
  * **活動倒數計時器**：提供 1、3、5、10、15 分鐘快速設定與暫停/繼續控制。
  * **隨機分組小幫手**：自訂分組組數，瞬間產生均勻隨機分組名單。

* 💾 **完整資料備份與安全性 (Data Security & Backup)**：
  * 資料預設存於瀏覽器 `localStorage`，重新整理或關閉視窗不遺失。
  * 支援將全班資料一鍵匯出為標準 `JSON` 備份檔，亦可隨時匯入還原。
  * 內建 30 人完整示範資料重設按鈕，方便體驗與測試。

---

## 🛠️ 技術堆疊 (Tech Stack)

* **HTML5**：語意化標籤結構與響應式視埠設定。
* **CSS3**：
  * 現代原生 CSS 變數（CSS Variables）系統，維護統一主題色調。
  * Flexbox 與 CSS Grid 彈性排版，完美適配電腦與平板操作。
  * 自訂滾動條與平滑動態效果。
* **JavaScript (Vanilla JS - ES6+)**：
  * 純原生 JavaScript，零外部相依套件（Zero Dependencies），載入速度極快。
  * 模組化狀態管理（`appState`）與資料驅動渲染架構。
  * 原生 `localStorage` 與 `FileReader API` 資料持久化支援。

---

## 📁 專案目錄結構 (Project Structure)

```text
kanban-app/
├── index.html        # 主頁面結構與 DOM 配置
├── style.css         # 系統樣式表、佈局與視覺主題變數
├── app.js            # 核心業務邏輯、狀態管理與互動事件處理
├── .gitignore        # Git 忽略檔案規則（過濾系統檔與個人文件）
├── .agents/          # AI 助理自訂規則庫
│   └── rules/
│       └── docs-writing.md # 文件撰寫與維護規範
└── README.md         # 專案說明文件
```

---

## 🚀 快速開始 / 本地執行 (Getting Started)

本專案完全由前端靜態網頁技術構成，無需安裝 Node.js、npm 或建置後端伺服器。

### 1. 取得專案原始碼
```bash
git clone https://github.com/RongRong33/kanban-app.git
cd kanban-app
```

### 2. 開啟專案
直接透過瀏覽器開啟 `index.html` 即可開始使用：

* **macOS**：
  ```bash
  open index.html
  ```
* **Windows**：
  ```cmd
  start index.html
  ```
* **VS Code 使用者**：
  可安裝 `Live Server` 擴充套件，在 `index.html` 上按右鍵選擇 **Open with Live Server**。

---

## 🌐 部署與線上版本 (Deployment)

專案已透過 **GitHub Pages** 完成全自動化託管與發布：

1. 於 GitHub 倉庫進入 **Settings** > **Pages**。
2. Build and deployment 來源選擇 **Deploy from a branch**。
3. 分支選取 `main`，路徑選取 `/ (root)` 並儲存。
4. 每次推送（`git push`）最新程式碼到 `main` 分支時，GitHub 會自動更新線上站點。

> [!NOTE]
> 線上版本使用瀏覽器本地儲存（`localStorage`），不同裝置或瀏覽器間若需轉移資料，可善用右上角的 **「💾 匯出備份」** 與 **「📂 匯入備份」** 功能。

---

## 🤝 參與貢獻與授權 (License & Contributing)

歡迎提出 Issue 或提交 Pull Request 共同完善功能！

* **授權條款**：本專案採用 [MIT License](https://opensource.org/licenses/MIT) 開源授權，歡迎自由修改與應用於教育場景。
* **作者**：[RongRong33](https://github.com/RongRong33)
