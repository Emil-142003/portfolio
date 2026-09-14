import { useState } from 'react';

const skills = [
  ['Front-end', 'HTML, CSS, JavaScript'],
  ['Back-end & languages', 'Python, FastAPI, Flask API, C'],
  ['Data & cloud', 'MySQL, Firebase, Power BI'],
  ['Tools', 'Git, GitHub, Vercel'],
];

const projects = [
  {
    name: 'FACETIX',
    label: 'Facial detection based biometric attendance',
    details: ['Responsive facial-recognition attendance application using Python and OpenCV.', 'MySQL-backed attendance records with Admin, Teacher, and Student dashboards.'],
    color: '#c4513e',
  },
  {
    name: 'GuardianGrid',
    label: 'Road safety enhancement mobile app',
    details: ['Flutter and FastAPI app for hazard reports, safer routes, and emergency response.', 'Firebase, Cloudinary, GPS, and sensor-driven crash detection with automated alerts.'],
    color: '#df7a5e',
  },
];

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div style={styles.page}>
      <style>{responsiveStyles}</style>
      <div className="ambient-graphics" aria-hidden="true">
        <span className="graphic-ring ring-one" />
        <span className="graphic-ring ring-two" />
        <span className="graphic-line line-one" />
        <span className="graphic-line line-two" />
        <span className="graphic-diamond" />
      </div>
      <header style={styles.header}>
        <div style={styles.brandGroup}>
          <button style={styles.profileButton} onClick={() => setProfileOpen(true)} aria-label="View Emil's profile photo"><img src="/images/new-profile.png" alt="Emil Mareena P" style={styles.headerProfile} /></button>
          <a href="#top" style={styles.brand}>EMIL<span style={styles.brandDot}>.</span></a>
        </div>
        <button style={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => <button key={item} onClick={() => jumpTo(item.toLowerCase())}>{item}</button>)}
        </nav>
      </header>

      {profileOpen && <div style={styles.photoOverlay} role="dialog" aria-modal="true" aria-label="Emil Mareena P profile photo" onClick={() => setProfileOpen(false)}>
        <button style={styles.closePhoto} onClick={() => setProfileOpen(false)} aria-label="Close photo">×</button>
        <img src="/images/new-profile.png" alt="Emil Mareena P" style={styles.fullProfile} onClick={(event) => event.stopPropagation()} />
      </div>}

      <main id="top">
        <section style={styles.hero}>
          <div style={styles.heroCopy}>
            <p style={styles.kicker}>Computer Science & Data Science</p>
            <h1 style={styles.title}>I build thoughtful,<br /><em style={styles.titleEm}>useful software.</em></h1>
            <p style={styles.lede}>I’m Emil Mareena P, a B.Tech student focused on turning practical problems into well-crafted web, mobile, and data-driven products.</p>
            <div style={styles.actions}>
              <button onClick={() => jumpTo('projects')} style={styles.primaryButton}>Explore my work <Arrow /></button>
              <button onClick={() => jumpTo('contact')} style={styles.textButton}>Let’s connect <Arrow /></button>
            </div>
          </div>
          <div style={styles.portraitWrap}>
            <div style={styles.portraitBackdrop} />
            <img src="/images/hero-reference.jpg" alt="Backlit silhouette" style={styles.portrait} />
            <div style={styles.availability}><span style={styles.pulse} />Available for opportunities</div>
          </div>
        </section>

        <section id="about" style={styles.introBand}>
          <p style={styles.largeStatement}>A curious builder with a strong foundation in <span>software engineering</span>, data, and the drive to keep learning.</p>
          <div style={styles.quickFacts}>
            <div><strong>8.81</strong><small>GPA / 10</small></div>
            <div><strong>2027</strong><small>Graduation</small></div>
            <div><strong>02</strong><small>Internships</small></div>
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <div style={styles.sectionHeading}><h2>Tools I use to<br />make things work.</h2></div>
          <div style={styles.skillGrid}>{skills.map(([title, list]) => <article key={title} style={styles.skillCard}><h3>{title}</h3><p>{list}</p></article>)}</div>
        </section>

        <section id="experience" style={{ ...styles.section, ...styles.experienceSection }}>
          <div style={styles.sectionHeading}><h2>Learning by<br />doing.</h2></div>
          <div style={styles.timeline}>
            <Experience role="Data Science Intern" company="Archon Solutions" date="Dec 2025 · Ernakulam" text="Built Python scripts for a car-price predictor and practiced data cleaning, feature analysis, predictive modeling, and Power BI." />
            <Experience role="Python Intern" company="Soften Technologies" date="Jun 2024 · Cochin" text="Completed a hands-on internship focused on core Python programming fundamentals." />
            <Experience role="B.Tech, Computer Science & Data Science" company="Mar Baselios Institute of Technology and Science" date="Expected May 2027" text="Coursework includes algorithms, databases, operating systems, data analysis, and machine learning concepts." />
          </div>
        </section>

        <section id="projects" style={styles.projectsSection}>
          <div style={styles.projectsHead}><div><h2 style={styles.lightTitle}>A few things I’ve<br />brought to life.</h2></div><p>Projects that combine real-world purpose with an eye for reliable, usable systems.</p></div>
          <div style={styles.projectTabs}>{projects.map((project, index) => <button key={project.name} onClick={() => setActiveProject(index)} style={{ ...styles.projectTab, ...(activeProject === index ? { borderColor: project.color, color: '#fff' } : {}) }}>{project.name}<span>{activeProject === index ? '—' : '+'}</span></button>)}</div>
          <article style={{ ...styles.featuredProject, '--project-color': projects[activeProject].color }}>
            <div><p style={styles.projectTag}>Featured project</p><h3>{projects[activeProject].name}</h3><h4>{projects[activeProject].label}</h4><ul>{projects[activeProject].details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
            <div style={styles.projectGraphic}><div style={styles.orbit} /><span>{activeProject === 0 ? '◉' : '✦'}</span></div>
          </article>
        </section>

        <section id="contact" style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Let’s make<br /><em>something useful.</em></h2>
          <a style={styles.email} href="mailto:emilmareenap@gmail.com">emilmareenap@gmail.com <Arrow /></a>
          <div style={styles.contactLinks}><a style={styles.socialLink} href="https://www.linkedin.com/in/emil-mareena-p" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a style={styles.socialLink} href="https://github.com/Emil-142003" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
          <div style={styles.footerRow}><p>© 2026 Emil Mareena P</p></div>
        </section>
      </main>
    </div>
  );
}

