(function () {
  "use strict";

  const htmlEl = document.documentElement;

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ===== Theme toggle (uses the SAME DS tokens, only swaps html[data-theme]) =====
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function setTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("cs_theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☾" : "☀";
  }

  const savedTheme =
    localStorage.getItem("cs_theme") ||
    htmlEl.getAttribute("data-theme") ||
    "light";
  setTheme(savedTheme);

  themeBtn?.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // ===== Language toggle (AR/EN + RTL/LTR) =====
  const langBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  const i18n = {
    ar: {
      skip: "تخطي إلى المحتوى",
      theme: "الوضع",
      ctaNav: "أشعرني عند الإطلاق",
      badge: "ملابس ذكية • راحة يومية",
      title: "انتظروا انطلاق Fabrioo قريبًا",
      subtitle:
        "تجربة ملابس ذكية تجمع الراحة اليومية مع تفاصيل تقنية بسيطة… لتدعم راحتك الجسدية والنفسية.",
      months: "أشهر",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
      notifyTitle: "كن أول من يعرف",
      notifyText: "اترك بريدك لنرسل لك إشعارًا لحظة الإطلاق.",
      emailPlaceholder: "البريد الإلكتروني",
      notifyBtn: "إرسال",
      privacyNote: "لن نرسل رسائل مزعجة — إشعار الإطلاق فقط.",
      emailInvalid: "عذرًا يرجى إدخال بريد إلكتروني صحيح",
      emailSuccess: "تم! سنخبرك لحظة الإطلاق ✅",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
      mockTitle: "تجربة Fabrioo",
      mockSub: "واجهة بسيطة، نتائج أوضح.",
      chip1: "راحة",
      chip2: "تتبّع",
      chip3: "تخصيص",
      featuresTitle: "مميزات Fabrioo",
      featuresSubtitle:
        "لأن الراحة ليست رفاهية… بل “إعداد افتراضي” لازم يرجع يشتغل.",
      f1Title: "راحة نفسية وجسدية",
      f1Text: "تصميم وخامات تدعم الراحة وتقلل الضغط خلال اليوم.",
      f2Title: "جودة ملابس حقيقية",
      f2Text: "خامات مريحة ودمج تقني محسوب بدون تعقيد.",
      f3Title: "تقارير وتحليلات",
      f3Text: "متابعة واضحة لتأثير المنتجات على راحتك وإنتاجيتك.",
      f4Title: "تخصيص ذكي",
      f4Text: "تجربة تناسبك بناءً على احتياجك اليومي وتفضيلاتك.",
      f5Title: "تجربة بسيطة",
      f5Text: "واجهة واضحة بدون ازدحام… لأن المنتج ذكي كفاية.",
      f6Title: "توصيل ودعم",
      f6Text: "تجربة متكاملة من الطلب حتى الدعم بعد الشراء.",
      followUs: "تابعنا على القنوات الاجتماعية",
      footerNote: "راحة… لكن بنكهة تقنية.",
    },
    en: {
      skip: "Skip to content",
      theme: "Theme",
      ctaNav: "Notify me",
      badge: "Smart Clothing • Everyday Comfort",
      title: "Fabrioo is launching soon",
      subtitle:
        "Smart clothing that blends everyday comfort with simple tech details—supporting both body and mind.",
      months: "Months",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      notifyTitle: "Be the first to know",
      notifyText: "Leave your email and we’ll notify you at launch.",
      emailPlaceholder: "Email address",
      notifyBtn: "Send",
      privacyNote: "No spam — launch notification only.",
      emailInvalid: "Sorry, please enter a valid email.",
      emailSuccess: "Done! We’ll notify you at launch ✅",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",
      mockTitle: "Fabrioo Experience",
      mockSub: "Simple UI, clearer results.",
      chip1: "Comfort",
      chip2: "Tracking",
      chip3: "Personalize",
      featuresTitle: "Fabrioo Features",
      featuresSubtitle:
        "Because comfort shouldn’t be a luxury… it should be the default setting.",
      f1Title: "Mind & Body Comfort",
      f1Text:
        "Design and fabrics that support comfort and reduce daily stress.",
      f2Title: "Real Clothing Quality",
      f2Text:
        "Comfortable materials with thoughtful tech integration—without complexity.",
      f3Title: "Reports & Insights",
      f3Text: "Clear tracking of impact on comfort and productivity.",
      f4Title: "Smart Personalization",
      f4Text: "A tailored experience based on your needs and preferences.",
      f5Title: "Simple Experience",
      f5Text: "A clean interface—because the product is smart enough.",
      f6Title: "Delivery & Support",
      f6Text: "A complete experience from order to after-sales support.",
      followUs: "Follow us on social channels",
      footerNote: "Comfort… with a tech twist.",
    },
  };

  function setLanguage(lang) {
    htmlEl.setAttribute("data-lang", lang);
    localStorage.setItem("cs_lang", lang);

    if (lang === "ar") {
      htmlEl.setAttribute("lang", "ar");
      htmlEl.setAttribute("dir", "rtl");
      document.title = "Fabrioo — قريبًا";
      if (langLabel) langLabel.textContent = "AR";
    } else {
      htmlEl.setAttribute("lang", "en");
      htmlEl.setAttribute("dir", "ltr");
      document.title = "Fabrioo — Coming Soon";
      if (langLabel) langLabel.textContent = "EN";
    }

    const dict = i18n[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (key && dict[key]) el.setAttribute("placeholder", dict[key]);
    });
  }

  const savedLang =
    localStorage.getItem("cs_lang") || htmlEl.getAttribute("data-lang") || "ar";
  setLanguage(savedLang);

  langBtn?.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-lang") || "ar";
    setLanguage(current === "ar" ? "en" : "ar");
  });

  // ===== Countdown =====
  const countdownRoot = document.querySelector(".cs-countdown");
  const targetStr = countdownRoot?.getAttribute("data-target-date");
  const targetDate = targetStr
    ? new Date(targetStr)
    : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  const monthsEl = document.getElementById("months");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function tick() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff < 0) diff = 0;

    // Approx month = 30 days
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
    );
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (monthsEl) monthsEl.textContent = String(months);
    if (daysEl) daysEl.textContent = String(days);
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);

  // ===== Reveal on scroll (landing system) =====
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => io.observe(el));
  }

  // ===== Email validation (front-end only) =====
  const form = document.getElementById("notifyForm");
  const email = document.getElementById("email");
  const err = document.getElementById("emailError");
  const ok = document.getElementById("emailSuccess");

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(v || "").trim());
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = email?.value || "";

    if (!isValidEmail(v)) {
      if (err) err.hidden = false;
      if (ok) ok.hidden = true;
      email?.focus();
      return;
    }

    if (err) err.hidden = true;
    if (ok) ok.hidden = false;
  });

  email?.addEventListener("input", () => {
    if (err) err.hidden = true;
    if (ok) ok.hidden = true;
  });
})();
