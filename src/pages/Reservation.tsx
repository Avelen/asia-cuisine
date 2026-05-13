import React, { useState } from 'react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request sent! We will contact you soon.');
    console.log(formData);
  };

  return (
    <div className="section-padding" style={{ 
      background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070") center/cover no-repeat',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          backgroundColor: 'rgba(28, 28, 28, 0.95)', 
          padding: '40px',
          borderRadius: '4px',
          border: '1px solid var(--gold)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Book a Table</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Join us for an exceptional dining experience. 
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  style={inputStyle} 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div style={{ flex: '1 1 250px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  style={inputStyle}
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1 1 150px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Date</label>
                <input 
                  type="date" 
                  required
                  style={inputStyle}
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div style={{ flex: '1 1 150px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Time</label>
                <input 
                  type="time" 
                  required
                  style={inputStyle}
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                />
              </div>
              <div style={{ flex: '1 1 150px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Guests</label>
                <select 
                  style={inputStyle}
                  value={formData.guests}
                  onChange={e => setFormData({...formData, guests: e.target.value})}
                >
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Persons</option>)}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem' }}>Special Requests</label>
              <textarea 
                rows={3} 
                style={inputStyle}
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#333',
  border: '1px solid #444',
  color: '#fff',
  borderRadius: '4px',
  outline: 'none'
};

export default Reservation;
