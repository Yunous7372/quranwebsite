/**
 * Dar-e-Arqam Online Quran Academy
 * Form Handling & Lead Submission Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initTrialForm();
  initContactForm();
  initModalControls();
});

/**
 * Handle Free Trial Class Registration Form
 */
function initTrialForm() {
  const trialForm = document.getElementById('freeTrialForm');
  const directWhatsAppBtn = document.getElementById('btnSubmitWithWhatsApp');

  if (trialForm) {
    trialForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Retrieve form values
      const formData = {
        id: 'INQ-' + Date.now().toString().slice(-6),
        timestamp: new Date().toLocaleString(),
        parentName: document.getElementById('parentName').value.trim(),
        whatsappNumber: document.getElementById('whatsappNumber').value.trim(),
        studentAge: document.getElementById('studentAge').value.trim(),
        course: document.getElementById('trialCourse').value,
        preferredTiming: document.getElementById('preferredTiming').value.trim(),
        country: document.getElementById('studentCountry').value.trim(),
        notes: document.getElementById('trialNotes') ? document.getElementById('trialNotes').value.trim() : ''
      };

      // Form validation
      if (!formData.parentName || !formData.whatsappNumber || !formData.course || !formData.preferredTiming || !formData.country) {
        alert(currentLang === 'ur' ? 'براہِ کرم تمام ضروری خانے پُر کریں۔' : 'Please fill in all required fields.');
        return;
      }

      // 1. Save locally to Academy Inquiries database (localStorage)
      saveInquiryLocally(formData);

      // 2. If an external submission endpoint is configured in config.js, dispatch to it
      if (ACADEMY_CONFIG.formEndpoint) {
        try {
          await fetch(ACADEMY_CONFIG.formEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(formData)
          });
        } catch (err) {
          console.warn('Endpoint submission notice:', err);
        }
      }

      // 3. Show confirmation modal
      showConfirmationModal(formData);

      // Reset form
      trialForm.reset();
    });
  }

  // Handle direct WhatsApp dispatch button
  if (directWhatsAppBtn) {
    directWhatsAppBtn.addEventListener('click', () => {
      const parentName = document.getElementById('parentName').value.trim();
      const whatsapp = document.getElementById('whatsappNumber').value.trim();
      const age = document.getElementById('studentAge').value.trim();
      const course = document.getElementById('trialCourse').value;
      const timing = document.getElementById('preferredTiming').value.trim();
      const country = document.getElementById('studentCountry').value.trim();
      const notes = document.getElementById('trialNotes') ? document.getElementById('trialNotes').value.trim() : '';

      if (!parentName || !whatsapp) {
        alert(currentLang === 'ur' ? 'براہِ کرم اپنا نام اور واٹس ایپ نمبر درج فرمائیں۔' : 'Please provide at least your name and WhatsApp number.');
        return;
      }

      const waText = 
`*New Free Trial Registration*
*Academy:* Dar-e-Arqam Online Quran Academy
--------------------------------
*Parent/Student:* ${parentName}
*WhatsApp:* ${whatsapp}
*Age:* ${age || 'Not specified'}
*Course:* ${course}
*Preferred Timing:* ${timing || 'Flexible'}
*Country:* ${country || 'Not specified'}
*Notes:* ${notes || 'None'}
--------------------------------
Please schedule my free trial class. JazakAllah Khair!`;

      // Also save locally
      saveInquiryLocally({
        id: 'INQ-' + Date.now().toString().slice(-6),
        timestamp: new Date().toLocaleString(),
        parentName,
        whatsappNumber: whatsapp,
        studentAge: age,
        course,
        preferredTiming: timing,
        country,
        notes
      });

      // Redirect to WhatsApp
      window.open(getWhatsAppLink(waText), '_blank');
    });
  }
}

/**
 * Handle Contact Us Form
 */
function initContactForm() {
  const contactForm = document.getElementById('generalContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        alert(currentLang === 'ur' ? 'براہِ کرم تمام ضروری خانے پُر کریں۔' : 'Please fill in all required fields.');
        return;
      }

      // Save contact message locally
      const contactMsg = {
        id: 'MSG-' + Date.now().toString().slice(-6),
        timestamp: new Date().toLocaleString(),
        name,
        email,
        subject,
        message
      };

      const existingMsgs = JSON.parse(localStorage.getItem('darearqam_messages') || '[]');
      existingMsgs.unshift(contactMsg);
      localStorage.setItem('darearqam_messages', JSON.stringify(existingMsgs));

      // Check for endpoint
      if (ACADEMY_CONFIG.formEndpoint) {
        try {
          await fetch(ACADEMY_CONFIG.formEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(contactMsg)
          });
        } catch (err) {
          console.warn('Endpoint submission notice:', err);
        }
      }

      // Success alert
      const successText = currentLang === 'ur' 
        ? TRANSLATIONS.ur.contactSuccessMsg 
        : TRANSLATIONS.en.contactSuccessMsg;
      alert(successText);

      contactForm.reset();
    });
  }
}

/**
 * Save lead inquiry in localStorage
 */
function saveInquiryLocally(record) {
  try {
    const list = JSON.parse(localStorage.getItem('darearqam_inquiries') || '[]');
    list.unshift(record);
    localStorage.setItem('darearqam_inquiries', JSON.stringify(list));
  } catch (err) {
    console.error('Error saving inquiry locally:', err);
  }
}

/**
 * Show Confirmation Modal
 */
function showConfirmationModal(formData) {
  const modal = document.getElementById('confirmationModal');
  const modalWaLink = document.getElementById('modalWhatsAppAction');
  
  if (modal) {
    if (modalWaLink) {
      const instantMsg = `Assalamu Alaikum! I just registered for a free trial class under the name: ${formData.parentName} for the course: ${formData.course}. Please confirm my schedule.`;
      modalWaLink.href = getWhatsAppLink(instantMsg);
      modalWaLink.target = "_blank";
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Modal controls
 */
function initModalControls() {
  const modal = document.getElementById('confirmationModal');
  const closeBtns = document.querySelectorAll('.close-modal-btn');

  if (modal) {
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}
