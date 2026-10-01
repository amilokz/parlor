import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const remote = {
  salon: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  makeup: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
  hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85',
  fashion: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
  fashion2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
  portrait: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85',
  nails: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85',
  skincare: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85'
};

const icons = {
  crown: <svg viewBox="0 0 24 24"><path d="M3 7l4 4 5-7 5 7 4-4-2 11H5L3 7Z"/><path d="M5 21h14"/></svg>,
  sparkle: <svg viewBox="0 0 24 24"><path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></svg>,
  scissors: <svg viewBox="0 0 24 24"><circle cx="7" cy="17" r="3"/><circle cx="7" cy="7" r="3"/><path d="M9.6 8.6 20 19M9.6 15.4 20 5"/></svg>,
  heart: <svg viewBox="0 0 24 24"><path d="M20.8 8.7c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z"/></svg>,
  calendar: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></svg>,
  arrow: <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  menu: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: <svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>,
  phone: <svg viewBox="0 0 24 24"><path d="M6.6 3.5 9 3l2 5-2.2 1.8a14 14 0 0 0 5.4 5.4L16 13l5 2 .5 2.4a3 3 0 0 1-3.3 3.5C10.5 20 4 13.5 3.1 5.8A3 3 0 0 1 6.6 3.5Z"/></svg>
};

const services = [
  {
  title:'Bridal Makeup',
  eyebrow:'Signature • Timeless • You',
  text:'HD bridal artistry designed around your features, dress, jewellery and wedding story.',
  image:'https://i.pinimg.com/736x/40/07/34/4007348b0099f10929639eb0ed3bb605.jpg',
  icon:icons.crown,
  price:'From PKR 15,000'
},
  {title:'Hair Styling', eyebrow:'Silk • Volume • Detail', text:'Elegant buns, soft waves, extensions and statement bridal hair with a polished finish.', image:remote.hair, icon:icons.scissors, price:'From PKR 1,800'},
 {
  title:'Mehndi Design',
  eyebrow:'Intricate • Festive • Fine',
  text:'Delicate bridal and event mehndi crafted to complement your overall look.',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrQN0v-PaL5M4M3OoaEI5i8U4vANeK2LWtTEROBCaY6aFnfyhz44U8i8&s=10',
  icon:icons.sparkle,
  price:'From PKR 4,500'
},
  {
  title:'Manicure & Pedicure',
  eyebrow:'Polished • Clean • Luxe',
  text:'A relaxing hand and foot ritual with immaculate finishing touches for every occasion.',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkvjXyJ_w2cqsaNmjgthqzkXVz0xnUJC_LijFHIxfbw&s=10',
  icon:icons.heart,
  price:'From PKR 1,200'
},
{title:'Facials & Skin', eyebrow:'Glow • Care • Radiance', text:'Glow-focused skincare rituals that leave your skin fresh, smooth and photo-ready.', image:remote.skincare, icon:icons.sparkle, price:'From PKR 1,500'},
  {
  title:'Eyebrow & Lashes',
  eyebrow:'Defined • Soft • Precise',
  text:'Face-framing brow shaping and lash services tailored to your natural features.',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9GzeT8DmcLl1rWS16G1LGX5CrBBdTkd3MVg4jxLcG0fpMzKbAU3_mKc&s=10',
  icon:icons.heart,
  price:'From PKR 600'
},];

