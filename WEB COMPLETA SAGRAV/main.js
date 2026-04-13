/* ── LOGO FALLBACK ── */
document.getElementById("navLogoImg").onerror = function () {
  this.style.display = "none";
  document.getElementById("navLogoFallback").style.display = "flex";
};
document.getElementById("footerLogoImg").onerror = function () {
  this.style.display = "none";
  document.getElementById("footerLogoText").style.display = "inline";
};

/* ── SERVICE DATA ── */
const services = [
  {
    id: "cctv",
    icon: "",
    name: "Sistema de Videovigilancia",
    short:
      "Diseño e instalación de sistemas de videovigilancia para monitorear y proteger hogares, empresas e industrias.",
    img: "imagenes/camaras.jpg",
    tag: "Vigilancia",
    detail:
      "Instalamos cámaras IP de alta resolución, sistemas DVR/NVR, videovigilancia en la nube y monitoreo remoto en tiempo real. Grabación continua, detección de movimiento y acceso desde cualquier dispositivo móvil.",
    features: [
      "Cámaras IP 4K y Full HD",
      "Almacenamiento local y en nube",
      "Acceso remoto desde móvil",
      "Detección de movimiento inteligente",
      "Instalación certificada",
    ],
  },
  {
    id: "acceso",
    icon: "",
    name: "Control de Acceso",
    short:
      "Soluciones que garantizan la seguridad y el control de ingreso en todo tipo de instalaciones.",
    img: "imagenes/control.jpg",
    tag: "Acceso",
    detail:
      "Implementamos torniquetes, lectores biométricos, tarjetas de proximidad, cerraduras electromagnéticas y software de gestión. Controlamos quién entra, cuándo y a qué áreas.",
    features: [
      "Lectores biométricos y de tarjeta",
      "Torniquetes y barreras vehiculares",
      "Software de gestión de personal",
      "Registro de entradas y salidas",
      "Integración con CCTV",
    ],
  },
  {
    id: "cerca",
    icon: "",
    name: "Cercado Eléctrico",
    short:
      "Instalación de sistemas de cercado eléctrico para protección perimetral efectiva y disuasión de intrusos.",
    img: "imagenes/cerca.jpg",
    tag: "Perimetral",
    detail:
      "Diseñamos e instalamos cercas eléctricas de bajo voltaje para residencias, industrias y fincas. Incluyen alarmas integradas, energizadores certificados y señalización reglamentaria.",
    features: [
      "Bajo voltaje (seguro)",
      "Alarma de intrusión integrada",
      "Señalización reglamentaria",
      "Cobertura residencial e industrial",
      "Mantenimiento preventivo",
    ],
  },
  {
    id: "integracion",
    icon: "",
    name: "Integración de Sistemas",
    short:
      "Unificamos diferentes sistemas de seguridad para una gestión centralizada, eficiente y confiable.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
    tag: "Integración",
    detail:
      "Integramos de manera inteligente los sistemas de seguridad, control de acceso, alarmas y automatización en una única plataforma centralizada. Esto permite optimizar la operación, facilitar la gestión en tiempo real y mejorar significativamente la capacidad de respuesta ante cualquier evento de seguridad.",
    features: [
      "Plataforma central de gestión",
      "Interoperabilidad entre marcas",
      "Alertas unificadas",
      "Panel web y móvil",
      "Soporte técnico dedicado",
    ],
  },
  {
    id: "auto",
    icon: "",
    name: "Automatización",
    short:
      "Implementamos soluciones de automatización que mejoran la seguridad, comodidad y eficiencia.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=700&q=80",
    tag: "Smart Home/Office",
    detail:
      "Instalamos sistemas domóticos para hogares y empresas: iluminación inteligente, control de persianas, climatización, puertas automáticas y escenarios programados. Todo desde tu smartphone.",
    features: [
      "Control de iluminación y clima",
      "Puertas y portones automáticos",
      "Integración con asistentes de voz",
      "Escenarios programados",
      "App de control remoto",
    ],
  },
  {
    id: "redes",
    icon: "",
    name: "Redes y Fibra Óptica",
    short:
      "Diseño e implementación de redes de datos y fibra óptica con alto rendimiento y estabilidad.",
    img: "imagenes/fibraOp.jpg",
    tag: "Infraestructura",
    detail:
      "Instalamos redes estructuradas, fibra óptica, cableado Cat6/Cat6A, switches y WiFi industrial. La base tecnológica para todos sus sistemas de seguridad.",
    features: [
      "Cableado Cat6/Cat6A",
      "Fibra óptica mono y multimodo",
      "WiFi de alta densidad",
      "Rack y centros de datos",
      "Certificación y documentación",
    ],
  },
  {
    id: "llave",
    icon: "",
    name: "Proyectos Llave en Mano",
    short:
      "Desarrollamos proyectos integrales de seguridad, desde el diseño hasta la puesta en marcha.",
    img: "imagenes/llaveM.jpg",
    tag: "Proyectos",
    detail:
      "Nos encargamos de todo: diagnóstico, diseño, ingeniería, suministro, instalación, configuración, capacitación y entrega. Usted solo se preocupa por el resultado.",
    features: [
      "Diagnóstico y diseño técnico",
      "Ingeniería y planos",
      "Suministro de equipos",
      "Instalación y configuración",
      "Capacitación al personal",
    ],
  },
  {
    id: "mant",
    icon: "",
    name: "Mantenimiento",
    short:
      "Mantenimiento especializado para garantizar el correcto funcionamiento y continuidad de los sistemas.",
    img: "imagenes/mantenimiento.jpg",
    tag: "Soporte",
    detail:
      "Planes de mantenimiento preventivo y correctivo para todos los sistemas de seguridad. Continuidad operativa garantizada y mayor vida útil de sus equipos.",
    features: [
      "Revisiones periódicas",
      "Limpieza y calibración",
      "Actualización de firmware",
      "Atención de emergencias 24/7",
      "Informes técnicos",
    ],
  },
  {
    id: "asesoria",
    icon: "",
    name: "Asesoría Técnica",
    short:
      "Asesoría profesional para definir la mejor solución de seguridad según sus necesidades.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    tag: "Consultoría",
    detail:
      "Evaluamos su entorno de seguridad e identificamos vulnerabilidades. Le presentamos un plan con las soluciones más adecuadas para su presupuesto e instalación.",
    features: [
      "Auditoría de seguridad",
      "Análisis de riesgos",
      "Plan de mejoras con costos",
      "Comparativo de tecnologías",
      "Acompañamiento en la decisión",
    ],
  },
];

