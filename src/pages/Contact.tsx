import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Contact Us</h1>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
          {/* Contact Info */}
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Get In Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--bg-card)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)'
                }}>
                  <MapPin color="var(--gold)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff' }}>Address</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>123 Asian Street, Food District<br/>City Center, FC 45678</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--bg-card)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)'
                }}>
                  <Phone color="var(--gold)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff' }}>Phone</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+1 234 567 890</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--bg-card)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)'
                }}>
                  <Mail color="var(--gold)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>hello@asia-cuisine.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: 'var(--bg-card)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--gold)'
                }}>
                  <Clock color="var(--gold)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff' }}>Opening Hours</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Mon - Fri: 12:00 PM - 10:00 PM<br/>
                    Sat - Sun: 11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div style={{ flex: '1 1 400px', minHeight: '400px', position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: '#222', 
              borderRadius: '4px',
              border: '1px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'var(--text-secondary)'
            }}>
              <MapPin size={48} color="#444" style={{ marginBottom: '10px' }} />
              <p>Map Placeholder</p>
              <p style={{ fontSize: '0.8rem' }}>Interactive map will be loaded here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
