import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import feather from 'feather-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeProcessIdx, setActiveProcessIdx] = useState(0);

  useEffect(() => {
    // Fetch data from FastAPI backend (Relative URL for Vercel)
    axios.get('/api/portfolio/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error("Error fetching portfolio data:", error));
  }, []);

  useEffect(() => {
    if (data) {
      AOS.init({ duration: 800, once: true });
      feather.replace();

      // Custom Cursor Logic
      const cursorDot = document.querySelector('.cursor-dot');
      const cursorOutline = document.querySelector('.cursor-outline');

      if (window.matchMedia("(hover: hover)").matches) {
        const moveCursor = (e) => {
          const posX = e.clientX;
          const posY = e.clientY;
          if(cursorDot) {
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
          }
          if(cursorOutline) {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
          }

          const target = e.target;
          if (target.matches('a, button, img, .swiper-slide, .pdf-card, span')) {
            document.body.classList.add('hovering');
          } else {
            document.body.classList.remove('hovering');
          }
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
      }
    }
  }, [data, activeProjectIdx, activeProcessIdx]);

  // Prevent context menu and shortcuts (Ported from original)
  useEffect(() => {
    const disableContext = (e) => e.preventDefault();
    const disableShortcuts = (e) => {
      if (e.keyCode === 123) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) return false;
      if (e.ctrlKey && e.keyCode === 'S'.charCodeAt(0)) return false;
    };
    const blurWindow = () => { document.body.style.filter = 'blur(50px)'; };
    const focusWindow = () => { document.body.style.filter = 'none'; };

    document.addEventListener('contextmenu', disableContext);
    document.addEventListener('keydown', disableShortcuts);
    window.addEventListener('blur', blurWindow);
    window.addEventListener('focus', focusWindow);

    return () => {
      document.removeEventListener('contextmenu', disableContext);
      document.removeEventListener('keydown', disableShortcuts);
      window.removeEventListener('blur', blurWindow);
      window.removeEventListener('focus', focusWindow);
    }
  }, []);

  if (!data) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat' }}>Loading Designer Portfolio...</div>;
  }

  const { profile, projects, creative_archive, social_posts, illustrations, experience, education, skills } = data;

  const swiperOptions = {
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: {
      320: { spaceBetween: 20 },
      900: { spaceBetween: 40 }
    }
  };

  const processTabs = [
    { title: 'Social Media Strategy', data: social_posts, id: 'social', desc: 'Curating digital narratives & brand aesthetics.' },
    { title: 'Process & Illustration', data: illustrations, id: 'process', desc: 'Sketches · Draping · Moodboards' },
    { title: 'The Archive', data: creative_archive, id: 'archive', desc: 'Moments · Awards · Behind the Scenes' }
  ];

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      <nav className="navbar">
        <div className="nav-logo">Designer Portfolio</div>
        <div className="nav-links">
          <a href="#projects" className="nav-link">Work</a>
          <a href="#career" className="nav-link">Career</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="scroll-hint">
          <span className="scroll-line"></span> Scroll
        </div>
        <div className="hero-text" data-aos="fade-right">
          <div className="status-badge">
            <div className="status-dot"></div> Open to work
          </div>
          <h1 className="hero-title">
            {profile.name} <span>{profile.last_name}</span>
          </h1>
          <div className="hero-degree">{profile.degree}</div>
          <p className="hero-desc">{profile.tagline}</p>
          <div className="hero-btn-group">
            <a href="https://drive.google.com/drive/folders/1f3tEgkof2UsC7AdSPbIoqPTLoUFGhxQK" target="_blank" rel="noreferrer" className="btn-hero curvy-btn">Explore Portfolio</a>
            <a href="https://drive.google.com/drive/folders/1aGd0VNZAbaqyVDzupmIkRzwlgtEbY0sE" target="_blank" rel="noreferrer" className="btn-hero curvy-btn">View Resume</a>
          </div>
        </div>
        <div className="hero-img-wrap" data-aos="fade-left">
          <div className="hero-img">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </div>
      </header>

      <section id="projects" className="section-pad project-section">
        <div className="container">
          <div className="sec-head-wrap text-center">
            <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--text-main)', position: 'relative', zIndex: 1 }}>
              Selected Works
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Fashion · Design · Craft
            </p>
          </div>

          <div className="project-card fade-in" key={activeProjectIdx}>
            <div className="project-header" style={{ marginBottom: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <h3 className="project-title">{projects[activeProjectIdx].title}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', letterSpacing: '1px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                  {projects[activeProjectIdx].category} | {projects[activeProjectIdx].year}
                </p>
                <p style={{ fontSize: '0.95rem', marginTop: '0.8rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.6 }}>
                  {projects[activeProjectIdx].desc}
                </p>
              </div>
              {projects[activeProjectIdx].award && (
                <div style={{ fontSize: '1.2rem', color: 'var(--maroon)', fontFamily: 'Playfair Display', fontStyle: 'italic', textAlign: 'right', whiteSpace: 'nowrap' }}>
                  {projects[activeProjectIdx].award}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {projects.map((proj, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`curvy-btn ${activeProjectIdx === idx ? 'active-tab' : ''}`}
                  style={{
                    padding: '0.6rem 1.5rem',
                    fontSize: '0.75rem',
                    background: activeProjectIdx === idx ? 'var(--maroon)' : 'transparent',
                    color: activeProjectIdx === idx ? 'white' : 'var(--maroon)',
                    border: '1px solid var(--maroon)',
                    cursor: 'pointer',
                    transition: '0.3s',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            <div className="swiper-container-wrapper" style={{position: 'relative'}}>
              <Swiper 
                key={activeProjectIdx}
                modules={[Navigation, Autoplay]} 
                {...swiperOptions} 
                navigation={{ nextEl: `.swiper-next-btn`, prevEl: `.swiper-prev-btn` }} 
                className="mySwiper swiper"
              >
                {projects[activeProjectIdx].images.map((img, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <img src={img} alt="Project" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-nav-btn swiper-prev-btn"><i data-feather="chevron-left"></i></div>
              <div className="swiper-nav-btn swiper-next-btn"><i data-feather="chevron-right"></i></div>
            </div>
          </div>
        </div>
      </section>

      <section id="career" className="section-pad resume-section">
        <div className="container">
          <div className="sec-head-wrap text-center">
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-main)', position: 'relative', zIndex: 1, marginBottom: '0.5rem' }}>
              Career Timeline
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Education · Experience
            </p>
          </div>

          <h3 className="maroon-accent text-center" style={{ marginBottom: '3rem', fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '2rem' }}>
            Education
          </h3>
          <div className="timeline-wrap" style={{ marginBottom: '5rem' }}>
            <div className="timeline-line"></div>
            {education.map((edu, idx) => (
              <div data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} className={`timeline-block ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="org">{edu.school}</span>
                  <div className="role">{edu.degree}</div>
                  <span className="date">{edu.year}</span>
                  <p style={{ color: 'var(--text-main)', marginTop: '0.5rem' }}>{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="maroon-accent text-center" style={{ marginBottom: '3rem', fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '2rem' }}>
            Experience
          </h3>
          <div className="timeline-wrap">
            <div className="timeline-line"></div>
            {experience.map((job, idx) => (
              <div data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} className={`timeline-block ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="org">{job.org}</span>
                  <div className="role">{job.role}</div>
                  <span className="date">{job.date}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad skills-section">
        <div className="container">
          <div className="sec-head-wrap text-center">
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-main)', position: 'relative', zIndex: 1, marginBottom: '0.5rem' }}>
              Technical Proficiency
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Tools · Craft · Strategy
            </p>
          </div>
          <div className="skills-layout">
            <div className="skills-intro-text" data-aos="fade-right">
              <h3>Crafting with<br /><em style={{ color: 'var(--maroon)' }}>purpose</em> &amp;<br />precision.</h3>
              <p style={{ marginTop: '1.5rem' }}>
                From draping fabric to directing digital campaigns — a blend of traditional craftsmanship and modern design strategy.
              </p>
            </div>
            <div className="skills-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
              {Object.entries(skills).map(([category, items], idx) => (
                <div className="skill-group-glass" data-aos="fade-up" key={idx}>
                  <div className="skill-watermark">{category}</div>
                  <h4 style={{ position: 'relative', zIndex: 2, fontSize: '1.5rem', color: 'var(--maroon)', marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Playfair Display', fontStyle: 'italic', letterSpacing: '1px' }}>{category}</h4>
                  <div className="skill-list-glass">
                    {items.map((skill, sIdx) => (
                      <span key={sIdx} className="glass-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad process-archive-section">
        <div className="container">
          <div className="sec-head-wrap text-center">
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-main)', position: 'relative', zIndex: 1, marginBottom: '0.5rem' }}>
              Media &amp; Process
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
              Digital Narratives · Sketches · The Archive
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {processTabs.map((tab, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveProcessIdx(idx)}
                className={`curvy-btn ${activeProcessIdx === idx ? 'active-tab' : ''}`}
                style={{
                  padding: '0.8rem 2rem',
                  fontSize: '0.8rem',
                  background: activeProcessIdx === idx ? 'var(--maroon)' : 'transparent',
                  color: activeProcessIdx === idx ? 'white' : 'var(--maroon)',
                  border: '1px solid var(--maroon)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="project-card fade-in" key={activeProcessIdx}>
            <div className="project-header" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '1rem' }}>
              <div>
                <h3 className="project-title">{processTabs[activeProcessIdx].title}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', letterSpacing: '1px' }}>
                  {processTabs[activeProcessIdx].desc}
                </p>
              </div>
            </div>

            <div className="swiper-container-wrapper" style={{position: 'relative'}}>
              <Swiper 
                key={`process-swiper-${activeProcessIdx}`}
                modules={[Navigation, Autoplay]} 
                {...swiperOptions} 
                navigation={{ nextEl: '.swiper-process-next', prevEl: '.swiper-process-prev' }} 
                className="swiper"
              >
                {processTabs[activeProcessIdx].data.map((item, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide">
                    <img src={item.img} alt={item.title || 'Portfolio Image'} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-nav-btn swiper-prev-btn swiper-process-prev"><i data-feather="chevron-left"></i></div>
              <div className="swiper-nav-btn swiper-next-btn swiper-process-next"><i data-feather="chevron-right"></i></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <h2 className="maroon-accent" style={{ fontSize: '3rem' }}>Let's Create Something.</h2>
          <div className="footer-links">
            <a href={profile.linkedin_url} target="_blank" rel="noreferrer" className="footer-icon">
              <i data-feather="linkedin"></i> {profile.name}
            </a>
            <a href={`mailto:${profile.email}`} className="footer-icon">
              <i data-feather="mail"></i> {profile.email}
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>&copy; 2026 {profile.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
