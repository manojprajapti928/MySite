import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      title: 'Phone',
      description: 'Call us for immediate assistance',
      icon: '📞',
      value: '+91 9752329928'
    },
    {
      title: 'Email',
      description: 'Send us an email anytime',
      icon: '✉️',
      value: 'info@manojitsolutions.com'
    },
    {
      title: 'Address',
      description: 'Visit our main office',
      icon: '🏢',
      value: '123 Vijay Nagar, Indore (MP), 12345'
    },
    {
      title: 'Social Media',
      description: 'Follow us for updates',
      icon: '🌐',
      value: '@ManojITSolutions'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: '💬',
      value: 'Available 24/7'
    },
    {
      title: 'Support Ticket',
      description: 'Submit a support request',
      icon: '🎫',
      value: 'Open a ticket'
    }
  ];

  return (
    <div id='contact-background'>
      <div className="contact-page">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>Get in Touch with Manoj IT Solutions</p>
        </header>
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">{method.icon}</div>
              <h2>{method.title}</h2>
              <p>{method.description}</p>
              <div className="contact-value">{method.value}</div>
            </div>
          ))}
        </div>
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="contact-submit-button">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;