function Experience({ role, company, date, text }) {
  return <article style={styles.experience}><div><p style={styles.experienceDate}>{date}</p><h3>{role}</h3><h4>{company}</h4></div><p>{text}</p></article>;
}

const styles = {
  page: { background: '#0b0c0b', color: '#f2eee8', minHeight: '100vh', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', wordSpacing: '.04em' },
  header: { maxWidth: 1240, margin: '0 auto', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }, brandGroup: { display: 'flex', alignItems: 'center', gap: 11 }, profileButton: { width: 38, height: 38, padding: 0, border: '2px solid #c4513e', borderRadius: '50%', background: '#171312', overflow: 'hidden', cursor: 'pointer' }, headerProfile: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }, brand: { color: '#fff', textDecoration: 'none', fontWeight: 800, letterSpacing: '-.08em', fontSize: 22 }, brandDot: { color: '#fff' },
  menuButton: { display: 'none', border: 0, background: 'none', color: '#fff', fontSize: 25, cursor: 'pointer' },
  photoOverlay: { position: 'fixed', inset: 0, zIndex: 20, display: 'grid', placeItems: 'center', padding: 28, background: '#000000e6', cursor: 'zoom-out' }, closePhoto: { position: 'fixed', top: 22, right: 28, border: 0, background: 'none', color: '#fff', cursor: 'pointer', fontSize: 38, lineHeight: 1 }, fullProfile: { maxWidth: 'min(92vw, 560px)', maxHeight: '82vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 24px 80px #000' },
  hero: { maxWidth: 1160, margin: '24px auto 0', minHeight: 550, padding: '44px 0 82px', display: 'grid', gridTemplateColumns: '1.17fr .83fr', alignItems: 'center', gap: 64, position: 'relative', zIndex: 1 }, heroCopy: { paddingLeft: 8 }, kicker: { color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '.17em', textTransform: 'uppercase', margin: 0 }, title: { fontSize: 'clamp(50px, 6.2vw, 84px)', lineHeight: '.98', letterSpacing: '-.07em', margin: '22px 0', fontWeight: 750 }, titleEm: { color: '#fff', fontFamily: 'inherit', fontWeight: 500, letterSpacing: '-.06em' }, lede: { maxWidth: 540, fontSize: 18, lineHeight: 1.65, color: '#fff', margin: 0 }, actions: { display: 'flex', gap: 28, alignItems: 'center', marginTop: 34 }, primaryButton: { border: 0, borderRadius: 99, background: '#c4513e', color: '#fff', padding: '15px 22px', cursor: 'pointer', fontWeight: 700, fontSize: 14 }, textButton: { border: 0, background: 'none', cursor: 'pointer', fontWeight: 700, color: '#fff', fontSize: 14 },
  portraitWrap: { position: 'relative', width: 'min(100%, 350px)', justifySelf: 'center', aspectRatio: '.7' }, portraitBackdrop: { position: 'absolute', inset: '4% 0 0 7%', background: '#7c2e25', borderRadius: '180px 180px 20px 20px', transform: 'rotate(3deg)' }, portrait: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%', borderRadius: '180px 180px 20px 20px', filter: 'contrast(1.08)' }, availability: { position: 'absolute', bottom: 20, left: -42, background: '#c4513e', color: '#fff', borderRadius: 99, padding: '11px 16px', boxShadow: '0 10px 30px #00000088', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }, pulse: { display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#fff', marginRight: 8 },
  introBand: { maxWidth: 1240, margin: '0 auto', padding: '95px 40px 90px', borderTop: '1px solid #302b29', display: 'grid', gridTemplateColumns: '1fr', position: 'relative', zIndex: 1 }, largeStatement: { fontSize: 'clamp(28px, 3.4vw, 47px)', lineHeight: 1.12, letterSpacing: '-.052em', maxWidth: 850, margin: 0, fontWeight: 650 }, quickFacts: { display: 'flex', gap: 54, marginTop: 44 },
  section: { maxWidth: 1240, margin: '0 auto', padding: '92px 40px', display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 72, position: 'relative', zIndex: 1 }, sectionHeading: {}, skillGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }, skillCard: { background: '#171817', minHeight: 185, padding: 26, display: 'flex', flexDirection: 'column' },
  experienceSection: { borderTop: '1px solid #302b29' }, timeline: { borderTop: '1px solid #302b29' }, experience: { padding: '24px 0', borderBottom: '1px solid #302b29', display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 30 }, experienceDate: { color: '#fff', fontWeight: 750, fontSize: 12, margin: '0 0 17px' },
  projectsSection: { background: '#080909', color: '#fff', padding: '96px max(40px, calc((100vw - 1160px) / 2))', position: 'relative', zIndex: 1 }, projectsHead: { display: 'flex', justifyContent: 'space-between', gap: 30 }, lightLabel: { color: '#fff', fontWeight: 800, fontSize: 12, letterSpacing: '.1em' }, lightTitle: { fontSize: 'clamp(36px, 4.2vw, 60px)', letterSpacing: '-.06em', lineHeight: 1, margin: '20px 0 48px' }, projectTabs: { display: 'flex', gap: 12, borderBottom: '1px solid #ffffff2b' }, projectTab: { flex: 1, background: 'none', padding: '14px 0', color: '#fff', border: '0 solid transparent', borderBottomWidth: 2, textAlign: 'left', cursor: 'pointer', fontSize: 16, fontWeight: 750 }, featuredProject: { background: '#181413', padding: '44px 48px', marginTop: 34, borderLeft: '5px solid var(--project-color)', display: 'grid', gridTemplateColumns: '1.2fr .8fr', minHeight: 350 }, projectTag: { color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }, projectGraphic: { display: 'grid', placeItems: 'center', position: 'relative', color: 'var(--project-color)', fontSize: 72 }, orbit: { position: 'absolute', width: 175, height: 175, border: '1px solid var(--project-color)', borderRadius: '50%', opacity: .55 },
  contactSection: { maxWidth: 1240, margin: '0 auto', padding: '100px 40px 28px', position: 'relative', zIndex: 1 }, contactTitle: { fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: '-.07em', lineHeight: .98, margin: '22px 0 30px' }, email: { color: '#fff', fontSize: 'clamp(18px, 2.1vw, 27px)', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #c4513e' }, contactLinks: { display: 'flex', gap: 24, marginTop: 26 }, socialLink: { color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 750, borderBottom: '1px solid #c4513e', paddingBottom: 4 }, footerRow: { display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #302b29', marginTop: 100, paddingTop: 22, color: '#fff', fontSize: 13 },
};

