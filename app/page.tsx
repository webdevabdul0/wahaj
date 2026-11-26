"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const EMAIL = "Wahajulislam6@gmail.com";
const WHATSAPP = "923020141810";
const FORMSPREE_ID = "";
const CAL_SCHEDULING_URL = "";
const MEET_ICON = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Google_Meet_%28original%29_app_icon.png";
const UET_LOGO = "https://thumb.wikimedia.org/wikipedia/en/thumb/b/b0/University_of_Engineering_and_Technology_Lahore_logo.svg/250px-University_of_Engineering_and_Technology_Lahore_logo.svg.png";
const COURSERA_LOGO = "https://upload.wikimedia.org/wikipedia/commons/1/10/Coursera-logo-square.png";

const tools = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/ETAP_Color_Logo_1.svg", alt: "ETAP", title: "ETAP" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Autodesk_AutoCAD_Logo.svg", alt: "AutoCAD", title: "AutoCAD Elec/MEP" },
  { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Autodesk_Revit_Logo.svg/1280px-Autodesk_Revit_Logo.svg.png", alt: "Revit MEP", title: "Revit MEP" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", alt: "MATLAB", title: "MATLAB" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/PS_Logo_in_Circle.png", alt: "PlanSwift", title: "PlanSwift" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bluebeam-logo-vertical.png", alt: "Bluebeam Revu", title: "Bluebeam Revu" },
  { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/500px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png", alt: "Excel", title: "Excel Advanced" },
];

const experience = [
  {
    role: "Electrical Engineer",
    company: "Inaam Energy Corporation, Lahore",
    badge: "IEC",
    badgeBg: "#0a58ca",
    logo: "/logo-inaam-energy.jpg",
    period: "AUG 2026 – PRESENT",
    live: true,
    bullets: [
      "Prepared engineering drawings (SLDs, layouts, schematics), BOQs, and technical submittals in compliance with IEC, IEEE, NESPAK, NEPRA, and NTDC standards.",
      "Coordinated directly with foreign suppliers, vendors, and EPC contractors for bid preparation, procurement, and technical requirements.",
      "Supported installation, testing, and commissioning of LV/MV/HV switchgear, substations, and transformers while maintaining site safety and participating in FAT and SAT globally.",
    ],
  },
  {
    role: "Electrical Engineer",
    company: "AL Awan Electric Works & Construction Co, Lahore",
    badge: "AA",
    badgeBg: "#1f5c3e",
    logo: "/logo-al-awan.jpg",
    period: "JAN 2025 – JUL 2026",
    live: false,
    bullets: [
      "Designed electrical layouts for major MEP/HVAC projects aligned with approved drawings and consultant specifications (including NESPAK-supervised standards).",
      "Worked on ELV system requirements including CCTV, Access Control, and Fire Alarm Systems for integrated building operation.",
      "Assisted in onsite deployment and verification of BMS field devices—sensors, actuators, and DDC controllers.",
    ],
  },
  {
    role: "Electrical Estimation Engineer",
    company: "Cascade Engineering Associates (PVT) Ltd, Lahore",
    badge: "CE",
    badgeBg: "#343a46",
    logo: "/logo-cascade.jpg",
    period: "JUN 2022 – DEC 2024",
    live: false,
    bullets: [
      "Completed detailed electrical and HVAC material take-offs for US commercial projects using PlanSwift and Bluebeam Revu.",
      "Prepared Bills of Quantities (BOQ) and cost estimates for tender submissions from architectural and MEP drawings.",
      "Managed site documentation including inspection requests (RFI) and material submittals for project traceability.",
    ],
  },
];

