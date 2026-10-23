/**
 * Dar-e-Arqam Online Quran Academy
 * Main Website Controller
 */

let currentLang = localStorage.getItem('darearqam_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  if (typeof loadCustomEdits === 'function') {
    loadCustomEdits();
  }
  initLanguage();
  initConfigData();
  initNavigation();
  initCourseSelectLinks();
});

/**
 * Initialize and apply language settings
 */
function initLanguage() {
  applyLanguage(currentLang);

  // Setup language toggle buttons
  const langButtons = document.querySelectorAll('.lang-toggle-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentLang = currentLang === 'en' ? 'ur' : 'en';
      localStorage.setItem('darearqam_lang', currentLang);
      applyLanguage(currentLang);
    });
  });
}

/**
 * Apply selected language to DOM
 */
function applyLanguage(lang) {
  const isUrdu = lang === 'ur';
  document.documentElement.lang = isUrdu ? 'ur' : 'en';
  document.documentElement.dir = isUrdu ? 'rtl' : 'ltr';

  if (isUrdu) {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }

  // Update text content with data-i18n
  const trans = TRANSLATIONS[lang];
  if (!trans) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  // Update placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (trans[key]) {
      el.setAttribute('placeholder', trans[key]);
    }
  });

  // Update dynamic language toggle labels
  const langButtons = document.querySelectorAll('.lang-toggle-btn');
  langButtons.forEach(btn => {
    const span = btn.querySelector('.lang-btn-text');
    if (span) {
      span.textContent = isUrdu ? 'English' : 'اردو';
    }
  });
}

/**
 * Populate academy configuration details into placeholders
 */
function initConfigData() {
  // WhatsApp links
  const waLinks = document.querySelectorAll('.academy-wa-link');
  waLinks.forEach(link => {
    link.href = getWhatsAppLink();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // Phone numbers
  document.querySelectorAll('.academy-phone').forEach(el => {
    el.textContent = ACADEMY_CONFIG.contact.phoneDisplay;
    if (el.tagName === 'A') {
      el.href = `tel:${ACADEMY_CONFIG.contact.whatsappNumber}`;
    }
  });

  // Emails
  document.querySelectorAll('.academy-email').forEach(el => {
    el.textContent = ACADEMY_CONFIG.contact.email;
    if (el.tagName === 'A') {
      el.href = `mailto:${ACADEMY_CONFIG.contact.email}`;
    }
  });

  // Social links
  const socialConfig = ACADEMY_CONFIG.social;
  document.querySelectorAll('.social-fb').forEach(a => a.href = socialConfig.facebook);
  document.querySelectorAll('.social-ig').forEach(a => a.href = socialConfig.instagram);
  document.querySelectorAll('.social-yt').forEach(a => a.href = socialConfig.youtube);
  document.querySelectorAll('.social-tw').forEach(a => a.href = socialConfig.twitter);
}

/**
 * Initialize sticky nav and mobile drawer
 */
function initNavigation() {
  const navbar = document.querySelector('.main-nav');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.mobile-close-btn');

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu open / close
  function openDrawer() {
    if (drawer && backdrop) {
      drawer.classList.add('open');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * Connect Course Inquiry buttons to Trial Form with auto-selection
 */
function initCourseSelectLinks() {
  const buttons = document.querySelectorAll('.course-inquire-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseName = btn.getAttribute('data-course');
      const selectElement = document.getElementById('trialCourse');
      if (selectElement && courseName) {
        let matched = false;
        for (let i = 0; i < selectElement.options.length; i++) {
          const optVal = selectElement.options[i].value.toLowerCase();
          const target = courseName.toLowerCase();
          if (optVal === target || optVal.includes(target) || target.includes(optVal)) {
            selectElement.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) selectElement.value = courseName;
      }
      
      const trialSection = document.getElementById('trial');
      if (trialSection) {
        trialSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('parentName');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }
      }
    });
  });
}
