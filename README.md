# Dar-e-Arqam Online Quran Academy
> **Premium, Modern, Bilingual (English & Urdu) Online Quran Education Portal**

Welcome to the official web portal for **Dar-e-Arqam Online Quran Academy** (دارِ ارقم آن لائن قرآن اکیڈمی). This website is crafted with a luxurious Islamic aesthetic featuring dark green, emerald green, crisp white, and gold accents, complemented by traditional Islamic geometric patterns, mosque arch motifs, and sacred typography.

---

## 🌟 Highlights & Key Features

1. **Islamic Aesthetic & Colors**:
   - Palette: Deep Forest Green (`#07231B`, `#0B2B26`), Emerald Green (`#165B4C`), Pure White, and Islamic Warm Gold (`#D4AF37`, `#FDE68A`).
   - SVG Islamic geometric star arabesques and subtle mosque arch dividers.
   - Hand-crafted SVG hero artwork showcasing an illuminated open Holy Quran on a traditional wooden Rehal (bookstand) beneath a decorative arch with a mosque lantern (Fanous).
   - Zero personal photos of teachers or students as requested.

2. **Homepage**:
   - Exact Headline: *"Learn the Holy Quran Online from the Comfort of Your Home"*
   - Exact Subtitle: *"Quality Quran education for children and adults, with experienced teachers, flexible class timings, and personalized attention."*
   - Two prominent action buttons: **Book a Free Trial Class** and **Contact Us on WhatsApp**.

3. **7 Authentic Sacred Courses**:
   - **Noorani Qaida** (نورانی قاعدہ)
   - **Madani Qaida** (مدنی قاعدہ)
   - **Quran Reading / Nazra** (ناظرہ قرآن پاک)
   - **Quran with Tajweed** (تجوید کے ساتھ قرآن)
   - **Quran Memorization / Hifz-ul-Quran** (حفظ القرآن)
   - **Basic Islamic Studies** (بنیادی اسلامی تعلیمات)
   - **Daily Duas and Salah Learning** (روزمرہ کی دعائیں اور نماز کی تربیت)
   - Each course card includes key syllabus highlights and a direct button that pre-selects the course in the trial registration form.

4. **Why Choose Our Academy?**:
   - Contains only the exact 7 factual academy features requested.
   - *Zero invented teacher qualifications, fake certificates, fake reviews, or fabricated student counts.*

5. **About Us Section**:
   - Sincere narrative on Dar-e-Arqam's mission to make Quranic learning accessible to Muslim families in Pakistan and worldwide (UK, USA, Canada, Europe, Australia, Gulf).
   - Core Islamic values: Sincerity (*Ikhlas*), Patience (*Sabr*), and Global Accessibility.

6. **Free Trial Class Registration**:
   - Form fields: Parent/Student Name, WhatsApp Number, Student's Age, Preferred Course, Preferred Class Timing, Country, and Optional Notes.
   - Works immediately out of the box with:
     - Form validation.
     - Confirmation modal with 1-click WhatsApp follow-up.
     - Automatic storage into the local Academy Lead Database (`localStorage`).
     - "Send Request via WhatsApp Directly" button that pre-formats the registration details into a polite WhatsApp message.

7. **Bilingual Engine (English & Urdu)**:
   - Full instant translation switch in the header and mobile drawer.
   - Authentic right-to-left (RTL) layout with high-legibility Nastaliq typography (`Noto Nastaliq Urdu` & `Amiri`).

8. **Admin Lead & Inquiry Portal (`admin-inquiries.html`)**:
   - A built-in dashboard for academy owners and coordinators.
   - View, search, and filter trial class registrations.
   - 1-Click WhatsApp button to message parents directly.
   - Export all registrations to a CSV spreadsheet (compatible with Microsoft Excel and Google Sheets).

9. **Additional Pages & Compliance**:
   - `privacy.html`: Dedicated Privacy Policy tailored for an online Islamic academy.
   - `terms.html`: Dedicated Terms & Conditions covering class attendance and decorum.
   - `courses.html`, `about.html`, `contact.html`: Dedicated sub-pages.
   - Floating WhatsApp button with pulse animation and tooltip.

---

## 📂 File Structure