/* ── SECTORS DATA ── */
const sectors = [
  {
    name: "Sector Residencial",
    sub: "Conjuntos y casas",
    icon: "",
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    name: "Sector Educativo",
    sub: "Colegios y universidades",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  },
  {
    name: "Sector Comercial",
    sub: "Locales y centros comerciales",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&q=80",
  },
  {
    name: "Sector Corporativo",
    sub: "Oficinas y empresas",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    name: "Sector Industrial",
    sub: "Bodegas y fábricas",
    icon: "",
    badge: "",
    img: "imagenes/sector.jpg",
  },
  {
    name: "Sector Financiero",
    sub: "Bancos y entidades",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
  },
  {
    name: "Sector Salud",
    sub: "Clínicas y hospitales",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80",
  },
  {
    name: "Transporte y Logística",
    sub: "Terminales y bodegas",
    icon: "",
    badge: "",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
];

/* ── RENDER SERVICES ── */
const sgrid = document.getElementById("servicesGrid");
services.forEach((s) => {
  const c = document.createElement("div");
  c.className = "service-card";
  c.innerHTML = `<div class="service-img-wrap"><img class="service-img" src="${s.img}" alt="${s.name}" loading="lazy"></div><div class="service-body"><div class="service-icon2">${s.icon}</div><div class="service-name">${s.name}</div><p class="service-desc">${s.short}</p><span class="service-link">Ver detalles →</span></div>`;
  c.addEventListener("click", () => openModal(s));
  sgrid.appendChild(c);
});

/* ── RENDER SECTORS ── */
const secGrid = document.getElementById("sectorsGrid");
sectors.forEach((s) => {
  const c = document.createElement("div");
  c.className = "sector-card";
  c.innerHTML = `<img src="${s.img}" alt="${s.name}" loading="lazy"><div class="sector-overlay"><div class="sector-icon">${s.icon}</div><div class="sector-name">${s.name}</div><div class="sector-sub">${s.sub}</div>${s.badge ? `<div class="sector-badge">⭐ ${s.badge}</div>` : ""}</div>`;
  secGrid.appendChild(c);
});

/* ── MODAL ── */
function openModal(s) {
  document.getElementById("modalContent").innerHTML =
    `<img class="modal-img" src="${s.img}" alt="${s.name}"><div class="modal-body"><div class="modal-tag">${s.tag}</div><div class="modal-title">${s.icon} ${s.name}</div><p class="modal-text">${s.detail}</p><div class="modal-features">${s.features.map((f) => `<div class="modal-feature">${f}</div>`).join("")}</div><div class="modal-actions"><a href="https://wa.me/573103417563?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.name)}" target="_blank" class="btn-primary" style="background:#25d366;box-shadow:0 4px 14px rgba(37,211,102,.3)">💬 Consultar por WhatsApp</a><a href="#contacto" class="btn-outline-blue" id="mCBtn">Solicitar cotización</a></div></div>`;
  document.getElementById("modalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  const mCBtn = document.getElementById("mCBtn");
  if (mCBtn) mCBtn.onclick = closeModal;
}
function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ── MOBILE NAV ── */
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("navOverlay");
hamburger.addEventListener("click", () => {
  const o = overlay.classList.toggle("open");
  hamburger.classList.toggle("open", o);
  document.body.style.overflow = o ? "hidden" : "";
});
function closeMenu() {
  overlay.classList.remove("open");
  hamburger.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 65);
        ro.unobserve(e.target);
      }
    });
  },
  { threshold: 0.06 },
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