const responsiveStyles = `
  * { box-sizing: border-box; } html { scroll-behavior: smooth; } body { margin: 0; background: #0b0c0b; } button, a { font-family: inherit; } .ambient-graphics { position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; } .graphic-ring { position: absolute; border: 1px solid #c4513e; border-radius: 50%; opacity: .32; } .ring-one { width: 44vw; height: 44vw; top: -20vw; right: -13vw; box-shadow: 0 0 90px #c4513e2e; } .ring-two { width: 27vw; height: 27vw; bottom: 9%; left: -13vw; border-width: 14px; opacity: .12; } .graphic-line { position: absolute; height: 1px; width: 30vw; background: linear-gradient(90deg, transparent, #d96c55, transparent); opacity: .45; transform: rotate(-35deg); } .line-one { top: 27%; right: -8%; } .line-two { bottom: 18%; left: -12%; } .graphic-diamond { position: absolute; top: 47%; right: 8%; width: 18px; height: 18px; border: 1px solid #d96c55; transform: rotate(45deg); box-shadow: 0 0 24px #d96c5588; } nav { display: flex; gap: 26px; } nav button { border: 0; background: none; color: #fff; cursor: pointer; font-size: 13px; font-weight: 650; } nav button:hover, .footerRow a:hover { color: #fff; text-decoration: underline; } .largeStatement span { color: #fff; } .quickFacts strong { display: block; font-size: 28px; letter-spacing: -.06em; } .quickFacts small { color: #fff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; } .sectionHeading > span { color: #fff; font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; } .sectionHeading h2 { font-size: clamp(36px, 4vw, 56px); line-height: 1; letter-spacing: -.06em; margin: 19px 0 0; } .skillCard h3 { margin: auto 0 8px; font-size: 21px; letter-spacing: -.04em; } .skillCard p, .experience p, .projectsHead > p { color: #fff; line-height: 1.6; margin: 0; font-size: 14px; } .experience h3 { font-size: 18px; margin: 0 0 5px; letter-spacing: -.03em; } .experience h4 { font-size: 14px; font-weight: 500; color: #fff; margin: 0; } .projectsHead > p { max-width: 260px; padding-top: 28px; color: #fff; } .featuredProject h3 { margin: 20px 0 2px; font-size: clamp(38px, 5vw, 64px); letter-spacing: -.07em; } .featuredProject h4 { color: #fff; font-size: 17px; margin: 0 0 22px; } .featuredProject ul { padding: 0; margin: 0; list-style: none; max-width: 590px; } .featuredProject li { color: #fff; padding: 8px 0 8px 17px; position: relative; font-size: 14px; line-height: 1.5; } .featuredProject li:before { content: '•'; position: absolute; left: 0; color: #c4513e; } .footerRow a { margin-left: 22px; color: #fff; text-decoration: none; font-weight: 700; } @media (max-width: 760px) { .nav { display: none; position: absolute; top: 74px; left: 20px; right: 20px; background: #171312; padding: 18px; flex-direction: column; gap: 15px; box-shadow: 0 10px 30px #00000088; z-index: 10; } .nav-open { display: flex; } .menuButton { display: block !important; } .hero { margin-top: 0 !important; padding: 32px 28px 70px !important; grid-template-columns: 1fr !important; gap: 48px !important; } .header { padding: 20px 28px !important; } .portraitWrap { width: 270px !important; } .availability { left: -18px !important; } .introBand, .section { padding: 68px 28px !important; display: block !important; } .sectionNumber { display: block; margin-bottom: 22px; } .quickFacts { display: flex; gap: 28px; margin-top: 32px; } .sectionHeading { margin-bottom: 36px; } .skillGrid { grid-template-columns: 1fr !important; } .experience { grid-template-columns: 1fr !important; gap: 16px !important; } .projectsSection { padding: 68px 28px !important; } .projectsHead { display: block !important; } .projectsHead > p { padding: 0 0 30px !important; } .featuredProject { padding: 32px 26px !important; grid-template-columns: 1fr !important; } .projectGraphic { min-height: 160px; } .contactSection { padding: 70px 28px 24px !important; } .footerRow { margin-top: 70px !important; display: block !important; } .footerRow div { margin-top: 13px; } .footerRow a { margin-left: 0; margin-right: 20px; } .ring-one { width: 95vw; height: 95vw; top: -30vw; right: -45vw; } .ring-two { width: 70vw; height: 70vw; left: -36vw; } }
`;

export default App;
