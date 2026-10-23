/**
 * Dar-e-Arqam Online Quran Academy
 * Visual CMS & Editor Core Engine
 */

const STORAGE_KEYS = {
  CONFIG: 'darearqam_custom_config',
  TRANSLATIONS: 'darearqam_custom_translations',
  THEME: 'darearqam_custom_theme',
  COURSES: 'darearqam_custom_courses',
  GITHUB_TOKEN: 'darearqam_github_token'
};

// Preset Color Palettes
const COLOR_PRESETS = {
  purple: {
    name: "Royal Purple & Gold (موجودہ شاہی پرپل)",
    colors: {
      '--color-primary-dark': '#1E1035',
      '--color-dark-purple': '#2E1065',
      '--color-dark-green': '#2E1065',
      '--color-emerald': '#7C3AED',
      '--color-emerald-light': '#8B5CF6',
      '--color-emerald-soft': '#F5F3FF',
      '--color-emerald-border': '#DDD6FE',
      '--color-gold': '#F59E0B',
      '--color-gold-light': '#FEF3C7',
      '--color-gold-hover': '#D97706',
      '--color-gold-bright': '#FBBF24',
      '--color-bg-light': '#FAF8FF',
      '--color-bg-alt': '#F5F3FF',
      '--grad-hero': 'linear-gradient(140deg, #15082A 0%, #2E1065 45%, #4C1D95 100%)'
    }
  },
  emerald: {
    name: "Royal Emerald & Gold (شاہی زمردی سبز)",
    colors: {
      '--color-primary-dark': '#022C22',
      '--color-dark-purple': '#064E3B',
      '--color-dark-green': '#064E3B',
      '--color-emerald': '#059669',
      '--color-emerald-light': '#10B981',
      '--color-emerald-soft': '#ECFDF5',
      '--color-emerald-border': '#A7F3D0',
      '--color-gold': '#F59E0B',
      '--color-gold-light': '#FEF3C7',
      '--color-gold-hover': '#D97706',
      '--color-gold-bright': '#FBBF24',
      '--color-bg-light': '#F8FAF9',
      '--color-bg-alt': '#F0FDF4',
      '--grad-hero': 'linear-gradient(140deg, #012B1E 0%, #064E3B 45%, #047857 100%)'
    }
  },
  navy: {
    name: "Majestic Navy & Gold (شاہی نیوی بلیو)",
    colors: {
      '--color-primary-dark': '#0B132B',
      '--color-dark-purple': '#1C2541',
      '--color-dark-green': '#1C2541',
      '--color-emerald': '#2563EB',
      '--color-emerald-light': '#3B82F6',
      '--color-emerald-soft': '#EFF6FF',
      '--color-emerald-border': '#BFDBFE',
      '--color-gold': '#F59E0B',
      '--color-gold-light': '#FEF3C7',
      '--color-gold-hover': '#D97706',
      '--color-gold-bright': '#FBBF24',
      '--color-bg-light': '#F8FAFC',
      '--color-bg-alt': '#EFF6FF',
      '--grad-hero': 'linear-gradient(140deg, #070B19 0%, #0F172A 45%, #1E3A8A 100%)'
    }
  },
  midnight: {
    name: "Midnight Charcoal & Gold (پروقار چارکول اور گولڈ)",
    colors: {
      '--color-primary-dark': '#0F172A',
      '--color-dark-purple': '#1E293B',
      '--color-dark-green': '#1E293B',
      '--color-emerald': '#475569',
      '--color-emerald-light': '#64748B',
      '--color-emerald-soft': '#F1F5F9',
      '--color-emerald-border': '#CBD5E1',
      '--color-gold': '#F59E0B',
      '--color-gold-light': '#FEF3C7',
      '--color-gold-hover': '#D97706',
      '--color-gold-bright': '#FBBF24',
      '--color-bg-light': '#F8FAFC',
      '--color-bg-alt': '#F1F5F9',
      '--grad-hero': 'linear-gradient(140deg, #020617 0%, #0F172A 45%, #334155 100%)'
    }
  },
  maroon: {
    name: "Deep Ruby & Gold (شاہی روبی مہرون)",
    colors: {
      '--color-primary-dark': '#2A0812',
      '--color-dark-purple': '#4C0519',
      '--color-dark-green': '#4C0519',
      '--color-emerald': '#E11D48',
      '--color-emerald-light': '#F43F5E',
      '--color-emerald-soft': '#FFF1F2',
      '--color-emerald-border': '#FECDD3',
      '--color-gold': '#F59E0B',
      '--color-gold-light': '#FEF3C7',
      '--color-gold-hover': '#D97706',
      '--color-gold-bright': '#FBBF24',
      '--color-bg-light': '#FFF5F6',
      '--color-bg-alt': '#FFE4E6',
      '--grad-hero': 'linear-gradient(140deg, #1C030B 0%, #4C0519 45%, #881337 100%)'
    }
  }
};

/**
 * Load Custom Edits from localStorage into Runtime Objects
 */
function loadCustomEdits() {
  // 1. Config
  const savedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      mergeDeep(ACADEMY_CONFIG, parsed);
    } catch (e) {
      console.warn("Could not parse saved config:", e);
    }
  }

  // 2. Translations
  const savedTrans = localStorage.getItem(STORAGE_KEYS.TRANSLATIONS);
  if (savedTrans) {
    try {
      const parsed = JSON.parse(savedTrans);
      if (parsed.en) Object.assign(TRANSLATIONS.en, parsed.en);
      if (parsed.ur) Object.assign(TRANSLATIONS.ur, parsed.ur);
    } catch (e) {
      console.warn("Could not parse saved translations:", e);
    }
  }

  // 3. Theme Colors
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
  if (savedTheme) {
    try {
      const theme = JSON.parse(savedTheme);
      for (const [prop, val] of Object.entries(theme)) {
        document.documentElement.style.setProperty(prop, val);
      }
    } catch (e) {
      console.warn("Could not parse saved theme:", e);
    }
  }
}

/**
 * Save Edits to localStorage
 */
function saveAllEdits(configData, transData, themeData) {
  if (configData) {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(configData));
  }
  if (transData) {
    localStorage.setItem(STORAGE_KEYS.TRANSLATIONS, JSON.stringify(transData));
  }
  if (themeData) {
    localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(themeData));
  }
}

/**
 * Reset All Custom Edits back to Factory Defaults
 */
function resetAllEdits() {
  localStorage.removeItem(STORAGE_KEYS.CONFIG);
  localStorage.removeItem(STORAGE_KEYS.TRANSLATIONS);
  localStorage.removeItem(STORAGE_KEYS.THEME);
  localStorage.removeItem(STORAGE_KEYS.COURSES);
}

/**
 * Deep merge helper for objects
 */
function mergeDeep(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) Object.assign(target, { [key]: {} });
      mergeDeep(target[key], source[key]);
    } else {
      Object.assign(target, { [key]: source[key] });
    }
  }
  return target;
}

// Automatically load custom edits into DOM when script is included
loadCustomEdits();