const projects = [
  {
    cat: "power",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/IndustrialSwitchgear.JPG",
    alt: "Industrial LV MV HV Switchgear",
    badge: "POWER & EPC",
    title: "LV/MV/HV Switchgear & Substations",
    loc: "Inaam Energy Corporation · Global EPC",
    desc: "SLDs, BOQs, vendor coordination, and commissioning support including FAT and SAT under IEC, IEEE, NESPAK, NEPRA, and NTDC guidelines.",
    specs: ["NESPAK / NTDC", "IEC / IEEE", "FAT & SAT"],
  },
  {
    cat: "mep",
    img: "/ogdcl-house.jpg",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jinnah_Avenue_Islamabad.JPG",
    alt: "OGDCL House, Blue Area, Islamabad",
    badge: "ISLAMABAD",
    title: "OGDCL House",
    loc: "Blue Area, Islamabad",
    desc: "Electrical planning and MEP layout design aligned with approved drawings and consultant specifications.",
    specs: ["Electrical Planning", "MEP Layouts"],
  },
  {
    cat: "mep",
    img: "/expo-centre-peshawar.jpg",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Peshawar_University_Oval_Eye_View.jpg",
    alt: "EXPO Centre Peshawar",
    badge: "PESHAWAR",
    title: "EXPO Centre Peshawar",
    loc: "Peshawar",
    desc: "Electrical layouts, HVAC power coordination, fire alarm integration, and BMS field device deployment.",
    specs: ["MEP / HVAC", "BMS & ELV"],
  },
  {
    cat: "mep",
    img: "/sfsl-lab.jpg",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/5/5d/High-Voltage_Laboratory_FEE_CTU.jpg",
    alt: "Sindh Forensic Science Laboratory Karachi",
    badge: "KARACHI",
    title: "Sindh Forensic Science Lab (SFSL)",
    loc: "Karachi",
    desc: "Laboratory electrical planning, CCTV, access control integration, and DDC controller verification.",
    specs: ["Access & CCTV", "DDC Controllers"],
  },
  {
    cat: "estimation",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/14/DowntownSkyline.jpg",
    alt: "Atlanta GA near 410 Markham Street SW",
    badge: "ATLANTA, USA",
    title: "410 Markham Street SW",
    loc: "Atlanta, GA, United States",
    desc: "Electrical and HVAC digital material take-offs, BOQs, and tender cost estimates under NFPA 70 (NEC).",
    specs: ["PlanSwift", "Bluebeam Revu", "NFPA 70"],
  },
  {
    cat: "estimation",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Kingston_Plaza%2C_NY_Hannaford.jpg",
    alt: "Hannaford Supermarket & Pharmacy USA",
    badge: "USA RETAIL",
    title: "Hannaford Supermarket & Pharmacy",
    loc: "United States",
    desc: "Commercial retail and pharmacy electrical/HVAC take-offs, costing, and RFI/material submittal tracking.",
    specs: ["BOQ & Costing", "RFI Management"],
  },
  {
    cat: "mep",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lahorehighcourt.jpg",
    alt: "Lahore High Court",
    badge: "LAHORE · 4 SITES",
    title: "Public Institutions Lifts Supervision",
    loc: "High Court, Mayo Hospital, Model Town Courts & PEF — Lahore",
    desc: "Site supervision, electrical feed verification, and safety compliance across four civic buildings in Lahore.",
    specs: ["Site Supervision", "Safety"],
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "power", label: "Power & EPC" },
  { key: "mep", label: "MEP, BMS & ELV" },
  { key: "estimation", label: "US Estimation" },
];

const education = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/UET_Lahore_Auditorium.jpg",
    alt: "UET Lahore Auditorium",
    period: "SEP 2025 – PRESENT",
    live: true,
    title: "Masters in Electrical Engineering",
    specialization: "Power Systems & Building Engineering",
    thesisLabel: "Thesis Track",
    thesis: "“Intelligent, Occupancy Aware Energy Management in Buildings.”",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Mainblock2.jpg",
    alt: "UET Lahore Main Block",
    period: "OCT 2018 – AUG 2022",
    live: false,
    title: "Bachelors in Electrical Engineering",
    specialization: "Industrial Automation & Renewable Energy",
    thesisLabel: "Final Year Project",
    thesis: "“Design & Implementation of Reverse Vending Machine Using SSD & Deep Learning Algorithms.”",
  },
];

const scenarios = [
  {
    label: "Power & EPC",
    title: "Need SLDs, submittals, or substation support?",
    desc: "LV/MV/HV drawings, NESPAK/NTDC/IEC compliance, vendor coordination, or FAT/SAT.",
    preset: "Power Systems & LV/MV/HV EPC — Looking for SLDs, technical submittals, or FAT/SAT commissioning support.",
  },
  {
    label: "Smart Buildings & MEP",
    title: "Need MEP layouts or BMS/ELV integration?",
    desc: "DDC controllers, sensors, CCTV, Access Control, Fire Alarm, and HVAC power coordination.",
    preset: "BMS, ELV & MEP Layouts — Looking for electrical layout design or BMS/ELV field deployment.",
  },
  {
    label: "Estimation & QS",
    title: "Need fast material take-offs and BOQs?",
    desc: "PlanSwift & Bluebeam Revu digital take-offs, vendor costing, and NEC compliance.",
    preset: "US / Int'l Estimation — Looking for PlanSwift or Bluebeam electrical & HVAC material take-offs and BOQs.",
  },
  {
    label: "Recruitment",
    title: "Hiring an Electrical Engineer?",
    desc: "Share the role details, location, or project timeline and I will reply directly.",
    preset: "Engineering Role / Opportunity — Reaching out regarding an Electrical Engineering position.",
  },
];

const faqs = [
  {
    q: "Which codes and standards do you follow?",
    a: "I work in compliance with NESPAK, NTDC, NEPRA, IEC, IEEE, and NFPA 70 (NEC) for US commercial projects.",
  },
  {
    q: "How quickly do you reply to queries?",
    a: "I read every message personally and reply within two working days—or sooner via WhatsApp Business.",
  },
  {
    q: "Are project drawings and tender bids kept confidential?",
    a: "Yes. All shared architectural/MEP drawings, SLDs, and BOQ pricing sheets are treated as strictly confidential.",
  },
  {
    q: "Can we start with a quick call before sending files?",
    a: "Yes—use the 15-minute free consultation button to pick a time on Google Meet or Cal.com.",
  },
];