/* ── CHAT AGENT ── */
const WA = "https://wa.me/573103417563";
const KB = {
  greet: {
    bot: "¡Hola! 👋 Soy el asistente virtual de <strong>SAGRAV Seguridad Electrónica</strong>. ¿En qué puedo ayudarte hoy?",
    opts: [
      "Ver servicios",
      "Solicitar cotización",
      "Ubicación y contacto",
      "Hablar con un asesor",
    ],
  },
  servicios: {
    bot: "Ofrecemos 9 servicios: CCTV, Control de acceso, Cercado eléctrico, Integración de sistemas, Automatización, Redes y fibra óptica, Proyectos llave en mano, Mantenimiento y Asesoría técnica. ¿Cuál te interesa?",
    opts: [
      "CCTV / Cámaras",
      "Control de acceso",
      "Cercado eléctrico",
      "Automatización",
      "Hablar con un asesor",
    ],
  },
  cctv: {
    bot: "📹 Nuestros sistemas CCTV incluyen cámaras IP 4K, grabación en nube, acceso remoto y detección inteligente. Ideal para conjuntos residenciales y empresas. ¿Te gustaría una cotización?",
    opts: [
      "Solicitar cotización",
      "Ver otros servicios",
      "Hablar con un asesor",
    ],
  },
  acceso: {
    bot: "🔐 Instalamos lectores biométricos, torniquetes y software de gestión de acceso. Controla quién entra, cuándo y a qué áreas. ¿Para conjunto, empresa o residencia?",
    opts: [
      "Solicitar cotización",
      "Ver otros servicios",
      "Hablar con un asesor",
    ],
  },
  cerca: {
    bot: "⚡ Cercado eléctrico de bajo voltaje con alarma integrada. Seguro para personas y mascotas. ¿Deseas una visita técnica gratuita?",
    opts: [
      "Solicitar visita técnica",
      "Ver otros servicios",
      "Hablar con un asesor",
    ],
  },
  auto: {
    bot: "🏠 Automatizamos iluminación, puertas, persianas y climatización desde tu smartphone. ¡Hogares y oficinas inteligentes! ¿Para residencia o empresa?",
    opts: [
      "Solicitar cotización",
      "Ver otros servicios",
      "Hablar con un asesor",
    ],
  },
  cotizar: {
    bot: "¡Perfecto! Para la mejor cotización necesitamos conocer tu caso. Te conectaré con un asesor por WhatsApp ahora mismo. 📱",
    opts: ["Abrir WhatsApp ahora", "Volver al inicio"],
  },
  contacto: {
    bot: "📍 Bogotá, Colombia\n📞 WhatsApp: (+57) 310 341 7563\n✉️ Info@sagrav.com\n\nEscríbenos por WhatsApp para una respuesta rápida.",
    opts: ["Abrir WhatsApp ahora", "Solicitar cotización", "Volver al inicio"],
  },
  asesor: {
    bot: "¡Claro! Un asesor de SAGRAV está disponible para atenderte ahora mismo. Haz clic para abrir WhatsApp. 🚀",
    opts: ["Abrir WhatsApp ahora", "Volver al inicio"],
  },
};
const intentMap = {
  "ver servicios": "servicios",
  "cctv / cámaras": "cctv",
  "control de acceso": "acceso",
  "cercado eléctrico": "cerca",
  automatización: "auto",
  "solicitar cotización": "cotizar",
  "solicitar visita técnica": "cotizar",
  "ubicación y contacto": "contacto",
  "hablar con un asesor": "asesor",
  "abrir whatsapp ahora": "__wa",
  "volver al inicio": "greet",
  "ver otros servicios": "servicios",
};
function addMsg(text, type) {
  const m = document.getElementById("chatMessages");
  const d = document.createElement("div");
  d.className = `chat-msg msg-${type}`;
  d.innerHTML = text.replace(/\n/g, "<br>");
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}
function setOpts(opts) {
  const c = document.getElementById("chatOptions");
  c.innerHTML = "";
  opts.forEach((o) => {
    const b = document.createElement("button");
    b.className = "chat-opt";
    b.textContent = o;
    b.onclick = () => handleOpt(o);
    c.appendChild(b);
  });
}
function handleOpt(opt) {
  addMsg(opt, "user");
  document.getElementById("chatOptions").innerHTML = "";
  const key = opt.toLowerCase();
  if (key === "abrir whatsapp ahora") {
    setTimeout(() => {
      addMsg(
        'Abriendo WhatsApp... también puedes hacer clic aquí: <a href="' +
          WA +
          '" target="_blank" style="color:var(--blue);text-decoration:underline">💬 Ir a WhatsApp</a>',
        "bot",
      );
      window.open(WA, "_blank");
      setTimeout(() => setOpts(["Volver al inicio"]), 500);
    }, 400);
    return;
  }
  const intent = intentMap[key] || "greet";
  setTimeout(() => {
    const kb = KB[intent] || KB.greet;
    addMsg(kb.bot, "bot");
    setTimeout(() => setOpts(kb.opts), 300);
  }, 500);
}
function sendChat() {
  const inp = document.getElementById("chatInput");
  const t = inp.value.trim();
  if (!t) return;
  addMsg(t, "user");
  inp.value = "";
  document.getElementById("chatOptions").innerHTML = "";
  const l = t.toLowerCase();
  let intent = "greet";
  if (/cctv|cámara|camara|video/i.test(l)) intent = "cctv";
  else if (/acceso|biométr|biometr|torniquete/i.test(l)) intent = "acceso";
  else if (/cerca|eléctric|electric|perimetral/i.test(l)) intent = "cerca";
  else if (/autom|smart|hogar|domótic/i.test(l)) intent = "auto";
  else if (/cotiz|precio|costo|cuánto|cuanto/i.test(l)) intent = "cotizar";
  else if (/contacto|ubic|direc|teléfon|correo/i.test(l)) intent = "contacto";
  else if (/whatsapp|asesor|hablar|persona/i.test(l)) intent = "asesor";
  else if (/servic|ofrecen|portafolio/i.test(l)) intent = "servicios";
  setTimeout(() => {
    const kb = KB[intent];
    addMsg(kb.bot, "bot");
    setTimeout(() => setOpts(kb.opts), 300);
  }, 500);
}
let opened = false;
function toggleChat() {
  const w = document.getElementById("chatWidget");
  w.classList.toggle("open");
  if (!opened && w.classList.contains("open")) {
    opened = true;
    setTimeout(() => {
      addMsg(KB.greet.bot, "bot");
      setTimeout(() => setOpts(KB.greet.opts), 350);
    }, 180);
  }
}
document.getElementById("chatFab").addEventListener("click", toggleChat);
document.getElementById("chatCloseBtn").addEventListener("click", toggleChat);
document.getElementById("chatSendBtn").addEventListener("click", sendChat);
document.getElementById("chatInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChat();
});

