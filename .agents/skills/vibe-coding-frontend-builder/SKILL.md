---
name: vibe-coding-frontend-builder
description: 當使用者想要從零開始快速打造輕量級前端 Web 應用、建立版本控制、自動發布至 GitHub Pages，並導入 AI 規範治理與 UX 驗證工作流時使用。
---

# VibeCoding 前端應用開發 Skill

本 Skill 封裝了「自然語言驅動開發（VibeCoding）」從零到一交付現代 Web 應用的標準工程範式。協助開發者在不依賴龐大建置環境的前提下，快速完成程式碼結構化、隱私隔離、Git 版本控制、雲端零成本發布、規範治理與自動化體驗驗收。

---

## 適用情境

* **輕量級單頁應用 (Single Page Applications)**：各類純前端、免伺服器之互動式 Web 工具。
* **內部管理儀表板 (Admin & Operations Dashboards)**：依賴 LocalStorage 或第三方 API 之營運看板、排程系統、表單登記工具。
* **概念驗證與黑客松原型 (PoC / MVP / Prototypes)**：需在數小時內將抽象構想轉化為具備公開訪問連結之產品原型。
* **個人生產力與離線應用 (Local-First Productivity Apps)**：離線可用、極度注重反應速度與隱私安全的生產力工具。
* **互動作品集與活動展示頁 (Portfolios & Landing Pages)**：適合部署於 GitHub Pages 之靜態自適應品牌或專案頁面。

---

## 核心方法論（四心法）

1. **環境前置，零信任驗證**：在撰寫任何邏輯之前，先確認工具鏈與憑證通路就緒，拒絕虛假假設。
2. **結構解耦，防護優先存檔**：程式碼嚴格拆分三層架構，先透過 `.gitignore` 建立隱私防護圈，再行提交存檔。
3. **規範立行，標準驅動交付**：先定義規則標準（Rules），再讓 AI 依循約束產出高品質代碼與專案文件。
4. **流程固化，閉環自動驗收**：將經驗轉化為可重複執行的 Workflow，並以探針驗證真實線上可用性。

---

## 步驟序列

### 步驟一：環境鏈路與憑證檢查 (Environment & Auth Setup)

* **目的**：確認開發環境中版本控制（Git）與雲端介接工具（GitHub CLI）已安裝且正常運作。
* **Prompt 模板**：
  ```text
  幫我確認開發環境中的 git 和 github cli 是否已正確安裝，並檢查目前的登入狀態。
  ```
* **成功判斷標準**：
  * 終端機能回傳 `git --version` 與 `gh --version` 之有效版本號。
  * 明確獲知目前帳號的登入連線狀態。

---

### 步驟二：資產結構重構與隱私隔離 (Structure & Privacy Safeguard)

* **目的**：將單一混合代碼解耦為標準前端三層結構，並排除工作區內無關的個人或敏感檔案。
* **Prompt 模板**：
  ```text
  我的 [應用類型描述，例如：預約排程工具 / 班級管理系統] 程式碼目前集中在 [目前檔案名稱，例如：index.html]，請幫我：
  1. 將其拆分為標準的結構 (index.html)、樣式 (style.css) 與邏輯 (app.js) 三個獨立檔案。
  2. 檢查目錄，建立合適的 .gitignore 檔案，排除所有非專案檔案（如個人文件、圖片或系統檔），避免洩漏。
  ```
* **成功判斷標準**：
  * 目錄中產出獨立且引用的 `index.html`、`style.css`、`app.js`。
  * 產出 `.gitignore`，且執行 `git status` 時僅顯示專案相關的三個檔案與 `.gitignore`。

---

### 步驟三：本地版本庫初始化與首次基線存檔 (Local VCS & Baseline Commit)

* **目的**：在專案目錄建立 Git 版本控制，配置使用者身分並建立第一個安全快照點。
* **Prompt 模板**：
  ```text
  請幫我在專案目錄初始化 Git，設定使用者名稱為 "[你的英文暱稱]"、Email 為 "[你的 Email]"，將前端專案檔案加入追蹤，並建立第一次 commit，訊息為 "[Commit 訊息，例如：Initial commit: Setup project structure]"。
  ```
* **成功判斷標準**：
  * 專案內產生 `.git` 目錄。
  * `git status` 顯示 `working tree clean`，`git log` 可見首次 Commit 紀錄。

---

### 步驟四：雲端倉庫建立與自動化發布 (GitHub Repo & Pages Deployment)

* **目的**：自動建立遠端 GitHub 儲存庫、推送程式碼並啟用 GitHub Pages 免費靜態託管。
* **Prompt 模板**：
  ```text
  請幫我透過 GitHub CLI 建立一個名為 [儲存庫名稱，例如：schedule-app] 的公開 (Public) 儲存庫，將本地程式碼推送到 main 分支，開啟 GitHub Pages，並確認線上網址可以正常訪問。
  ```