const gallery = [
  {title:'Royal Bride', cat:'Bridal', image:'/assets/bridal-hero.jpg'},
 {
  title: 'Golden Glam',
  cat: 'Bridal',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MqAMxRb1I88vz-_IMEhSwXI_pOzp9tbPl7VWQezhca0FKesPL-h3TIVf&s=10'
},
{
  title: 'Soft Glow',
  cat: 'Makeup',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsilyqRZPJR9PxRl-irPlkn53i-itcB8ViH3y6-pTjLsW_y85trEK2mc&s=10'
},
{
  title: 'Hair Details',
  cat: 'Hair',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWsT7G89juV0Kl0nyF54F2N8Es1mdFy7cnJmz0yyWwpmSoNMyQZmQa8BA&s=10'
},
{
  title: 'Luxury Studio',
  cat: 'Studio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTM9cZnRSjt_UBkfhGswxYaSzcQKqWe7FYfd11GAXqCev8Sz9tfGgjA&s=10'
},

{
  title: 'Engagement Look',
  cat: 'Makeup',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAi9MTeFAtlpX4q6-I3qq3a4r7whU6TLV0b9kqhCbPOtro4BS2JXLzVs&s=10'
},

{
  title: 'Mehndi Mood',
  cat: 'Bridal',
  image: 'https://simplecraftidea.com/wp-content/uploads/2026/06/Bridal-Mehndi-Designs-1600x900.png'
},
  {title:'Nail Detail', cat:'Nails', image:remote.nails}
];

const prices = [
  ['Bridal Makeup — Classic','15,000'],['Bridal Makeup — Premium HD','30,000'],['Engagement Makeup','6,000 – 12,000'],['Party Makeup','2,500 – 5,000'],
  ['Hair Styling & Blow Dry','1,800 – 4,000'],['Hair Cutting','800 – 2,500'],['Gold Facial','4,500'],['Manicure + Pedicure','2,500'],['Bridal Mehndi','4,500 – 12,000'],['Eyebrow Threading','100']
];

function Icon({children, className=''}) { return <span className={`icon ${className}`}>{children}</span> }

