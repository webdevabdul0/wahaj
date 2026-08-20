import Image from "next/image";
import HeroTitle from "./HeroTitle";
import LottieCard from "./LottieCard";
import {
  ACCENT,
  stripProjects,
  experience,
  featuredProjects,
  otherProjects,
  skills,
  education,
  certifications,
} from "@/lib/data";

const BG     = "oklch(97% 0.012 85)";
const BG2    = "oklch(93.5% 0.010 82)";
const DARK   = "oklch(16% 0.008 80)";
const MUTED  = "oklch(48% 0.010 80)";
const TEXT   = "oklch(36% 0.011 80)";
const BORDER = "oklch(88% 0.008 85)";

/* Map project id → public image path */
const projImages: Record<string, string> = {
  "proj-ogdcl":    "/proj-ogdcl.jpg",
  "proj-expo":     "/proj-expo.jpg",
  "proj-forensic": "/proj-forensic.jpg",
  "proj-highcourt":"/proj-highcourt.jpg",
  "proj-markham":  "/proj-markham.jpg",
  "proj-hannaford":"/proj-hannaford.jpg",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="pill-hover"
      style={{
        fontSize: 12,
        fontWeight: 500,
        padding: "6px 14px",
        borderRadius: 999,
        background: BG2,
        color: "oklch(32% 0.011 80)",
        whiteSpace: "nowrap" as const,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.10em",
        color: ACCENT,
        textTransform: "uppercase" as const,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: "-0.025em",
        margin: 0,
        lineHeight: 1.15,
        color: DARK,
      }}
    >
      {children}
    </h2>
  );
}

