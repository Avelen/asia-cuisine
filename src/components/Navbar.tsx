import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: 'rgba(18, 18, 18, 0.95)',
      borderBottom: '1px solid #d4af3733',
      padding: '20px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <UtensilsCrossed size={32} color="#d4af37" />
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: 'var(--gold)',
            letterSpacing: '1px'
          }}>ASIA CUISINE</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/menu" className="nav-link">MENU</Link>
          <Link to="/reservation" className="nav-link">RESERVATION</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Mobile Toggle */}
        <div onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer' }} className="mobile-toggle">
          {isOpen ? <X size={28} color="#d4af37" /> : <Menu size={28} color="#d4af37" />}
        </div>
      </div>

      {/* Mobile Menu (Simplified for now) */}
      {isOpen && (
        <div style={{ 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          width: '100%', 
          backgroundColor: 'var(--bg-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 0',
          gap: '20px',
          borderBottom: '1px solid var(--gold)'
        }}>
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>MENU</Link>
          <Link to="/reservation" onClick={() => setIsOpen(false)}>RESERVATION</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}

      <style>{`
        .nav-link {
          font-weight: 500;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        .nav-link:hover {
          color: var(--gold);
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
