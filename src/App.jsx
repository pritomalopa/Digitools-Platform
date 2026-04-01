import React, { useState } from 'react';

// Product Data Array
const productsData = [
  { id: 1, name: "AI Writing Pro", price: "29", type: "/Mo", icon: "writing_2327400 1", tag: "Best Seller", features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"] },
  { id: 2, name: "Design Templates Pack", price: "49", type: "/One-Time", icon: "design-tool.png", tag: "Popular", features: ["2000+ templates", "Monthly updates", "Commercial license"] },
  { id: 3, name: "Premium Stock Assets", price: "19", type: "/Mo", icon: "portfolio.png", tag: "New", features: ["10M+ assets", "Commercial use", "No attribution"] },
  { id: 4, name: "Automation Toolkit", price: "79", type: "/Mo", icon: "operation.png", tag: "Popular", features: ["50+ automations", "API access", "Custom workflows"] },
  { id: 5, name: "Resume Builder Pro", price: "15", type: "/One-Time", icon: "writing_2327400 1.png", tag: "New", features: ["100+ templates", "ATS optimization", "Export to PDF"] },
  { id: 6, name: "Social Media Content Kit", price: "39", type: "/Mo", icon: "social-media.png", tag: "Best Seller", features: ["5000+ assets", "Scheduler included", "Analytics dashboard"] }
];

export default function App() {
  const [view, setView] = useState('products'); // 'products' or 'cart'
  const [cart, setCart] = useState([]); // Cart-er state add kora hoyeche

  // Product add korar function
  const addToCart = (product) => {
    setCart([...cart, product]); // Ager cart items + Notun item
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      {/* --- SECTION 1: NAVBAR --- */}
      <nav className="navbar bg-white px-4 lg:px-16 py-4 sticky top-0 z-50 shadow-sm md:shadow-none">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-64 space-y-2 text-slate-700">
              <li><a className="font-medium cursor-pointer">Products</a></li>
              <li><a className="font-medium cursor-pointer">Features</a></li>
              <li><a className="font-medium cursor-pointer">Pricing</a></li>
              <li><a className="font-medium cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold text-[#7C3AED] tracking-tight cursor-pointer">DigiTools</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-slate-600 font-medium text-[15px]">
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Products</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Features</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Pricing</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Testimonials</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2 lg:gap-6">
          <div className="hidden sm:flex items-center gap-2 cursor-pointer text-slate-700 hover:text-[#7C3AED]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="font-semibold text-[15px]">Login</span>
          </div>
          <button className="bg-[#7C3AED] text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-full font-bold text-sm lg:text-[15px] hover:bg-[#6D28D9] transition-all cursor-pointer active:scale-95 shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- SECTION 2: HERO --- */}
      <header className="container mx-auto px-6 lg:px-16 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-[900] text-[#1E293B] leading-[1.2] lg:leading-[1.1] mb-6">
            Supercharge Your <br /> <span className="text-[#334155]">Digital Workflow</span>
          </h1>
          <p className="text-base lg:text-lg text-slate-500 max-w-lg leading-relaxed mb-8">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="bg-[#7C3AED] text-white w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all cursor-pointer active:scale-95">Explore Products</button>
            <button className="flex items-center justify-center gap-3 border-2 border-[#7C3AED] text-[#7C3AED] w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all cursor-pointer active:scale-95">
              <img src="/src/assets/Play.png" className="w-5 h-5" alt="play" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <img src="/src/assets/banner.png" className="w-full max-w-[600px] rounded-[32px] shadow-2xl" alt="Banner" />
        </div>
      </header>

      {/* --- SECTION 3: STATS --- */}
      <section className="bg-[#7C3AED] py-16">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center">
          <div><h2 className="text-5xl lg:text-6xl font-black mb-2">50K+</h2><p className="opacity-90">Active Users</p></div>
          <div className="border-white/20 md:border-x px-4"><h2 className="text-5xl lg:text-6xl font-black mb-2">200+</h2><p className="opacity-90">Premium Tools</p></div>
          <div><h2 className="text-5xl lg:text-6xl font-black mb-2">4.9</h2><p className="opacity-90">Rating</p></div>
        </div>
      </section>

      {/* --- SECTION 4: PRODUCT GRID --- */}
      <section className="container mx-auto px-6 lg:px-16 py-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">Premium Digital Tools</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-md flex items-center border border-slate-100">
            <button 
              onClick={() => setView('products')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all cursor-pointer ${view === 'products' ? 'bg-[#7C3AED] text-white' : 'text-slate-500 hover:text-[#7C3AED]'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setView('cart')}
              className={`px-8 py-2.5 rounded-full font-bold transition-all cursor-pointer ${view === 'cart' ? 'bg-[#7C3AED] text-white' : 'text-slate-500 hover:text-[#7C3AED]'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((p) => (
            <div key={p.id} className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden text-left flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <img src={`/src/assets/products/${p.icon}`} className="w-8 h-8 object-contain" alt="icon" />
                </div>
                <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${
                  p.tag === 'Best Seller' ? 'bg-orange-100 text-orange-600' : 
                  p.tag === 'Popular' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {p.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{p.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Access premium features designed to help you create better content faster.</p>
              
              <div className="mb-6">
                <span className="text-3xl font-black text-slate-900">${p.price}</span>
                <span className="text-slate-400 font-medium">{p.type}</span>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <div className="bg-green-100 text-green-600 rounded-full p-0.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => addToCart(p)} // Click korle count barbe
                className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-bold hover:bg-[#6D28D9] transition-all cursor-pointer active:scale-95 shadow-lg shadow-purple-100"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}