/* ══ PORTAFOLIO DE PROYECTOS══════════════════════════════ */

const projects = [
  /* ── CONJUNTO ÉBANO ─────────────────── */
  {
    id: "ebano",
    name: "Conjunto Residencial Ébano",
    location: "Bogotá, Colombia",
    year: "2025",
    desc: "Instalación integral de control de acceso biométrico y cuarto de videovigilancia.",
    services: ["Control de Acceso", "Intercomunicación", "NVR Hikvision"],
    cover: "imagenes/proyectos/ebano/ebano_entrada.jpg",
    media: [
      {
        type: "video",
        src: "imagenes/proyectos/ebano/ebano_video.mp4",
        caption: "Video del proyecto — Conjunto Ébano",
      },

      {
        type: "video",
        src: "imagenes/proyectos/ebano/salademonitoreo.mp4",
        caption: "Video del proyecto — Conjunto Ébano",
      },
    ],
  },

  /* ── CONJUNTO VAN GOGH ──────────────── */
  {
    id: "vangogh",
    name: "Conjunto Residencial Van Gogh",
    location: "Bogotá, Colombia",
    year: "2025",
    desc: "Instalación integral de control de acceso biométrico",
    services: ["Sistemas de seguridad", "Control de acceso"],
    cover: "imagenes/proyectos/vangogh/vangogh_entrada.jpeg",

    media: [
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_01.jpeg",
        caption: "Torniquetes de control de acceso",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_02.jpeg",
        caption: "Lector biométrico facial Hikvision",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_03.jpeg",
        caption: "Vista general — acceso peatonal",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_04.jpeg",
        caption: "Rack NVR Hikvision — cuarto técnico",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_05.jpeg",
        caption: "Intercomunicador exterior con reconocimiento facial",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_06.jpeg",
        caption: "Cámara perimetral — zona 1 (32 cámaras)",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_07.jpeg",
        caption: "Configuración zona de detección perimetral 2",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_08.jpeg",
        caption: "Delimitación zona perimetral inteligente",
      },
      {
        type: "image",
        src: "imagenes/proyectos/vangogh/vangogh_09.jpeg",
        caption: "Delimitación zona perimetral inteligente",
      },
    ],
  },

  /* ── CONJUNTO ILARCO 114 ───────────── */
  {
    id: "ilarco",
    name: "Conjunto Residencial Ilarco 114",
    location: "Bogotá, Colombia",
    year: "2025",
    desc: "Instalación integral de control de acceso vehicular y peatonal con reconocimiento facial",
    services: ["Control de acceso", "Intercomunicación", "NVR Hikvision"],
    cover: "imagenes/proyectos/ilarco114/ilarco_entrada.jpeg",

    media: [
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_01.jpeg",
        caption: "Torniquetes de control de acceso",
      },
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_02.jpeg",
        caption: "Lector biométrico facial Hikvision",
      },
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_03.jpeg",
        caption: "Vista general — acceso peatonal",
      },
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_04.jpeg",
        caption: "Rack NVR Hikvision — cuarto técnico",
      },
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_05.jpeg",
        caption: "Intercomunicador exterior con reconocimiento facial",
      },
      {
        type: "image",
        src: "imagenes/proyectos/ilarco114/ilarco_06.jpeg",
        caption: "Intercomunicador exterior con reconocimiento facial",
      },
    ],
  },
];