* **成功判斷標準**：
  * 遠端成功建立公開倉庫並綁定為 `origin`。
  * 透過 GitHub API 或 HTTP 探針確認 GitHub Pages 狀態為 `built`，且回傳 `HTTP 200`。

---

### 步驟五：工程治理與文件規範落地 (Governance & Rules Definition)

* **目的**：建立專案的 AI 協作規範檔案，約束後續代碼風格、排版細節與文件格式。
* **Prompt 模板**：
  ```text
  請在專案目錄底下建立 AI 規則檔案 .agents/rules/docs-writing.md，定義本專案撰寫技術文件（README、API、程式碼註解）的排版原則、語言風格、章節架構與提示框標準。
  ```
* **成功判斷標準**：
  * 成功產出具備 YAML Frontmatter（如 `trigger: model_decision`）之標準規則檔案。

---

### 步驟六：規範驅動的產品規格書交付 (Standardized README Generation)

* **目的**：嚴格遵循剛剛建立的規範，為專案自動產出完整且專業的門面說明文件。
* **Prompt 模板**：
  ```text
  請嚴格依照 .agents/rules/docs-writing.md 的規範，為這個 [專案名稱] 撰寫繁體中文的 README.md，包含線上 Demo 連結、核心功能清單、技術架構樹與快速上手說明，並提交推送到 GitHub。
  ```
* **成功判斷標準**：
  * 產出結構嚴謹、包含目錄樹與功能亮點的 `README.md`。
  * 檔案成功 Commit 並推送至遠端 `main` 分支。

---

### 步驟七：SOP 工作流程資產化與自動化驗收 (Workflow Assetization & UX Audit)

* **目的**：將體驗檢核流程固化為可複用的 Workflow 檔案，並自動觸發一次全方位的 UX 驗收。
* **Prompt 模板**：
  ```text
  1. 請在專案目錄建立體驗審查工作流程檔案 .agents/workflows/ux-check.md，制定包含響應式排版、防呆機制、鍵盤操作 (a11y) 與資料持久化的檢核清單。
  2. 建立完成後，請立即針對目前的專案執行這份審查流程，產出一份包含嚴重程度評級與修復建議的「UX 體驗審查報告」。
  ```
* **成功判斷標準**：
  * 產出 `.agents/workflows/ux-check.md`。
  * 產出清晰列出 Critical / Medium / Polish 等級問題的體驗驗收報告與具體修復行動清單。

---

## 常見問題處理

### 問題一：終端機 CLI 未登入或授權中斷（「明明網頁登入過卻報錯」）
* **成因**：瀏覽器 Session 與命令列工具（GitHub CLI）憑證相互隔離，`gh` 需要獨立授權。
* **標準解法**：
  在終端機執行免輸入參數的單行 Web 授權指令：
  ```bash
  gh auth login --web -p https
  ```
  於終端機按 `Enter` 自動開啟瀏覽器，輸入畫面上呈現的 8 位數的一次性代碼（One-time Code）並點擊授權即可。

### 問題二：工作區混雜個人機密文件，面臨外洩風險
* **成因**：在桌面或下載目錄等共用路徑開發，直接執行 `git add .` 會將無關的 PDF、簡報、履歷全數提交。
* **標準解法**：
  在任何 `git add` 操作前，強制優先檢查目錄結構並建立精確的 `.gitignore`：
  ```gitignore
  # 系統檔案
  .DS_Store
  Thumbs.db
  # 隱私與非專案文件
  *.pdf
  *.docx
  *.pptx
  *.key
  *.xlsx
  *.env*
  ```
  並且在第一次提交時明確指定檔案名稱（例如 `git add index.html style.css app.js .gitignore`），拒絕盲目全選。

### 問題三：GitHub Pages 啟用後點開呈現 404
* **成因**：GitHub 後端容器建置靜態站點需要 30 至 60 秒的排程延遲，API 剛開通時資源尚未部署完畢。
* **標準解法**：
  不要立即將網址丟給使用者，應使用 CLI 進行狀態探測：
  ```bash
  gh api repos/<owner>/<repo>/pages --jq .status
  ```
  當狀態由 `building` 轉為 `built`，並透過 `curl -s -I <pages-url>` 確認回傳 `HTTP/2 200` 後，再交付給使用者。

### 問題四：純前端資料匯入無法重複觸發與 Modal 焦點陷阱
* **成因**：HTML `<input type="file">` 讀取相同檔案時不會觸發 `change` 事件；自訂 Modal 缺乏 `Escape` 監聽。
* **標準解法**：
  1. 檔案讀取完畢後，強制清空 input 值：
     ```javascript
     document.getElementById('fileInput').value = '';
     ```
  2. 監聽全域鍵盤事件，支援無障礙快速退出：
     ```javascript
     document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape') closeModal();
     });
     ```
