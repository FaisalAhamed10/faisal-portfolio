/* ==========================================================================
   Faisal Ahamed — Portfolio
   1. CONTENT  (edit your details, services, tools and projects here)
   2. Layout   (preloader, header, menu, footer, cursor)
   3. Motion   (Lenis smooth scroll + GSAP ScrollTrigger)
   4. Pages    (home / about / projects / contact)
   ========================================================================== */

/* ---------- 1. CONTENT ---------- */
const SITE = {
  name: "Faisal Ahamed",
  role: "Web Developer",
  email: "lupheratech@gmail.com",
  phone: "+91 78259 92791",
  whatsapp: "917825992791", // country code + number, digits only (used by the contact form)
  location: "Remote · Working worldwide",
  socials: {
    linkedin: "#",
    github: "#",
    instagram: "#",
    behance: "#",
    x: "#",
  },
};

const ICONS = {
  web: '<path d="M3 5h18v14H3z"/><path d="M3 9h18"/><path d="m9 13-2 2 2 2M15 13l2 2-2 2"/>',
  social: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  ads: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/><path d="M15 7h5v5"/>',
  creative: '<path d="M12 19l7-7 3 3-7 7z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><circle cx="11" cy="11" r="2"/>',
  ecom: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6"/>',
  seo: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6M11 8v6"/>',
  software: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01"/><path d="m8 13 2 2-2 2M13 17h3"/>',
  ai: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
};

const SERVICES = [
  { icon: "web", title: "Web Development", text: "Fast, responsive websites and web apps with clean code, smooth motion and solid SEO foundations.", tools: ["React.js", "Next.js", "Node.js", "WordPress", "Tailwind CSS"] },
  { icon: "social", title: "Social Media Management", text: "Content calendars, posting, community management and monthly growth reports across every platform.", tools: ["Meta Business Suite", "Instagram", "LinkedIn", "Buffer", "Canva"] },
  { icon: "ads", title: "Performance Marketing", text: "ROI-focused ad campaigns with proper tracking, A/B testing and clear reporting on every rupee spent.", tools: ["Google Ads", "Meta Ads", "GA4", "Tag Manager", "Clarity"] },
  { icon: "creative", title: "Content & Creative", text: "Scroll-stopping creatives, reels, brand visuals and copy that make people stop, read and click.", tools: ["Figma", "Photoshop", "Premiere Pro", "After Effects", "Canva"] },
  { icon: "ecom", title: "E-commerce", text: "Online stores that convert — product setup, payments, shipping, speed and checkout optimisation.", tools: ["Shopify", "WooCommerce", "Liquid", "Razorpay", "Stripe"] },
  { icon: "seo", title: "Search Marketing (SEO)", text: "Technical SEO, on-page optimisation, content strategy and local SEO that grows organic traffic.", tools: ["Search Console", "Ahrefs", "SEMrush", "Rank Math", "Screaming Frog"] },
  { icon: "software", title: "Custom Business Software", text: "CRMs, dashboards, booking and inventory systems built around exactly how your business works.", tools: ["React.js", "Node.js", "Python", "MongoDB", "AWS"] },
  { icon: "ai", title: "AI Automation", text: "AI chatbots, lead follow-ups and workflow automations that save your team hours every week.", tools: ["OpenAI API", "Claude", "n8n", "Zapier", "Make"] },
];

// [name, badge letters, colour]
const TOOLS = {
  "Web Development": [["React.js","Re","#149eca"],["Next.js","Nx","#3a3a3a"],["Node.js","No","#3c873a"],["Express.js","Ex","#555b6e"],["JavaScript","JS","#b89a00"],["TypeScript","TS","#3178c6"],["HTML5","H5","#e34f26"],["CSS3","C3","#1572b6"],["Tailwind CSS","Tw","#0ea5e9"],["GSAP","Gs","#16a34a"],["Three.js","3D","#4b5563"],["PHP","Ph","#777bb4"],["Laravel","Lv","#ff2d20"],["MongoDB","Mg","#13aa52"],["MySQL","SQ","#00758f"],["PostgreSQL","Pg","#336791"],["Firebase","Fb","#f59e0b"],["Git & GitHub","Gt","#f05032"]],
  "CMS & E-commerce": [["WordPress","Wp","#21759b"],["WooCommerce","Wc","#7f54b3"],["Elementor","El","#92003b"],["Shopify","Sh","#5e8e3e"],["Shopify Liquid","Lq","#4b7a32"],["Razorpay","Rz","#3395ff"],["Stripe","St","#635bff"],["PayPal","PP","#003087"]],
  "Performance Marketing": [["Google Ads","GA","#4285f4"],["Meta Ads","Ma","#0866ff"],["LinkedIn Ads","Li","#0a66c2"],["YouTube Ads","Yt","#ff0000"],["Google Analytics 4","G4","#e37400"],["Google Tag Manager","Tm","#246fdb"],["Looker Studio","Lk","#4285f4"],["Microsoft Clarity","Cl","#0078d4"],["Hotjar","Hj","#fd3a5c"]],
  "Social Media": [["Meta Business Suite","Mb","#0866ff"],["Instagram","Ig","#e1306c"],["Facebook","Fb","#1877f2"],["LinkedIn","In","#0a66c2"],["YouTube","Yt","#ff0000"],["X (Twitter)","X","#3a3a3a"],["Buffer","Bf","#2c4bff"],["Hootsuite","Hs","#ef4444"],["Later","Lt","#6b5bff"]],
  "Content & Creative": [["Figma","Fg","#a259ff"],["Photoshop","Ps","#31a8ff"],["Illustrator","Ai","#ff9a00"],["Premiere Pro","Pr","#7c6cff"],["After Effects","Ae","#7c3aed"],["Canva","Cv","#00c4cc"],["CapCut","Cc","#3a3a3a"],["ChatGPT","Gp","#10a37f"]],
  "SEO": [["Google Search Console","Sc","#4285f4"],["Ahrefs","Ah","#ff8800"],["SEMrush","Se","#ff642d"],["Screaming Frog","SF","#6cbd45"],["Yoast SEO","Yo","#a4286a"],["Rank Math","RM","#4f46e5"],["PageSpeed Insights","PS","#34a853"],["Schema Markup","{}","#e11d48"]],
  "Custom Software": [["Node.js","No","#3c873a"],["Python","Py","#3776ab"],["REST APIs","AP","#0ea5e9"],["GraphQL","GQ","#e10098"],["Docker","Dk","#2496ed"],["AWS","Aw","#ff9900"],["Vercel","Vc","#3a3a3a"],["Netlify","Nt","#00ad9f"],["Postman","Pm","#ff6c37"]],
  "AI Automation": [["OpenAI API","OA","#10a37f"],["Claude","Cl","#d97757"],["Zapier","Zp","#ff4f00"],["Make","Mk","#6d00cc"],["n8n","n8","#ea4b71"],["LangChain","LC","#0f766e"],["WhatsApp API","Wa","#25d366"],["AI Chatbots","Bt","#3b82f6"]],
};

// 3D icon images in assets/img/tools/ (tools without one fall back to a coloured letter badge)
const TOOL_ICONS = {
  "React.js": "react", "Next.js": "nextjs", "Node.js": "nodejs", "Express.js": "express", "JavaScript": "javascript",
  "TypeScript": "typescript", "HTML5": "html5", "CSS3": "css3", "Tailwind CSS": "tailwind", "GSAP": "gsap",
  "Three.js": "threejs", "PHP": "php", "Laravel": "laravel", "MongoDB": "mongodb", "MySQL": "mysql",
  "PostgreSQL": "postgresql", "Firebase": "firebase", "Git & GitHub": "git-github",
  "WordPress": "wordpress", "WooCommerce": "woocommerce", "Elementor": "elementor", "Shopify": "shopify",
  "Shopify Liquid": "shopify-liquid", "Razorpay": "razorpay", "Stripe": "stripe", "PayPal": "paypal",
  "Google Ads": "google-ads", "Meta Ads": "meta-ads", "LinkedIn Ads": "linkedin-ads", "YouTube Ads": "youtube-ads",
  "Google Analytics 4": "ga4", "Google Tag Manager": "gtm", "Looker Studio": "looker-studio", "Microsoft Clarity": "clarity", "Hotjar": "hotjar",
  "Meta Business Suite": "meta-business", "Instagram": "instagram", "Facebook": "facebook", "LinkedIn": "linkedin",
  "YouTube": "youtube", "X (Twitter)": "x-twitter", "Buffer": "buffer", "Hootsuite": "hootsuite", "Later": "later",
  "Figma": "figma", "Photoshop": "photoshop", "Illustrator": "illustrator", "Premiere Pro": "premiere",
  "After Effects": "after-effects", "Canva": "canva", "CapCut": "capcut", "ChatGPT": "chatgpt",
  "Python": "python", "REST APIs": "rest-api", "GraphQL": "graphql", "Docker": "docker", "AWS": "aws",
  "Vercel": "vercel", "Netlify": "netlify", "Postman": "postman",
  "OpenAI API": "openai-api", "Claude": "claude", "Zapier": "zapier", "Make": "make", "n8n": "n8n",
  "LangChain": "langchain", "WhatsApp API": "whatsapp-api", "AI Chatbots": "ai-chatbots",
  "Google Search Console": "search-console", "Ahrefs": "ahrefs", "SEMrush": "semrush", "Screaming Frog": "screaming-frog",
  "Yoast SEO": "yoast", "Rank Math": "rank-math", "PageSpeed Insights": "pagespeed", "Schema Markup": "schema",
};

