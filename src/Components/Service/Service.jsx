import React from 'react';
import './ServicePage.css';

const ServicePage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs.',
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'iOS and Android apps to reach your customers on any device.',
      icon: '📱'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your growing business.',
      icon: '☁️'
    },
    {
      title: 'IT Consulting',
      description: 'Expert advice to align your IT strategy with business goals.',
      icon: '💼'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions.',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights for informed decision-making.',
      icon: '📊'
    }
  ];

  return (
    <div id='mmm'>
    <div className="service-page">
    
      <header className="service-header">
        <h1>Our Services</h1>
        <p>Manoj IT Solutions: Empowering Your Digital Transformation</p>
      </header>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className='h2'>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <section className="cta-section">
        <h2>Ready to elevate your IT infrastructure?</h2>
        <p>Contact us today for a free consultation</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
    </div>
  );
};

export default ServicePage;