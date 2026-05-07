import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  CheckCircle2,
  Users,
  Award,
  Calendar
} from 'lucide-react';
import { MENU_ITEMS, MenuItem } from './types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-bold tracking-tighter uppercase border-b-2 border-coffee-dark">LUXE BEAN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-coffee-dark opacity-60 hover:opacity-100 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-coffee-dark text-cream rounded-full text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            Reservations
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-coffee-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream p-6 border-b border-coffee-dark/10 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl text-coffee-dark"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-4 bg-coffee-dark text-cream rounded-xl font-medium">
                Visit Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-sage font-display italic text-xl">Estd. 2018 — Urban Sanctuary</h2>
              <h1 className="text-6xl md:text-8xl font-display font-light leading-[1.1] text-balance">
                Fresh Coffee,<br />
                <span className="italic font-normal">Warm Moments</span>
              </h1>
              <p className="text-lg text-coffee-dark opacity-80 leading-relaxed max-w-md">
                Experience the art of slow-living in the heart of the city. We source the finest beans and craft every cup with soul.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#menu" 
                  className="px-8 py-4 bg-coffee-dark text-cream rounded-sm font-display text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                >
                  View Digital Menu <ChevronRight size={18} />
                </a>
                <a 
                  href="#about" 
                  className="px-8 py-4 border border-coffee-dark text-coffee-dark rounded-sm font-display text-lg hover:bg-coffee-dark hover:text-cream transition-all"
                >
                  Our Story
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-coffee-dark/10">
                <div>
                  <div className="text-3xl font-display">12k+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Happy Guests</div>
                </div>
                <div>
                  <div className="text-3xl font-display">100%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Organic Beans</div>
                </div>
                <div>
                  <div className="text-3xl font-display">12</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">Craft Roasts</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[600px] flex flex-col gap-6">
            <div className="relative flex-1 group overflow-hidden rounded-2xl shadow-inner border border-coffee-dark/5">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                alt="House Special"
                className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-cream">
                <span className="px-3 py-1 bg-sage rounded-full text-[10px] uppercase tracking-widest mb-2 inline-block font-bold">House Special</span>
                <h3 className="text-2xl font-display tracking-tight">Pistachio Cream Latte</h3>
              </div>
            </div>

            <div className="h-1/3 flex gap-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-coffee-dark/5 flex flex-col justify-between">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-sage">
                  <Coffee size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">Signature Roast</div>
                  <div className="text-xl font-display">Midnight Velvet</div>
                  <div className="text-sm text-sage font-bold">$18.50 / pack</div>
                </div>
              </div>
              <div className="flex-1 bg-sage p-6 rounded-2xl shadow-sm flex flex-col justify-between text-cream">
                <div className="text-2xl md:text-3xl font-display italic leading-tight">“The finest roast in the district.”</div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cream/20"></div>
                  <div className="text-[10px] tracking-wide uppercase font-bold">Jameson K.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 px-8 opacity-30 pointer-events-none">
        <div className="w-px h-24 bg-coffee-dark"></div>
        <span className="rotate-90 uppercase tracking-[0.4em] text-[10px] font-bold whitespace-nowrap">Scroll to Discover</span>
        <div className="w-px h-24 bg-coffee-dark"></div>
      </div>
    </section>
  );
};

