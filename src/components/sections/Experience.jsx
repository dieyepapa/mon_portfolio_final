import { useState, useEffect, useRef } from 'react';

// Icônes SVG personnalisées
const Icons = {
  location: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  arrow: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const EDUCATION = [
  {
    id: 1,
    degree: "Master 1 — Systèmes d'Information",
    school: 'Université Alioune Diop de Bambey (UADB)',
    period: 'en cours',
    location: 'Bambey, Sénégal',
    desc: "Spécialisation en IA et systèmes d'information avancés.",
    courses: ['Cloud Computing', 'Machine Learning', 'JEE', 'Spring boot', 'Flutter', 'Sécurité des SI'],
    highlights: ['Docker', 'Déploiement OpenShift'],
  },
  {
    id: 2,
    degree: "Licence — Développement d'Applications",
    school: 'Université Alioune Diop de Bambey (UADB)',
    period: '2022 — 2025',
    location: 'Bambey, Sénégal',
    desc: 'Formation complète en développement fullstack et administration système.',
    courses: ['Web/Mobile', 'Bases de Données', 'Linux', 'Réseaux'],
    highlights: ['Labo virtuel SVT', 'Gestion d\'événements', 'Réservation hôtel'],
  },
];

const PROJECTS = [
  { id:1, title:'Prédiction Diabète IA', company:'Projet Recherche — UADB', period:'2026', desc:'Modèle ML avec 75% de précision, exposé via API REST.', techs:['Python','Scikit-learn'] },
  { id:3, title:'Géolocalisation Mobile',company:'Projet Mobile — UADB',     period:'2026', desc:'App Flutter de cartographie interactive avec localisation temps réel.', techs:['Flutter','Google Maps'] },
  { id:4, title:'Virtualisation OpenShift',company:'Projet Cloud — UADB',   period:'2026', desc:'Architecture 3-tiers sur OpenShift avec haute disponibilité.', techs:['OpenShift','Docker','K8s','MySQL'] },
  { id:5, title:'Déploiement Docker',    company:'Projet DevOps — UADB',     period:'2026', desc:'Containerisation complète avec Docker Compose, Nginx et PostgreSQL.', techs:['Docker','kubernetes','ansible','jenkins', 'PostgreSQL'] },
];

export default function Experience() {
  const [tab, setTab] = useState('education');

  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="container">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Mon parcours</p>
          <h2 className="t-lg mb-4">
            Formation & <span className="accent">Réalisations</span>
          </h2>
          <div className="blue-line" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12">
          <button
            onClick={() => setTab('education')}
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '10px 24px',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: tab === 'education' ? 'var(--blue)' : 'var(--border)',
              borderRadius: 6,
              background: tab === 'education' ? 'var(--blue)' : 'transparent',
              color: tab === 'education' ? '#fff' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >
            Formation
          </button>
          <button
            onClick={() => setTab('projects')}
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: 11,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '10px 24px',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: tab === 'projects' ? 'var(--blue)' : 'var(--border)',
              borderRadius: 6,
              background: tab === 'projects' ? 'var(--blue)' : 'transparent',
              color: tab === 'projects' ? '#fff' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >
            Projets académiques
          </button>
        </div>

        {/* Education Section */}
        {tab === 'education' && (
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((item) => (
              <div
                key={item.id}
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
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--f-display)',
                        fontSize: 18,
                        fontWeight: 700,
                        color: '#fff',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.degree}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: 11,
                        letterSpacing: '1px',
                        color: 'rgba(255,255,255,0.7)',
                        marginTop: 6,
                      }}
                    >
                      {item.school}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px 24px' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag" style={{ background: 'rgba(59,130,246,0.15)', borderColor: 'var(--blue-border)', color: 'var(--blue-light)' }}>
                      {item.period}
                    </span>
                    <span className="text-[11px] flex items-center gap-1" style={{ color: 'var(--text-faint)', fontFamily: 'var(--f-mono)' }}>
                      <span style={{ color: 'var(--blue)' }}>{Icons.location}</span>
                      {item.location}
                    </span>
                  </div>

                  <p className="text-[13px] font-light mb-5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>

                  <p className="eyebrow mb-3" style={{ color: 'var(--text-faint)', fontSize: 10 }}>Cours suivis</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.courses.map(c => (
                      <span key={c} className="pill" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
                        <span className="pill-dot" style={{ background: 'var(--blue)' }} />
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="eyebrow mb-3" style={{ color: 'var(--text-faint)', fontSize: 10 }}>Projets clés</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map(h => (
                      <span key={h} className="tag" style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'var(--blue-border)', color: 'var(--blue-light)' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {tab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((item) => (
              <div
                key={item.id}
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
                <div
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                    padding: '16px 20px',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--f-display)',
                          fontSize: 16,
                          fontWeight: 700,
                          color: '#fff',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--f-mono)',
                          fontSize: 10,
                          letterSpacing: '1px',
                          color: 'rgba(255,255,255,0.7)',
                          marginTop: 4,
                        }}
                      >
                        {item.company}
                      </p>
                    </div>
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        padding: '4px 10px',
                        borderRadius: 20,
                        fontSize: 10,
                        fontFamily: 'var(--f-mono)',
                        color: '#fff',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '16px 20px' }}>
                  <p className="text-[12px] font-light mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.techs.map(t => (
                      <span key={t} className="pill text-[10px]" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
                        <span className="pill-dot" style={{ background: 'var(--blue)' }} />
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--blue)', fontSize: 12, display: 'flex', alignItems: 'center' }}>
                      {Icons.arrow}
                    </span>
                    <span className="text-[11px] font-medium" style={{ color: 'var(--blue-light)', fontFamily: 'var(--f-mono)' }}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}