// TODO: these are SAMPLE projects — replace with your real work (title, text, tools, scope, colour)
const PROJECTS = [
  { title: "Spice Route Store", cat: "ecommerce", catLabel: "E-commerce", year: 2025, color: "#c2410c", text: "A Shopify store for a spice brand with custom Liquid sections, bundles, subscription offers and a fast mobile checkout.", tools: ["Shopify", "Liquid", "Razorpay", "GA4"], scope: [["Shopify", "Platform"], ["40+", "Products set up"], ["6 wks", "Timeline"]] },
  { title: "ClinicCare Portal", cat: "software", catLabel: "Custom Software", year: 2025, color: "#0e7490", text: "Appointment booking, patient records and staff dashboard for a multi-doctor clinic, built as a secure web app.", tools: ["React.js", "Node.js", "MongoDB", "AWS"], scope: [["React + Node", "Stack"], ["3", "User roles"], ["10 wks", "Timeline"]] },
  { title: "LeadBot AI Assistant", cat: "ai", catLabel: "AI Automation", year: 2025, color: "#7c3aed", text: "A WhatsApp + website AI assistant that answers FAQs, qualifies leads and pushes them straight into the CRM.", tools: ["OpenAI API", "n8n", "WhatsApp API", "Node.js"], scope: [["24/7", "Availability"], ["2", "Channels"], ["4 wks", "Timeline"]] },
  { title: "GlowSkin Growth Campaigns", cat: "marketing", catLabel: "Performance Marketing", year: 2024, color: "#db2777", text: "Full-funnel Google and Meta ad campaigns for a skincare brand with conversion tracking and weekly reporting.", tools: ["Google Ads", "Meta Ads", "GA4", "Tag Manager"], scope: [["2", "Ad platforms"], ["Full", "Funnel"], ["Ongoing", "Engagement"]] },
  { title: "Brew & Co. Local SEO", cat: "seo", catLabel: "SEO", year: 2024, color: "#065f46", text: "Technical SEO audit, on-page fixes, schema markup and Google Business Profile optimisation for a café chain.", tools: ["Search Console", "Ahrefs", "Schema Markup"], scope: [["Technical", "Audit"], ["Local", "SEO"], ["3 mo", "Engagement"]] },
  { title: "StockPilot Inventory", cat: "software", catLabel: "Custom Software", year: 2022, color: "#334155", text: "Inventory, purchase orders and GST-ready invoicing for a wholesale distributor, replacing messy spreadsheets.", tools: ["React.js", "Node.js", "PostgreSQL", "Docker"], scope: [["Multi", "Warehouse"], ["PDF", "Invoices"], ["9 wks", "Timeline"]] },
  { title: "Bloom Boutique", cat: "ecommerce", catLabel: "E-commerce", year: 2022, color: "#be185d", text: "A WooCommerce fashion store with size guides, wishlists, COD + online payments and abandoned-cart emails.", tools: ["WooCommerce", "WordPress", "Razorpay"], scope: [["WooCommerce", "Platform"], ["COD + UPI", "Payments"], ["5 wks", "Timeline"]] },
];

const PROCESS = [
  ["Discover", "We talk about your business, goals, audience and competitors so I understand exactly what success looks like."],
  ["Strategy", "A clear plan: sitemap, features, channels, tools, timeline and budget — no surprises later."],
  ["Design", "Wireframes and high-fidelity designs in Figma, with interactions and motion planned up front."],
  ["Develop", "Clean, fast, responsive build with SEO, analytics and tracking set up properly from day one."],
  ["Launch & Grow", "Testing, launch, then marketing, SEO and automation to keep the results compounding."],
];

// Reels shown on the home page (files in assets/video/: <src>.mp4 + <src>.jpg cover)
const REELS = [
  { src: "infused-chicken", title: "Thanjavur's First Infused Chicken", brand: "Restaurant launch reel", tag: "Launch" },
  { src: "beetroot-powder", title: "Natural Beetroot Powder", brand: "Wellness product ad", tag: "Product ad" },
  { src: "burger-combo", title: "Burger Combo Madness", brand: "Fast-food offer reel", tag: "Promo" },
  { src: "abc-veggie", title: "ABC Veggie Goodness", brand: "Buds of Taste", tag: "Product ad" },
  { src: "belly-fat-drink", title: "Your Daily Drink for Belly Fat", brand: "Wellness reel · Tamil", tag: "Awareness" },
];

// Cinematic / motion-graphics films (assets/video/<src>.mp4 + .jpg cover) — add more and a switcher appears
const CINEMATIC = [
  {
    src: "alfis-cinematic", title: "Alfis Beauty — product film", client: "Alfis Beauty", length: "0:30", format: "9:16 vertical",
    text: "A 30-second cinematic product film for Alfis Beauty's skincare range — moody stage lighting, liquid splashes and motion-graphic reveals built to stop the scroll on Instagram and Meta ads.",
    tags: ["3D product render", "Motion graphics", "Cinematic lighting", "Liquid FX", "Brand film"],
  },
];

// Live websites (screenshots in assets/img/sites/, h = image height at 900px width)
const SITES = [
  { name: "Buds of Taste", url: "https://budsoftaste.com/", img: "budsoftaste", h: 3250, color: "#7cb342", cat: "Shopify store · Health foods",
    text: "An online store for Thanjavur-made health malts and natural vegetable powders, with combo offers, product stories and a fast mobile checkout.", tags: ["Shopify", "Liquid", "Payments", "SEO"] },
  { name: "Laksh Interior", url: "https://lakshinterior.in/", img: "lakshinterior", h: 1514, color: "#c08a3e", cat: "WordPress site · Construction & interiors",
    text: "A business website for a construction and interior design company with service pages, project showcase and consultation enquiries.", tags: ["WordPress", "Elementor", "Lead forms", "SEO"] },
  { name: "DEVA Photography", url: "https://deva-photography.netlify.app/", img: "deva-photography", h: 2900, color: "#c9a96e", cat: "Custom website · Photography",
    text: "An editorial portfolio for a photography studio — cinematic scroll animation, a filterable gallery and booking enquiries.", tags: ["HTML / CSS / JS", "GSAP", "Netlify", "Gallery"] },
  { name: "Alfis Beauty", url: "https://alfisbeauty.com/", img: "alfisbeauty", h: 2562, color: "#d4a537", cat: "Shopify store · Skincare",
    text: "A premium skincare store with bestseller collections, ritual kits, offer banners and a clean shopping experience on every screen.", tags: ["Shopify", "Custom sections", "Offers", "Mobile-first"] },
  { name: "CALENDRIA", url: "https://calendria-skincare.netlify.app/", img: "calendria", h: 2658, color: "#e8891c", cat: "Custom website · Botanical skincare",
    text: "A luxury calendula skincare brand site with a 3D blooming flower and serum, scroll-driven storytelling, an ingredient explorer and a full cash-on-delivery checkout.", tags: ["React", "Three.js", "GSAP", "Netlify"] },
  { name: "Dentora", url: "https://dentora-smiles.netlify.app/", img: "dentora", h: 3106, color: "#1e6fa8", cat: "Custom website · Dental clinic",
    text: "A premium dental clinic website with smooth scroll animations, a full treatment catalogue, an interactive \"why choose us\" showcase and appointment booking.", tags: ["HTML / CSS / JS", "GSAP", "Lenis", "Netlify"] },
  { name: "PÉTALE", url: "https://petale-atelier.netlify.app/", img: "petale", h: 2250, color: "#b3394f", cat: "Custom store · Luxury bouquets",
    text: "A luxury flower boutique with a 3D bouquet that blooms and scatters petals as you scroll, a bouquet customiser, collections and a full cart experience.", tags: ["React", "Three.js", "GSAP", "Netlify"] },
];

