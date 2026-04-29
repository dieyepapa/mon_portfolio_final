import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 1, 
    title: 'SUNU-LAB', 
    category: 'Web',
    short: 'Laboratoire virtuel SVT — classes de 3ème',
    image: '/assets/projects/sunulab.png',
    color: '#1d4ed8',
    techs: ['Laravel', 'Vue.js', 'Three.js', 'MySQL', 'Tailwind'],
    desc: 'Plateforme éducative avec simulations 3D interactives, tableau de bord enseignant et suivi progressif des élèves.',
    fullDescription: 'SUNU-LAB est un laboratoire virtuel innovant destiné aux élèves de 3ème au Sénégal. La plateforme permet de réaliser des expériences scientifiques en 3D, offre un tableau de bord pour les enseignants avec suivi individualisé, et intègre des notifications en temps réel pour maintenir l\'engagement des apprenants. Développé avec Laravel et Vue.js, l\'application utilise Three.js pour les simulations 3D immersives.',
    features: ['Simulations 3D interactives', 'Dashboard enseignant', 'Notifications temps réel', 'Suivi progressif élève'],
    github: 'https://github.com/dieyepapa/sunu-lab', 
    demo: '/videos/sunulab.webm',
  },
  {
    id: 2, 
    title: 'AgroSense', 
    category: 'Mobile',
    short: 'Connecte investisseurs & agriculteurs via blockchain',
    image: '/assets/projects/agro.png',
    color: '#059669',
    techs: ['Flutter', 'Hedera Hashgraph', 'Dart'],
    desc: 'Application mobile sécurisée reliant investisseurs et agriculteurs sénégalais avec transactions blockchain.',
    fullDescription: 'AgroSense est une application mobile qui révolutionne le financement agricole au Sénégal. Elle connecte directement les investisseurs aux agriculteurs locaux via la technologie blockchain Hedera Hashgraph. Les transactions sont transparentes, sécurisées et traçables. L\'interface intuitive développée avec Flutter permet aux agriculteurs de présenter leurs projets et aux investisseurs de suivre l\'impact de leurs financements en temps réel.',
    features: ['Transactions blockchain sécurisées', 'Interface utilisateur intuitive', 'Recherche avancée de projets', 'Suivi des investissements en temps réel'],
    github: 'https://github.com/abdoulaye-dieye/agrosense', 
    demo: '/videos/agro.webm',
  },
];

const CATS = ['Tous', 'Web', 'Mobile'];

export default function Projects() {
  const [filter, setFilter] = useState('Tous');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'Tous' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">

        {/* Header */}
        <div className="mb-14">
          <p className="eyebrow mb-3">Réalisations</p>
          <h2 className="t-lg mb-4">
            Projets <span className="accent">sélectionnés</span>
          </h2>
          <div className="blue-line" />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                background: filter === c ? 'var(--blue)' : 'transparent',
                color: filter === c ? '#fff' : 'var(--text-muted)',
                border: '1px solid',
                borderColor: filter === c ? 'var(--blue)' : 'var(--border)',
                borderRadius: 6,
                padding: '8px 20px',
                fontFamily: 'var(--f-mono)',
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div
                key={p.id}
                className="proj-card"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelected(p)}
              >
                {/* Thumbnail */}
                <div className="proj-thumb relative" style={{ aspectRatio: '16/9', background: 'var(--bg-2)' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="proj-img w-full h-full object-cover"
                    onError={e => { e.target.src = 'https://placehold.co/600x400/1a1d29/3b82f6?text=' + p.title; }}
                  />
                  {/* Color accent top */}
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: p.color }} />
                  {/* Overlay */}
                  <div className="proj-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8,10,15,0.95) 0%, rgba(8,10,15,0.5) 45%, transparent 75%)',
                    opacity: 0,
                    transition: 'opacity 0.35s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                    <p className="eyebrow mb-1" style={{ color: 'var(--blue-light)', fontSize: 10 }}>{p.category}</p>
                    <h3 className="text-[20px] font-bold" style={{ fontFamily: 'var(--f-display)', color: '#fff' }}>{p.title}</h3>
                    <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-[12px]"
                      style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>
                      ↗
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-[18px] font-bold mb-1" style={{ fontFamily: 'var(--f-display)', color: 'var(--text)' }}>
                        {p.title}
                      </h3>
                      <p className="text-[13px] font-light" style={{ color: 'var(--text-muted)' }}>{p.short}</p>
                    </div>
                    <span className="tag flex-shrink-0">{p.category}</span>
                  </div>

                  {/* Description détaillée */}
                  <div className="mb-4 p-3 rounded-lg" style={{ 
                    background: 'var(--bg-2)', 
                    borderLeft: `3px solid ${p.color}`,
                    borderRadius: '0 8px 8px 0'
                  }}>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {p.fullDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.techs.slice(0, 4).map(t => <span key={t} className="tag-muted">{t}</span>)}
                    {p.techs.length > 4 && <span className="tag-muted">+{p.techs.length - 4}</span>}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline py-2 px-4 text-[11px]" 
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub size={12} /> Code
                    </a>
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-blue py-2 px-4 text-[11px]" 
                      onClick={e => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={10} /> Démo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div 
          className="modal-bg" 
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(8,10,15,0.9)',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer',
          }}
        >
          <div 
            className="modal-box" 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--bg-2)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: 12,
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                cursor: 'pointer',
                border: 'none',
                background: 'var(--bg-3)',
                color: 'var(--text-muted)',
                zIndex: 10,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FaTimes size={12} />
            </button>

            <div className="h-1 -mx-9 -mt-9 mb-8 rounded-t-2xl" style={{ background: selected.color, height: 4, marginLeft: -32, marginRight: -32, marginTop: -32, borderRadius: '12px 12px 0 0' }} />

            <div style={{ padding: '32px' }}>
              <p className="eyebrow mb-2">{selected.category}</p>
              <h3 className="t-sm mb-1" style={{ fontFamily: 'var(--f-display)', fontSize: 24, fontWeight: 600 }}>{selected.title}</h3>
              <div className="blue-line mb-5" style={{ width: 40, height: 2, background: 'var(--blue)', marginTop: 8 }} />
              <p className="text-[14px] font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{selected.desc}</p>

              <p className="eyebrow mb-3" style={{ color: 'var(--text-faint)' }}>Fonctionnalités</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {selected.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--blue)' }}>→</span> {f}
                  </div>
                ))}
              </div>

              <p className="eyebrow mb-3" style={{ color: 'var(--text-faint)' }}>Stack technique</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.techs.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <div className="flex gap-4">
                <a 
                  href={selected.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline flex items-center gap-2"
                >
                  <FaGithub size={13} /> Code source
                </a>
                <a 
                  href={selected.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-blue flex items-center gap-2"
                >
                  <FaExternalLinkAlt size={11} /> Voir la démo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}