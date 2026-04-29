import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sections
import Hero       from './components/sections/Hero';
import Skills     from './components/sections/Skills';
import Projects   from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact    from './components/sections/Contact';

// IA (chatbot — garde ton composant existant)
import Chatbot from './components/ia/Chatbot';

/* ════════════════════════════════
   LOADER
════════════════════════════════ */
function Loader() {
  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-5"
      style={{ background: 'var(--bg)' }}
    >
      <span
        style={{
          fontFamily: 'var(--f-display)',
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.5px',
        }}
      >
        &lt;AD<span style={{ color: 'var(--blue)' }}>.</span>/&gt;
      </span>

      {/* Progress bar */}
      <div
        className="w-16 rounded-full overflow-hidden"
        style={{ height: 3, background: 'var(--bg-2)' }}
      >
        <div
          className="h-full rounded-full"
          style={{ background: 'var(--blue)', animation: 'load 1.2s ease-in-out infinite' }}
        />
      </div>

      <style>{`
        @keyframes load {
          0%   { width: 0%;   margin-left: 0; }
          50%  { width: 100%; margin-left: 0; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}

/* ════════════════════════════════
   SCROLL TO TOP
════════════════════════════════ */
function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 50,
            width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 8, border: '1px solid var(--blue-border)',
            background: 'var(--bg-2)', color: 'var(--blue)',
            cursor: 'pointer', fontSize: 16,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.color = 'var(--blue)'; }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ════════════════════════════════
   APP
════════════════════════════════ */
export default function App() {
  const [loading, setLoading]   = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Header />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* ── Chatbot FAB ── */}
      <motion.button
        onClick={() => setShowChat(!showChat)}
        style={{
          position: 'fixed', bottom: 24, left: 24, zIndex: 50,
          width: 52, height: 52,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: 22,
          background: showChat ? 'var(--bg-3)' : 'var(--blue)',
          boxShadow: '0 4px 20px rgba(59,130,246,0.4)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {showChat ? '✕' : '💬'}
      </motion.button>

      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 80, scale: 0.9 }}
            style={{
              position: 'fixed', bottom: 88, left: 24, zIndex: 50,
              width: 'min(90vw, 384px)', height: 520,
            }}
          >
            <Chatbot onClose={() => setShowChat(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollTop />
    </div>
  );
}