function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeCat,setActiveCat]=useState('All');
  const [modal,setModal]=useState(null);
  const [toast,setToast]=useState('');
  const [form,setForm]=useState({name:'',phone:'',service:'Bridal Makeup',date:''});

  useEffect(()=>{
    const onKey=e=>e.key==='Escape' && (setModal(null),setMenuOpen(false));
    window.addEventListener('keydown',onKey); return ()=>window.removeEventListener('keydown',onKey);
  },[]);
  useEffect(()=>{ if(!toast)return; const t=setTimeout(()=>setToast(''),3200); return ()=>clearTimeout(t)},[toast]);

  const filtered=activeCat==='All'?gallery:gallery.filter(x=>x.cat===activeCat);
  const submit=(e)=>{e.preventDefault(); setToast(`Thank you ${form.name || 'beautiful'} — your demo booking request is ready to send.`); setForm({...form,name:'',phone:'',date:''});};
  const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenuOpen(false)};

  return <div className="app">
    <div className="grain" />
    <header className="nav-wrap">
      <nav className="nav container">
        <button className="brand" onClick={()=>scrollTo('home')} aria-label="AMNA home"><img src="/assets/amna-logo.png"/><span>AMNA <small>BEAUTY PARLOUR</small></span></button>
        <div className={`nav-links ${menuOpen?'open':''}`}>
          {['home','about','services','gallery','contact'].map((x,i)=><button key={x} onClick={()=>scrollTo(x)}>{['Home','About','Services','Gallery','Contact'][i]}</button>)}
          <button className="nav-book" onClick={()=>setModal('booking')}>Book Appointment <Icon>{icons.arrow}</Icon></button>
        </div>
        <button className="menu-btn" onClick={()=>setMenuOpen(v=>!v)}><Icon>{menuOpen?icons.close:icons.menu}</Icon></button>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker"><span/> LUXURY BEAUTY • RAWALPINDI <span/></p>
            <h1>Where Your <em>Beauty</em><br/>Becomes a <span>Signature.</span></h1>
            <p className="hero-text">A refined bridal and beauty experience for women who want timeless elegance, flawless details and a little golden magic.</p>
            <div className="hero-actions"><button className="gold-btn" onClick={()=>setModal('booking')}>Reserve Your Look <Icon>{icons.arrow}</Icon></button><button className="text-btn" onClick={()=>scrollTo('gallery')}>Explore Gallery <Icon>{icons.arrow}</Icon></button></div>
            <div className="hero-trust"><div><b>10+</b><span>Years of craft</span></div><div><b>2K+</b><span>Beautiful moments</span></div><div><b>15+</b><span>Beauty services</span></div></div>
          </div>
          <div className="hero-art">
            <div className="halo"/><div className="gold-ring ring-a"/><div className="gold-ring ring-b"/>
            <div className="hero-image-frame"><img src="/assets/bridal-hero.jpg"/><div className="image-shine"/></div>
            <div className="floating-card"><Icon>{icons.crown}</Icon><div><b>Bridal Atelier</b><small>Crafted around you</small></div></div>
            <div className="vertical-word">AMNA / SIGNATURE BEAUTY</div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><i/></div>
      </section>

      <section id="about" className="story section">
        <div className="container story-grid">
          <div className="story-visual"><img src="/assets/gold-frame.jpg"/><div className="story-overlay"><span>01</span><b>THE AMNA<br/>EXPERIENCE</b></div></div>
          <div className="story-copy"><p className="eyebrow">OUR PHILOSOPHY</p><h2>Luxury is in the <em>details.</em></h2><p>From the first consultation to the final mirror check, every AMNA appointment is designed to feel personal, calm and beautifully considered.</p><p>We blend South Asian bridal artistry with contemporary beauty techniques — creating looks that photograph beautifully and still feel like <strong>you.</strong></p><div className="signature"><span>AMNA</span><small>Beauty with intention</small></div></div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container"><div className="section-head"><div><p className="eyebrow">OUR SERVICES</p><h2>Made for your <em>moment.</em></h2></div><button className="outline-btn" onClick={()=>setModal('prices')}>View Rate List <Icon>{icons.arrow}</Icon></button></div>
          <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title} onClick={()=>setModal({type:'service',data:s})}><div className="service-img"><img src={s.image}/><div className="service-no">0{i+1}</div><div className="service-icon">{s.icon}</div></div><div className="service-body"><p>{s.eyebrow}</p><h3>{s.title}</h3><span>{s.price}</span><div className="service-arrow">{icons.arrow}</div></div></article>)}</div>
        </div>
      </section>

      <section className="quote-band"><div className="container quote-inner"><span className="quote-mark">“</span><p>Every bride deserves a look that feels like <em>her most beautiful self.</em></p><span className="quote-mark end">”</span></div></section>

      <section id="gallery" className="section gallery">
        <div className="container"><div className="section-head gallery-head"><div><p className="eyebrow">AMNA GALLERY</p><h2>A little glimpse of <em>glamour.</em></h2></div><div className="filters">{['All','Bridal','Makeup','Hair','Nails','Studio'].map(x=><button className={activeCat===x?'active':''} key={x} onClick={()=>setActiveCat(x)}>{x}</button>)}</div></div>
          <div className="gallery-grid">{filtered.map((g,i)=><button className={`gallery-item gi-${i%4}`} key={g.title} onClick={()=>setModal({type:'image',data:g})}><img src={g.image}/><span className="gallery-overlay"><small>{g.cat}</small><b>{g.title}</b><i>{icons.arrow}</i></span></button>)}</div>
          <div className="gallery-note">Images are used as visual demo references. Replace them with your final salon portfolio before launch.</div>
        </div>
      </section>

      <section className="packages section"><div className="container package-grid"><div><p className="eyebrow">BRIDAL PACKAGES</p><h2>Your day. Your look. <em>Perfectly planned.</em></h2><p className="muted">Choose a complete experience or build your own from our signature services. Trials and event-day styling can be arranged around your schedule.</p><button className="gold-btn" onClick={()=>setModal('booking')}>Plan My Bridal Look <Icon>{icons.arrow}</Icon></button></div><div className="package-cards"><div className="package-card"><span>01 / CLASSIC</span><h3>Classic Bride</h3><strong>PKR 15,000</strong><ul><li>HD Bridal Makeup</li><li>Basic Hair Styling</li><li>Dupatta Setting</li><li>2 Hour Session</li></ul></div><div className="package-card featured"><span>02 / SIGNATURE</span><h3>Royal Bride</h3><strong>PKR 30,000</strong><ul><li>Premium HD Makeup</li><li>Hair + Extensions</li><li>Jewellery & Dupatta Setting</li><li>Mani + Pedi</li><li>Trial Session</li></ul><b className="badge">MOST LOVED</b></div></div></div></section>

      <section id="contact" className="contact section"><div className="container contact-box"><div className="contact-copy"><p className="eyebrow">RESERVE YOUR CHAIR</p><h2>Let's create your <em>signature look.</em></h2><p>Tell us your occasion, date and preferred service. Our team will confirm your appointment personally.</p><div className="contact-details"><span><Icon>{icons.phone}</Icon> +92 300 1234567</span><span><Icon>{icons.calendar}</Icon> Mon — Sun • 10 AM — 8 PM</span></div></div><form onSubmit={submit} className="booking-form"><div className="form-row"><label>Your Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Ayesha Khan"/></label><label>Phone / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="03xx xxxxxxx"/></label></div><div className="form-row"><label>Service<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Preferred Date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label></div><button className="gold-btn full">Request Appointment <Icon>{icons.arrow}</Icon></button><small>No payment required for this demo request.</small></form></div></section>
    </main>

    <footer><div className="container footer-top"><div className="footer-brand"><img src="/assets/amna-logo.png"/><p>Luxury bridal makeup, hair and beauty artistry — crafted with care.</p></div><div><span className="footer-title">Explore</span><button onClick={()=>scrollTo('services')}>Services</button><button onClick={()=>scrollTo('gallery')}>Gallery</button><button onClick={()=>scrollTo('contact')}>Book Appointment</button></div><div><span className="footer-title">Visit</span><p>Rawalpindi / Islamabad<br/>Pakistan</p><p>hello@amnabeauty.pk<br/>+92 300 1234567</p></div></div><div className="container footer-bottom"><span>© 2026 AMNA Beauty Parlour</span><span>Designed as a luxury web demo by <a href="https://akclnt.com" target="_blank" rel="noopener" style={{color:'#9b9085',textDecoration:'none'}}>AKCLNT</a></span></div></footer>

    <button className="whatsapp" onClick={()=>setToast('Demo WhatsApp action — connect your real number before launch.')}>WA</button>
    {modal && <div className="modal-backdrop" onMouseDown={()=>setModal(null)}><div className={`modal ${modal==='prices'?'price-modal':''}`} onMouseDown={e=>e.stopPropagation()}>{modal==='booking'?<><button className="modal-close" onClick={()=>setModal(null)}>{icons.close}</button><p className="eyebrow">APPOINTMENT</p><h2>Reserve your <em>moment.</em></h2><p className="muted">The form is ready — use the contact section for the demo booking flow.</p><button className="gold-btn" onClick={()=>{setModal(null);scrollTo('contact')}}>Open Booking Form <Icon>{icons.arrow}</Icon></button></>:modal==='prices'?<><button className="modal-close" onClick={()=>setModal(null)}>{icons.close}</button><p className="eyebrow">RATE LIST</p><h2>Signature <em>prices.</em></h2><div className="price-list">{prices.map(([n,p])=><div key={n}><span>{n}</span><b>Rs. {p}</b></div>)}</div></>:modal.type==='service'?<><button className="modal-close" onClick={()=>setModal(null)}>{icons.close}</button><img className="modal-service-image" src={modal.data.image}/><p className="eyebrow">{modal.data.eyebrow}</p><h2>{modal.data.title}</h2><p className="muted">{modal.data.text}</p><button className="gold-btn" onClick={()=>{setModal(null);scrollTo('contact')}}>Book This Service <Icon>{icons.arrow}</Icon></button></>:<><button className="modal-close" onClick={()=>setModal(null)}>{icons.close}</button><img className="modal-gallery-image" src={modal.data.image}/><p className="eyebrow">{modal.data.cat}</p><h2>{modal.data.title}</h2></>}</div></div>}
    {toast && <div className="toast">{toast}</div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
