import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#0a0a0a', 
      padding: '60px 0 20px', 
      borderTop: '1px solid #d4af3733',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '40px' 
      }}>
        <div>
          <h3>ASIA CUISINE</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '15px' }}>
            Authentic Asian flavors crafted with passion and traditional recipes. 
            Join us for an unforgettable culinary journey.
          </p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <Facebook size={20} color="var(--gold)" />
            <Instagram size={20} color="var(--gold)" />
            <Twitter size={20} color="var(--gold)" />
          </div>
        </div>

        <div>
          <h3>QUICK LINKS</h3>
          <ul style={{ listStyle: 'none', marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/reservation">Book a Table</a></li>
            <li><a href="/contact">Get in Touch</a></li>
          </ul>
        </div>

        <div>
          <h3>CONTACT US</h3>
          <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <MapPin size={18} color="var(--gold)" />
              <span>123 Asian Street, Food City</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <Phone size={18} color="var(--gold)" />
              <span>+1 234 567 890</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-secondary)' }}>
              <Mail size={18} color="var(--gold)" />
              <span>hello@asia-cuisine.com</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px', 
        paddingTop: '20px', 
        borderTop: '1px solid #ffffff11',
        color: '#555',
        fontSize: '0.8rem'
      }}>
        &copy; {new Date().getFullYear()} Asia Cuisine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
