// ─── Footer.jsx ──────────────────────────────────────────────
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer"
      style={{ background: '#040507', borderTop: '0.5px solid rgba(240,236,228,0.06)' }}
    >
      <div className="flex items-center gap-3">
        <span
          className="font-display text-[18px] font-bold"
          style={{ color: '#f0ece4' }}
        >
          &lt;<span style={{ color: 'rgb(76, 149, 201)' }}>AD</span>/&gt;
        </span>
        <span
          className="text-[11px] uppercase tracking-[2px]"
          style={{ color: '#55524c' }}
        >
          © {year} Abdoulaye DIEYE
        </span>
      </div>

      <div className="flex items-center gap-3">
        {[
          { href: '#', icon: <FaGithub size={15} />,   label: 'GitHub' },
          { href: '#', icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
          { href: '#', icon: <FaTwitter size={15} />,  label: 'Twitter' },
          { href: '#', icon: <FaEnvelope size={15} />, label: 'Email' },
        ].map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="w-8 h-8 flex items-center justify-center rounded-[2px] no-underline transition-all duration-200"
            style={{ color: '#55524c' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = '#55524c'}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;