// Posters in assets/img/posters/ — [file, industry]
const POSTERS = [
  ["cafe-1", "Café"], ["perfume-1", "Perfume"], ["hair-1", "Hair clinic"], ["footwear-1", "Footwear"], ["bouquet-1", "Florist"], ["icecream-1", "Ice cream"], ["dental-1", "Dental"], ["restaurant-1", "Restaurant"],
  ["jewel-1", "Jewellery"], ["aesthetic-1", "Aesthetic clinic"], ["cafe-2", "Café"], ["perfume-2", "Perfume"], ["footwear-2", "Footwear"], ["bouquet-2", "Florist"], ["icecream-2", "Ice cream"], ["hair-2", "Hair clinic"],
  ["restaurant-2", "Restaurant"], ["dental-2", "Dental"], ["cafe-3", "Café"], ["perfume-3", "Perfume"], ["jewel-2", "Jewellery"], ["footwear-3", "Footwear"], ["bouquet-3", "Florist"], ["aesthetic-2", "Aesthetic clinic"],
  ["icecream-3", "Ice cream"], ["hair-3", "Hair clinic"], ["restaurant-3", "Restaurant"], ["dental-3", "Dental"], ["cafe-4", "Café"], ["perfume-4", "Perfume"], ["bouquet-4", "Florist"], ["perfume-5", "Perfume"],
];

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const page = document.body.dataset.page;
const svgIcon = (k, size = 24) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;
const arrow = '<svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const toolColor = (name) => { for (const list of Object.values(TOOLS)) { const t = list.find((x) => x[0] === name); if (t) return t[2]; } return "#3b82f6"; };
const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const safeUrl = (u) => (/^https:\/\//i.test(u) ? u : "#");
const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
const store = { get(k) { try { return sessionStorage.getItem(k); } catch { return null; } }, set(k, v) { try { sessionStorage.setItem(k, v); } catch {} } };

if (hasGSAP && !reduceMotion) { document.documentElement.classList.add("anim"); gsap.registerPlugin(ScrollTrigger); }

/* ==========================================================================
   2. LAYOUT
   ========================================================================== */
const NAV = [["Home", "index.html", "home"], ["About", "about.html", "about"], ["Services", "services.html", "services"], ["Projects", "projects.html", "projects"], ["Contact", "contact.html", "contact"]];
const SOCIAL_SVG = {
  linkedin: '<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22zM8 8h4.37v1.92h.06c.61-1.15 2.1-2.37 4.32-2.37C21.4 7.55 22 10.4 22 14.1V22h-4.56v-7c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V22H8z" fill="currentColor" stroke="none" transform="translate(1 0) scale(.92)"/>',
  github: '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" fill="currentColor" stroke="none"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  behance: '<path d="M2 6h6a3 3 0 0 1 0 6H2zM2 12h7a3 3 0 0 1 0 6H2zM15 7h6M14 14.5h8a4 4 0 0 0-8 0 4 4 0 0 0 7.5 2"/>',
  x: '<path d="M4 4l16 16M20 4 4 20"/>',
};
const socialLinks = () => Object.entries(SITE.socials).map(([k, href]) => `<a href="${href}" aria-label="${k}" data-magnetic><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">${SOCIAL_SVG[k]}</svg></a>`).join("");

function buildChrome() {
  // grain, progress, cursor, page wipe
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="grain" aria-hidden="true"></div>
    <div class="scroll-progress" aria-hidden="true"></div>
    <div class="cursor" aria-hidden="true"><span class="cursor__text"></span></div><div class="cursor-dot" aria-hidden="true"></div>
    <div class="page-wipe" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`);

  // header
  $("#app-header").outerHTML = `
  <header class="header">
    <div class="container header__row">
      <a href="index.html" class="logo" aria-label="Faisal Ahamed — home"><span class="logo__mark">FA</span><span>Faisal<span class="dot">.</span></span></a>
      <nav class="nav" aria-label="Main">${NAV.map(([t, h, k]) => `<a href="${h}" class="${k === page ? "is-active" : ""}"><span class="roll"><span>${t}</span></span></a>`).join("")}</nav>
      <div class="header__cta">
        <a href="contact.html" class="btn" data-magnetic><span class="btn-inner">Let's talk ${arrow}</span></a>
        <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="mobile-menu" aria-hidden="true">
    <nav>${NAV.map(([t, h], i) => `<a href="${h}"><small>0${i + 1}</small>${t}</a>`).join("")}</nav>
    <div class="mobile-menu__foot"><a href="mailto:${SITE.email}">${SITE.email}</a><span>${SITE.location}</span><div class="socials">${socialLinks()}</div></div>
  </div>`;

  // footer
  const fcol = (title, body, open = false, extra = "") => `
    <div class="fcol ${extra}"><details ${open ? "open" : ""}><summary><h4>${title}</h4><i>+</i></summary>${body}</details></div>`;
  $("#app-footer").outerHTML = `
  <footer class="footer">
    <div class="footer__cta container">
      <span class="eyebrow">Have a project in mind?</span>
      <h2 class="h-display" style="margin-top:18px">Let's build something<br><span class="grad-text">remarkable.</span></h2>
      <p>Websites, stores, marketing, SEO, custom software or AI automation — tell me what you need and I'll reply within 24 hours.</p>
      <a href="contact.html" class="footer__big-btn" data-magnetic data-cursor-text="Hello!"><span>Start a<br>project ↗</span></a>
    </div>
    <div class="container footer__main">
      <div class="footer__brand">
        <a href="index.html" class="logo"><span class="logo__mark">FA</span><span>Faisal Ahamed<span class="dot">.</span></span></a>
        <p>Web developer &amp; digital growth partner with 5+ years of experience helping brands design, build and grow online.</p>
        <span class="avail"><i class="pulse"></i> Available for new projects</span>
        <div class="socials">${socialLinks()}</div>
      </div>
      ${fcol("Quick links", `<ul>${NAV.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join("")}<li><a href="projects.html">Case studies</a></li></ul>`)}
      ${fcol("Services", `<ul>${SERVICES.map((s) => `<li><a href="services.html">${s.title}</a></li>`).join("")}</ul>`)}
      ${fcol("Get in touch", `<div class="fcol__body"><div class="fcontact">
          <a href="mailto:${SITE.email}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>${SITE.email}</a>
          <a href="tel:${SITE.phone.replace(/\s/g, "")}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>${SITE.phone}</a>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-6 8-12a8 8 0 0 0-16 0c0 6 8 12 8 12z"/><circle cx="12" cy="10" r="3"/></svg>${SITE.location}</span>
        </div>
        <form class="newsletter" name="newsletter" method="POST" data-netlify="true" aria-label="Newsletter">
          <input type="hidden" name="form-name" value="newsletter">
          <input type="email" name="email" placeholder="Your email for updates" required aria-label="Email">
          <button type="submit" aria-label="Subscribe">→</button>
        </form><div class="newsletter-msg" role="status"></div></div>`, true, "fcol--news")}
    </div>
    <div class="footer__giant" aria-hidden="true">${"FAISAL AHAMED".split("").map((c) => `<b class="gl"><span>${c === " " ? "&nbsp;" : c}</span></b>`).join("")}</div>
    <div class="footer__bottom">
      <div class="container visitors-row"><p class="visitors" id="visitors" hidden><i class="pulse"></i><span><b id="v-online">1</b> viewing now</span><span class="visitors__sep">·</span><span><b id="v-total">0</b> total visits</span></p></div>
      <div class="container">
        <p>© 2021 All Rights Reserved. Made with <span class="heart">💙</span> by <b>Luphera</b></p>
        <div class="footer__legal"><a href="#">Privacy</a><a href="#">Terms</a></div>
        <button class="to-top" aria-label="Back to top">Back to top <i>↑</i></button>
      </div>
    </div>
  </footer>`;

  // giant footer name: scale the font so it always fits the width exactly
  const giant = $(".footer__giant");
  const fitGiant = () => {
    giant.style.fontSize = "";
    const fs = parseFloat(getComputedStyle(giant).fontSize), inner = [...giant.children].reduce((w, c) => w + c.getBoundingClientRect().width, 0);
    const avail = giant.clientWidth - 32;
    if (inner > 0) giant.style.fontSize = Math.min(fs * (avail / inner), 150) + "px";
  };
  fitGiant(); window.addEventListener("resize", fitGiant);
  document.fonts?.ready.then(fitGiant);

  // footer accordions: open on desktop/tablet, collapsible on mobile
  const mq = window.matchMedia("(max-width: 640px)");
  const syncDetails = () => $$(".fcol details").forEach((d) => { if (d.closest(".fcol--news")) { d.open = true; return; } d.open = !mq.matches; });
  syncDetails(); mq.addEventListener("change", syncDetails);
  $$(".fcol summary").forEach((s) => s.addEventListener("click", (e) => { if (!mq.matches || s.closest(".fcol--news")) e.preventDefault(); }));

  // newsletter
  const nl = $(".newsletter");
  nl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = $(".newsletter-msg");
    try {
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(nl)).toString() });
      if (!res.ok) throw new Error();
      msg.textContent = "Thanks! You're on the list."; nl.reset();
    } catch { msg.style.color = "#f87171"; msg.textContent = "Couldn't subscribe right now — please try again later."; }
  });
}

/* ---------- Preloader: character moonwalking across the loading bar ---------- */
const BOY_HTML = `<img class="boy__img" src="assets/img/character.webp" alt="" width="184" height="337" decoding="async" fetchpriority="high"><span class="boy__bubble">Hi! 👋</span>`;

function runPreloader(onDone) {
  const pre = $("#preloader");
  if (!pre) { onDone(); return; }
  const firstVisit = !store.get("fa-visited");
  store.set("fa-visited", "1");
  pre.innerHTML = `
    <div class="preloader__inner">
      <div class="preloader__greet">Hello</div>
      <div class="preloader__stage">
        <div class="boy">${BOY_HTML}</div>
        <div class="preloader__track"><div class="preloader__fill"></div></div>
      </div>
      <div class="preloader__count"><span>0</span><small>%</small></div>
      <div class="preloader__label">${firstVisit ? "Building something awesome" : "Loading"}</div>
    </div>`;
  const boy = $(".boy", pre), fill = $(".preloader__fill", pre), num = $(".preloader__count span", pre), greet = $(".preloader__greet", pre);
  const greetings = ["Hello", "வணக்கம்", "नमस्ते", "مرحبا", "Bonjour", "Hola", "Hello"];
  const duration = reduceMotion ? 300 : firstVisit ? 2800 : 1100;
  const start = performance.now();
  let gi = 0;

  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const p = Math.round(eased * 100);
    num.textContent = p;
    fill.style.width = p + "%";
    boy.style.left = p + "%";
    boy.style.transform = `translateX(-${p}%)`; // keeps the boy inside the track at 0% and 100%
    const g = Math.min(Math.floor(t * greetings.length), greetings.length - 1);
    if (g !== gi) { gi = g; greet.textContent = greetings[g]; }
    if (t < 1) requestAnimationFrame(tick);
    else finish();
  };
  requestAnimationFrame(tick);

  function finish() {
    boy.classList.add("is-waving");
    const exit = () => {
      document.body.classList.remove("is-loading");
      if (!hasGSAP) { pre.remove(); onDone(); return; }
      const curtain = document.createElement("div");
      curtain.className = "preloader__curtain";
      document.body.appendChild(curtain);
      gsap.timeline({ onComplete: () => { pre.remove(); curtain.remove(); } })
        .to($(".preloader__inner", pre), { y: -40, opacity: 0, duration: 0.5, ease: "power3.in" })
        .to(curtain, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.1")
        .set(pre, { autoAlpha: 0 })
        .add(onDone, "-=0.25")
        .to(curtain, { yPercent: -200, duration: 0.7, ease: "power4.inOut" }, "-=0.2");
    };
    setTimeout(exit, reduceMotion ? 0 : firstVisit ? 900 : 350);
  }
}

/* ---------- Header behaviour, mobile menu, page wipe ---------- */
let lenis = null;
function initHeader() {
  const header = $(".header");
  let last = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 30);
    header.classList.toggle("is-hidden", y > last && y > 400 && !document.body.classList.contains("menu-open"));
    last = y;
    const max = document.documentElement.scrollHeight - innerHeight;
    $(".scroll-progress").style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const burger = $(".burger"), menu = $(".mobile-menu");
  const toggle = (open) => {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open); menu.setAttribute("aria-hidden", !open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (lenis) open ? lenis.stop() : lenis.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => toggle(!document.body.classList.contains("menu-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

  $(".to-top").addEventListener("click", () => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" })));

  // page transition on internal links
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname)) return;
    if (url.pathname === location.pathname && url.hash) return; // same-page anchors
    e.preventDefault();
    if (!hasGSAP || reduceMotion) { location.href = url.href; return; }
    toggleMenuOff();
    gsap.to(".page-wipe span", { scaleY: 1, transformOrigin: "bottom", duration: 0.55, stagger: 0.06, ease: "power4.inOut", onComplete: () => (location.href = url.href) });
  });
  function toggleMenuOff() { if (document.body.classList.contains("menu-open")) toggle(false); }
  window.addEventListener("pageshow", (e) => { if (e.persisted && hasGSAP) gsap.set(".page-wipe span", { scaleY: 0 }); });
}

/* ---------- Custom cursor + magnetic ---------- */
function initCursor() {
  if (!finePointer) return;
  const c = $(".cursor"), dot = $(".cursor-dot"), label = $(".cursor__text");
  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
  window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; });
  const loop = () => { cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18; c.style.transform = `translate(${cx}px, ${cy}px)`; requestAnimationFrame(loop); };
  loop();
  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest("[data-cursor-text]");
    const h = e.target.closest("a, button, label, summary, input, textarea, select, .tool, [data-hover]");
    if (t) { c.classList.add("is-text"); c.classList.remove("is-hover"); label.textContent = t.dataset.cursorText; }
    else if (h) { c.classList.add("is-hover"); c.classList.remove("is-text"); }
    else c.classList.remove("is-hover", "is-text");
  });
  document.addEventListener("mouseleave", () => { c.style.opacity = dot.style.opacity = 0; });
  document.addEventListener("mouseenter", () => { c.style.opacity = dot.style.opacity = 1; });
}
function initMagnetic() {
  if (!finePointer || !hasGSAP) return;
  $$("[data-magnetic]").forEach((el) => {
    const strength = el.classList.contains("footer__big-btn") ? 0.4 : 0.3;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength, duration: 0.5, ease: "power3.out" });
    });
    el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, .4)" }));
  });
}

/* ==========================================================================
   3. MOTION
   ========================================================================== */
function initSmoothScroll() {
  if (!hasGSAP || reduceMotion || typeof window.Lenis === "undefined") return;
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // smooth in-page anchors
  $$('a[href*="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = $(url.hash); if (!target) return;
    e.preventDefault(); lenis.scrollTo(target, { offset: -80, duration: 1.4 });
  }));
}

// split text into masked words (keeps nested gradient spans)
function splitWords(el) {
  const walk = (node, grad) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const mask = document.createElement("span"); mask.className = "split-mask";
          const w = document.createElement("span"); w.className = "split-word" + (grad ? " grad-text" : ""); w.textContent = part;
          mask.appendChild(w); frag.appendChild(mask);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR") {
        const g = grad || n.classList.contains("grad-text");
        if (n.classList.contains("grad-text")) n.classList.replace("grad-text", "grad-holder");
        walk(n, g);
      }
    });
  };
  walk(el, el.classList.contains("grad-text"));
  return $$(".split-word", el);
}

function initReveals() {
  if (!hasGSAP || reduceMotion) return;

  // headings with [data-split] reveal word by word on scroll
  $$("[data-split]").forEach((el) => {
    const words = splitWords(el);
    if (el.hasAttribute("data-split-now")) { el._words = words; gsap.set(words, { yPercent: 115, rotate: 6 }); return; }
    gsap.from(words, { yPercent: 115, rotate: 6, duration: 1.1, stagger: 0.05, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });

  // generic fade-up
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 90%",
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: 0.09, ease: "power3.out", overwrite: true }),
  });

  // counters
  $$("[data-count]").forEach((el) => {
    const end = +el.dataset.count, obj = { v: 0 };
    gsap.to(obj, { v: end, duration: 2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%" }, onUpdate: () => (el.textContent = Math.round(obj.v) + (el.dataset.suffix || "")) });
  });

  // parallax
  $$("[data-speed]").forEach((el) => {
    gsap.to(el, { yPercent: -parseFloat(el.dataset.speed) * 20, ease: "none", scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // scroll-highlight paragraphs
  $$("[data-highlight]").forEach((el) => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");
    gsap.to($$(".w", el), { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } });
  });

  // footer giant letters rise in
  gsap.from(".footer__giant .gl", { yPercent: 100, stagger: 0.04, duration: 1, ease: "power4.out", scrollTrigger: { trigger: ".footer__giant", start: "top 98%" } });
}

// infinite marquee that speeds up / reverses with scroll velocity
function initMarquees() {
  $$(".marquee").forEach((m) => {
    const track = $(".marquee__track", m), group = $(".marquee__group", m);
    // fill to at least 2x viewport then duplicate once for a seamless -50% loop
    while (group.scrollWidth < innerWidth * 1.2) group.innerHTML += group.innerHTML;
    track.appendChild(group.cloneNode(true));
    if (!hasGSAP || reduceMotion) return;
    const dir = m.dataset.direction === "right" ? -1 : 1;
    const tween = gsap.to(track, { xPercent: -50, duration: parseFloat(m.dataset.duration || 30), ease: "none", repeat: -1 });
    tween.totalTime(tween.duration() * 1000);
    tween.timeScale(dir);
    ScrollTrigger.create({
      trigger: m, start: "top bottom", end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity();
        const s = dir * (self.direction === 1 ? 1 : -1);
        gsap.to(tween, { timeScale: s * Math.min(1 + Math.abs(v) / 300, 5), duration: 0.2, overwrite: true });
        gsap.to(tween, { timeScale: s, duration: 1.2, delay: 0.25, overwrite: false });
      },
    });
  });
}

// 3D tilt + spotlight on cards
function initTilt(selector) {
  if (!finePointer) return;
  $$(selector).forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px"); card.style.setProperty("--my", y + "px");
      if (hasGSAP && !reduceMotion) gsap.to(card, { rotateY: (x / r.width - 0.5) * 10, rotateX: -(y / r.height - 0.5) * 10, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => hasGSAP && gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, .5)" }));
  });
}

/* ---------- shared renderers ---------- */
const mockArt = (p, label = true) => `
  <div class="mock" style="--mbg:${p.color}">
    <div class="mock__win"><div class="mock__bar mock__bar--accent"></div><div class="mock__bar" style="width:80%"></div><div class="mock__bar" style="width:60%"></div>
      <div class="mock__grid"><span></span><span></span><span></span><span></span><span></span><span></span></div></div>
    ${label ? `<span class="mock__label">${p.catLabel}</span>` : ""}
  </div>`;

function renderToolsMarquee(el, outline = false) {
  if (!el) return;
  const names = [...new Set(Object.values(TOOLS).flat().map((t) => t[0]))];
  $(".marquee__group", el).innerHTML = names.map((n, i) => `<span class="marquee__item ${outline && i % 2 ? "outline" : ""}">${n}</span>`).join("");
}

/* ==========================================================================
   4. PAGES
   ========================================================================== */
function pageHome() {
  initHeroOrbit();

  // mouse parallax on orbit + blobs
  if (finePointer && hasGSAP && !reduceMotion) {
    const ox = gsap.quickTo(".hero-orbit", "x", { duration: 1, ease: "power3" }), oy = gsap.quickTo(".hero-orbit", "y", { duration: 1, ease: "power3" });
    const bx = gsap.quickTo(".blob--1", "x", { duration: 2 }), by = gsap.quickTo(".blob--1", "y", { duration: 2 });
    $(".hero").addEventListener("mousemove", (e) => {
      const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
      ox(nx * 30); oy(ny * 30); bx(nx * -80); by(ny * -80);
    });
  }

  // typed roles
  const roles = ["Web Developer", "Shopify & WordPress Expert", "Performance Marketer", "SEO Specialist", "AI Automation Builder", "Custom Software Developer"];
  const typed = $(".typed");
  let ri = 0, ci = 0, del = false;
  const type = () => {
    const word = roles[ri];
    typed.textContent = word.slice(0, ci);
    if (!del && ci < word.length) ci++;
    else if (!del) { del = true; return setTimeout(type, 1600); }
    else if (ci > 0) ci--;
    else { del = false; ri = (ri + 1) % roles.length; }
    setTimeout(type, del ? 35 : 70);
  };
  if (reduceMotion) typed.textContent = roles[0]; else type();

  // Scroll effects must be created in page order (top to bottom): a pinned section
  // adds scroll distance, and triggers created before it would not account for it.
  initReels(); initCinematic();
  initSites();
  initPosters();
  initProcess();
  initValues();

  renderToolsMarquee($("#tools-marquee"), true);
}

function initProcess() {
  $("#process-track").insertAdjacentHTML("beforeend", PROCESS.map(([t, d], i) => `
    <div class="step"><span class="step__num">0${i + 1}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join(""));
  if (hasGSAP && !reduceMotion) {
    ScrollTrigger.matchMedia({
      "(min-width: 901px)": () => {
        const track = $("#process-track");
        const dist = () => track.scrollWidth - innerWidth;
        const h = gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: ".process", pin: true, scrub: 1, end: () => "+=" + dist(), invalidateOnRefresh: true } });
        // each step rises and settles as it slides into view
        $$(".step", track).forEach((step) => {
          gsap.fromTo(step, { y: 140, rotate: 5, scale: 0.88, opacity: 0.2 }, { y: 0, rotate: 0, scale: 1, opacity: 1, ease: "power2.out",
            scrollTrigger: { trigger: step, containerAnimation: h, start: "left 95%", end: "left 55%", scrub: true } });
          gsap.fromTo($(".step__num", step), { xPercent: -60, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "power2.out",
            scrollTrigger: { trigger: step, containerAnimation: h, start: "left 90%", end: "left 50%", scrub: true } });
        });
      },
    });
  }
}

