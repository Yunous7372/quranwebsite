/**
 * Dar-e-Arqam Online Quran Academy
 * Global Configuration File
 * 
 * Update your contact details, WhatsApp number, and social media links here.
 * The entire website automatically reads from this configuration.
 */

const ACADEMY_CONFIG = {
  name: {
    en: "Dar-e-Arqam Online Quran Academy",
    ur: "دارِ ارقم آن لائن قرآن اکیڈمی"
  },
  shortName: {
    en: "Dar-e-Arqam Quran Academy",
    ur: "دارِ ارقم قرآن اکیڈمی"
  },
  tagline: {
    en: "Learn the Holy Quran Online from the Comfort of Your Home",
    ur: "اپنے گھر کی راحت سے آن لائن قرآن پاک سیکھیں"
  },
  
  // Contact Placeholders (Easily replace with your actual information)
  contact: {
    // Replace with your international WhatsApp number without + or spaces (e.g. "923001234567")
    whatsappNumber: "923433857288",
    
    // Display phone number shown on the website
    phoneDisplay: "+92 343 3857288",
    
    // Academy official email address placeholder
    email: "info@darearqamquran.com",
    
    // Physical / Operating location as requested
    location: {
      en: "Online Quran Education (Worldwide Classes)",
      ur: "آن لائن قرآنی تعلیم (پوری دنیا میں تدریسی سہولت)"
    },
    
    // Pre-filled WhatsApp greeting message
    whatsappDefaultMessage: "Assalamu Alaikum, I would like to inquire about Quran classes at Dar-e-Arqam Online Quran Academy."
  },

  // Social Media Links Placeholders
  social: {
    facebook: "https://facebook.com/darearqamquran",
    instagram: "https://instagram.com/darearqamquran",
    youtube: "https://youtube.com/@darearqamquran",
    twitter: "https://twitter.com/darearqamquran"
  },

  // Form submission service endpoint (e.g., Formspree, Web3Forms, or custom server)
  // If left empty or null, the website will securely save inquiries to localStorage 
  // AND offer the student/parent an instant 1-click WhatsApp booking message!
  formEndpoint: "" // e.g. "https://formspree.io/f/your-form-id"
};

// Helper function to build dynamic WhatsApp direct link
function getWhatsAppLink(customMessage) {
  const number = ACADEMY_CONFIG.contact.whatsappNumber;
  const msg = encodeURIComponent(customMessage || ACADEMY_CONFIG.contact.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${msg}`;
}
