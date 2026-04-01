import React, { useState } from 'react';

// Image Imports from your assets folder
import bannerImg from './assets/banner.png';
import packageImg from './assets/package.png';
import playImg from './assets/Play.png';
import rocketImg from './assets/rocket.png';
import userImg from './assets/user.png';

// Product Data
const productsData = [
  { id: 1, name: "AI Writing Pro", price: 29, type: "/Mo", icon: "writing_23274001.png", tag: "Best Seller", features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"] },
  { id: 2, name: "Design Templates Pack", price: 49, type: "/One-Time", icon: "design tools.png", tag: "Popular", features: ["2000+ templates", "Monthly updates", "Commercial license"] },
  { id: 3, name: "Premium Stock Assets", price: 19, type: "/Mo", icon: "portfolio.png", tag: "New", features: ["10M+ assets", "Commercial use", "No attribution"] },
  { id: 4, name: "Automation Toolkit", price: 79, type: "/Mo", icon: "operation.png", tag: "Popular", features: ["50+ automations", "API access", "Custom workflows"] },
  { id: 5, name: "Resume Builder Pro", price: 15, type: "/One-Time", icon: "writing_23274001.png", tag: "New", features: ["100+ templates", "ATS optimization", "Export to PDF"] },
  { id: 6, name: "Social Media Content Kit", price: 39, type: "/Mo", icon: "social-media.png", tag: "Best Seller", features: ["5000+ assets", "Scheduler included", "Analytics dashboard"] }
];

export default function App() {
  const [view, setView] = useState('products');
  const [cart, setCart] = useState([]);

  // Functions
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Checkout Function: Empty cart and return to products view
  const handleCheckout = () => {
    if (cart.length > 0) {
      alert("Thank you for your purchase! Processing checkout...");
      setCart([]); // Cart empty kora
      setView('products'); // Product page-e niye jaoa
    }
  };

  const cartTotal = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans">
      {/* --- NAVBAR --- */}
      <nav className="navbar bg-white px-4 lg:px-16 py-4 sticky top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown text-slate-700">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-64 space-y-2">
              <li><a className="font-medium cursor-pointer" onClick={() => setView('products')}>Products</a></li>
              <li><a className="font-medium cursor-pointer">Features</a></li>
              <li><a className="font-medium cursor-pointer">Pricing</a></li>
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold text-[#7C3AED] tracking-tight cursor-pointer" onClick={() => setView('products')}>DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-slate-600 font-medium text-[15px]">
            <li><a className="hover:text-[#7C3AED] cursor-pointer" onClick={() => setView('products')}>Products</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Features</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">Pricing</a></li>
            <li><a className="hover:text-[#7C3AED] cursor-pointer">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <div className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-[#7C3AED] relative pr-2" onClick={() => setView('cart')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="absolute -top-1 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{cart.length}</span>
          </div>
          <button className="bg-[#7C3AED] text-white px-7 py-2.5 rounded-full font-bold text-[15px] hover:bg-[#6D28D9] shadow-md transition-all active:scale-95">Get Started</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="container mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-[#7C3AED] px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl lg:text-[72px] font-[900] text-[#1E293B] leading-[1.1] mb-6">Supercharge Your <br /> <span className="text-slate-600">Digital Workflow</span></h1>
          <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">Access premium AI tools, design assets, and productivity software—all in one place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#7C3AED] text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all active:scale-95">Explore Products</button>
            <button className="flex items-center justify-center gap-3 border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all active:scale-95">
              <img src={playImg} className="w-5 h-5" alt="play" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={bannerImg} className="w-full max-w-[600px] rounded-[32px] shadow-2xl" alt="Banner" />
        </div>
      </header>

      {/* --- PRODUCT GRID / CART VIEW --- */}
      <section className="container mx-auto px-6 lg:px-16 py-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1E293B] mb-4">Premium Digital Tools</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-10">Choose from our curated collection of premium digital products designed to boost your productivity.</p>
        
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-md flex items-center border border-slate-100">
            <button onClick={() => setView('products')} className={`px-8 py-2.5 rounded-full font-bold transition-all cursor-pointer ${view === 'products' ? 'bg-[#7C3AED] text-white' : 'text-slate-500 hover:text-[#7C3AED]'}`}>Products</button>
            <button onClick={() => setView('cart')} className={`px-8 py-2.5 rounded-full font-bold transition-all cursor-pointer ${view === 'cart' ? 'bg-[#7C3AED] text-white' : 'text-slate-500 hover:text-[#7C3AED]'}`}>Cart ({cart.length})</button>
          </div>
        </div>

        {view === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {productsData.map((p) => (
              <div key={p.id} className="bg-white p-8 rounded-[24px] border border-slate-50 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-purple-50 transition-colors">
                    <img src={`/src/assets/products/${p.icon}`} className="w-8 h-8 object-contain" alt="icon" />
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${p.tag === 'Best Seller' ? 'bg-orange-100 text-orange-600' : p.tag === 'Popular' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>{p.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{p.name}</h3>
                <div className="mb-6 font-black text-slate-900"><span className="text-3xl">${p.price}</span><span className="text-slate-400 font-medium">{p.type}</span></div>
                <ul className="space-y-3 mb-8 flex-grow text-sm font-medium text-slate-600">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3"><svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>{f}</li>
                  ))}
                </ul>
                <button onClick={() => addToCart(p)} className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-bold hover:bg-[#6D28D9] transition-all shadow-lg active:scale-95">Buy Now</button>
              </div>
            ))}
          </div>
        ) : (
          /* --- CART VIEW --- */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[24px] border border-slate-100 shadow-xl overflow-hidden p-8 lg:p-12 text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8">Your Cart</h3>
              
              {cart.length > 0 ? (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group transition-all">
                      <div className="flex items-center gap-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                          <img src={`/src/assets/products/${item.icon}`} className="w-8 h-8 object-contain" alt="icon" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{item.name}</h4>
                          <p className="text-sm font-semibold text-slate-500">${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm font-bold hover:text-red-700 transition-all px-4 py-2 cursor-pointer">Remove</button>
                    </div>
                  ))}
                  
                  <div className="border-t border-slate-100 pt-8 mt-8 flex flex-col gap-6">
                    <div className="flex justify-between items-center px-4">
                      <span className="text-slate-400 font-bold">Total:</span>
                      <span className="text-3xl font-black text-slate-900">${cartTotal}</span>
                    </div>
                    {/* Updated Button with handleCheckout */}
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-[#7C3AED] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#6D28D9] shadow-xl shadow-purple-100 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-slate-500 font-bold text-lg">Your cart is empty.</p>
                  <button onClick={() => setView('products')} className="mt-4 text-[#7C3AED] font-black hover:underline cursor-pointer">Go Back To Products</button>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* --- PRICING --- */}
      <section className="container mx-auto px-6 lg:px-16 py-24 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-[#1E293B] mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm text-left hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-400 text-sm font-bold mb-8 uppercase">Perfect for beginners</p>
            <div className="mb-8 font-black text-slate-900"><span className="text-5xl">$0</span><span className="text-slate-400 font-bold text-lg">/Month</span></div>
            <button className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-bold hover:bg-[#6D28D9] transition-all">Get Started Free</button>
          </div>
          {/* Pro */}
          <div className="bg-[#7C3AED] p-10 rounded-[40px] shadow-2xl text-left h-full relative lg:scale-105 border-4 border-white cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-white/70 text-sm font-bold mb-8 uppercase">Best for professionals</p>
            <div className="mb-8 font-black text-white"><span className="text-5xl">$29</span><span className="opacity-70 font-bold text-lg">/Month</span></div>
            <button className="w-full bg-white text-[#7C3AED] py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xl">Start Pro Trial</button>
          </div>
          {/* Enterprise */}
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm text-left hover:shadow-lg transition-all cursor-pointer">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
            <p className="text-slate-400 text-sm font-bold mb-8 uppercase">For teams</p>
            <div className="mb-8 font-black text-slate-900"><span className="text-5xl">$99</span><span className="text-slate-400 font-bold text-lg">/Month</span></div>
            <button className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-bold hover:bg-[#6D28D9] transition-all">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F172A] py-16 text-slate-400 px-6 lg:px-16 border-t border-slate-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          <div>
            <h2 className="text-3xl font-black text-white mb-6">DigiTools</h2>
            <p className="font-medium">Work smarter with our suite of powerful tools.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 underline decoration-[#7C3AED] decoration-2 underline-offset-8">Product</h4>
            <ul className="space-y-3 font-bold">
              <li className="hover:text-white cursor-pointer" onClick={() => setView('products')}>Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 underline decoration-[#7C3AED] decoration-2 underline-offset-8">Resources</h4>
            <ul className="space-y-3 font-bold">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
             <h4 className="text-white font-bold mb-6">Social Links</h4>
             <div className="flex gap-4">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all text-black font-bold">YT</div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all text-black font-bold">FB</div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-all text-black font-bold">X</div>
             </div>
          </div>
        </div>
        <div className="container mx-auto pt-10 mt-10 border-t border-slate-800 text-sm font-bold flex flex-col md:flex-row justify-between gap-4 text-center">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8 justify-center"><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies</span></div>
        </div>
      </footer>
    </div>
  );
}