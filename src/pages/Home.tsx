import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070") center/cover no-repeat'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Authentic Asian<br/>Culinary Experience</h1>
          <p style={{ fontSize: '1.2rem', color: '#eee', maxWidth: '600px', margin: '0 auto 40px' }}>
            Discover the rich flavors of Southeast Asia with our handcrafted dishes, 
            made with traditional techniques and the freshest ingredients.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/menu" className="btn-primary">EXPLORE MENU</Link>
            <Link to="/reservation" className="btn-outline">BOOK A TABLE</Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '50px' }}>Our Specials</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              { 
                title: "Traditional Pad Thai", 
                desc: "Our signature stir-fried noodles with a perfect balance of sweet, sour, and savory.",
                img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                title: "Green Curry", 
                desc: "Fragrant and spicy coconut-based curry with authentic Thai herbs and fresh vegetables.",
                img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                title: "Handmade Dim Sum", 
                desc: "Delicate dumplings prepared daily by our expert chefs, served with traditional dipping sauces.",
                img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=1000"
              }
            ].map((special, i) => (
              <div key={i} style={{ backgroundColor: 'var(--bg-card)', padding: '20px', borderRadius: '4px' }}>
                <img src={special.img} alt={special.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                <h3 style={{ marginTop: '20px', fontSize: '1.2rem' }}>{special.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '10px', fontSize: '0.9rem' }}>{special.desc}</p>
                <Link to="/menu" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--gold)', marginTop: '15px', fontWeight: '600' }}>
                  VIEW IN MENU <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding" style={{ backgroundColor: '#181818' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2>A Journey of Flavors</h2>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
              Inspired by the bustling street markets and refined kitchens of Thailand, Vietnam, and beyond, 
              Asia Cuisine brings the soul of the East to your table. Every dish tells a story of heritage, 
              passed down through generations.
            </p>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
              We believe that food is more than just sustenance; it's a celebration of life, family, and culture. 
              Our chefs use only the finest ingredients to ensure every bite is a revelation.
            </p>
          </div>
          <div style={{ flex: '1 1 450px' }}>
            <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" alt="Cooking" style={{ width: '100%', borderRadius: '4px' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
