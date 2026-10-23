/**
 * Dar-e-Arqam Online Quran Academy
 * In-Page Live Visual Editor
 * Allows clicking and editing any text or heading directly on the live website!
 */

(function () {
  let isEditMode = false;

  document.addEventListener('DOMContentLoaded', () => {
    createLiveEditorUI();
  });

  function createLiveEditorUI() {
    // 1. Floating Launch Pill at bottom left
    const launchBtn = document.createElement('div');
    launchBtn.id = 'liveEditorLaunchBtn';
    launchBtn.innerHTML = `
      <button class="live-edit-toggle-btn" title="Edit Website Content (ویب سائٹ میں تبدیلی کریں)">
        <span class="icon">✏️</span>
        <span class="label">Website Editor</span>
      </button>
    `;
    document.body.appendChild(launchBtn);

    // 2. Top Live Editing Toolbar
    const toolbar = document.createElement('div');
    toolbar.id = 'liveEditorToolbar';
    toolbar.className = 'live-editor-toolbar';
    toolbar.style.display = 'none';
    toolbar.innerHTML = `
      <div class="toolbar-content">
        <div class="toolbar-info">
          <span class="badge-pulse">🟢 EDITING MODE</span>
          <span class="toolbar-hint">Click on any text, heading, or course on the page to change it!</span>
        </div>
        <div class="toolbar-actions">
          <div class="palette-quick-picker">
            <select id="quickThemeSelect" class="theme-select-dropdown">
              <option value="">🎨 Change Theme Color...</option>
              <option value="purple">💜 Royal Purple & Gold</option>
              <option value="emerald">💚 Royal Emerald & Gold</option>
              <option value="navy">💙 Majestic Navy & Gold</option>
              <option value="midnight">🖤 Midnight Charcoal & Gold</option>
              <option value="maroon">❤️ Deep Ruby & Gold</option>
            </select>
          </div>
          <button id="btnSaveLiveEdits" class="toolbar-btn btn-save">
            💾 Save Changes
          </button>
          <a href="editor.html" class="toolbar-btn btn-full-cms" target="_blank">
            ⚙️ Full CMS Panel
          </a>
          <button id="btnCloseLiveEditor" class="toolbar-btn btn-close" title="Exit Editor">
            ✕ Exit
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(toolbar);

    // 3. Inject Styles for Live Editor UI
    const style = document.createElement('style');
    style.textContent = `
      #liveEditorLaunchBtn {
        position: fixed;
        bottom: 25px;
        left: 25px;
        z-index: 9998;
      }
      .live-edit-toggle-btn {
        background: linear-gradient(135deg, #2E1065 0%, #4C1D95 100%);
        color: #FEF3C7;
        border: 2px solid #F59E0B;
        padding: 0.65rem 1.15rem;
        border-radius: 50px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.88rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(46, 16, 101, 0.45);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
      }
      .live-edit-toggle-btn:hover {
        transform: translateY(-2px) scale(1.04);
        box-shadow: 0 10px 25px rgba(245, 158, 11, 0.45);
        background: #F59E0B;
        color: #1E1035;
      }
      .live-editor-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #15082A;
        border-bottom: 3px solid #F59E0B;
        color: #FFF;
        z-index: 10000;
        padding: 0.75rem 1.5rem;
        box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        animation: slideDown 0.3s ease;
      }
      @keyframes slideDown {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
      }
      .toolbar-content {
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .toolbar-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .badge-pulse {
        background: #10B981;
        color: #064E3B;
        padding: 0.25rem 0.65rem;
        border-radius: 50px;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.5px;
      }
      .toolbar-hint {
        font-size: 0.92rem;
        color: #E2E8F0;
      }
      .toolbar-actions {
        display: flex;
        align-items: center;
        gap: 0.65rem;
      }
      .theme-select-dropdown {
        background: #2E1065;
        color: #FEF3C7;
        border: 1.5px solid #F59E0B;
        padding: 0.45rem 0.85rem;
        border-radius: 6px;
        font-size: 0.84rem;
        font-weight: 600;
        cursor: pointer;
      }
      .toolbar-btn {
        padding: 0.45rem 1rem;
        border-radius: 6px;
        font-size: 0.86rem;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: all 0.2s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .btn-save {
        background: linear-gradient(135deg, #FDE68A 0%, #F59E0B 100%);
        color: #1E1035;
      }
      .btn-save:hover {
        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        transform: translateY(-1px);
      }
      .btn-full-cms {
        background: #7C3AED;
        color: #FFF;
      }
      .btn-full-cms:hover {
        background: #6D28D9;
      }
      .btn-close {
        background: rgba(255, 255, 255, 0.15);
        color: #FFF;
      }
      .btn-close:hover {
        background: #EF4444;
      }
      /* Editable element highlights when in edit mode */
      body.live-editing-active [data-i18n] {
        outline: 1.5px dashed rgba(245, 158, 11, 0.6);
        outline-offset: 3px;
        border-radius: 4px;
        cursor: text;
        transition: outline 0.2s ease, background 0.2s ease;
      }
      body.live-editing-active [data-i18n]:hover {
        outline: 2px solid #F59E0B;
        background: rgba(245, 158, 11, 0.08);
      }
      body.live-editing-active [data-i18n]:focus {
        outline: 2.5px solid #7C3AED;
        background: rgba(124, 58, 237, 0.1);
      }
    `;
    document.head.appendChild(style);

    // Event Listeners
    launchBtn.querySelector('button').addEventListener('click', toggleEditMode);
    document.getElementById('btnCloseLiveEditor').addEventListener('click', toggleEditMode);
    document.getElementById('btnSaveLiveEdits').addEventListener('click', saveLiveEdits);

    // Theme Picker change
    document.getElementById('quickThemeSelect').addEventListener('change', (e) => {
      const presetKey = e.target.value;
      if (presetKey && COLOR_PRESETS[presetKey]) {
        applyThemePreset(COLOR_PRESETS[presetKey].colors);
        localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(COLOR_PRESETS[presetKey].colors));
        showToast(`Theme changed to ${COLOR_PRESETS[presetKey].name}!`);
      }
    });
  }

  function toggleEditMode() {
    isEditMode = !isEditMode;
    const toolbar = document.getElementById('liveEditorToolbar');
    const launchBtn = document.getElementById('liveEditorLaunchBtn');

    if (isEditMode) {
      document.body.classList.add('live-editing-active');
      toolbar.style.display = 'block';
      launchBtn.style.display = 'none';
      document.body.style.paddingTop = '60px';

      // Make all translated items editable
      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.setAttribute('spellcheck', 'false');
      });

      showToast("✏️ Live Editing Mode activated! Click any text to change it.");
    } else {
      document.body.classList.remove('live-editing-active');
      toolbar.style.display = 'none';
      launchBtn.style.display = 'block';
      document.body.style.paddingTop = '';

      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.removeAttribute('contenteditable');
      });
    }
  }

  function saveLiveEdits() {
    const lang = currentLang || 'en';
    let savedTrans = {};
    try {
      savedTrans = JSON.parse(localStorage.getItem(STORAGE_KEYS.TRANSLATIONS) || '{"en":{},"ur":{}}');
    } catch (e) {
      savedTrans = { en: {}, ur: {} };
    }
    if (!savedTrans[lang]) savedTrans[lang] = {};

    let editCount = 0;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const newText = el.innerText.trim();
      if (key && newText) {
        savedTrans[lang][key] = newText;
        if (TRANSLATIONS[lang]) {
          TRANSLATIONS[lang][key] = newText;
        }
        editCount++;
      }
    });

    localStorage.setItem(STORAGE_KEYS.TRANSLATIONS, JSON.stringify(savedTrans));
    showToast(`✅ Successfully saved ${editCount} elements! Changes are now active across your website.`);
  }

  function applyThemePreset(themeColors) {
    for (const [prop, val] of Object.entries(themeColors)) {
      document.documentElement.style.setProperty(prop, val);
    }
  }

  function showToast(message) {
    let toast = document.getElementById('editorLiveToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'editorLiveToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: #15082A;
        color: #FEF3C7;
        border: 2px solid #F59E0B;
        padding: 0.85rem 1.75rem;
        border-radius: 50px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.95rem;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 10001;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 3500);
  }
})();