```text
quranwebsite/
├── index.html               # Main flagship portal (Bilingual landing page)
├── courses.html             # Dedicated Course Catalog
├── about.html               # Dedicated About Us page
├── contact.html             # Dedicated Contact Us page
├── privacy.html             # Privacy Policy page
├── terms.html               # Terms & Conditions page
├── admin-inquiries.html     # Academy Lead & Inquiry Dashboard
├── README.md                # Documentation & Customization Guide
├── css/
│   ├── style.css            # Islamic palette, layouts, cards, responsive queries
│   ├── rtl.css              # Urdu right-to-left layout and Nastaliq styling
│   └── animations.css       # Subtle floating Quran, gold shimmer, modal effects
├── js/
│   ├── config.js            # Single central file to update WhatsApp, phone, email
│   ├── translations.js      # English & Urdu translation dictionaries
│   ├── main.js              # Language switch, sticky nav, drawer, course pre-fill
│   ├── forms.js             # Form validation, local lead saving, confirmation modal
│   └── inquiries.js         # Admin table viewer, CSV export, search filters
└── assets/
    ├── icons/               # Custom SVGs (Noorani, Madani, Tajweed, Hifz, Duas, etc.)
    └── patterns/            # Geometric star pattern and hero Quran arch illustration
```

---

## ⚙️ How to Customize Your Contact Details

You only need to edit **one single file** to update your phone number, WhatsApp, email, and social media links across the entire website!

Open `js/config.js` in any text editor:

```javascript
const ACADEMY_CONFIG = {
  // Update your details here:
  contact: {
    // 1. Enter your WhatsApp number with international country code (no + or spaces)
    whatsappNumber: "923001234567",

    // 2. Enter how you want your phone number displayed visually
    phoneDisplay: "+92 300 1234567",

    // 3. Enter your academy's official email address
    email: "contact@yourquranacademy.com",

    // 4. Operating location
    location: {
      en: "Online Quran Education (Worldwide Classes)",
      ur: "آن لائن قرآنی تعلیم (پوری دنیا میں تدریسی سہولت)"
    }
  },

  // Social media page links
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    youtube: "https://youtube.com/@yourchannel",
    twitter: "https://twitter.com/yourpage"
  },

  // Form submission endpoint (Optional - see below)
  formEndpoint: ""
};
```

---

## 📬 Form Delivery & Backend Setup (Transparent Explanation)

### Current Out-of-the-Box Functionality:
1. **Direct WhatsApp Delivery (Ready Now)**:
   The "Send Request via WhatsApp Directly" button formats the parent's name, student's age, course, timing, and country into a WhatsApp message and opens WhatsApp with your academy's number.
2. **Local Inquiry Management (Ready Now)**:
   All submitted forms are automatically saved to browser storage and can be viewed, searched, and exported to Excel via `admin-inquiries.html`.

### Optional: Connecting to an Email Notification Service
If you want new trial requests automatically emailed to your inbox, you can connect a free form-handling service in **2 minutes without any coding**:

#### Option A: Using Formspree (Free)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **Create Form** and enter your academy email.
3. Formspree will provide a URL like: `https://formspree.io/f/xyzabced`.
4. Open `js/config.js` and paste your URL into `formEndpoint`:
   ```javascript
   formEndpoint: "https://formspree.io/f/xyzabced"
   ```
5. Every form submission will now be instantly delivered to your email inbox!

#### Option B: Using Web3Forms (Free, no login needed)
1. Go to [https://web3forms.com](https://web3forms.com) and generate a free Access Key for your email.
2. Set the endpoint in `js/config.js`:
   ```javascript
   formEndpoint: "https://api.web3forms.com/submit"
   ```

---

## 🚀 How to Preview & Deploy the Website

### Preview Locally
No Node.js or Python runtime is required! Simply:
1. Open Windows File Explorer to `c:\antigravity\quranwebsite`.
2. Double-click `index.html`.
3. It will immediately open in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Free Hosting Options

#### Option 1: GitHub Pages (100% Free)
1. Create a repository on GitHub (e.g., `quran-academy`).
2. Push or upload these files to the repository.
3. In GitHub Settings &rarr; **Pages**, choose the `main` branch.
4. Your site will be live at `https://yourusername.github.io/quran-academy`.

#### Option 2: Netlify / Vercel (100% Free)
1. Drag and drop the `quranwebsite` folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Your site is deployed worldwide in less than 30 seconds with free SSL.

#### Option 3: Standard Web Hosting (cPanel / Hostinger / Namecheap)
1. Connect via cPanel File Manager or FTP.
2. Upload the contents of this folder into your `public_html` directory.
3. Your academy website is instantly live on your custom domain!

---

## 🔒 Moral & Islamic Integrity Compliance
- **No fabricated claims**: No fake teacher profiles, degrees, or false statistics are included.
- **Privacy prioritized**: Respects student modesty with zero non-consensual personal photography.
- **Dignified aesthetics**: Reverent Islamic colors, authentic Hadith citation with source (Sahih Al-Bukhari 5027), and accurate Arabic and Urdu terminology.
