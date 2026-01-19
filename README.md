<p align="center">
  <img src="assets/Icons/Logo.svg" alt="Fabrioo Logo" width="180">
</p>

<h1 align="center">Fabrioo — Coming Soon</h1>

<p align="center">
  <strong>Smart Clothing • Everyday Comfort</strong>
</p>

<p align="center">
  <a href="https://fabrioo-commingsoon.netlify.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-6C63FF?style=flat-square" alt="Responsive">
  <img src="https://img.shields.io/badge/RTL-Arabic_Support-1fccb7?style=flat-square" alt="RTL Support">
</p>

---

## 📖 About The Project

**Fabrioo** is a modern, animated coming soon landing page for a smart clothing brand that combines everyday comfort with thoughtful tech integration. The page serves as a pre-launch teaser, allowing visitors to:

- View a **live countdown** to the official launch date
- **Subscribe via email** to receive launch notifications
- Explore the brand's **key features** and value propositions
- Switch between **Arabic (RTL)** and **English (LTR)** languages
- Toggle between **Light** and **Dark** themes

The design follows a custom design system with glassmorphism effects, smooth scroll-reveal animations, and a carefully crafted color palette featuring teal, orange accent, and deep blue tones.

---

## ✨ Key Features

| Feature                   | Description                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| 🌐 **Bilingual**          | Full Arabic (RTL) and English (LTR) support with instant language switching |
| 🌙 **Theme Toggle**       | Light/Dark mode using CSS custom properties                                 |
| ⏱️ **Live Countdown**     | Real-time countdown showing months, days, hours, minutes, and seconds       |
| 📧 **Email Subscription** | Client-side validated email form for launch notifications                   |
| 🎨 **Modern Design**      | Glassmorphism, smooth animations, and a cohesive design system              |
| 📱 **Fully Responsive**   | Optimized for mobile, tablet, and desktop devices                           |
| ♿ **Accessible**         | Skip links, ARIA labels, semantic HTML structure                            |
| 🚀 **Scroll Animations**  | Intersection Observer-powered reveal effects                                |

---

## 🔗 Live Demo

Experience the live website:

### **👉 [https://fabrioo-commingsoon.netlify.app/](https://fabrioo-commingsoon.netlify.app/)**

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="100">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5">
      <br><strong>HTML5</strong>
    </td>
    <td align="center" width="100">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3">
      <br><strong>CSS3</strong>
    </td>
    <td align="center" width="100">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript">
      <br><strong>JavaScript</strong>
    </td>
  </tr>
</table>

### Technologies Used:

- **HTML5** — Semantic structure with accessibility features
- **CSS3** — Custom properties, Flexbox, Grid, keyframe animations
- **Vanilla JavaScript** — Theme/language toggle, countdown timer, form validation, scroll reveals
- **CoconÆ Next Arabic** — Custom Arabic-friendly typography

---

## 📁 Project Structure

```
Coming-Soon-Page/
│
├── 📄 index.html              # Main HTML file
├── 📄 README.md               # Project documentation
│
├── 📁 css/
│   └── style.css              # Complete stylesheet with CSS custom properties
│
├── 📁 js/
│   └── index.js               # All JavaScript functionality
│
├── 📁 assets/
│   ├── Icons/
│   │   └── Logo.svg           # Fabrioo logo
│   └── images/
│       ├── headerBG.svg       # Header background
│       └── footer-bg.svg      # Footer background
│
└── 📁 fonts/
    └── CoconAE-Next-Arabic.*  # Custom Arabic font files
```

---

## 🚀 Getting Started

### Option 1: View Online

Simply visit the live demo:
**[https://fabrioo-commingsoon.netlify.app/](https://fabrioo-commingsoon.netlify.app/)**

### Option 2: Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Feras-AbdulMohsen-AlAhmad/Coming-Soon-Page.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd Coming-Soon-Page
   ```

3. **Open in browser**
   - Simply double-click `index.html`, or
   - Use a local development server:

     ```bash
     # Using Node.js
     npx serve .

     # Using Python
     python -m http.server 8000

     # Using VS Code
     # Install "Live Server" extension and click "Go Live"
     ```

4. **View the page**
   - Open `http://localhost:8000` (or the port shown in your terminal)

---

## ⚙️ Customization

### 🎨 Change Theme Colors

Edit the CSS custom properties in `css/style.css`:

```css
:root {
  --color-primary-500: #1fccb7; /* Brand teal */
  --color-accent-500: #f15a24; /* Accent orange */
  --color-secondary-800: #000043; /* Dark blue background */
}
```

### 📅 Change Launch Date

Update the `data-target-date` attribute in `index.html`:

```html
<div class="cs-countdown" data-target-date="2026-09-01T00:00:00+02:00"></div>
```

### 🌐 Modify Translations

Edit the `i18n` object in `js/index.js`:

```javascript
const i18n = {
  ar: {
    title: "انتظروا انطلاق Fabrioo قريبًا",
    // ... other Arabic translations
  },
  en: {
    title: "Fabrioo is launching soon",
    // ... other English translations
  },
};
```

---

## 🎯 Features Breakdown

### Countdown Timer

Real-time countdown that calculates:

- **Months** remaining
- **Days** remaining
- **Hours** (zero-padded)
- **Minutes** (zero-padded)
- **Seconds** (zero-padded)

### Language System

- Stores preference in `localStorage`
- Automatically switches `dir` attribute (RTL/LTR)
- Updates all text content via `data-i18n` attributes

### Theme System

- CSS custom properties for instant theme switching
- Glassmorphism effects adapt to both themes
- Preference persisted in `localStorage`

### Animation System

- **Reveal on scroll** using Intersection Observer
- Direction variants: `reveal-up`, `reveal-down`, `reveal-left`, `reveal-right`
- Staggered delays: `delay-1`, `delay-2`, `delay-3`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

<p align="center">
  <strong>Feras Abdul-Mohsen Al-Ahmad</strong>
  <br><br>
  <a href="https://github.com/Feras-AbdulMohsen-AlAhmad">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

<p align="center">
  <em>"Comfort… with a tech twist."</em>
  <br>
  <strong>— Fabrioo</strong>
</p>
