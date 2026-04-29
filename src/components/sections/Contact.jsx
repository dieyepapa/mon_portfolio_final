import { useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';

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

export default function Contact() {
  const ref = useReveal();

  const items = [
    { icon: <FaEnvelope size={15} />,     label: 'Email',       value: 'pvpvdieye10@gmail.com' },
    { icon: <FaPhone size={15} />,        label: 'Téléphone',   value: '+221 76 210 17 94' },
    { icon: <FaMapMarkerAlt size={15} />, label: 'Localisation', value: 'Bambey, Sénégal' },
  ];

  const socials = [
    { icon: <FaGithub size={15} />,   label: 'GitHub',    href: 'https://github.com/dieyepapa/projet-eventfy' },
    { icon: <FaLinkedin size={15} />, label: 'LinkedIn',  href: 'https://www.linkedin.com/analytics/creator/top-posts/?endDate=2026-04-29&metricType=IMPRESSIONS&startDate=2026-04-23&timeRange=past_7_days' },
    { icon: <FaTwitter size={15} />,  label: 'Twitter',   href: '#' },
    { icon: <FaGlobe size={15} />,    label: 'Portfolio', href: '#' },
  ];

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg)' }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="reveal mb-14">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="t-lg mb-4">
            Parlons de votre <span className="accent">projet</span>
          </h2>
          <div className="blue-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left — coordonnées */}
          <div className="reveal d1">
            <p className="text-[15px] font-light leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              Une idée, un projet, une opportunité de stage ?{' '}
              <span style={{ color: 'var(--text)' }}>Contactez-moi directement</span> — je réponds sous 24h.
            </p>

            {/* Contact items */}
            <div className="space-y-3 mb-8">
              {items.map(item =>
                item.href ? (
                  <a key={item.label} href={item.href} className="contact-card no-underline">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <p className="eyebrow mb-0.5" style={{ color: 'var(--text-faint)', fontSize: 10, letterSpacing: '1.5px' }}>
                        {item.label}
                      </p>
                      <p className="text-[14px]" style={{ color: 'var(--text)' }}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="contact-card">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <p className="eyebrow mb-0.5" style={{ color: 'var(--text-faint)', fontSize: 10, letterSpacing: '1.5px' }}>
                        {item.label}
                      </p>
                      <p className="text-[14px]" style={{ color: 'var(--text)' }}>{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg no-underline transition-all duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-glow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — CTA cards */}
          <div className="reveal d2 flex flex-col gap-5">

            {/* Open to work */}
            <div className="p-7 rounded-xl" style={{ background: 'var(--bg-2)', border: '1px solid var(--blue-border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="ping absolute inline-flex h-full w-full rounded-full opacity-50"
                    style={{ background: 'rgb(74, 131, 222)' }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ background: 'rgb(74, 104, 222)' }}
                  />
                </span>
                <span className="mono text-[11px] tracking-[2px] uppercase" style={{ color: 'rgb(74, 155, 222)' }}>
                  Disponible — Stage M2
                </span>
              </div>
              <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Je suis actuellement à la recherche d'un{' '}
                <span style={{ color: 'var(--text)' }}>stage pour mon Master 2</span>.
                N'hésitez pas à me contacter pour toute opportunité !
              </p>
            </div>

            {/* CTA */}
            <div
              className="p-8 rounded-xl text-center"
              style={{ background: 'var(--blue-glow)', border: '1px solid var(--blue-border)' }}
            >
              <p
                className="text-[19px] font-light italic mb-2"
                style={{ fontFamily: 'var(--f-display)', color: 'var(--blue-light)' }}
              >
                "Transformons vos idées en réalité numérique."
              </p>
              <p className="mono text-[11px] mb-6" style={{ color: 'var(--text-faint)' }}>
                Réponse garantie sous 24h
              </p>
              <a href="mailto:abdoulaye.dieye@uadb.edu.sn" className="btn-blue">
                <FaEnvelope size={11} /> Envoyez un email
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}