const Stats = () => null;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'All'>('All');
  
  const categories: (MenuItem['category'] | 'All')[] = ['All', 'Breakfast', 'Lunch', 'Drinks', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Curated Artisanal Fare
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Our Seasonal Menu
          </motion.h2>
          <p className="text-coffee-dark/60">
            Every dish is prepared using fresh, local ingredients with a focus on 
            organic produce and artisanal roasting techniques.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-coffee-dark text-cream' 
                : 'bg-coffee-dark/5 text-coffee-dark hover:bg-coffee-dark/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden menu-card-shadow border border-coffee-dark/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {item.isBestSeller && (
                    <div className="absolute top-4 right-4 bg-gold text-cream px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute inset-0 bg-coffee-dark/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] uppercase font-bold text-coffee-dark/40 tracking-[0.2em] mb-1">
                      {item.category}
                    </span>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-display text-2xl tracking-tighter">{item.name}</h3>
                      <span className="font-bold text-sage">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-coffee-dark opacity-60 leading-relaxed mb-6 italic">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center border-t border-coffee-dark/5 pt-4">
                    <button className="text-[10px] uppercase font-bold tracking-widest hover:text-sage transition-colors flex items-center gap-2">
                      Add to Selection <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                alt="Coffee Roasting" 
                className="rounded-2xl w-full h-[500px] object-cover menu-card-shadow"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-sage rounded-2xl -z-0 opacity-20 hidden md:block"></div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold rounded-full -z-0 opacity-20 hidden md:block"
            ></motion.div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sage font-bold uppercase tracking-widest text-[10px] mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display font-light mb-8 italic">Crafting Excellence Since 2018</h2>
            <p className="text-coffee-dark opacity-80 text-lg leading-relaxed mb-6">
              Founded in the heart of the city, Luxe Bean was born from a simple passion: 
              to redefine the urban coffee experience. We believe that coffee is more 
              than just a beverage—it's a moment of clarity in a busy world.
            </p>
            <p className="text-coffee-dark opacity-80 leading-relaxed mb-10">
              Our journey started with a small roasting antique and a commitment to 
              ethical sourcing. Today, we work directly with farmers around the globe 
              to bring you the rarest beans, roasted with surgical precision.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-coffee-dark/5 pt-8">
              <div>
                <div className="w-8 h-px bg-sage mb-4"></div>
                <h4 className="font-display text-xl mb-2">Ethical Sourcing</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Certified Organic</p>
              </div>
              <div>
                <div className="w-8 h-px bg-sage mb-4"></div>
                <h4 className="font-display text-xl mb-2">Master Roasters</h4>
                <p className="text-xs uppercase tracking-widest opacity-60">Small-batch integrity</p>
              </div>
            </div>

            <button className="px-10 py-4 border border-coffee-dark rounded-sm font-display text-lg hover:bg-coffee-dark hover:text-cream transition-all">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-dark/5 border-t border-coffee-dark/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <span className="text-sage font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-6xl font-display font-light mb-8 italic">The Urban Sanctuary</h2>
            <p className="text-coffee-dark opacity-60 text-lg mb-12 max-w-md">
              Located in the heart of the Midtown District. We're open early to fuel your 
              ambition and late to help you unwind.
            </p>

            <div className="space-y-12 mb-12">
              <div className="flex gap-6">
                <div className="w-px h-12 bg-coffee-dark/20 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-coffee-dark/40 mb-2">Location</h4>
                  <p className="font-display text-2xl">124 Artisanal Ave, Midtown NYC</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-px h-12 bg-coffee-dark/20 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-coffee-dark/40 mb-2">Hours</h4>
                  <p className="font-medium text-sm">Mon - Fri: 07:00 — 19:00</p>
                  <p className="font-medium text-sm">Sat - Sun: 08:00 — 21:00</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-xl overflow-hidden bg-warm-gray grayscale opacity-50 border border-coffee-dark/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1652150000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-coffee-dark/5">
            <h3 className="font-display text-3xl mb-8 font-light italic">Inquiries & Reservations</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-coffee-dark/40">Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Julianne West" 
                    className="w-full py-2 bg-transparent border-b border-coffee-dark/10 focus:border-coffee-dark outline-none transition-all placeholder:text-coffee-dark/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-coffee-dark/40">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full py-2 bg-transparent border-b border-coffee-dark/10 focus:border-coffee-dark outline-none transition-all placeholder:text-coffee-dark/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-coffee-dark/40">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we assist you?" 
                  className="w-full py-2 bg-transparent border-b border-coffee-dark/10 focus:border-coffee-dark outline-none transition-all resize-none placeholder:text-coffee-dark/20"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-6 bg-coffee-dark text-cream rounded-sm font-display text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-coffee-dark py-12 text-cream/40 border-t border-cream/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-xl font-display font-bold tracking-tighter text-cream uppercase border-b-2 border-cream">
            Luxe Bean
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a href="#home" className="hover:text-cream transition-colors">Home</a>
            <a href="#menu" className="hover:text-cream transition-colors">Menu</a>
            <a href="#about" className="hover:text-cream transition-colors">Story</a>
            <a href="#contact" className="hover:text-cream transition-colors">Visit</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-sage transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-sage transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-sage transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/5 text-[10px] tracking-widest uppercase">
          <div className="flex gap-8 mb-4 md:mb-0">
            <span>Mon–Fri: 07:00 – 19:00</span>
            <span>Sat–Sun: 08:00 – 21:00</span>
          </div>
          <div className="italic font-display">© 2024 Luxe Bean Collective. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
