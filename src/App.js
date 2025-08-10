import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { name: '아메리카노', price: '4,500', desc: '깊고 진한 에스프레소의 정통 맛' },
    { name: '카페라떼', price: '5,000', desc: '부드러운 우유와 에스프레소의 조화' },
    { name: '카푸치노', price: '5,000', desc: '풍성한 우유 거품의 클래식' },
    { name: '바닐라라떼', price: '5,500', desc: '달콤한 바닐라 시럽의 향연' },
    { name: '카라멜 마키아토', price: '5,800', desc: '달콤한 카라멜과 에스프레소' },
    { name: '콜드브루', price: '5,000', desc: '24시간 우려낸 부드러운 커피' }
  ];

  const features = [
    { icon: '☕', title: '프리미엄 원두', desc: '세계 각지의 스페셜티 커피' },
    { icon: '🌿', title: '신선한 재료', desc: '매일 아침 신선한 재료 준비' },
    { icon: '🏠', title: '아늑한 공간', desc: '편안하고 따뜻한 분위기' },
    { icon: '📶', title: '무료 와이파이', desc: '빠른 인터넷과 충전 공간' }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">☕ Café Bliss</div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>홈</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>메뉴</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>소개</a></li>
            <li><a href="#location" onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}>위치</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>연락처</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Café Bliss</h1>
          <p className="hero-subtitle">당신의 일상에 특별한 커피 한 잔</p>
          <button className="cta-button" onClick={() => scrollToSection('menu')}>
            메뉴 보기
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
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
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">신선한 원두로 만든 특별한 커피</p>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-card">
                <div className="menu-header">
                  <h3 className="menu-name">{item.name}</h3>
                  <span className="menu-price">₩{item.price}</span>
                </div>
                <p className="menu-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
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
                <div className="stat">
                  <h3>10+</h3>
                  <p>커피 종류</p>
                </div>
                <div className="stat">
                  <h3>5000+</h3>
                  <p>행복한 고객</p>
                </div>
                <div className="stat">
                  <h3>4.9</h3>
                  <p>평점</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>☕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="location">
        <div className="container">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">편안한 공간에서 특별한 커피를 즐기세요</p>
          <div className="location-content">
            <div className="location-info">
              <div className="info-item">
                <h3>📍 주소</h3>
                <p>서울시 강남구 테헤란로 123<br />카페블리스 빌딩 1층</p>
              </div>
              <div className="info-item">
                <h3>🕐 영업시간</h3>
                <p>월-금: 07:00 - 22:00<br />
                   토-일: 09:00 - 23:00</p>
              </div>
              <div className="info-item">
                <h3>📞 전화</h3>
                <p>02-1234-5678</p>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-content">
                <span>🗺️</span>
                <p>지도가 여기 표시됩니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">문의사항이 있으시면 언제든 연락주세요</p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="이름" className="form-input" />
              <input type="email" placeholder="이메일" className="form-input" />
            </div>
            <textarea placeholder="메시지를 입력하세요" rows="5" className="form-textarea"></textarea>
            <button type="submit" className="submit-button">메시지 보내기</button>
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
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
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