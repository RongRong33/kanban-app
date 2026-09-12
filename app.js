    // 預設 30 位學生的完整示範資料
    const DEFAULT_STUDENTS = [
      { id: 1, seatNo: 1, name: "林承恩", gender: "男", cadre: "班長", points: 26, phone: "0912-111-001 (林父)", notes: "熱心助人，統籌全班事務" },
      { id: 2, seatNo: 2, name: "陳品言", gender: "女", cadre: "副班長", points: 24, phone: "0912-111-002 (陳母)", notes: "細心認真，協助聯絡簿檢查" },
      { id: 3, seatNo: 3, name: "張家豪", gender: "男", cadre: "風紀股長", points: 18, phone: "0912-111-003 (張父)", notes: "維持早自習與午休秩序" },
      { id: 4, seatNo: 4, name: "黃子涵", gender: "女", cadre: "學藝股長", points: 22, phone: "0912-111-004 (黃母)", notes: "負責教室日誌與佈告欄設計" },
      { id: 5, seatNo: 5, name: "王廷宇", gender: "男", cadre: "衛生股長", points: 19, phone: "0912-111-005 (王父)", notes: "督導外掃區與資源回收" },
      { id: 6, seatNo: 6, name: "李欣怡", gender: "女", cadre: "體育股長", points: 20, phone: "0912-111-006 (李母)", notes: "體育課借還器材與集合點名" },
      { id: 7, seatNo: 7, name: "劉宇翔", gender: "男", cadre: "總務股長", points: 15, phone: "0912-111-007 (劉父)", notes: "班費保管與班級冷氣卡管理" },
      { id: 8, seatNo: 8, name: "吳冠廷", gender: "男", cadre: "資訊股長", points: 25, phone: "0912-111-008 (吳母)", notes: "管理教室投影機與電子白板" },
      { id: 9, seatNo: 9, name: "蔡依婷", gender: "女", cadre: "輔導股長", points: 17, phone: "0912-111-009 (蔡母)", notes: "傳達輔導室各項宣導資訊" },
      { id: 10, seatNo: 10, name: "楊子儀", gender: "女", cadre: "英文小老師", points: 28, phone: "0912-111-010 (楊父)", notes: "英語朗讀競賽校隊" },
      { id: 11, seatNo: 11, name: "許書豪", gender: "男", cadre: "數學小老師", points: 21, phone: "0912-111-011 (許母)", notes: "數理邏輯強，樂於解題" },
      { id: 12, seatNo: 12, name: "鄭羽彤", gender: "女", cadre: "", points: 14, phone: "0912-111-012 (鄭父)", notes: "文靜乖巧，繪畫天賦佳" },
      { id: 13, seatNo: 13, name: "謝承翰", gender: "男", cadre: "", points: 16, phone: "0912-111-013 (謝母)", notes: "籃球校隊主力成員" },
      { id: 14, seatNo: 14, name: "洪詩涵", gender: "女", cadre: "", points: 19, phone: "0912-111-014 (洪父)", notes: "作業字體工整端正" },
      { id: 15, seatNo: 15, name: "曾柏宇", gender: "男", cadre: "", points: 12, phone: "0912-111-015 (曾母)", notes: "對昆蟲與自然科學極有興趣" },
      { id: 16, seatNo: 16, name: "彭雅筑", gender: "女", cadre: "", points: 18, phone: "0912-111-016 (彭父)", notes: "活潑開朗，擅長鋼琴伴奏" },
      { id: 17, seatNo: 17, name: "賴冠宇", gender: "男", cadre: "", points: 11, phone: "0912-111-017 (賴母)", notes: "上課有時需提醒專注" },
      { id: 18, seatNo: 18, name: "邱子庭", gender: "女", cadre: "", points: 23, phone: "0912-111-018 (邱母)", notes: "國語文朗讀班級代表" },
      { id: 19, seatNo: 19, name: "江彥霆", gender: "男", cadre: "", points: 15, phone: "0912-111-019 (江父)", notes: "喜愛桌遊與魔術方塊" },
      { id: 20, seatNo: 20, name: "徐若瑄", gender: "女", cadre: "", points: 20, phone: "0912-111-020 (徐母)", notes: "熱心打掃，整潔評分常獲表揚" },
      { id: 21, seatNo: 21, name: "郭品希", gender: "男", cadre: "", points: 14, phone: "0912-111-021 (郭父)", notes: "具備田徑短跑天賦" },
      { id: 22, seatNo: 22, name: "潘冠廷", gender: "男", cadre: "", points: 17, phone: "0912-111-022 (潘母)", notes: "歷史故事涉獵廣泛" },
      { id: 23, seatNo: 23, name: "沈佩萱", gender: "女", cadre: "", points: 25, phone: "0912-111-023 (沈父)", notes: "擔任合唱團團員" },
      { id: 24, seatNo: 24, name: "呂宗翰", gender: "男", cadre: "", points: 13, phone: "0912-111-024 (呂母)", notes: "課堂思考敏捷" },
      { id: 25, seatNo: 25, name: "葉思妤", gender: "女", cadre: "", points: 16, phone: "0912-111-025 (葉父)", notes: "對海鮮輕微過敏需留意" },
      { id: 26, seatNo: 26, name: "蘇家偉", gender: "男", cadre: "", points: 19, phone: "0912-111-026 (蘇母)", notes: "各科發展均衡穩定" },
      { id: 27, seatNo: 27, name: "何羽萱", gender: "女", cadre: "", points: 21, phone: "0912-111-027 (何父)", notes: "閱讀心得寫作優良" },
      { id: 28, seatNo: 28, name: "魏子傑", gender: "男", cadre: "", points: 15, phone: "0912-111-028 (魏母)", notes: "熱愛手作與科學實驗" },
      { id: 29, seatNo: 29, name: "羅以婷", gender: "女", cadre: "", points: 22, phone: "0912-111-029 (羅父)", notes: "有禮貌，敬重師長" },
      { id: 30, seatNo: 30, name: "韓承運", gender: "男", cadre: "", points: 18, phone: "0912-111-030 (韓母)", notes: "羽球愛好者" }
    ];

    const DEFAULT_NOTICES = [
      { id: 1, text: "週五前請繳交校外教學家長同意書與保險回條", done: false },
      { id: 2, text: "本週三早自習進行國文第一單元平時測驗", done: false },
      { id: 3, text: "請衛生股長週四第七節召集外掃區同學大掃除", done: true },
      { id: 4, text: "提醒全班攜帶美術課水彩用具與調色盤", done: false }
    ];

    // 全域 App State
    let appState = {
      className: "三年 2 班",
      students: [],
      attendance: {}, // { 'YYYY-MM-DD': { studentId: 'present'|'sick'|'personal'|'late'|'absent' } }
      seats: [], // 30 個位置的學生 ID 陣列 (length 30)
      pointLogs: [],
      notices: []
    };

    // 初始化載入
    function initApp() {
      // 顯示當前日期
      const now = new Date();
      const dateStr = now.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
      document.getElementById('currentDateStr').innerText = dateStr;

      const todayIso = getTodayIso();
      document.getElementById('attDatePicker').value = todayIso;

      loadFromStorage();
      renderAll();
    }

    function getTodayIso() {
      const d = new Date();
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    // 儲存與讀取 LocalStorage
    function saveToStorage() {
      localStorage.setItem('classroom_hub_data', JSON.stringify(appState));
    }

    function loadFromStorage() {
      const data = localStorage.getItem('classroom_hub_data');
      if (data) {
        try {
          appState = JSON.parse(data);
        } catch (e) {
          console.error("載入失敗，使用預設資料", e);
          resetToDefaultData();
        }
      } else {
        resetToDefaultData();
      }

      // 確保今日點名有初值
      const today = getTodayIso();
      if (!appState.attendance[today]) {
        appState.attendance[today] = {};
        appState.students.forEach(s => {
          appState.attendance[today][s.id] = 'present';
        });
      }

      // 確保座位表長度為 30
      if (!appState.seats || appState.seats.length !== 30) {
        appState.seats = appState.students.map(s => s.id);
        while (appState.seats.length < 30) appState.seats.push(null);
      }
    }

    function resetToDefaultData() {
      appState.className = "三年 2 班";
      appState.students = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
      appState.notices = JSON.parse(JSON.stringify(DEFAULT_NOTICES));
      appState.attendance = {};
      const today = getTodayIso();
      appState.attendance[today] = {};
      appState.students.forEach(s => {
        appState.attendance[today][s.id] = (s.id === 15 ? 'sick' : (s.id === 24 ? 'late' : 'present'));
      });
      appState.seats = appState.students.map(s => s.id);
      appState.pointLogs = [
        { id: 1, studentName: "林承恩", delta: 2, reason: "課堂發言踴躍", time: "今日 09:15" },
        { id: 2, studentName: "楊子儀", delta: 3, reason: "作業優良整潔", time: "今日 10:20" },
        { id: 3, studentName: "賴冠宇", delta: -1, reason: "上課吵鬧違規", time: "今日 11:05" }
      ];
      saveToStorage();
    }

    function confirmResetData() {
      if (confirm("確定要重設為預設的 30 人班級示範資料嗎？現有自訂更動將會被覆蓋。")) {
        resetToDefaultData();
        renderAll();
        alert("已成功還原為預設示範資料！");
      }
    }

    function exportData() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `班級管理_${appState.className}_${getTodayIso()}.json`);
      dlAnchor.click();
    }

    function importData(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const parsed = JSON.parse(e.target.result);
          if (parsed.students && Array.isArray(parsed.students)) {
            appState = parsed;
            saveToStorage();
            renderAll();
            alert("班級資料匯入成功！");
          } else {
            alert("匯入的 JSON 格式不正確！");
          }
        } catch (err) {
          alert("讀取檔案失敗：" + err.message);
        }
      };
      reader.readAsText(file);
    }

    // 分頁切換
    function switchTab(tabId) {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      const targetBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick')?.includes(tabId));
      if (targetBtn) targetBtn.classList.add('active');

      const pane = document.getElementById(`tab-${tabId}`);
      if (pane) pane.classList.add('active');

      // 每次切換更新特定分頁數據
      if (tabId === 'dashboard') updateDashboard();
      if (tabId === 'seats') renderSeats();
      if (tabId === 'points') renderPoints();
      if (tabId === 'attendance') renderAttendance();
    }

    // 全部重繪
    function renderAll() {
      document.getElementById('txtClassName').innerText = appState.className;
      updateDashboard();
      renderStudentTable();
      renderAttendance();
      renderSeats();
      renderPoints();
      renderNotices();
      populateStudentSelects();
    }

    /* ---------------- 1. Dashboard 概況 ---------------- */
    function updateDashboard() {
      const total = appState.students.length;
      document.getElementById('dashTotalStudents').innerText = total;

      const cadres = appState.students.filter(s => s.cadre && s.cadre.trim() !== "").length;
      document.getElementById('dashCadreCount').innerText = cadres;

      const today = getTodayIso();
      const todayAtt = appState.attendance[today] || {};

      let p = 0, per = 0, sick = 0, late = 0, abs = 0;
      appState.students.forEach(s => {
        const status = todayAtt[s.id] || 'present';
        if (status === 'present') p++;
        else if (status === 'personal') per++;
        else if (status === 'sick') sick++;
        else if (status === 'late') late++;
        else if (status === 'absent') abs++;
      });

      const leaveTotal = per + sick + abs;
      document.getElementById('dashLeaveCount').innerText = leaveTotal;

      const rate = total > 0 ? Math.round(((p + late) / total) * 100) : 100;
      document.getElementById('dashPresentRate').innerText = `${rate}%`;

      // 更新即時數字
      document.getElementById('cntPresent').innerText = p;
      document.getElementById('cntPersonal').innerText = per;
      document.getElementById('cntSick').innerText = sick;
      document.getElementById('cntLate').innerText = late;
      document.getElementById('cntAbsent').innerText = abs;

      // 比例條
      if (total > 0) {
        document.getElementById('barPresent').style.width = `${(p / total) * 100}%`;
        document.getElementById('barPersonal').style.width = `${(per / total) * 100}%`;
        document.getElementById('barSick').style.width = `${(sick / total) * 100}%`;
        document.getElementById('barLate').style.width = `${(late / total) * 100}%`;
        document.getElementById('barAbsent').style.width = `${(abs / total) * 100}%`;
      }
    }

    function renderNotices() {
      const list = document.getElementById('noticeList');
      list.innerHTML = "";
      appState.notices.forEach(n => {
        const li = document.createElement('li');
        li.className = `notice-item ${n.done ? 'done' : ''}`;
        li.innerHTML = `
          <input type="checkbox" ${n.done ? 'checked' : ''} onchange="toggleNotice(${n.id})" style="margin-top: 3px; cursor: pointer;">
          <span style="flex:1;">${escapeHtml(n.text)}</span>
          <button onclick="deleteNotice(${n.id})" style="background:none; border:none; color:#94a3b8; cursor:pointer; font-size: 0.8rem;">✕</button>
        `;
        list.appendChild(li);
      });
    }

    function toggleNotice(id) {
      const n = appState.notices.find(x => x.id === id);
      if (n) {
        n.done = !n.done;
        saveToStorage();
        renderNotices();
      }
    }

    function addNoticePrompt() {
      const text = prompt("請輸入新增的班級提醒或公告：");
      if (text && text.trim()) {
        appState.notices.unshift({
          id: Date.now(),
          text: text.trim(),
          done: false
        });
        saveToStorage();
        renderNotices();
      }
    }

    function deleteNotice(id) {
      appState.notices = appState.notices.filter(n => n.id !== id);
      saveToStorage();
      renderNotices();
    }

    /* ---------------- 2. 學生名冊管理 ---------------- */
    function renderStudentTable() {
      const tbody = document.getElementById('studentTableBody');
      const search = document.getElementById('studentSearchInput').value.toLowerCase().trim();
      const gender = document.getElementById('genderFilter').value;
      const cadre = document.getElementById('cadreFilter').value;

      let filtered = appState.students.filter(s => {
        const matchSearch = (!search) ||
          s.name.toLowerCase().includes(search) ||
          String(s.seatNo).includes(search) ||
          (s.cadre && s.cadre.toLowerCase().includes(search));
        const matchGender = (gender === 'all') || (s.gender === gender);
        const matchCadre = (cadre === 'all') || (cadre === 'cadre' && s.cadre && s.cadre.trim() !== "");
        return matchSearch && matchGender && matchCadre;
      });

      // 依座號排序
      filtered.sort((a, b) => a.seatNo - b.seatNo);

      tbody.innerHTML = "";
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--text-muted);">無符合條件之學生</td></tr>`;
        return;
      }

      filtered.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><b>#${s.seatNo}</b></td>
          <td><b>${escapeHtml(s.name)}</b></td>
          <td><span class="badge ${s.gender === '男' ? 'badge-boy' : 'badge-girl'}">${s.gender}</span></td>
          <td>${s.cadre ? `<span class="badge badge-cadre">⭐ ${escapeHtml(s.cadre)}</span>` : '<span style="color:#94a3b8;">-</span>'}</td>
          <td><b style="color:var(--primary);">${s.points || 0}</b> 分</td>
          <td style="color:var(--text-muted); font-size:0.85rem;">${escapeHtml(s.phone || '-')}</td>
          <td style="color:var(--text-muted); font-size:0.85rem;">${escapeHtml(s.notes || '-')}</td>
          <td style="text-align:center;">
            <button class="btn btn-outline btn-sm" onclick="editStudent(${s.id})">編輯</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${s.id})">刪除</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function openStudentModal(student = null) {
      const modal = document.getElementById('studentModal');
      document.getElementById('studentModalTitle').innerText = student ? "編輯學生資料" : "新增學生資料";
      document.getElementById('editStudentId').value = student ? student.id : "";
      document.getElementById('modalSeatNo').value = student ? student.seatNo : (appState.students.length + 1);
      document.getElementById('modalName').value = student ? student.name : "";
      document.getElementById('modalGender').value = student ? student.gender : "男";
      document.getElementById('modalCadre').value = student ? (student.cadre || "") : "";
      document.getElementById('modalPhone').value = student ? (student.phone || "") : "";
      document.getElementById('modalNotes').value = student ? (student.notes || "") : "";
      modal.classList.add('active');
    }

    function closeStudentModal() {
      document.getElementById('studentModal').classList.remove('active');
    }

    function editStudent(id) {
      const s = appState.students.find(x => x.id === id);
      if (s) openStudentModal(s);
    }

    function deleteStudent(id) {
      const s = appState.students.find(x => x.id === id);
      if (!s) return;
      if (confirm(`確定要刪除座號 ${s.seatNo} 號「${s.name}」同學的資料嗎？`)) {
        appState.students = appState.students.filter(x => x.id !== id);
        // 清理座位
        appState.seats = appState.seats.map(seatId => seatId === id ? null : seatId);
        saveToStorage();
        renderAll();
      }
    }

    function saveStudentForm() {
      const id = document.getElementById('editStudentId').value;
      const seatNo = parseInt(document.getElementById('modalSeatNo').value, 10);
      const name = document.getElementById('modalName').value.trim();
      const gender = document.getElementById('modalGender').value;
      const cadre = document.getElementById('modalCadre').value.trim();
      const phone = document.getElementById('modalPhone').value.trim();
      const notes = document.getElementById('modalNotes').value.trim();

      if (!name || isNaN(seatNo)) {
        alert("請填寫正確的座號與姓名！");
        return;
      }

      if (id) {
        // 編輯
        const s = appState.students.find(x => x.id == id);
        if (s) {
          s.seatNo = seatNo;
          s.name = name;
          s.gender = gender;
          s.cadre = cadre;
          s.phone = phone;
          s.notes = notes;
        }
      } else {
        // 新增
        const newStudent = {
          id: Date.now(),
          seatNo,
          name,
          gender,
          cadre,
          points: 0,
          phone,
          notes
        };
        appState.students.push(newStudent);
      }

      saveToStorage();
      closeStudentModal();
      renderAll();
    }

    /* ---------------- 3. 點名簽到簿 ---------------- */
    function getActiveAttDate() {
      return document.getElementById('attDatePicker').value || getTodayIso();
    }

    function loadAttendanceDate() {
      renderAttendance();
      updateDashboard();
    }

    function renderAttendance() {
      const date = getActiveAttDate();
      if (!appState.attendance[date]) {
        appState.attendance[date] = {};
        appState.students.forEach(s => {
          appState.attendance[date][s.id] = 'present';
        });
        saveToStorage();
      }

      const grid = document.getElementById('attStudentGrid');
      grid.innerHTML = "";

      const students = [...appState.students].sort((a, b) => a.seatNo - b.seatNo);
      students.forEach(s => {
        const status = appState.attendance[date][s.id] || 'present';
        const card = document.createElement('div');
        card.className = `att-card ${status}`;
        card.id = `attCard-${s.id}`;

        const statusLabels = {
          present: '出席',
          personal: '事假',
          sick: '病假',
          late: '遲到',
          absent: '曠課'
        };

        card.innerHTML = `
          <div class="att-card-header">
            <div>
              <span style="font-weight:800; font-size:1rem; margin-right:6px;">#${s.seatNo}</span>
              <span style="font-weight:700;">${escapeHtml(s.name)}</span>
              ${s.cadre ? `<span class="badge badge-cadre" style="margin-left:4px;">${escapeHtml(s.cadre)}</span>` : ''}
            </div>
            <span class="badge" style="font-weight:700;">${statusLabels[status]}</span>
          </div>
          <div class="att-status-buttons">
            <button class="btn-status ${status === 'present' ? 'active-present' : ''}" onclick="setAttendanceStatus(${s.id}, 'present')">出席</button>
            <button class="btn-status ${status === 'personal' ? 'active-personal' : ''}" onclick="setAttendanceStatus(${s.id}, 'personal')">事假</button>
            <button class="btn-status ${status === 'sick' ? 'active-sick' : ''}" onclick="setAttendanceStatus(${s.id}, 'sick')">病假</button>
            <button class="btn-status ${status === 'late' ? 'active-late' : ''}" onclick="setAttendanceStatus(${s.id}, 'late')">遲到</button>
            <button class="btn-status ${status === 'absent' ? 'active-absent' : ''}" onclick="setAttendanceStatus(${s.id}, 'absent')">曠課</button>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function setAttendanceStatus(studentId, status) {
      const date = getActiveAttDate();
      if (!appState.attendance[date]) appState.attendance[date] = {};
      appState.attendance[date][studentId] = status;
      saveToStorage();
      renderAttendance();
      updateDashboard();
    }

    function markAllPresent() {
      const date = getActiveAttDate();
      if (!appState.attendance[date]) appState.attendance[date] = {};
      appState.students.forEach(s => {
        appState.attendance[date][s.id] = 'present';
      });
      saveToStorage();
      renderAttendance();
      updateDashboard();
    }

    /* ---------------- 4. 教室座位表 (6排 x 5列 = 30座位) ---------------- */
    let selectedSeatIndex = null;

    function renderSeats() {
      const grid = document.getElementById('seatingGrid');
      grid.innerHTML = "";

      // 預設 30 個座位
      for (let i = 0; i < 30; i++) {
        const studentId = appState.seats[i];
        const student = studentId ? appState.students.find(s => s.id === studentId) : null;

        const box = document.createElement('div');
        box.className = `seat-box ${student ? 'occupied' : ''} ${selectedSeatIndex === i ? 'selected' : ''}`;
        box.onclick = () => handleSeatClick(i);

        if (student) {
          box.innerHTML = `
            <div class="seat-num">#${student.seatNo}</div>
            <div class="seat-name">${escapeHtml(student.name)}</div>
            <div class="seat-tag">${student.cadre ? escapeHtml(student.cadre) : (student.gender === '男' ? '男' : '女')}</div>
          `;
        } else {
          box.innerHTML = `
            <div class="seat-num" style="opacity:0.4;">座位 ${i + 1}</div>
            <div style="font-size:0.8rem; color:#94a3b8;">(空位)</div>
          `;
        }
        grid.appendChild(box);
      }
    }

    function handleSeatClick(index) {
      if (selectedSeatIndex === null) {
        selectedSeatIndex = index;
        renderSeats();
      } else if (selectedSeatIndex === index) {
        selectedSeatIndex = null;
        renderSeats();
      } else {
        // 交換兩個座位
        const temp = appState.seats[selectedSeatIndex];
        appState.seats[selectedSeatIndex] = appState.seats[index];
        appState.seats[index] = temp;
        selectedSeatIndex = null;
        saveToStorage();
        renderSeats();
      }
    }

    function autoAssignSeatsByNumber() {
      const sorted = [...appState.students].sort((a, b) => a.seatNo - b.seatNo);
      appState.seats = [];
      for (let i = 0; i < 30; i++) {
        appState.seats[i] = sorted[i] ? sorted[i].id : null;
      }
      selectedSeatIndex = null;
      saveToStorage();
      renderSeats();
    }

    function shuffleSeats() {
      if (!confirm("確定要隨機重新打散全班座位嗎？")) return;
      const studentIds = appState.students.map(s => s.id);
      // Fisher-Yates shuffle
      for (let i = studentIds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [studentIds[i], studentIds[j]] = [studentIds[j], studentIds[i]];
      }
      appState.seats = [];
      for (let i = 0; i < 30; i++) {
        appState.seats[i] = studentIds[i] || null;
      }
      selectedSeatIndex = null;
      saveToStorage();
      renderSeats();
    }

    /* ---------------- 5. 表現排行榜 & 計分 ---------------- */
    function populateStudentSelects() {
      const select = document.getElementById('pointTargetStudent');
      select.innerHTML = "";
      const sorted = [...appState.students].sort((a, b) => a.seatNo - b.seatNo);
      sorted.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.innerText = `#${s.seatNo} ${s.name} (${s.points || 0}分)`;
        select.appendChild(opt);
      });
    }

    function renderPoints() {
      populateStudentSelects();
      const list = document.getElementById('leaderboardList');
      list.innerHTML = "";

      const sorted = [...appState.students].sort((a, b) => (b.points || 0) - (a.points || 0));
      sorted.forEach((s, idx) => {
        const rank = idx + 1;
        const rankClass = rank === 1 ? 'rank-1' : (rank === 2 ? 'rank-2' : (rank === 3 ? 'rank-3' : ''));
        const div = document.createElement('div');
        div.className = "lb-item";
        div.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="lb-rank ${rankClass}">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : rank}</div>
            <div>
              <div style="font-weight:700;">#${s.seatNo} ${escapeHtml(s.name)} ${s.cadre ? `<span class="badge badge-cadre">${escapeHtml(s.cadre)}</span>` : ''}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${s.gender}生</div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.15rem; font-weight:800; color:var(--primary);">${s.points || 0} 分</span>
            <button class="btn btn-outline btn-sm" onclick="quickAddPointFor(${s.id}, 1)">+1</button>
            <button class="btn btn-outline btn-sm" onclick="quickAddPointFor(${s.id}, -1)">-1</button>
          </div>
        `;
        list.appendChild(div);
      });

      renderPointLogs();
    }

    function renderPointLogs() {
      const logContainer = document.getElementById('pointLogList');
      logContainer.innerHTML = "";
      if (!appState.pointLogs || appState.pointLogs.length === 0) {
        logContainer.innerHTML = `<div style="color:var(--text-muted); text-align:center; padding:16px;">尚無紀錄</div>`;
        return;
      }
      appState.pointLogs.slice(0, 20).forEach(log => {
        const item = document.createElement('div');
        item.style.padding = "6px 10px";
        item.style.background = "#f8fafc";
        item.style.borderRadius = "6px";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.innerHTML = `
          <span><b>${escapeHtml(log.studentName)}</b>：${escapeHtml(log.reason)}</span>
          <span style="font-weight:700; color:${log.delta > 0 ? 'var(--success)' : 'var(--danger)'};">
            ${log.delta > 0 ? '+' : ''}${log.delta}
          </span>
        `;
        logContainer.appendChild(item);
      });
    }

    function applyQuickPoint(delta, reason) {
      const studentId = parseInt(document.getElementById('pointTargetStudent').value, 10);
      const student = appState.students.find(s => s.id === studentId);
      if (!student) return;

      student.points = (student.points || 0) + delta;
      appState.pointLogs.unshift({
        id: Date.now(),
        studentName: student.name,
        delta,
        reason,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      saveToStorage();
      renderPoints();
      renderStudentTable();
    }

    function quickAddPointFor(studentId, delta) {
      const student = appState.students.find(s => s.id === studentId);
      if (!student) return;
      student.points = (student.points || 0) + delta;
      appState.pointLogs.unshift({
        id: Date.now(),
        studentName: student.name,
        delta,
        reason: delta > 0 ? "課堂表現優異" : "守則違規",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      saveToStorage();
      renderPoints();
      renderStudentTable();
    }

    function clearPointLogs() {
      if (confirm("確定要清空加扣分歷史紀錄嗎？")) {
        appState.pointLogs = [];
        saveToStorage();
        renderPointLogs();
      }
    }

    /* ---------------- 6. 課堂工具箱 (抽籤機 / 計時器 / 分組) ---------------- */
    let drawnHistory = [];
    let isDrawing = false;

    // Web Audio API 嗶聲音效
    function playBeep(freq = 600, duration = 0.1) {
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {
        // 靜默處理
      }
    }

    function startLuckyDraw() {
      if (isDrawing) return;
      const excludeAbsent = document.getElementById('chkExcludeAbsent').checked;
      const today = getTodayIso();
      const todayAtt = appState.attendance[today] || {};

      let candidatePool = appState.students.filter(s => {
        if (excludeAbsent) {
          const st = todayAtt[s.id] || 'present';
          if (st === 'sick' || st === 'personal' || st === 'absent') return false;
        }
        return true;
      });

      if (candidatePool.length === 0) {
        alert("目前沒有符合條件的學生可抽籤！");
        return;
      }

      isDrawing = true;
      document.getElementById('btnStartDraw').disabled = true;

      const nameEl = document.getElementById('drawName');
      const metaEl = document.getElementById('drawMeta');
      metaEl.innerText = "抽取中...";

      let counter = 0;
      const totalTicks = 25;
      const timer = setInterval(() => {
        const randomPick = candidatePool[Math.floor(Math.random() * candidatePool.length)];
        nameEl.innerText = randomPick.name;
        metaEl.innerText = `#${randomPick.seatNo} (${randomPick.cadre || randomPick.gender})`;
        playBeep(400 + counter * 15, 0.05);

        counter++;
        if (counter >= totalTicks) {
          clearInterval(timer);
          isDrawing = false;
          document.getElementById('btnStartDraw').disabled = false;

          // 確定抽中學生
          const winner = candidatePool[Math.floor(Math.random() * candidatePool.length)];
          nameEl.innerText = winner.name;
          metaEl.innerText = `🎉 恭喜座號 #${winner.seatNo} 號！`;
          playBeep(880, 0.25);

          if (!drawnHistory.includes(winner.name)) {
            drawnHistory.unshift(winner.name);
          }
          document.getElementById('drawnHistoryText').innerText = drawnHistory.join("、 ");
        }
      }, 70);
    }

    function resetDrawHistory() {
      drawnHistory = [];
      document.getElementById('drawnHistoryText').innerText = "尚無";
      document.getElementById('drawName').innerText = "❓";
      document.getElementById('drawMeta').innerText = "按下按鈕開始抽籤";
    }

    /* 計時器 */
    let timerTotalSeconds = 300; // 5分鐘
    let timerCurrentSeconds = 300;
    let timerInterval = null;

    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
      document.getElementById('timerDisplay').innerText = formatTime(timerCurrentSeconds);
    }

    function setTimerMinutes(mins) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById('btnTimerToggle').innerText = "▶ 開始計時";
      timerTotalSeconds = mins * 60;
      timerCurrentSeconds = timerTotalSeconds;
      updateTimerDisplay();
    }

    function toggleTimer() {
      const btn = document.getElementById('btnTimerToggle');
      if (timerInterval) {
        // 暫停
        clearInterval(timerInterval);
        timerInterval = null;
        btn.innerText = "▶ 繼續計時";
      } else {
        // 開始
        if (timerCurrentSeconds <= 0) {
          timerCurrentSeconds = timerTotalSeconds;
        }
        btn.innerText = "⏸ 暫停";
        timerInterval = setInterval(() => {
          timerCurrentSeconds--;
          updateTimerDisplay();
          if (timerCurrentSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            btn.innerText = "▶ 開始計時";
            // 響三聲
            playBeep(880, 0.3);
            setTimeout(() => playBeep(880, 0.3), 400);
            setTimeout(() => playBeep(1100, 0.5), 800);
            alert("⏰ 時間到！課堂計時結束！");
          }
        }, 1000);
      }
    }

    function resetTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById('btnTimerToggle').innerText = "▶ 開始計時";
      timerCurrentSeconds = timerTotalSeconds;
      updateTimerDisplay();
    }

    /* 隨機分組 */
    function generateGroups() {
      const countInput = document.getElementById('groupCountInput');
      const numGroups = parseInt(countInput.value, 10);
      if (isNaN(numGroups) || numGroups < 2) {
        alert("組數至少需為 2 組！");
        return;
      }

      // 洗牌
      const shuffled = [...appState.students].sort(() => Math.random() - 0.5);
      const groups = Array.from({ length: numGroups }, () => []);

      shuffled.forEach((student, i) => {
        groups[i % numGroups].push(student);
      });

      const container = document.getElementById('groupResultContainer');
      container.innerHTML = "";

      groups.forEach((grp, idx) => {
        const grpBox = document.createElement('div');
        grpBox.style.background = "#f8fafc";
        grpBox.style.border = "1px solid var(--border)";
        grpBox.style.borderRadius = "8px";
        grpBox.style.padding = "10px 14px";
        grpBox.innerHTML = `
          <div style="font-weight:700; color:var(--primary); font-size:0.9rem; margin-bottom:6px;">第 ${idx + 1} 組 (${grp.length}人)</div>
          <div style="font-size:0.85rem; color:var(--text-main); line-height:1.5;">
            ${grp.map(s => `#${s.seatNo} ${s.name}`).join("、 ")}
          </div>
        `;
        container.appendChild(grpBox);
      });
    }

    // 輔助函式：HTML 轉義
    function escapeHtml(str) {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    // 頁面載入執行
    window.addEventListener('DOMContentLoaded', initApp);
