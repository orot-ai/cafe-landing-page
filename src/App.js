import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'about', 'location', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { name: '아메리카노', price: '4,500', desc: '깊고 진한 에스프레소의 정통 맛', category: 'coffee', badge: 'BEST' },
    { name: '카페라떼', price: '5,000', desc: '부드러운 우유와 에스프레소의 조화', category: 'coffee' },
    { name: '카푸치노', price: '5,000', desc: '풍성한 우유 거품의 클래식', category: 'coffee' },
    { name: '바닐라라떼', price: '5,500', desc: '달콤한 바닐라 시럽의 향연', category: 'coffee', badge: 'NEW' },
    { name: '카라멜 마키아토', price: '5,800', desc: '달콤한 카라멜과 에스프레소', category: 'coffee' },
    { name: '콜드브루', price: '5,000', desc: '24시간 우려낸 부드러운 커피', category: 'coffee', badge: 'HOT' }
  ];

  const features = [
    { 
      icon: (
        <svg className="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ), 
      title: '프리미엄 원두', 
      desc: '세계 각지의 스페셜티 커피',
      color: 'gradient-1'
    },
    { 
      icon: (
        <svg className="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ), 
      title: '신선한 재료', 
      desc: '매일 아침 신선한 재료 준비',
      color: 'gradient-2'
    },
    { 
      icon: (
        <svg className="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ), 
      title: '아늑한 공간', 
      desc: '편안하고 따뜻한 분위기',
      color: 'gradient-3'
    },
    { 
      icon: (
        <svg className="feature-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ), 
      title: '무료 와이파이', 
      desc: '빠른 인터넷과 충전 공간',
      color: 'gradient-4'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">☕</span>
            <span className="logo-text">Café Bliss</span>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); setIsMenuOpen(false); }}
              >
                홈
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={activeSection === 'menu' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('menu'); setIsMenuOpen(false); }}
              >
                메뉴
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsMenuOpen(false); }}
              >
                소개
              </a>
            </li>
            <li>
              <a 
                href="#location" 
                className={activeSection === 'location' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('location'); setIsMenuOpen(false); }}
              >
                위치
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsMenuOpen(false); }}
              >
                연락처
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge animate-on-scroll">Premium Coffee Experience</span>
          <h1 className="hero-title animate-on-scroll">
            <span className="title-line">Welcome to</span>
            <span className="title-line gradient-text">Café Bliss</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">당신의 일상에 특별한 커피 한 잔</p>
          <div className="hero-buttons animate-on-scroll">
            <button className="cta-button primary" onClick={() => scrollToSection('menu')}>
              <span>메뉴 보기</span>
              <svg className="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('about')}>
              우리의 이야기
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card animate-on-scroll ${feature.color}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">MENU</span>
            <h2 className="section-title">Our Signature Coffee</h2>
            <p className="section-subtitle">신선한 원두로 만든 특별한 커피</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                {item.badge && <span className={`menu-badge badge-${item.badge.toLowerCase()}`}>{item.badge}</span>}
                <div className="menu-content">
                  <div className="menu-header">
                    <h3 className="menu-name">{item.name}</h3>
                    <div className="menu-price-wrapper">
                      <span className="menu-price">₩{item.price}</span>
                    </div>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                  <button className="menu-order-btn">
                    주문하기
                    <svg className="order-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <span className="section-badge">ABOUT US</span>
              <h2 className="section-title">Our Story</h2>
              <p>
                Café Bliss는 2020년에 시작된 스페셜티 커피 전문점입니다. 
                우리는 세계 각지에서 엄선한 최고급 원두만을 사용하여 
                매일 신선한 커피를 제공합니다.
              </p>
              <p>
                바리스타들의 정성과 전문성으로 만들어지는 한 잔의 커피는 
                당신의 하루를 더욱 특별하게 만들어 드릴 것입니다.
              </p>
              <div className="about-stats">
                <div className="stat animate-on-scroll">
                  <div className="stat-number" data-target="10">0</div>
                  <span className="stat-suffix">+</span>
                  <p>커피 종류</p>
                </div>
                <div className="stat animate-on-scroll">
                  <div className="stat-number" data-target="5000">0</div>
                  <span className="stat-suffix">+</span>
                  <p>행복한 고객</p>
                </div>
                <div className="stat animate-on-scroll">
                  <div className="stat-number" data-target="4.9">0.0</div>
                  <span className="stat-suffix">★</span>
                  <p>평점</p>
                </div>
              </div>
            </div>
            <div className="about-image animate-on-scroll">
              <div className="image-wrapper">
                <div className="image-placeholder">
                  <span className="coffee-icon">☕</span>
                </div>
                <div className="image-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="location">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">LOCATION</span>
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">편안한 공간에서 특별한 커피를 즐기세요</p>
          </div>
          <div className="location-content">
            <div className="location-info">
              <div className="info-item animate-on-scroll">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3>주소</h3>
                  <p>서울시 강남구 테헤란로 123<br />카페블리스 빌딩 1층</p>
                </div>
              </div>
              <div className="info-item animate-on-scroll">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3>영업시간</h3>
                  <p>월-금: 07:00 - 22:00<br />
                     토-일: 09:00 - 23:00</p>
                </div>
              </div>
              <div className="info-item animate-on-scroll">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3>전화</h3>
                  <p>02-1234-5678</p>
                </div>
              </div>
            </div>
            <div className="map-placeholder animate-on-scroll">
              <div className="map-overlay">
                <div className="map-content">
                  <svg className="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                  <p>지도가 여기 표시됩니다</p>
                  <button className="map-button">지도 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">CONTACT</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">문의사항이 있으시면 언제든 연락주세요</p>
          </div>
          <form className="contact-form animate-on-scroll">
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder=" " className="form-input" required />
                <label className="input-label">이름</label>
              </div>
              <div className="input-group">
                <input type="email" placeholder=" " className="form-input" required />
                <label className="input-label">이메일</label>
              </div>
            </div>
            <div className="input-group">
              <textarea placeholder=" " rows="5" className="form-textarea" required></textarea>
              <label className="textarea-label">메시지를 입력하세요</label>
            </div>
            <button type="submit" className="submit-button">
              <span>메시지 보내기</span>
              <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Café Bliss</h3>
              <p>당신의 일상에 특별한 커피 한 잔</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#menu">메뉴</a></li>
                <li><a href="#about">소개</a></li>
                <li><a href="#location">위치</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📞 02-1234-5678<br />
                 ✉️ info@cafebliss.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Café Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;