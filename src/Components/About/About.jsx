import React from 'react';
import './About.css';

const About = () => {
  const aboutSections = [
    {
      title: 'Our Mission',
      description: 'To empower businesses through innovative IT solutions, driving digital transformation and growth.',
      icon: '🚀'
    },
    {
      title: 'Our Vision',
      description: 'To be the leading IT partner for businesses, known for our expertise, reliability, and cutting-edge solutions.',
      icon: '👁️'
    },
    {
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and customer-centricity guide everything we do.',
      icon: '💎'
    },
    {
      title: 'Our Team',
      description: 'A diverse group of passionate tech experts dedicated to solving complex IT challenges.',
      icon: '👥'
    },
    {
      title: 'Our Approach',
      description: 'We combine industry best practices with tailored strategies to meet each client.',
      icon: '🔧'
    },
    {
      title: 'Our Commitment',
      description: 'Delivering high-quality solutions on time and within budget, every single time.',
      icon: '🤝'
    }
  ];

  return (
    <div id='about-background'>
      <div className="about-page">
        <header className="about-header">
          <h1>About Manoj IT Solutions</h1>
          <p>Empowering Businesses Through Technology</p>
        </header>
        <div className="about-grid">
          {aboutSections.map((section, index) => (
            <div key={index} className="about-card">
              <div className="about-icon">{section.icon}</div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <section className="about-cta-section">
          <h2>Want to know more about us?</h2>
          <p>Discover how we can transform your business</p>
          <button className="about-cta-button">Learn More</button>
        </section>
      </div>
    </div>
  );
};

export default About;