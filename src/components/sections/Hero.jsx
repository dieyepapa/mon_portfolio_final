import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const SOCIALS = [
  { href: 'https://github.com/dieyepapa/projet-eventfy',   icon: <FaGithub size={16}/>,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/analytics/creator/top-posts/?endDate=2026-04-29&metricType=IMPRESSIONS&startDate=2026-04-23&timeRange=past_7_days', icon: <FaLinkedin size={16}/>, label: 'LinkedIn' },
  //{ href: 'https://twitter.com/USERNAME',  icon: <FaTwitter size={16}/>,  label: 'Twitter' },
  //{ href: 'mailto:EMAIL@email.com',        icon: <FaEnvelope size={16}/>, label: 'Email' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '68px' }}
    >
      {/* Backgrounds */}
      <div className="grid-bg" />
      <div
        className="blue-glow"
        style={{ width: 700, height: 700, top: '-10%', left: '-10%', opacity: 0.6 }}
      />
      <div
        className="blue-glow"
        style={{ width: 400, height: 400, bottom: '5%', right: '10%', opacity: 0.3 }}
      />

      <div className="container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">

          {/* ── LEFT ── */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">

            

            {/* Name */}
            <h1 className="a2 t-xl mb-4">
              Abdoulaye<br />
              <span className="accent">DIEYE</span>
            </h1>

            

            {/* Blue rule */}
            <div className="a3 blue-line mb-6 mx-auto lg:mx-0" />

            {/* Description */}
            <p className="a4 mb-5 text-[15px] font-light leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
              Passionné par les technologies innovantes, je transforme des idées en solutions
              robustes et scalables. Spécialisé en{' '}
              <span style={{ color: 'var(--blue-light)' }}>Intelligence Artificielle</span>{' '}
              et Systeme d'Information.
            </p>

            {/* Meta */}
            <div className="a4 flex flex-wrap gap-5 mb-8 justify-center lg:justify-start">
              {[
                { icon: <FaMapMarkerAlt size={11}/>, text: 'Bambey, Sénégal' },
                { icon: <FaGraduationCap size={11}/>, text: 'UADB — Master SI' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[13px]" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--blue)' }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="a5 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#contact" className="btn-blue">Me contacter</a>
              <a href="/documents/monCV.pdf" download className="btn-outline">
                <FaDownload size={11} /> Télécharger CV
              </a>
            </div>

            {/* Socials */}
            <div className="a6 flex gap-3 justify-center lg:justify-start">
              {SOCIALS.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg no-underline transition-all duration-200"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--blue)'; e.currentTarget.style.color='var(--blue)'; e.currentTarget.style.background='var(--blue-glow)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.background='transparent'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Avatar ── */}
          <div className="a7 flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full pointer-events-none" style={{ border: '1px solid var(--blue-border)' }} />

              {/* Photo */}
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden" style={{ border: '3px solid var(--blue)' }}>
                <img
                  src="/assets/profile.png"
                  alt="Abdoulaye DIEYE"
                  className="w-full h-full object-cover"
                  onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=Abdoulaye+DIEYE&background=1e293b&color=3b82f6&size=288'; }}
                />
              </div>

              
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="grid grid-cols-3 divide-x mt-20 pt-10"
          style={{ borderTop: '1px solid var(--border)', borderColor: 'var(--border)', '--tw-divide-opacity': 1 }}
        >
          {[
            { value: '5', sup: '+',  label: 'Projets réalisés' },
            { value: '4', sup: '',   label: 'Années de formation' },
            { value: '100', sup: '%', label: 'Satisfaction client' },
          ].map(s => (
            <div key={s.label} className="text-center py-6 px-4" style={{ borderColor: 'var(--border)' }}>
              <div className="stat-num mb-1">
                {s.value}<sup>{s.sup}</sup>
              </div>
              <div className="eyebrow" style={{ color: 'var(--text-faint)', letterSpacing: '2px', fontSize: '10px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}