/* ── RENDER PROJECT CARDS ─────────────── */
const pgrid = document.getElementById("projectsGrid");
if (pgrid) {
  projects.forEach((p) => {
    const total = p.media.length;
    const imgCount = p.media.filter((m) => m.type === "image").length;
    const vidCount = p.media.filter((m) => m.type === "video").length;
    const coverStyle = p.cover
      ? `style="background-image:url('${p.cover}')"`
      : "";
    const card = document.createElement("div");
    card.className = "proj-card";
    card.innerHTML = `
      <div class="proj-cover" ${coverStyle}>
        ${!p.cover ? '<div class="proj-cover-placeholder">🏗️<span>Fotos próximamente</span></div>' : ""}
        <div class="proj-year-badge">${p.year}</div>
        ${
          total > 0
            ? `<div class="proj-media-badge">
          ${imgCount > 0 ? `<span>📷 ${imgCount}</span>` : ""}
          ${vidCount > 0 ? `<span>🎬 ${vidCount}</span>` : ""}
        </div>`
            : ""
        }
      </div>
      <div class="proj-body">
        <div class="proj-location">📍 ${p.location}</div>
        <div class="proj-name">${p.name}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">
          ${p.services.map((s) => `<span class="proj-tag">${s}</span>`).join("")}
        </div>
        <button class="proj-btn ${total === 0 ? "proj-btn-disabled" : ""}"
          onclick="openGallery('${p.id}')"
          ${total === 0 ? "disabled" : ""}>
          ${total > 0 ? "Ver Galería →" : "Próximamente"}
        </button>
      </div>`;
    pgrid.appendChild(card);
  });
}