const topics = [
  "Power Systems & LV/MV/HV EPC",
  "BMS & ELV Systems",
  "Electrical & HVAC Estimation",
  "Hiring / Role Discussion",
];

const waTopics = [
  "Power Systems / Substation EPC",
  "BMS & ELV Smart Building Project",
  "Electrical & HVAC Estimation / BOQ",
  "Job / Recruitment Opportunity",
];

function isoDate(date: Date) {
  return date.toISOString().split("T")[0];
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const [qName, setQName] = useState("");
  const [qEmail, setQEmail] = useState("");
  const [qMessage, setQMessage] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [qStatus, setQStatus] = useState("");
  const [qSending, setQSending] = useState(false);

  const [guestName, setGuestName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [meetDate, setMeetDate] = useState("");
  const [minDate, setMinDate] = useState("");
  const [meetTime, setMeetTime] = useState("15:00");

  const [waTopic, setWaTopic] = useState(waTopics[0]);
  const [waMsg, setWaMsg] = useState("");

  const progressRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLCanvasElement>(null);
  const queryBoxRef = useRef<HTMLDivElement>(null);
  const qMessageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const today = new Date();
    setMinDate(isoDate(today));
    setMeetDate(isoDate(new Date(Date.now() + 86400000)));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100)}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".glass-surface").forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", move);
      cleanups.push(() => card.removeEventListener("mousemove", move));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    document.querySelectorAll(".stagger-group").forEach((group) => {
      group.querySelectorAll<HTMLElement>(".reveal").forEach((item, idx) => {
        item.style.setProperty("--delay", `${idx * 60}ms`);
      });
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px 30px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = waveRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const phases = [
      { color: "#0a84ff", shift: 0 },
      { color: "#64d2ff", shift: (2 * Math.PI) / 3 },
      { color: "#30d158", shift: (4 * Math.PI) / 3 },
    ];
    let t = 0;
    let frame = 0;
    let visible = true;
    let running = false;
    const loop = () => {
      if (!visible) { running = false; return; }
      draw();
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || !visible) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      phases.forEach((p) => {
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        for (let x = 0; x <= w; x += 3) {
          const y = h / 2 + Math.sin(x * 0.036 - t + p.shift) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      t += 0.045;
    };
    // Only animate while the waveform is on screen; pause when scrolled away or tab hidden.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      if (visible) start();
    });
    io.observe(canvas);
    const onVisibility = () => {
      visible = !document.hidden && canvas.getBoundingClientRect().bottom > 0;
      if (visible) start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    start();
    return () => {
      visible = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const pickScenario = (i: number) => {
    setSelectedScenario(i);
    setQMessage(`${scenarios[i].preset}\n\nProject details / Deadline: `);
    queryBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => qMessageRef.current?.focus(), 350);
  };

  const submitQuery = async (e: FormEvent) => {
    e.preventDefault();
    if (gotcha) return;
    const name = qName.trim();
    const email = qEmail.trim();
    const message = qMessage.trim();

    if (FORMSPREE_ID) {
      setQSending(true);
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error();
        setQStatus("Message received ✓ I read every inquiry myself and will reply within two working days.");
        setQName("");
        setQEmail("");
        setQMessage("");
      } catch {
        setQStatus("Could not send directly right now—opening your email app instead.");
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent(message + "\n\nReply to: " + email)}`;
      } finally {
        setQSending(false);
      }
    } else {
      const subj = encodeURIComponent(`Engineering Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${EMAIL}?subject=${subj}&body=${body}`;
      setQStatus("Draft opened in your email app ✓ I reply within two working days.");
    }
  };

  const submitBooking = (e: FormEvent) => {
    e.preventDefault();
    const start = new Date(`${meetDate}T${meetTime}:00`);
    const end = new Date(start.getTime() + 15 * 60000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const title = encodeURIComponent(`15-Min Call: ${guestName.trim()} × Wahaj Ul Islam`);
    const details = encodeURIComponent(`Topic: ${topic}\nRequested by: ${guestName.trim()}\nDuration: 15 Minutes (Google Meet)`);
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&details=${details}&add=${encodeURIComponent(EMAIL)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setBookingOpen(false);
  };

  const submitWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const custom = waMsg.trim();
    const text = encodeURIComponent(`Hello Wahaj, reaching out regarding: ${waTopic}.${custom ? "\n\n" + custom : ""}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
    setWaOpen(false);
  };

  return (
    <>
      <div className="scroll-progress" ref={progressRef} />

      <header className="nav-wrapper">
        <nav className="nav-inner" aria-label="Primary Navigation">
          <a href="#top" className="nav-brand">
            <span className="status-dot" />
            <span>Wahaj Ul Islam</span>
          </a>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="7" x2="21" y2="7"></line>
              <line x1="3" y1="17" x2="21" y2="17"></line>
            </svg>
          </button>
          <ul className={`nav-links${menuOpen ? " open" : ""}`} onClick={closeMenu}>
            <li><a href="#tools">Tools &amp; Standards</a></li>
            <li><a href="#capabilities">Core Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Certificates</a></li>
            <li><a href="#contact">Ask a Query</a></li>
            <li>
              <button className="nav-cta" onClick={() => setBookingOpen(true)}>Book 15-Min Call</button>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero ambient-stage">
          <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto" poster="/hero-bg-poster.jpg">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-bg-overlay" />
          <div className="orb orb-blue" />
          <div className="orb orb-cyan" />

          <div className="container hero-grid">
            <div>
              <div className="hero-tag hero-anim d1">
                <span className="status-dot" />
                <span>Electrical Engineer · Lahore, Pakistan</span>
              </div>

              <h1 className="hero-title hero-anim d2">Wahaj Ul Islam</h1>
              <p className="hero-subtitle hero-anim d3">Power Systems, BMS &amp; ELV Systems, and Electrical Estimation.</p>

              <p className="hero-desc hero-anim d4">
                I work on LV/MV/HV power distribution, substation testing and commissioning (FAT/SAT), smart building BMS &amp; ELV integration, and US/international material take-offs—working in compliance with <strong>IEC, IEEE, NFPA 70 (NEC), NESPAK, NEPRA, and NTDC</strong> standards.
              </p>

              <div className="hero-actions hero-anim d5">
                <button className="btn btn-primary" onClick={() => setBookingOpen(true)}>
                  <img src={MEET_ICON} alt="" width={17} height={17} referrerPolicy="no-referrer" />
                  <span>Book Free 15-Min Call</span>
                </button>
                <a href="Wahaj_Ul_Islam_CV.pdf" download="Wahaj_Ul_Islam_CV.pdf" className="btn btn-glass">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download CV</span>
                </a>
                <button className="btn btn-wa" onClick={() => setWaOpen(true)}><span>WhatsApp Business</span></button>
                <a href="https://www.linkedin.com/in/wahaj-islam/" target="_blank" rel="noopener noreferrer" className="btn btn-glass"><span>LinkedIn ↗</span></a>
              </div>

              <div className="hero-stats hero-anim d5">
                <div className="stat-box"><strong>4+ Years</strong><span>Power, MEP &amp; Estimation</span></div>
                <div className="stat-box"><strong>LV / MV / HV</strong><span>Switchgear, FAT &amp; SAT</span></div>
                <div className="stat-box"><strong>M.Sc. UET</strong><span>Power &amp; Building Engg.</span></div>
              </div>
            </div>

            <aside className="linkedin-card glass-surface hero-anim d6">
              <div className="card-banner">
                <img
                  src="banner.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="card-profile-body">
                <div className="circle-avatar-wrap">
                  <img
                    src="profile.jpg"
                    alt="Wahaj Ul Islam"
                    fetchPriority="high"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "grid";
                    }}
                  />
                  <div className="avatar-fallback">WU</div>
                </div>

                <div className="profile-head-row">
                  <h2>Wahaj Ul Islam</h2>
                  <p>Electrical Engineer · Inaam Energy Corporation</p>
                  <span>NESPAK · NTDC · NEPRA · IEC · IEEE · NFPA 70</span>
                </div>

                <div className="consult-strip">
                  <div className="consult-strip-left">
                    <div className="meet-badge">
                      <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Google_Calendar_icon_%282026%29.svg/120px-Google_Calendar_icon_%282026%29.svg.png" alt="Calendar" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <strong>1:1 Consultation (15 Min · Free)</strong>
                      <span>Google Meet or Cal.com</span>
                    </div>
                  </div>
                  <button className="mini-btn" onClick={() => setBookingOpen(true)}>Schedule</button>
                </div>

                <div className="waveform-box">
                  <canvas id="waveCanvas" ref={waveRef} width={420} height={56} />
                  <div className="wave-caption">
                    <span style={{ color: "#0a84ff" }}>● L1 50Hz</span>
                    <span style={{ color: "#64d2ff" }}>● L2 +120°</span>
                    <span style={{ color: "#30d158" }}>● L3 +240°</span>
                    <span>3-Phase System</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TOOLS & STANDARDS */}
        <section id="tools" className="logos-section">
          <div className="container">
            <div className="dock-label reveal">Tools &amp; Standards</div>

            <div className="logo-grid stagger-group">
              {tools.map((tool) => (
                <div className="logo-tile reveal" key={tool.alt}>
                  <div className="logo-img-box">
                    <img src={tool.src} alt={tool.alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                  </div>
                  <span className="logo-title">{tool.title}</span>
                </div>
              ))}
            </div>

            <div className="standards-row reveal">
              <div className="std-card"><img src="https://thumb.wikimedia.org/wikipedia/en/thumb/8/81/NESPAKLogo.svg/250px-NESPAKLogo.svg.png" alt="NESPAK" loading="lazy" referrerPolicy="no-referrer" /><span>NESPAK</span></div>
              <div className="std-card"><span>⚡ NTDC &amp; NEPRA</span></div>
              <div className="std-card"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/International_Electrotechnical_Commission_Logo.svg/960px-International_Electrotechnical_Commission_Logo.svg.png" alt="IEC" loading="lazy" referrerPolicy="no-referrer" /><span>IEC Standards</span></div>
              <div className="std-card"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/250px-IEEE_logo.svg.png" alt="IEEE" loading="lazy" referrerPolicy="no-referrer" /><span>IEEE Standards</span></div>
              <div className="std-card"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/NFPA_logo.svg/250px-NFPA_logo.svg.png" alt="NFPA" loading="lazy" referrerPolicy="no-referrer" /><span>NFPA 70 (NEC)</span></div>
            </div>
          </div>
        </section>

        {/* CORE WORK */}
        <section id="capabilities" className="ambient-stage">
          <div className="orb orb-cyan" style={{ top: "10%", left: "-8%" }} />
          <div className="container">
            <span className="eyebrow reveal">What I Do</span>
            <h2 className="section-title reveal">Core Engineering Work</h2>
            <p className="section-lead reveal">Power distribution design, field commissioning, building automation, and quantity estimation.</p>

            <div className="bento-grid stagger-group">
              <div className="bento-card glass-surface span-7 reveal">
                <div className="bento-photo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/High_voltage_switchgear.jpg" alt="High Voltage Switchgear Substation" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                </div>
                <div className="bento-body">
                  <span className="bento-tag">Power Systems &amp; EPC</span>
                  <h3>LV / MV / HV Switchgear &amp; Substations</h3>
                  <p>SLDs, layouts, schematics, BOQs, and technical submittals in compliance with IEC, IEEE, NESPAK, NEPRA, and NTDC. Experience working with foreign vendors and participating in FAT and SAT commissioning.</p>
                  <div className="pill-row">
                    <span className="pro-pill">Load Flow &amp; Short Circuit</span>
                    <span className="pro-pill">Voltage Drop &amp; Cable Sizing</span>
                    <span className="pro-pill">FAT / SAT</span>
                    <span className="pro-pill">NESPAK &amp; NTDC</span>
                  </div>
                </div>
              </div>

              <div className="bento-card glass-surface span-5 reveal">
                <div className="bento-photo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Control_Room_A.jpg" alt="Building Control and Automation" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                </div>
                <div className="bento-body">
                  <span className="bento-tag">BMS, ELV &amp; Estimation</span>
                  <h3>Smart Buildings &amp; Material Take-Offs</h3>
                  <p>Onsite deployment of DDC controllers, sensors, actuators, CCTV, Access Control, and Fire Alarm systems alongside NEC-compliant US electrical and HVAC BOQ estimation.</p>
                  <div className="pill-row">
                    <span className="pro-pill">DDC &amp; Sensors</span>
                    <span className="pro-pill">ELV Systems</span>
                    <span className="pro-pill">PlanSwift &amp; Bluebeam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-light">
          <div className="container">
            <span className="eyebrow reveal">Experience</span>
            <h2 className="section-title reveal">Work History</h2>

            <div className="timeline stagger-group">
              {experience.map((job) => (
                <article className="exp-card reveal" key={job.company}>
                  <div className="exp-top">
                    <div className="exp-id">
                      {job.logo ? (
                        <div className="company-badge has-logo"><img src={job.logo} alt={`${job.company} logo`} loading="lazy" decoding="async" /></div>
                      ) : (
                        <div className="company-badge" style={{ background: job.badgeBg }}>{job.badge}</div>
                      )}
                      <div>
                        <h3 className="exp-role">{job.role}</h3>
                        <div className="exp-company">{job.company}</div>
                      </div>
                    </div>
                    <span className={`exp-period${job.live ? " live" : ""}`}>{job.period}</span>
                  </div>
                  <ul className="exp-list">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-subtle">
          <div className="container">
            <span className="eyebrow reveal">Portfolio</span>
            <h2 className="section-title reveal">Selected Projects</h2>
            <p className="section-lead reveal">Substations, public buildings across Pakistan, and commercial take-offs in the United States.</p>

            <div className="filter-bar reveal">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`filter-btn${filter === f.key ? " active" : ""}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="projects-grid stagger-group">
              {projects.map((p) => {
                const match = filter === "all" || p.cat === filter;
                return (
                  <article
                    className={`project-card reveal${match ? "" : " hidden"}`}
                    data-visible={match ? "" : undefined}
                    key={p.title}
                  >
                    <div className="project-photo">
                      <img
                        src={p.img}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (!p.fallback || e.currentTarget.dataset.fallback) return;
                          e.currentTarget.dataset.fallback = "1";
                          e.currentTarget.src = p.fallback;
                        }}
                      />
                      <span className="project-photo-badge">{p.badge}</span>
                    </div>
                    <div className="project-body">
                      <div>
                        <h3 className="project-title">{p.title}</h3>
                        <div className="project-loc">{p.loc}</div>
                        <p className="project-desc">{p.desc}</p>
                      </div>
                      <div className="project-specs">
                        {p.specs.map((s) => (
                          <span className="spec-chip" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATES */}
        <section id="education" className="section-light">
          <div className="container">
            <span className="eyebrow reveal">Credentials</span>
            <h2 className="section-title reveal">Education &amp; Certificates</h2>

            <div className="edu-grid stagger-group">
              {education.map((edu) => (
                <article className="edu-card reveal" key={edu.title}>
                  <div className="edu-banner">
                    <img className="campus-img" src={edu.img} alt={edu.alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                    <div className="edu-logo-float">
                      <img src={UET_LOGO} alt="UET Lahore" loading="lazy" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="edu-body">
                    <span className={`exp-period${edu.live ? " live" : ""}`} style={{ display: "inline-block", marginBottom: 10 }}>{edu.period}</span>
                    <h3 className="exp-role">{edu.title}</h3>
                    <div className="exp-company">University of Engineering &amp; Technology, Lahore</div>
                    <p style={{ marginTop: 6, fontSize: "0.9rem", color: "var(--text-muted-light)" }}>
                      <strong>Specialization:</strong> {edu.specialization}
                    </p>
                    <div className="thesis-box">
                      <span>{edu.thesisLabel}</span>
                      {edu.thesis}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cert-grid stagger-group">
              <div className="cert-card reveal">
                <div>
                  <div className="cert-top"><img src={COURSERA_LOGO} alt="Coursera" loading="lazy" referrerPolicy="no-referrer" /><span className="cert-issuer-tag">Coursera</span></div>
                  <h4 className="cert-title">Engineering Project Management: Initiating and Planning</h4>
                  <p className="cert-sub">Specialization Certificate</p>
                </div>
                <div className="cert-actions"><a href="https://www.coursera.org/account/accomplishments/specialization/8WKEB6FE3MYA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">View Certificate ↗</a></div>
              </div>

              <div className="cert-card reveal">
                <div>
                  <div className="cert-top"><img src={COURSERA_LOGO} alt="Coursera" loading="lazy" referrerPolicy="no-referrer" /><span className="cert-issuer-tag">Coursera</span></div>
                  <h4 className="cert-title">Energy Production, Distribution &amp; Safety</h4>
                  <p className="cert-sub">Specialization Certificate</p>
                </div>
                <div className="cert-actions"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/IMGM3HB7I24A" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">View Certificate ↗</a></div>
              </div>

              <div className="cert-card reveal">
                <div>
                  <div className="cert-top"><img src={COURSERA_LOGO} alt="Coursera" loading="lazy" referrerPolicy="no-referrer" /><span className="cert-issuer-tag">Coursera</span></div>
                  <h4 className="cert-title">A Practitioner&apos;s Approach to Power Distribution &amp; Automation</h4>
                  <p className="cert-sub">Course Certificate</p>
                </div>
                <div className="cert-actions"><a href="https://coursera.org/share/463da982276aa375b8c933efc257961a" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">View Certificate ↗</a></div>
              </div>

              <div className="cert-card reveal">
                <div>
                  <div className="cert-top"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/960px-Google_2015_logo.svg.png" alt="Google" loading="lazy" referrerPolicy="no-referrer" /><span className="cert-issuer-tag">Credly</span></div>
                  <h4 className="cert-title">Google IT Automation with Python Professional Certificate</h4>
                  <p className="cert-sub">Issued by Coursera · Verified Badge</p>
                </div>
                <div className="cert-actions"><a href="https://www.credly.com/badges/c814511a-186a-41d7-b528-b15ee8f57e42" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">Verify on Credly ↗</a></div>
              </div>

              <div className="cert-card reveal">
                <div>
                  <div className="cert-top">
                    <img
                      src="https://portal.pec.org.pk/img/logo.png"
                      alt="PEC"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                        if (sibling) sibling.style.display = "inline-block";
                      }}
                    />
                    <span style={{ display: "none", fontWeight: 800, color: "#0b5e2e", fontSize: "0.92rem" }}>PEC</span>
                    <span className="cert-issuer-tag">PEC · Credsverse</span>
                  </div>
                  <h4 className="cert-title">Generative AI Application Developer Certificate</h4>
                  <p className="cert-sub">Pakistan Engineering Council</p>
                </div>
                <div className="cert-actions"><a href="https://credsverse.com/credentials/f95544b4-9d6a-4432-ac32-0fc3fb3ff3f6?preview=1" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">Verify Credential ↗</a></div>
              </div>

              <div className="cert-card reveal" style={{ background: "var(--bg-subtle)" }}>
                <div>
                  <div className="cert-top"><span style={{ fontWeight: 800, color: "#0a66c2", fontSize: "1rem" }}>in LinkedIn</span><span className="cert-issuer-tag">All Records</span></div>
                  <h4 className="cert-title">Complete Licenses &amp; Certifications</h4>
                  <p className="cert-sub">View all credentials on LinkedIn</p>
                </div>
                <div className="cert-actions"><a href="https://www.linkedin.com/in/wahaj-islam/details/certifications/" target="_blank" rel="noopener noreferrer" className="cert-verify-btn">Open LinkedIn ↗</a></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="connect-section ambient-stage">
          <div className="orb orb-blue" style={{ top: -80, left: "20%" }} />
          <div className="orb orb-emerald" />

          <div className="container">
            <div className="connect-shell glass-surface reveal">
              <div className="connect-header">
                <span className="eyebrow">Project &amp; Hiring Inquiries</span>
                <h2 className="section-title" style={{ color: "#fff" }}>Tell me what&apos;s going on.</h2>
                <p>A few lines on your project scope or deadline are enough. I read every message myself and reply within two working days.</p>
              </div>

              <div className="scenario-grid stagger-group">
                {scenarios.map((s, i) => (
                  <button
                    type="button"
                    key={s.label}
                    className={`scenario-card reveal${selectedScenario === i ? " selected" : ""}`}
                    onClick={() => pickScenario(i)}
                  >
                    <span>{s.label}</span>
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </button>
                ))}
              </div>

              <div className="steps-bar reveal">
                <div className="step-item">
                  <div className="step-num">1</div>
                  <div><strong>Send a few lines</strong><span>Describe your scope, standard, or deadline below.</span></div>
                </div>
                <div className="step-item">
                  <div className="step-num">2</div>
                  <div><strong>Free 15-min call</strong><span>Quick video chat via Google Meet or Cal.com if needed.</span></div>
                </div>
                <div className="step-item">
                  <div className="step-num">3</div>
                  <div><strong>Clear deliverables</strong><span>Aligned drawings, BOQs, or commissioning schedule.</span></div>
                </div>
              </div>

              <div className="query-split">
                <div className="inline-form-box" id="queryFormBox" ref={queryBoxRef}>
                  <h3>Send a Query</h3>
                  <p className="form-lead">Submit directly from this page—no account or email app required.</p>

                  <form id="inlineQueryForm" onSubmit={submitQuery}>
                    <div className="honeypot-field" aria-hidden="true">
                      <label htmlFor="gotcha">Leave this empty</label>
                      <input type="text" id="gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="qName">Your Name</label>
                      <input type="text" id="qName" name="name" required placeholder="Your full name" value={qName} onChange={(e) => setQName(e.target.value)} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="qEmail">Your Email Address</label>
                      <input type="email" id="qEmail" name="email" required placeholder="you@company.com" value={qEmail} onChange={(e) => setQEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                      <label htmlFor="qMessage">Your Message</label>
                      <textarea
                        id="qMessage"
                        name="message"
                        rows={5}
                        required
                        placeholder="Share a few lines about your project, voltage/system type, deadline, or role..."
                        value={qMessage}
                        ref={qMessageRef}
                        onChange={(e) => setQMessage(e.target.value)}
                      />
                    </div>

                    <button type="submit" id="qSubmitBtn" className="btn btn-primary" style={{ width: "100%" }} disabled={qSending}>
                      {qSending ? "Sending..." : "Send Message →"}
                    </button>
                    <div className={`form-status${qStatus ? " show" : ""}`} id="qStatus">{qStatus}</div>
                  </form>
                </div>

                <div className="side-stack">
                  <div className="quick-channels">
                    <div className="channel-row">
                      <div className="channel-left">
                        <div className="channel-icon" style={{ background: "rgba(37, 211, 102, 0.16)", color: "#6df5a0" }}>
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m5.81 14.08c-.24.69-1.41 1.32-1.95 1.4-.5.07-1.14.1-1.84-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07s.76-2.18 1.03-2.48c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.59.84 2.04.91 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.31-.13.62.17.3.78 1.29 1.68 2.09 1.150 1.03 2.12 1.35 2.42 1.5.3.15.47.12.64-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.02.97.3.15.5.22.57.34.07.12.07.7-.17 1.39" /></svg>
                        </div>
                        <div><strong>WhatsApp Business</strong><span>Direct encrypted chat</span></div>
                      </div>
                      <button type="button" className="channel-action" style={{ background: "var(--whatsapp)", color: "#051b0d" }} onClick={() => setWaOpen(true)}>Chat ↗</button>
                    </div>

                    <div className="channel-row">
                      <div className="channel-left">
                        <div className="channel-icon" style={{ background: "#fff", padding: 6 }}>
                          <img src={MEET_ICON} alt="Google Meet" loading="lazy" referrerPolicy="no-referrer" />
                        </div>
                        <div><strong>15-Min Free Call</strong><span>Google Meet / Cal.com</span></div>
                      </div>
                      <button type="button" className="channel-action" style={{ background: "#fff", color: "#07080c" }} onClick={() => setBookingOpen(true)}>Book</button>
                    </div>

                    <div className="channel-row">
                      <div className="channel-left">
                        <div className="channel-icon" style={{ background: "rgba(100, 210, 255, 0.16)", color: "var(--cyan)" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        </div>
                        <div><strong>Curriculum Vitae</strong><span>PDF Document</span></div>
                      </div>
                      <a href="Wahaj_Ul_Islam_CV.pdf" download="Wahaj_Ul_Islam_CV.pdf" className="channel-action" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>Download ↓</a>
                    </div>
                  </div>

                  <div className="faq-box">
                    <div className="faq-title">Common Questions</div>
                    {faqs.map((f) => (
                      <details className="faq-item" key={f.q}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              <div className="linkedin-center-box reveal">
                <p><strong>LinkedIn:</strong> Connect or review my full experience &amp; verified certifications at <strong>linkedin.com/in/wahaj-islam</strong></p>
                <a href="https://www.linkedin.com/in/wahaj-islam/" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ padding: "10px 24px", fontSize: "0.86rem" }}>Open LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Wahaj Ul Islam</span>
          <span>Electrical Engineer · Lahore, Pakistan</span>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      <div
        className={`modal-backdrop${bookingOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        onClick={(e) => { if (e.target === e.currentTarget) setBookingOpen(false); }}
      >
        <div className="modal-card">
          <button className="modal-close close-modal" aria-label="Close modal" onClick={() => setBookingOpen(false)}>✕</button>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <img src={MEET_ICON} alt="Google Meet" width={30} height={30} referrerPolicy="no-referrer" />
            <div>
              <h3 id="modalTitle" style={{ fontSize: "1.14rem", fontWeight: 700 }}>Book a 15-Min Free Call</h3>
              <p style={{ fontSize: "0.79rem", color: "var(--text-muted-dark)" }}>Google Meet / Cal.com Video Consultation</p>
            </div>
          </div>
          <form id="meetingForm" onSubmit={submitBooking}>
            <div className="form-group">
              <label htmlFor="guestName">Your Name</label>
              <input type="text" id="guestName" required placeholder="e.g. Sarah Ahmed" value={guestName} onChange={(e) => setGuestName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                {topics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="meetDate">Date</label>
                <input type="date" id="meetDate" required min={minDate} value={meetDate} onChange={(e) => setMeetDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="meetTime">Time</label>
                <input type="time" id="meetTime" required value={meetTime} onChange={(e) => setMeetTime(e.target.value)} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 6 }}>Create Google Meet Invite ↗</button>
            {CAL_SCHEDULING_URL && (
              <a href={CAL_SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ width: "100%", marginTop: 10, display: "inline-flex" }}>
                Or Schedule on Cal.com / Calendly ↗
              </a>
            )}
          </form>
        </div>
      </div>

      {/* WHATSAPP MODAL */}
      <div
        className={`modal-backdrop${waOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waModalTitle"
        onClick={(e) => { if (e.target === e.currentTarget) setWaOpen(false); }}
      >
        <div className="modal-card">
          <button className="modal-close close-modal" aria-label="Close WhatsApp modal" onClick={() => setWaOpen(false)}>✕</button>
          <h3 id="waModalTitle" style={{ fontSize: "1.14rem", fontWeight: 700, marginBottom: 4 }}>WhatsApp Business</h3>
          <p style={{ fontSize: "0.79rem", color: "var(--text-muted-dark)", marginBottom: 16 }}>Choose a topic and start a WhatsApp chat directly.</p>
          <form id="waForm" onSubmit={submitWhatsApp}>
            <div className="form-group">
              <label htmlFor="waTopic">Topic</label>
              <select id="waTopic" value={waTopic} onChange={(e) => setWaTopic(e.target.value)}>
                {waTopics.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="waMsg">Message (optional)</label>
              <textarea id="waMsg" rows={3} placeholder="Hi Wahaj, I'd like to discuss..." value={waMsg} onChange={(e) => setWaMsg(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-wa" style={{ width: "100%", background: "var(--whatsapp)", color: "#051b0d" }}>Open WhatsApp Business ↗</button>
          </form>
        </div>
      </div>
    </>
  );
}
