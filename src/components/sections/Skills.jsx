import { useEffect, useRef } from 'react';

// Icônes SVG personnalisées
const Icons = {
  backend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 15H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 9H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  ),
  frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7L9 9L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 7L15 9L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  devops: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7L3 12L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 7L21 12L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 18L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M19.07 4.93L16.24 7.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.76 16.24L4.93 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  database: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

const CATEGORIES = [
  {
    icon: Icons.backend,
    title: 'Backend',
    sub: 'Serveurs & APIs',
    skills: [
      { name: 'Spring Boot', desc: 'APIs REST, microservices, JWT' },
      { name: 'Laravel',     desc: 'APIs RESTful, Eloquent ORM' },
      { name: 'Python',      desc: 'FastAPI, Django, automatisation' },
      { name: 'Django',      desc: 'Framework full-stack Python' },
    ],
  },
  {
    icon: Icons.frontend,
    title: 'Frontend & Mobile',
    sub: 'Interfaces & UX',
    skills: [
      { name: 'React',       desc: 'Hooks, Redux, performance' },
      { name: 'Flutter',     desc: 'iOS, Android, cross-platform' },
      { name: 'Tailwind CSS',desc: 'Design system, responsive' },
      { name: 'TypeScript',  desc: 'Typage statique, scalable' },
    ],
  },
  {
    icon: Icons.devops,
    title: 'DevOps & Cloud',
    sub: 'Infra & Déploiement',
    skills: [
      { name: 'Docker',      desc: 'Conteneurisation, Compose' },
      { name: 'Kubernetes',  desc: 'Orchestration, scaling' },
      { name: 'CI/CD',       desc: 'GitHub Actions, GitLab CI' },
      { name: 'OpenShift',   desc: 'Cloud entreprise, 3-tiers' },
    ],
  },
  {
    icon: Icons.ai,
    title: 'Intelligence Artificielle',
    sub: 'Données & Modèles',
    skills: [
      { name: 'Machine Learning', desc: 'Classification, régression' },
      { name: 'NLP',              desc: 'Transformers, chatbots' },
      { name: 'Data Processing',  desc: 'Pandas, NumPy, visualisation' },
    ],
  },
  {
    icon: Icons.database,
    title: 'Bases de Données',
    sub: 'Stockage & Performance',
    skills: [
      { name: 'PostgreSQL', desc: 'SQL avancé, indexation' },
      { name: 'SQLite',    desc: 'Base de données locale' },
      { name: 'MySQL',      desc: 'Relationnelle, réplication' },

    ],
  },
];

const TOOLS = ['Git', 'GitHub', 'VSCode', 'Linux', 'Vercel'];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach(r => io.observe(r));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section-pad" style={{ background: 'var(--bg-2)' }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal mb-14">
          <p className="eyebrow mb-3">Expertise technique</p>
          <h2 className="t-lg mb-4">
            Ce que je <span className="accent">maîtrise</span>
          </h2>
          <div className="blue-line" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal d${i + 1}`}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--blue-border)',
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(59,130,246,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Blue gradient header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: 10,
                    flexShrink: 0,
                    color: 'white',
                  }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontSize: 16, fontWeight: 700,
                      color: '#ffffff', lineHeight: 1.2,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10, letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.65)',
                      marginTop: 3,
                    }}
                  >
                    {cat.sub}
                  </p>
                </div>
              </div>

              {/* Skills list */}
              <div style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {cat.skills.map((s, idx) => (
                    <div
                      key={s.name}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12,
                        padding: '12px 0',
                        borderBottom: idx < cat.skills.length - 1 ? '1px solid var(--border)' : 'none',
                      }}
                    >
                      {/* Blue dot */}
                      <span
                        style={{
                          width: 6, height: 6,
                          borderRadius: '50%',
                          background: 'var(--blue)',
                          flexShrink: 0,
                          marginTop: 6,
                          boxShadow: '0 0 6px rgba(59,130,246,0.5)',
                        }}
                      />
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>
                          {s.name}
                        </p>
                        <p style={{ fontSize: 11, fontWeight: 300, color: 'var(--text-faint)', marginTop: 2 }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="reveal d3 p-8 rounded-xl" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
          <p className="eyebrow mb-5" style={{ color: 'var(--text-faint)' }}>Outils du quotidien</p>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((t, i) => (
              <span key={t} className="pill">
                <span className="pill-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <div className="reveal d4 mt-14 text-center">
          <p
            className="text-[18px] font-light italic max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--f-display)' }}
          >
            "Je ne me contente pas d'apprendre des technologies —{' '}
            <span style={{ color: 'var(--blue-light)' }}>
              je les applique pour résoudre des problèmes concrets.
            </span>"
          </p>
        </div>

      </div>
    </section>
  );
}