/* ---------- home: lightbox (reels + posters) ---------- */
let lightbox = null;
function openLightbox(html, { onPrev, onNext } = {}) {
  if (!lightbox) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="lightbox" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="lightbox__backdrop"></div>
        <div class="lightbox__body"></div>
        <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">‹</button>
        <button class="lightbox__nav lightbox__nav--next" aria-label="Next">›</button>
        <button class="lightbox__close" aria-label="Close">×</button>
      </div>`);
    lightbox = $(".lightbox");
    const close = () => { lightbox.classList.remove("is-open"); lightbox.setAttribute("aria-hidden", "true"); $(".lightbox__body", lightbox).innerHTML = ""; lenis?.start(); };
    $(".lightbox__close", lightbox).addEventListener("click", close);
    $(".lightbox__backdrop", lightbox).addEventListener("click", close);
    $(".lightbox__nav--prev", lightbox).addEventListener("click", () => lightbox._prev?.());
    $(".lightbox__nav--next", lightbox).addEventListener("click", () => lightbox._next?.());
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") lightbox._prev?.();
      if (e.key === "ArrowRight") lightbox._next?.();
    });
  }
  lightbox._prev = onPrev; lightbox._next = onNext;
  lightbox.classList.toggle("has-nav", !!onPrev);
  const body = $(".lightbox__body", lightbox);
  body.innerHTML = html;
  if (hasGSAP && !reduceMotion) gsap.fromTo(body.firstElementChild, { scale: 0.85, opacity: 0, rotationX: 12, transformPerspective: 1000 }, { scale: 1, opacity: 1, rotationX: 0, duration: 0.6, ease: "power3.out" });
  lightbox.classList.add("is-open"); lightbox.setAttribute("aria-hidden", "false");
  lenis?.stop(); $(".lightbox__close", lightbox).focus();
}

/* ---------- home: reels fan out from a stacked deck as you scroll ---------- */
function initReels() {
  const stage = $("#reels-stage"); if (!stage) return;
  stage.innerHTML = REELS.map((r, i) => `
    <button class="reel" data-i="${i}" data-cursor-text="Play" aria-label="Play reel: ${r.title}">
      <span class="reel__phone">
        <video muted loop playsinline preload="none" poster="assets/video/${r.src}.jpg"><source src="assets/video/${r.src}.mp4" type="video/mp4"></video>
        <span class="reel__notch"></span>
        <span class="reel__ui">
          <span class="reel__tag">${r.tag}</span>
          <span class="reel__play" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
          <span class="reel__cap"><b>${r.title}</b><small>${r.brand}</small></span>
        </span>
      </span>
    </button>`).join("");
  const reels = $$(".reel", stage);
  // all reels play (muted, looping) while the section is on screen; click opens one with sound
  const playAll = (on) => reels.forEach((r) => { const v = $("video", r); if (on) v.play().catch(() => {}); else v.pause(); r.classList.toggle("is-playing", on); });
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => playAll(e.isIntersecting), { threshold: 0.2 }).observe(stage);
  else playAll(true);
  stage.addEventListener("click", (e) => {
    const r = e.target.closest(".reel"); if (!r) return;
    const d = REELS[r.dataset.i];
    openLightbox(`<div class="lb-reel"><video src="assets/video/${d.src}.mp4" poster="assets/video/${d.src}.jpg" controls autoplay playsinline></video><p><b>${d.title}</b> · ${d.brand}</p></div>`);
  });

  // phone / tablet: swipe carousel — the centred reel is full size, neighbours shrink and tilt, dots show position
  const dots = document.createElement("div");
  dots.className = "reels__dots";
  dots.innerHTML = REELS.map((r, i) => `<button aria-label="Show reel ${i + 1}" data-i="${i}"></button>`).join("");
  stage.after(dots);
  const narrow = window.matchMedia("(max-width: 900px)");
  const coverflow = () => {
    if (!narrow.matches) { reels.forEach((r) => { r.style.removeProperty("--cf-s"); r.style.removeProperty("--cf-r"); r.style.removeProperty("--cf-o"); }); return; }
    const mid = stage.scrollLeft + stage.clientWidth / 2;
    let best = 0, bestD = Infinity;
    reels.forEach((r, i) => {
      const d = (r.offsetLeft + r.offsetWidth / 2 - mid) / r.offsetWidth; // distance in card widths
      const a = Math.min(Math.abs(d), 1.5);
      r.style.setProperty("--cf-s", (1 - a * 0.16).toFixed(3));
      r.style.setProperty("--cf-r", (Math.max(-1, Math.min(1, d)) * -18).toFixed(1) + "deg");
      r.style.setProperty("--cf-o", (1 - a * 0.35).toFixed(3));
      if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = i; }
    });
    $$("button", dots).forEach((b, i) => b.classList.toggle("is-active", i === best));
  };
  stage.addEventListener("scroll", () => requestAnimationFrame(coverflow), { passive: true });
  addEventListener("resize", coverflow);
  dots.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const r = reels[b.dataset.i];
    stage.scrollTo({ left: r.offsetLeft - (stage.clientWidth - r.offsetWidth) / 2, behavior: "smooth" });
  });
  // start on the middle reel so there are reels on both sides
  requestAnimationFrame(() => {
    if (narrow.matches) { const r = reels[Math.floor(reels.length / 2)]; stage.scrollLeft = r.offsetLeft - (stage.clientWidth - r.offsetWidth) / 2; }
    coverflow();
  });

  if (!hasGSAP || reduceMotion) return;
  ScrollTrigger.matchMedia({
    "(min-width: 901px)": () => {
      // flat 2D fan (scale + perspective per card) so every reel stays clickable — no negative depth hiding cards behind the stage
      const mid = (reels.length - 1) / 2;
      const gap = () => Math.min(250, (innerWidth - 160) / reels.length);
      gsap.set(reels, { x: 0, y: 60, rotation: (i) => (i - mid) * 5, rotationY: 0, transformPerspective: 1200, scale: 0.86, zIndex: (i) => 10 - Math.round(Math.abs(i - mid)) });
      gsap.timeline({ scrollTrigger: { trigger: stage, start: "top 85%", end: "center 55%", scrub: 1, invalidateOnRefresh: true } })
        .to(reels, { x: (i) => (i - mid) * gap(), y: (i) => Math.abs(i - mid) * 30, rotation: (i) => (i - mid) * 3, rotationY: (i) => -(i - mid) * 14, scale: (i) => 1 - Math.abs(i - mid) * 0.07, ease: "power2.out" });
      return () => gsap.set(reels, { clearProps: "all" });
    },
  });
}

/* ---------- home: live websites stack — each site scrolls inside its browser ---------- */
function initSites() {
  const stack = $("#sites-stack"); if (!stack) return;
  const host = (u) => new URL(u).hostname.replace(/^www\./, "");
  stack.innerHTML = SITES.map((s, i) => `
    <article class="site-card" style="--sc:${s.color}">
      <div class="site-card__info">
        <span class="site-card__num">0${i + 1}<i>/ 0${SITES.length}</i></span>
        <span class="eyebrow">${s.cat}</span>
        <h3>${s.name}</h3>
        <p>${s.text}</p>
        <div class="chips">${s.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
        <a href="${s.url}" class="btn" target="_blank" rel="noopener noreferrer" data-magnetic><span class="btn-inner">Visit live site ${arrow}</span></a>
      </div>
      <a class="browser" href="${s.url}" target="_blank" rel="noopener noreferrer" data-cursor-text="Visit" aria-label="Open ${s.name} in a new tab">
        <span class="browser__bar"><i></i><i></i><i></i><span class="browser__url"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>${host(s.url)}</span></span>
        <span class="browser__view"><img src="assets/img/sites/${s.img}.webp" alt="${s.name} website homepage" width="900" height="${s.h}" loading="lazy" decoding="async"></span>
      </a>
    </article>`).join("");
  const cards = $$(".site-card", stack);
  const travel = (c) => () => { const img = $(".browser__view img", c), view = $(".browser__view", c); return -Math.max(0, img.offsetHeight - view.clientHeight); };

  if (!hasGSAP || reduceMotion) return;
  // every screen size: pin the stack; cards slide up over each other while the current site scrolls
  ScrollTrigger.config({ ignoreMobileResize: true }); // phone address bar showing/hiding must not re-layout the pin
  const top = () => (($(".header")?.offsetHeight || 72) + (innerWidth > 900 ? 24 : 10));
  stack.classList.add("is-pinned");
  gsap.set(cards.slice(1), { yPercent: 108 });
  const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: stack, start: () => "top " + top() + "px", end: () => "+=" + innerHeight * cards.length * (innerWidth > 900 ? 1.15 : 0.95), pin: true, scrub: 1, invalidateOnRefresh: true } });
  cards.forEach((c, i) => {
    tl.to($(".browser__view img", c), { y: travel(c), duration: 1.4 });
    const next = cards[i + 1];
    if (next) {
      tl.to(next, { yPercent: 0, duration: 0.8, ease: "power2.inOut" })
        .to(c, { scale: 0.9, yPercent: -4, "--dim": 0.7, duration: 0.8, ease: "power2.inOut" }, "<")
        .fromTo($$(".site-card__info > *", next), { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" }, "-=0.35");
    }
  });
}

/* ---------- home: posters on two counter-rotating 3D rings ---------- */
function initPosters() {
  const stage = $("#posters-stage"); if (!stage) return;
  const rows = [POSTERS.filter((_, i) => i % 2 === 0), POSTERS.filter((_, i) => i % 2 === 1)];
  stage.innerHTML = rows.map((list, r) => `
    <div class="ring-row"><div class="ring" data-row="${r}" style="--n:${list.length}">
      ${list.map(([f, cat], k) => `<button class="ring__item" style="--k:${k}" data-file="${f}" aria-label="${cat} poster"><img src="assets/img/posters/${f}.webp" alt="${cat} poster design" loading="lazy" decoding="async" draggable="false"></button>`).join("")}
    </div></div>`).join("");
  const rings = $$(".ring", stage).map((el, r) => ({ el, n: +el.style.getPropertyValue("--n"), angle: r ? 11 : 0, dir: r ? -1 : 1, tween: null }));
  const render = () => rings.forEach((g) => (g.el.style.transform = `translateZ(calc(var(--r) * -1)) rotateY(${g.angle}deg)`));
  render();

  // industry chips: spin the ring so that industry's first poster faces you
  const cats = [...new Set(POSTERS.map((p) => p[1]))];
  $("#poster-cats").innerHTML = cats.map((c) => `<button class="tool-tab chip-btn" data-cat="${c}">${c}<sup>${POSTERS.filter((p) => p[1] === c).length}</sup></button>`).join("");

  let hover = false, drag = null, moved = 0, boost = 0;
  const speed = reduceMotion ? 0 : 0.08;
  // only spin (and repaint) while the gallery is on screen
  let visible = false;
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100px 0px" }).observe(stage);
  else visible = true;
  const tick = () => {
    if (!visible) return;
    boost *= 0.92;
    rings.forEach((g) => { if (!g.tween && !drag) g.angle += g.dir * ((hover ? 0.015 : speed) + boost); });
    render();
  };
  if (hasGSAP) {
    gsap.ticker.add(tick);
    if (!reduceMotion) ScrollTrigger.create({ trigger: stage, start: "top bottom", end: "bottom top", onUpdate: (st) => (boost = Math.max(-1.6, Math.min(1.6, st.getVelocity() / 900))) });
  }
  stage.addEventListener("mouseenter", () => (hover = true));
  stage.addEventListener("mouseleave", () => (hover = false));
  stage.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, start: rings.map((g) => g.angle) }; moved = 0; stage.classList.add("is-drag"); });
  addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x; moved = Math.max(moved, Math.abs(dx));
    rings.forEach((g, i) => (g.angle = drag.start[i] + dx * 0.18 * (i ? -1 : 1)));
    if (!hasGSAP) render();
  });
  addEventListener("pointerup", () => { drag = null; stage.classList.remove("is-drag"); });

  const openAt = (idx) => {
    const [f, cat] = POSTERS[idx];
    openLightbox(`<figure class="lb-poster"><img src="assets/img/posters/${f}.webp" alt="${cat} poster design"><figcaption>${cat} · ${idx + 1} / ${POSTERS.length}</figcaption></figure>`,
      { onPrev: () => openAt((idx - 1 + POSTERS.length) % POSTERS.length), onNext: () => openAt((idx + 1) % POSTERS.length) });
  };
  stage.addEventListener("click", (e) => {
    const b = e.target.closest(".ring__item"); if (!b || moved > 6) return;
    openAt(POSTERS.findIndex((p) => p[0] === b.dataset.file));
  });

  $("#poster-cats").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-btn"); if (!btn) return;
    $$(".chip-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
    const idx = POSTERS.findIndex((p) => p[1] === btn.dataset.cat), g = rings[idx % 2], k = Math.floor(idx / 2);
    let target = -(k * 360) / g.n;
    target += Math.round((g.angle - target) / 360) * 360; // nearest full turn
    $$(".ring__item", stage).forEach((it) => it.classList.toggle("is-match", POSTERS.find((p) => p[0] === it.dataset.file)[1] === btn.dataset.cat));
    if (!hasGSAP) { g.angle = target; render(); return; }
    g.tween?.kill();
    g.tween = gsap.to(g, { angle: target, duration: 1.4, ease: "power3.inOut", onComplete: () => setTimeout(() => (g.tween = null), 2200) });
  });

  // entrance: fade the (flat) stage, never the 3D rows — opacity on a preserve-3d element flattens it,
  // which made the posters show full-size and then snap smaller when the fade finished
  if (hasGSAP && !reduceMotion) {
    gsap.timeline({ scrollTrigger: { trigger: stage, start: "top 85%" }, defaults: { ease: "power3.out" } })
      .fromTo(stage, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power1.out" })
      .fromTo(".ring-row", { scale: 0.82, rotationX: 18, y: 40 }, { scale: 1, rotationX: 0, y: 0, duration: 2, stagger: 0.15 }, 0);
  }
}

/* ---------- home: cinematic / motion-graphics film, tilts flat as you scroll in ---------- */
function initCinematic() {
  const stage = $("#cine-stage"); if (!stage || !CINEMATIC.length) return;
  const video = $("#cine-video"), bar = $("#cine-bar"), sound = $("#cine-sound"), frame = $(".cine__frame", stage);
  let cur = 0, inView = false;
  const show = (i) => {
    cur = i; const c = CINEMATIC[i];
    video.poster = `assets/video/${c.src}.jpg`; video.src = `assets/video/${c.src}.mp4`;
    $("#cine-ambient").src = `assets/video/${c.src}.jpg`;
    $("#cine-text").textContent = c.text;
    $("#cine-meta").innerHTML = [["Client", c.client], ["Length", c.length], ["Format", c.format]].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
    $("#cine-tags").innerHTML = c.tags.map((t) => `<span class="chip">${t}</span>`).join("");
    $$(".cine__thumb").forEach((b, k) => b.classList.toggle("is-active", k === i));
    if (inView) video.play().catch(() => {});
  };
  if (CINEMATIC.length > 1) {
    $("#cine-list").innerHTML = CINEMATIC.map((c, i) => `<button class="cine__thumb" data-i="${i}"><img src="assets/video/${c.src}.jpg" alt="" loading="lazy"><span>${c.title}</span></button>`).join("");
    $("#cine-list").addEventListener("click", (e) => { const b = e.target.closest(".cine__thumb"); if (b) show(+b.dataset.i); });
  }
  show(0);

  // play muted only while on screen
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => {
    inView = e.isIntersecting;
    if (inView) video.play().catch(() => {}); else video.pause();
  }, { threshold: 0.25 }).observe(frame);
  video.addEventListener("timeupdate", () => { bar.style.transform = `scaleX(${video.currentTime / (video.duration || 1)})`; });

  // inline sound toggle
  sound.addEventListener("click", (e) => {
    e.stopPropagation();
    video.muted = !video.muted;
    if (!video.muted) video.play().catch(() => {});
    sound.classList.toggle("is-on", !video.muted);
    sound.setAttribute("aria-label", video.muted ? "Turn sound on" : "Turn sound off");
  });
  // click the film (or the button) to watch it large with sound
  const openFilm = () => {
    const c = CINEMATIC[cur]; video.pause();
    openLightbox(`<div class="lb-reel"><video src="assets/video/${c.src}.mp4" poster="assets/video/${c.src}.jpg" controls autoplay playsinline></video><p><b>${c.title}</b> · ${c.format}</p></div>`);
  };
  frame.addEventListener("click", openFilm);
  $("#cine-watch").addEventListener("click", openFilm);

  if (!hasGSAP || reduceMotion) return;
  // the frame swings in from a 3D tilt and settles flat, scrubbed by scroll
  gsap.fromTo(frame, { rotationY: -28, rotationX: 10, scale: 0.82, y: 80, transformPerspective: 1400 },
    { rotationY: 0, rotationX: 0, scale: 1, y: 0, ease: "none", scrollTrigger: { trigger: stage, start: "top 95%", end: "center 55%", scrub: 1 } });
  gsap.fromTo(".cine__ambient", { opacity: 0, scale: 0.6 }, { opacity: 0.75, scale: 1, ease: "none", scrollTrigger: { trigger: stage, start: "top 90%", end: "center 55%", scrub: 1 } });
  gsap.from(".cine__meta > div, #cine-tags, #cine-watch", { y: 30, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ".cine__copy", start: "top 75%" } });
}

/* ---------- home: "why me" cards flip up in 3D, then tilt with the pointer ---------- */
function initValues() {
  const vals = $$(".values--home .value"); if (!vals.length) return;
  if (!hasGSAP || reduceMotion) return;
  gsap.fromTo(vals, { opacity: 0, y: 140, rotationX: -70, transformPerspective: 1000, transformOrigin: "50% 0%" },
    { opacity: 1, y: 0, rotationX: 0, duration: 1.4, stagger: 0.16, ease: "power4.out", scrollTrigger: { trigger: ".values--home", start: "top 85%" }, onComplete: () => initTilt(".values--home .value") });
}

function pageServices() {
  // services
  $("#services-grid").innerHTML = SERVICES.map((s, i) => `
    <article class="service" data-reveal>
      <div class="service__art" aria-hidden="true"><img src="assets/img/services/${s.icon}.webp" alt="" width="372" height="250" loading="lazy" decoding="async"></div>
      <div class="service__body">
        <span class="service__num">0${i + 1}</span>
        <h3>${s.title}</h3><p>${s.text}</p>
        <div class="chips">${s.tools.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
      </div>
    </article>`).join("");
  // spotlight follows the pointer (no tilt, so the rising art stays upright)
  $$(".service").forEach((card) => card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px"); card.style.setProperty("--my", e.clientY - r.top + "px");
  }));
  // touch screens have no hover: raise the art of the card in the middle of the screen
  if (!finePointer && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle("is-active", en.isIntersecting)), { rootMargin: "-35% 0px -35% 0px" });
    $$(".service").forEach((c) => io.observe(c));
  }

  // tools tabs
  const cats = Object.keys(TOOLS);
  const all = cats.flatMap((c) => TOOLS[c].map((t) => ({ name: t[0], abbr: t[1], color: t[2], cat: c })));
  $("#tool-tabs").innerHTML = [...cats.map((c, i) => `<button class="tool-tab ${i ? "" : "is-active"}" data-cat="${c}">${c}<sup>${TOOLS[c].length}</sup></button>`), `<button class="tool-tab" data-cat="all">All tools<sup>${all.length}</sup></button>`].join("");
  $("#tools-grid").innerHTML = all.map((t) => `
    <div class="tool ${t.cat === cats[0] ? "" : "is-hidden"}" data-cat="${t.cat}" style="--tc:${t.color}">
      <span class="tool__visual"><span class="tool__flip">${TOOL_ICONS[t.name]
        ? `<img class="tool__img" src="assets/img/tools/${TOOL_ICONS[t.name]}.webp" alt="" width="160" height="160" loading="lazy" decoding="async">`
        : `<span class="tool__badge">${t.abbr}</span>`}</span></span>
      <div><div class="tool__name">${t.name}</div><div class="tool__cat">${t.cat}</div></div>
    </div>`).join("");
  $("#tool-count").textContent = new Set(all.map((t) => t.name)).size;
  $("#tool-tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tool-tab"); if (!btn) return;
    $$(".tool-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
    const cat = btn.dataset.cat;
    const shown = [];
    $$(".tool").forEach((t) => { const on = cat === "all" || t.dataset.cat === cat; t.classList.toggle("is-hidden", !on); if (on) shown.push(t); });
    if (hasGSAP && !reduceMotion) gsap.fromTo(shown, { opacity: 0, y: 24, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.02, ease: "power3.out", overwrite: true });
    window.ScrollTrigger?.refresh();
  });
  if (hasGSAP && !reduceMotion) gsap.fromTo(".tool:not(.is-hidden)", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.015, ease: "power3.out", scrollTrigger: { trigger: "#tools-grid", start: "top 85%" } });

  renderToolsMarquee($("#tools-marquee"), true);
}

/* ---------- home hero: platform icons orbit around the character in 3D ---------- */
function initHeroOrbit() {
  const wrap = $(".hero-orbit"); if (!wrap) return;
  const ICONS = [["wordpress", "WordPress"], ["shopify", "Shopify"], ["meta-ads", "Meta Ads"], ["google-ads", "Google Ads"], ["instagram", "Instagram"], ["facebook", "Facebook"], ["youtube", "YouTube"], ["woocommerce", "WooCommerce"]];
  const box = $(".hero-orbit__items", wrap);
  box.innerHTML = ICONS.map(([f, n]) => `<div class="ho-item" data-hover><span class="ho-item__icon"><img src="assets/img/tools/${f}.webp" alt="" width="160" height="160" decoding="async"></span><em>${n}</em></div>`).join("");
  const items = $$(".ho-item", box);
  let angle = -Math.PI / 2, slow = false, visible = true, last = performance.now();
  const speed = reduceMotion ? 0 : 0.0042;
  const place = () => {
    const W = wrap.clientWidth, H = wrap.clientHeight;
    const rx = W * 0.46, ry = W * 0.12, cx = W / 2, cy = H * 0.6; // matches the CSS ellipse
    items.forEach((el, i) => {
      const t = angle + (i / items.length) * Math.PI * 2, s = Math.sin(t), c = Math.cos(t), d = (s + 1) / 2; // d: 0 = behind, 1 = in front
      el.style.transform = `translate3d(${cx + c * rx}px, ${cy + s * ry}px, 0) translate(-50%, -50%) perspective(500px) rotateY(${-c * 35}deg) scale(${0.6 + d * 0.5})`;
      el.style.zIndex = s > 0 ? 20 : 3;
      el.style.opacity = 0.5 + d * 0.5;
      el.style.filter = `brightness(${0.55 + d * 0.45})`;
    });
  };
  place();
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(wrap);
  box.addEventListener("mouseover", () => (slow = true));
  box.addEventListener("mouseout", () => (slow = false));
  addEventListener("resize", place);
  const loop = (now) => {
    const dt = Math.min(now - last, 50) / 16.67; last = now;
    if (visible && speed) { angle += speed * (slow ? 0.2 : 1) * dt; place(); }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

function heroIntro() {
  if (!hasGSAP || reduceMotion) return;
  const title = $(".hero__title");
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.from(".hero__status", { y: 20, opacity: 0, duration: 0.8 })
    .to(title._words || [], { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.07 }, "-=0.5")
    .from(".hero__role, .hero__actions > *, .stat", { y: 30, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.8")
    .from(".hero-orbit__glow", { scale: 0.4, opacity: 0, duration: 1.6, ease: "expo.out" }, "-=1.3")
    .from(".hero-orbit__me", { y: 80, opacity: 0, scale: 0.92, duration: 1.4, ease: "expo.out" }, "<0.1")
    .from(".hero-orbit__ring", { scaleX: 0.2, scaleY: 0.2, opacity: 0, duration: 1.4, stagger: 0.1, ease: "expo.out" }, "<0.2")
    .from(".hero-orbit__items", { scale: 0.5, opacity: 0, duration: 1.4, ease: "expo.out", clearProps: "all" }, "<0.15")
    .from(".hero__scroll", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");
}

function pageIntro() {
  if (!hasGSAP || reduceMotion) return;
  const t = $(".page-hero__title");
  gsap.timeline({ defaults: { ease: "power4.out" } })
    .from(".breadcrumb", { y: 20, opacity: 0, duration: 0.7 })
    .to(t._words || [], { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.08 }, "-=0.4")
    .from(".page-hero__row > *", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.8");
}

function pageAbout() {
  renderToolsMarquee($("#tools-marquee"), true);
  if (!hasGSAP || reduceMotion) return;
  gsap.to(".timeline__line i", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true } });
  $$(".skill__bar i").forEach((bar) => gsap.to(bar, { scaleX: 1, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: bar, start: "top 92%" } }));
  gsap.to(".portrait__art", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".portrait", start: "top bottom", end: "bottom top", scrub: true } });
  initTilt(".value");
}

// Poster sets on the projects page — [title, industries in POSTERS]
const POSTER_SETS = [
  ["Food & café poster series", ["Café", "Restaurant", "Ice cream"], "Menu launches, combo offers and festive specials for cafés, restaurants and ice-cream parlours — bold food photography with prices that read at a glance."],
  ["Beauty & wellness poster series", ["Perfume", "Hair clinic", "Aesthetic clinic", "Dental"], "Premium product and clinic creatives for perfume brands, hair and aesthetic clinics and dental care — clean layouts that build trust and drive bookings."],
  ["Retail & lifestyle poster series", ["Footwear", "Jewellery", "Florist"], "Launch and offer posters for footwear, jewellery and florist brands — product-first compositions built for Instagram feeds and stories."],
];

// every card on the projects page: real sites + social & creative work first, then the other services
function buildWork() {
  const SOCIAL = "Social & Creatives";
  const sites = SITES.map((x) => {
      const [build, industry] = x.cat.split(" · ");
      const store = /shopify|woocommerce|store/i.test(build); // online stores live under E-commerce
      return { kind: "site", title: x.name, cat: store ? "ecommerce" : "web", catLabel: store ? "E-commerce" : "Web Development", badge: "Live", color: x.color, text: x.text, tools: x.tags, img: x.img, url: x.url,
        scope: [[build, "Build"], [industry, "Industry"], ["Live", "Status"]] };
    });
  return [
    ...sites.filter((x) => x.cat === "web"),
    ...sites.filter((x) => x.cat === "ecommerce"),
    ...PROJECTS.filter((x) => x.cat === "ecommerce"),
    ...CINEMATIC.map((c) => ({ kind: "video", title: c.title, cat: "social", catLabel: SOCIAL, badge: "Film", color: "#7c3aed", text: c.text, tools: c.tags, src: c.src,
      scope: [[c.client, "Client"], [c.length, "Length"], [c.format, "Format"]] })),
    ...REELS.map((r) => ({ kind: "video", title: r.title, cat: "social", catLabel: SOCIAL, badge: "Reel", color: "#db2777", src: r.src,
      text: `${r.brand} — a short vertical reel with punchy edits, motion text and music, made to stop the scroll on Instagram and Facebook.`,
      tools: [r.tag, "Instagram Reels", "Video editing", "Motion text"], scope: [[r.tag, "Goal"], ["9:16", "Format"], ["Reel", "Type"]] })),
    ...POSTER_SETS.map(([title, inds, text]) => {
      const list = POSTERS.filter((x) => inds.includes(x[1]));
      return { kind: "posters", title, cat: "social", catLabel: SOCIAL, badge: `${list.length} posters`, color: "#ea580c", text, tools: inds, list,
        scope: [[list.length, "Posters"], [inds.length, "Industries"], ["Feed + story", "Formats"]] };
    }),
    ...PROJECTS.filter((x) => x.cat !== "ecommerce"),
  ];
}

const playIcon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.6-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';
const browserBar = (url) => `<div class="pm__bar"><i></i><i></i><i></i><span>${esc(hostOf(url))}</span></div>`;

function workMedia(p) {
  const label = `<span class="mock__label">${esc(p.catLabel)}</span>`;
  if (p.kind === "site") return `<div class="pm pm--site" style="--c:${esc(p.color)}">${browserBar(p.url)}<div class="pm__shot"><img src="assets/img/sites/${esc(p.img)}.webp" alt="${esc(p.title)} website" loading="lazy" decoding="async"></div>${label}</div>`;
  if (p.kind === "video") return `<div class="pm pm--video"><img class="pm__bg" src="assets/video/${esc(p.src)}.jpg" alt="" loading="lazy" decoding="async"><img class="pm__cover" src="assets/video/${esc(p.src)}.jpg" alt="${esc(p.title)}" loading="lazy" decoding="async"><span class="pm__play">${playIcon}</span>${label}</div>`;
  if (p.kind === "posters") return `<div class="pm pm--posters">${p.list.slice(0, 3).map(([f]) => `<img src="assets/img/posters/${esc(f)}.webp" alt="" loading="lazy" decoding="async">`).join("")}${label}</div>`;
  return mockArt(p);
}

function workModalMedia(p) {
  if (p.kind === "site") return `<div class="mm-site">${browserBar(p.url)}<div class="mm-site__scroll" data-lenis-prevent tabindex="0" aria-label="Scroll the ${esc(p.title)} homepage"><img src="assets/img/sites/${esc(p.img)}.webp" alt="${esc(p.title)} homepage, full length" decoding="async"></div></div>`;
  if (p.kind === "video") return `<div class="mm-video"><img class="pm__bg" src="assets/video/${esc(p.src)}.jpg" alt=""><video src="assets/video/${esc(p.src)}.mp4" poster="assets/video/${esc(p.src)}.jpg" controls autoplay playsinline preload="metadata"></video></div>`;
  if (p.kind === "posters") return `<div class="mm-posters">${p.list.map(([f, ind]) => `<figure><img src="assets/img/posters/${esc(f)}.webp" alt="${esc(ind)} poster" loading="lazy" decoding="async"><figcaption>${esc(ind)}</figcaption></figure>`).join("")}</div>`;
  return mockArt(p, false);
}

function pageProjects() {
  const grid = $("#projects-grid"); if (!grid) return;
  const WORK = buildWork();
  const cats = [["all", "All"], ...[...new Map(WORK.map((p) => [p.cat, p.catLabel]))]];
  $("#filters").innerHTML = cats.map(([k, l], i) => `<button class="tool-tab ${i ? "" : "is-active"}" data-f="${esc(k)}" aria-pressed="${i ? "false" : "true"}">${esc(l)}<sup>${k === "all" ? WORK.length : WORK.filter((p) => p.cat === k).length}</sup></button>`).join("");
  grid.innerHTML = WORK.map((p, i) => `
    <article class="project project--${p.kind || "mock"}" data-cat="${esc(p.cat)}" data-i="${i}" data-reveal>
      <button class="project__media" data-cursor-text="View" aria-label="View ${esc(p.title)}">${workMedia(p)}<span class="project__view"><span>View ↗</span></span></button>
      <div class="project__info"><div><h3>${esc(p.title)}</h3><p>${p.tools.map(esc).join(" · ")}</p></div><span class="project__year">${esc(p.badge ?? p.year)}</span></div>
    </article>`).join("");

  // staggered columns: 3 on desktop (middle column drops), 2 on tablet + phone (right column drops)
  const layout = (shown) => {
    const cols = innerWidth > 1024 ? 3 : 2, drop = innerWidth > 1024 ? 70 : innerWidth > 600 ? 50 : 28;
    grid.style.paddingBottom = `${drop}px`;
    grid.style.setProperty("--drop", `${drop}px`);
    shown.forEach((c, i) => c.classList.toggle("is-drop", i % cols === 1));
  };
  const cards = $$(".project", grid), filters = $("#filters");
  const visible = () => cards.filter((c) => !c.classList.contains("is-out"));
  let current = "all", cols = innerWidth > 1024 ? 3 : 2, revealKilled = false;
  addEventListener("resize", () => { const c = innerWidth > 1024 ? 3 : 2; if (c !== cols) { cols = c; layout(visible()); } });
  layout(visible());

  const select = (f) => {
    if (f === current) return;
    current = f;
    $$(".tool-tab", filters).forEach((b) => { const on = b.dataset.f === f; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
    const anim = hasGSAP && !reduceMotion;
    if (anim) {
      // the page-wide scroll reveal and the filter animation must not fight over the cards
      if (!revealKilled) { revealKilled = true; ScrollTrigger.getAll().forEach((t) => cards.includes(t.trigger) && t.kill()); }
      gsap.killTweensOf(cards);
    }
    const apply = () => {
      const shown = [];
      cards.forEach((c) => { const on = f === "all" || c.dataset.cat === f; c.classList.toggle("is-out", !on); if (on) shown.push(c); });
      layout(shown);
      if (hasGSAP) ScrollTrigger.refresh();
      // if the grid top is off screen, bring the filters back into view
      if (filters.getBoundingClientRect().top < 0) lenis ? lenis.scrollTo(filters, { offset: -110, duration: 0.8 }) : filters.scrollIntoView({ behavior: "smooth" });
      if (anim) gsap.fromTo(shown, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: { amount: Math.min(0.45, shown.length * 0.05) }, clearProps: "transform" });
      else cards.forEach((c) => { c.style.opacity = 1; c.style.transform = "none"; });
    };
    const out = visible();
    if (anim && out.length) gsap.to(out, { opacity: 0, y: 16, duration: 0.18, ease: "power1.in", onComplete: apply }); else apply();
  };
  filters.addEventListener("click", (e) => { const btn = e.target.closest(".tool-tab"); if (btn) select(btn.dataset.f); });

  // modal
  const modal = $(".modal"), media = $(".modal__media", modal), card = $(".modal__card", modal);
  let opener = null, clearT = 0;
  const open = (p, from) => {
    clearTimeout(clearT); opener = from;
    media.className = `modal__media modal__media--${p.kind || "mock"}`;
    media.innerHTML = workModalMedia(p);
    const site = p.kind === "site" ? `<a href="${esc(safeUrl(p.url))}" class="btn" target="_blank" rel="noopener noreferrer"><span class="btn-inner">Visit live site ${arrow}</span></a>` : "";
    $(".modal__body", modal).innerHTML = `
      <span class="eyebrow">${esc(p.catLabel)} · ${esc(p.badge ?? p.year)}</span>
      <h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
      <div class="modal__results">${p.scope.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join("")}</div>
      <div class="chips">${p.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <div class="modal__actions">${site}<a href="contact.html" class="btn ${site ? "btn--ghost" : ""}"><span class="btn-inner">Start a similar project ${arrow}</span></a></div>`;
    card.scrollTop = 0;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");
    lenis?.stop(); $(".modal__close", modal).focus({ preventScroll: true });
  };
  const close = () => {
    if (!modal.classList.contains("is-open")) return;
    $("video", media)?.pause();
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
    lenis?.start(); opener?.focus({ preventScroll: true });
    clearT = setTimeout(() => { if (!modal.classList.contains("is-open")) media.innerHTML = ""; }, 600);
  };
  grid.addEventListener("click", (e) => { const b = e.target.closest(".project__media"); if (b) open(WORK[b.closest(".project").dataset.i], b); });
  $(".modal__close", modal).addEventListener("click", close);
  $(".modal__backdrop", modal).addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") return close();
    if (e.key === "Tab") { // keep focus inside the dialog
      const f = $$("a[href], button, video, [tabindex='0']", card); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

function pageContact() {
  $("#service-pick").innerHTML = SERVICES.map((s, i) => `<input type="checkbox" id="sv${i}" name="services" value="${s.title}"><label for="sv${i}">${s.title}</label>`).join("");
  $("#c-email").textContent = SITE.email; $("#c-email").closest("a").href = "mailto:" + SITE.email;
  $("#c-phone").textContent = SITE.phone; $("#c-phone").closest("a").href = "tel:" + SITE.phone.replace(/\s/g, "");
  $("#c-loc").textContent = SITE.location;

  const form = $("#contact-form"), status = $(".form__status", form);
  const rules = { name: (v) => v.trim().length > 1, email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: (v) => v.trim().length > 9 };
  const check = (input) => { const ok = rules[input.name] ? rules[input.name](input.value) : true; input.closest(".field").classList.toggle("has-error", !ok); return ok; };
  Object.keys(rules).forEach((n) => form[n].addEventListener("blur", () => check(form[n])));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = Object.keys(rules).map((n) => check(form[n])).every(Boolean);
    if (!ok) { status.className = "form__status err"; status.textContent = "Please fix the highlighted fields."; if (hasGSAP) gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: "elastic.out(1, .3)" }); return; }
    const clean = (v, max = 1500) => String(v || "").replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "").trim().slice(0, max);
    const services = $$("input[name=services]:checked", form).map((i) => i.value);
    const lines = [
      "Hi Faisal, I'd like to discuss a project.",
      "",
      `*Name:* ${clean(form.name.value, 80)}`,
      `*Email:* ${clean(form.email.value, 120)}`,
      form.phone.value.trim() ? `*Phone:* ${clean(form.phone.value, 30)}` : null,
      form.budget.value ? `*Budget:* ${clean(form.budget.value, 40)}` : null,
      services.length ? `*Services:* ${services.map((x) => clean(x, 60)).join(", ")}` : null,
      "",
      `*Project details:*`,
      clean(form.message.value),
    ].filter((l) => l !== null);
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    // open WhatsApp straight from the click so pop-up blockers allow it
    const win = window.open(url, "_blank");
    if (win) win.opener = null; else location.href = url;
    // keep a copy in Netlify Forms too (silently ignored if it fails)
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(form)).toString() }).catch(() => {});
    status.className = "form__status ok";
    status.innerHTML = `WhatsApp is opening with your details — just tap <b>Send</b> there. Didn't open? <a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Open WhatsApp</a>`;
    form.reset();
  });
}

/* ---------- live visitors (footer): Netlify Function + Blobs, live site only ---------- */
function initVisitors() {
  const box = $("#visitors");
  if (!box || location.protocol !== "https:" || !window.fetch) return;
  let id = store.get("vid"), first = !id;
  if (!id) { id = (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2) + Date.now()).replace(/[^a-z0-9]/gi, "").slice(0, 24); store.set("vid", id); }
  const ping = async () => {
    if (document.hidden) return;
    try {
      const r = await fetch("/api/visitors", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, isNew: first }) });
      if (!r.ok) return;
      first = false;
      const d = await r.json();
      $("#v-online", box).textContent = Math.max(1, +d.online || 1);
      $("#v-total", box).textContent = (+d.total || 0).toLocaleString("en-IN");
      box.hidden = false;
    } catch {}
  };
  ping();
  setInterval(ping, 30000);
  document.addEventListener("visibilitychange", () => !document.hidden && ping());
}

/* ==========================================================================
   BOOT
   ========================================================================== */
buildChrome();
initHeader();
initSmoothScroll();
initCursor();
if (page === "home") pageHome();
if (page === "about") pageAbout();
if (page === "services") pageServices();
if (page === "projects") pageProjects();
if (page === "contact") pageContact();
initReveals();
initVisitors();
initMarquees();
initMagnetic();

runPreloader(() => {
  if (page === "home") heroIntro(); else pageIntro();
  if (hasGSAP) ScrollTrigger.refresh();
});