function ProjectImage({ id, name, height = 280 }: { id: string; name: string; height?: number }) {
  const src = projImages[id];
  return (
    <div style={{ position: "relative", width: "100%", height, overflow: "hidden" }}>
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 900px) 100vw, 33vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div style={{ background: BG, color: DARK, width: "100%", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 64px",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          background: "oklch(97% 0.012 85 / 0.82)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Wahaj Ul Islam"
            width={180}
            height={60}
            style={{ objectFit: "contain", objectPosition: "left center" }}
          />
        </div>

        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 34,
            fontSize: 14,
            fontWeight: 400,
            color: MUTED,
          }}
        >
          {["About", "Work", "Experience", "Skills", "Contact"].map((item) => (
            <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a
            href="/Wahaj-Ul-Islam-Resume.pdf"
            download="Wahaj-Ul-Islam-Resume.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 20px",
              borderRadius: 999,
              background: DARK,
              color: "oklch(96% 0.008 85)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            Résumé ↓
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="section-pad"
        style={{ position: "relative", padding: "48px 64px 0", maxWidth: 1440, margin: "0 auto" }}
      >
        {/* Top stats row */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: 48,
            marginBottom: 14,
            flexWrap: "wrap" as const,
            alignItems: "center",
          }}
        >
          {[
            { num: "4+", label: "Years in the field" },
            { num: "9+", label: "Projects delivered" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: DARK,
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 4, fontWeight: 400 }}>
                {label}
              </div>
            </div>
          ))}

          <div
            style={{
              marginLeft: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 34,
              padding: "0 16px",
              borderRadius: 999,
              background: BG2,
              color: "oklch(34% 0.010 80)",
              fontSize: 13,
              fontWeight: 400,
            }}
          >
            <span
              className="blink"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: ACCENT,
                display: "inline-block",
              }}
            />
            Open to power systems &amp; EPC roles
          </div>
        </div>

        {/* Hero card */}
        <div
          className="hero-grid scale-in"
          style={{
            position: "relative",
            borderRadius: 32,
            overflow: "hidden",
            background: BG2,
            minHeight: 600,
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "end",
          }}
        >
          {/* Ambient glow orbs */}
          <div
            style={{
              position: "absolute",
              top: -120,
              left: -120,
              width: 560,
              height: 560,
              borderRadius: "50%",
              background: `radial-gradient(circle, oklch(65% 0.16 255 / 0.12) 0%, transparent 68%)`,
              pointerEvents: "none",
              zIndex: 0,
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              right: "30%",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: `radial-gradient(circle, oklch(65% 0.14 255 / 0.08) 0%, transparent 70%)`,
              pointerEvents: "none",
              zIndex: 0,
              filter: "blur(40px)",
            }}
          />

          {/* Left: text */}
          <div style={{ position: "relative", zIndex: 2, padding: "52px 24px 52px 52px" }}>
            <HeroTitle />
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: TEXT,
                maxWidth: 420,
                margin: "0 0 32px",
                fontWeight: 400,
              }}
            >
              I'm Wahaj — an Electrical Engineer specializing in power systems,
              LV/MV/HV site execution, and BMS &amp; ELV integration for
              large-scale EPC projects.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap" as const,
              }}
            >
              <a
                href="/Wahaj-Ul-Islam-Resume.pdf"
                download="Wahaj-Ul-Islam-Resume.pdf"
                style={{
                  padding: "14px 26px",
                  borderRadius: 999,
                  background: DARK,
                  color: "oklch(96% 0.008 85)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Download Résumé
              </a>
              <a
                href="#contact"
                style={{
                  padding: "14px 26px",
                  borderRadius: 999,
                  border: `1.5px solid oklch(74% 0.010 80)`,
                  fontSize: 14,
                  fontWeight: 500,
                  color: DARK,
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: headshot */}
          <div
            className="hero-img"
            style={{
              position: "relative",
              alignSelf: "stretch",
              minHeight: 600,
              overflow: "hidden",
            }}
          >
            <Image
              src="/headshot.png"
              alt="Wahaj Ul Islam"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="section-pad"
        style={{ padding: "110px 64px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 0.65fr 1.1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {/* Col 1 */}
          <div className="reveal">
            <Label>About</Label>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                margin: "0 0 20px",
                color: DARK,
              }}
            >
              Precision on paper.
              <br />
              Follow-through on site.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: TEXT, margin: 0, fontWeight: 400 }}>
              I deliver precise material take-offs, optimized BOQs, and
              hands-on execution across substations, switchgear, and building
              automation — turning drawings into buildings that run safely and
              efficiently.
            </p>
          </div>

          {/* Col 2 */}
          <div
            className="reveal reveal-d1"
            style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}
          >
            <div
              className="card-lift"
              style={{
                flex: 1,
                borderRadius: 26,
                background: DARK,
                color: "oklch(96% 0.008 85)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column" as const,
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.03em" }}>3</div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "oklch(68% 0.010 85)",
                  marginTop: 10,
                  fontWeight: 400,
                }}
              >
                Professional certifications in power systems, project
                management &amp; building energy
              </div>
            </div>
            <div
              style={{
                height: 160,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LottieCard src="/Renewable energy.json" />
            </div>
          </div>

          {/* Col 3 */}
          <div
            className="reveal reveal-d2"
            style={{
              display: "flex",
              flexDirection: "column" as const,
              gap: 18,
              justifyContent: "center",
            }}
          >
            {[
              "Currently pursuing a Master's in Electrical Engineering at UET Lahore, researching intelligent, occupancy-aware energy management in buildings.",
              "Based in Lahore, Pakistan — working across LV/MV/HV switchgear, substations, and EPC coordination with global vendors and contractors.",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    flexShrink: 0,
                    borderRadius: 10,
                    background: BG2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 500,
                    color: ACCENT,
                    fontSize: 13,
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: TEXT,
                    fontWeight: 400,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section
        id="work"
        className="section-pad"
        style={{ padding: "0 64px 110px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <div>
            <Label>Selected Work</Label>
            <SectionHeading>Projects I've shaped</SectionHeading>
          </div>
        </div>

        <div
          className="strip-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {stripProjects.map((proj, i) => (
            <div
              key={proj.id}
              className={`card-lift reveal reveal-d${i + 1}`}
              style={{ borderRadius: 24, overflow: "hidden", background: BG2 }}
            >
              <ProjectImage id={proj.id} name={proj.name} height={260} />
              <div style={{ padding: "18px 20px 20px" }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 4,
                    color: DARK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {proj.name}
                </div>
                <div style={{ fontSize: 13, color: MUTED, fontWeight: 400 }}>{proj.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="marquee-wrap"
        style={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "18px 0",
          marginBottom: 110,
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, n) => (
            <div
              key={n}
              style={{ display: "flex", alignItems: "center" }}
            >
              {[
                "Power Systems",
                "LV/MV/HV Switchgear",
                "EPC Coordination",
                "AutoCAD Electrical",
                "ETAP",
                "BMS Integration",
                "BOQ Preparation",
                "Substations",
                "Switchgear",
                "NFPA 70",
                "IEC Standards",
                "Site Supervision",
                "Bluebeam Revu",
                "PlanSwift",
                "CCTV & Access Control",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{ display: "flex", alignItems: "center", gap: 0 }}
                >
                  <span
                    style={{
                      padding: "0 28px",
                      fontSize: 14,
                      fontWeight: 400,
                      color: MUTED,
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {skill}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: ACCENT,
                      flexShrink: 0,
                    }}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE ── */}
      <section
        id="experience"
        className="section-pad"
        style={{ padding: "0 64px 110px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.3fr",
            gap: 64,
            marginBottom: 52,
          }}
        >
          <div>
            <Label>Experience</Label>
            <SectionHeading>Where I've made an impact</SectionHeading>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: TEXT,
              margin: 0,
              alignSelf: "center",
              fontWeight: 400,
            }}
          >
            Over the past 4+ years, I've worked across power systems, EPC
            coordination, and building automation — collaborating with vendors,
            contractors, and consultants across three continents.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
          {experience.map((job, i) => (
            <div
              key={i}
              className={`exp-card reveal reveal-d${i + 1}`}
              style={{
                borderRadius: 22,
                background: BG2,
                borderLeft: `4px solid ${ACCENT}`,
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 14,
                  gap: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.10em",
                      color: ACCENT,
                      textTransform: "uppercase" as const,
                      marginBottom: 8,
                    }}
                  >
                    {job.role}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: DARK,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {job.company}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: MUTED,
                    fontWeight: 400,
                    background: BG,
                    padding: "6px 14px",
                    borderRadius: 999,
                    flexShrink: 0,
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {job.period}
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.72,
                  color: TEXT,
                  margin: "0 0 16px",
                  fontWeight: 400,
                  maxWidth: 680,
                }}
              >
                {job.summary}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                {job.tags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="section-pad reveal"
        style={{ padding: "0 64px 110px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            background: DARK,
            padding: "72px 48px",
            textAlign: "center" as const,
          }}
        >
          {/* Orb */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: `radial-gradient(circle, oklch(60% 0.22 255 / 0.20) 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "oklch(68% 0.015 60)",
              textTransform: "uppercase" as const,
              marginBottom: 16,
            }}
          >
            Available now
          </div>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "oklch(96% 0.008 85)",
              margin: "0 auto 32px",
              maxWidth: 580,
              lineHeight: 1.2,
            }}
          >
            Open to power systems, EPC &amp; BMS opportunities — let's talk.
          </h2>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "14px 30px",
              borderRadius: 999,
              background: ACCENT,
              color: "oklch(98% 0.008 85)",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Get in touch ↗
          </a>
        </div>
      </section>

      {/* ── LATEST WORKS ── */}
      <section
        className="section-pad"
        style={{ padding: "0 64px 110px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div className="reveal" style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <Label>Portfolio</Label>
          <SectionHeading>Latest Works</SectionHeading>
        </div>

        <div
          className="featured-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 16,
          }}
        >
          {featuredProjects.map((proj, i) => (
            <div
              key={proj.id}
              className={`card-lift reveal reveal-d${i + 1}`}
              style={{ borderRadius: 22, overflow: "hidden", background: BG2 }}
            >
              <ProjectImage id={proj.id} name={proj.name} height={180} />
              <div style={{ padding: "18px 20px 20px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    color: ACCENT,
                    marginBottom: 6,
                  }}
                >
                  {proj.tag}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: DARK,
                  }}
                >
                  {proj.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{ borderRadius: 22, background: BG2, padding: 8 }}
        >
          {otherProjects.map((proj, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 20px",
                borderBottom:
                  i < otherProjects.length - 1 ? `1px solid ${BORDER}` : "none",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 500, color: DARK }}>{proj.name}</div>
              <div style={{ fontSize: 13, fontWeight: 400, color: MUTED }}>{proj.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="section-pad"
        style={{ padding: "0 64px 110px", maxWidth: 1440, margin: "0 auto" }}
      >
        <div className="reveal" style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <Label>Skills</Label>
          <SectionHeading>Toolkit &amp; Standards</SectionHeading>
        </div>

        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`card-lift reveal reveal-d${(i % 3) + 1}`}
              style={{
                padding: "26px 24px",
                borderRadius: 22,
                background: BG2,
                borderTop: `3px solid ${ACCENT}`,
                position: "relative" as const,
                overflow: "hidden",
              }}
            >
              {/* Decorative index */}
              <div
                style={{
                  position: "absolute" as const,
                  top: -8,
                  right: 14,
                  fontSize: 72,
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "oklch(91% 0.009 82)",
                  userSelect: "none" as const,
                  pointerEvents: "none" as const,
                  letterSpacing: "-0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 14,
                  color: DARK,
                  letterSpacing: "-0.01em",
                  position: "relative" as const,
                }}
              >
                {group.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, position: "relative" as const }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      padding: "7px 13px",
                      borderRadius: 999,
                      background: "oklch(97% 0.008 85)",
                      color: TEXT,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION & CERTS ── */}
      <section
        className="section-pad edu-grid"
        style={{
          padding: "0 64px 110px",
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
        }}
      >
        <div className="reveal">
          <Label>Education</Label>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: DARK,
            }}
          >
            Academic background
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
            {education.map((edu, i) => (
              <div
                key={i}
                className="card-lift"
                style={{ padding: "24px", borderRadius: 20, background: BG2 }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: MUTED,
                    marginBottom: 8,
                    letterSpacing: "0.02em",
                  }}
                >
                  {edu.period}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginBottom: 4,
                    color: DARK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {edu.degree}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: TEXT,
                    marginBottom: 10,
                    fontWeight: 400,
                  }}
                >
                  {edu.school}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: MUTED, fontWeight: 400 }}>
                  {edu.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1">
          <Label>Certifications</Label>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
              color: DARK,
            }}
          >
            Continued learning
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="card-lift"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 22px",
                  borderRadius: 18,
                  background: BG2,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      marginBottom: 3,
                      color: DARK,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {cert.name}
                  </div>
                  <div style={{ fontSize: 12, color: MUTED, fontWeight: 400 }}>
                    {cert.issuer}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: MUTED,
                    whiteSpace: "nowrap" as const,
                    marginLeft: 16,
                  }}
                >
                  {cert.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="reveal"
        style={{
          background: DARK,
          padding: "110px 64px",
          textAlign: "center" as const,
          position: "relative" as const,
          overflow: "hidden",
        }}
      >
        {/* Subtle blue orb */}
        <div
          style={{
            position: "absolute" as const,
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, oklch(55% 0.22 255 / 0.15) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" as const }}>
          {/* Accent bar */}
          <div
            style={{
              width: 40,
              height: 3,
              background: ACCENT,
              borderRadius: 99,
              margin: "0 auto 28px",
            }}
          />
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.13em",
              color: "oklch(52% 0.012 80)",
              textTransform: "uppercase" as const,
              marginBottom: 24,
            }}
          >
            Get in touch
          </div>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: "0 auto 22px",
              color: "oklch(95% 0.008 85)",
              maxWidth: 780,
            }}
          >
            Let's build something
            <br />
            that runs.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "oklch(60% 0.010 80)",
              margin: "0 auto 48px",
              maxWidth: 460,
              fontWeight: 400,
            }}
          >
            Open to power systems, EPC, and building automation opportunities
            — reach out any time.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href="mailto:Wahajulislam6@gmail.com"
              style={{
                padding: "16px 32px",
                borderRadius: 999,
                background: ACCENT,
                color: "oklch(98% 0.008 85)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Send a message ↗
            </a>
            <a
              href="tel:+923020141810"
              style={{
                padding: "16px 32px",
                borderRadius: 999,
                border: `1.5px solid oklch(30% 0.008 80)`,
                fontSize: 14,
                fontWeight: 500,
                color: "oklch(82% 0.010 80)",
              }}
            >
              Call me
            </a>
            <a
              href="https://www.linkedin.com/in/wahaj-islam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 32px",
                borderRadius: 999,
                border: `1.5px solid oklch(30% 0.008 80)`,
                fontSize: 14,
                fontWeight: 500,
                color: "oklch(82% 0.010 80)",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="section-pad"
        style={{
          padding: "32px 64px",
          background: DARK,
          color: "oklch(55% 0.008 85)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          fontWeight: 400,
          flexWrap: "wrap" as const,
          gap: 8,
        }}
      >
        <div>© {year} Wahaj Ul Islam</div>
        <div>Electrical Engineer · Lahore, Pakistan</div>
      </footer>
    </div>
  );
}