/* ── GALLERY LIGHTBOX ─────────────────── */
let galleryProject = null;
let galleryIndex = 0;

function openGallery(projectId) {
  galleryProject = projects.find((p) => p.id === projectId);
  if (!galleryProject || galleryProject.media.length === 0) return;
  galleryIndex = 0;
  document.getElementById("galleryTitle").textContent = galleryProject.name;
  renderGalleryItem();
  document.getElementById("galleryBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  renderThumbs();
}

function closeGallery() {
  document.getElementById("galleryBackdrop").classList.remove("open");
  document.body.style.overflow = "";
  // Pausar video si estaba reproduciendo
  const vid = document.querySelector("#galleryMain video");
  if (vid) vid.pause();
}

function galleryNav(dir) {
  const total = galleryProject.media.length;
  // Pausar video si hay uno activo
  const vid = document.querySelector("#galleryMain video");
  if (vid) vid.pause();
  galleryIndex = (galleryIndex + dir + total) % total;
  renderGalleryItem();
  updateThumbActive();
}

function renderGalleryItem() {
  const item = galleryProject.media[galleryIndex];
  const main = document.getElementById("galleryMain");
  const caption = document.getElementById("galleryCaption");
  const counter = document.getElementById("galleryCounter");
  const total = galleryProject.media.length;

  counter.textContent = `${galleryIndex + 1} / ${total}`;
  caption.textContent = item.caption || "";

  if (item.type === "video") {
    main.innerHTML = `
      <video controls playsinline preload="metadata"
        style="max-width:100%;max-height:70vh;border-radius:10px;outline:none;">
        <source src="${item.src}" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>`;
  } else {
    main.innerHTML = `
      <img src="${item.src}" alt="${item.caption || ""}"
        style="max-width:100%;max-height:70vh;object-fit:contain;border-radius:10px;display:block;margin:auto;">`;
  }
}

function renderThumbs() {
  const strip = document.getElementById("galleryThumbs");
  strip.innerHTML = "";
  galleryProject.media.forEach((item, i) => {
    const t = document.createElement("div");
    t.className = "gthumb" + (i === 0 ? " active" : "");
    t.onclick = () => {
      const vid = document.querySelector("#galleryMain video");
      if (vid) vid.pause();
      galleryIndex = i;
      renderGalleryItem();
      updateThumbActive();
    };
    if (item.type === "video") {
      t.innerHTML = '<div class="gthumb-video">▶</div>';
    } else {
      t.style.backgroundImage = `url('${item.src}')`;
    }
    strip.appendChild(t);
  });
}

function updateThumbActive() {
  document.querySelectorAll(".gthumb").forEach((t, i) => {
    t.classList.toggle("active", i === galleryIndex);
  });
  // scroll thumbnail into view
  const active = document.querySelector(".gthumb.active");
  if (active)
    active.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("galleryBackdrop").classList.contains("open"))
    return;
  if (e.key === "ArrowLeft") galleryNav(-1);
  if (e.key === "ArrowRight") galleryNav(1);
  if (e.key === "Escape") closeGallery();
});
