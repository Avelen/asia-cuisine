import React from 'react';
import { menuData } from '../data/menu';

const Menu: React.FC = () => {
  const categories = Array.from(new Set(menuData.map(item => item.category)));

  return (
    <div className="section-padding">
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Menu</h1>
        
        {categories.map(category => (
          <div key={category} style={{ marginBottom: '60px' }}>
            <h2 style={{ 
              borderBottom: '2px solid var(--gold)', 
              paddingBottom: '10px', 
              marginBottom: '30px',
              display: 'inline-block'
            }}>{category}</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '40px' 
            }}>
              {menuData.filter(item => item.category === category).map(item => (
                <div key={item.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  gap: '20px',
                  borderBottom: '1px dotted #444',
                  paddingBottom: '15px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textTransform: 'none', letterSpacing: 'normal' }}>
                      {item.name}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '5px' }}>
                      {item.description}
                    </p>
                  </div>
                  <div style={{ fontWeight: 'bold', color: 'var(--gold)', fontSize: '1.1rem' }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
