import React from 'react';

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* --- SECTION 1: NAVBAR --- */}
      <nav className="navbar bg-white px-4 lg:px-16 py-4 sticky top-0 z-50 shadow-sm md:shadow-none">
        <div className="navbar-start">
          {/* Mobile Dropdown (Hamburger Menu) - Eita mobile-e dekhabe */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-64 space-y-2 text-slate-700">
              <li><a className="hover:text-[#7C3AED] font-medium cursor-pointer">Products</a></li>
              <li><a className="hover:text-[#7C3AED] font-medium cursor-pointer">Features</a></li>
              <li><a className="hover:text-[#7C3AED] font-medium cursor-pointer">Pricing</a></li>
              <li><a className="hover:text-[#7C3AED] font-medium cursor-pointer">Testimonials</a></li>
              <li><a className="hover:text-[#7C3AED] font-medium cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold text-[#7C3AED] tracking-tight cursor-pointer">DigiTools</a>
        </div>

        {/* Desktop Menu */}
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
          {/* Login Button with Hand Cursor */}
          <div className="hidden sm:flex items-center gap-2 cursor-pointer text-slate-700 hover:text-[#7C3AED] group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-semibold text-[15px]">Login</span>
          </div>
          {/* Main CTA Button with Hand Cursor */}
          <button className="bg-[#7C3AED] text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-full font-bold text-sm lg:text-[15px] hover:bg-[#6D28D9] shadow-md transition-all cursor-pointer active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- SECTION 2: HERO / BANNER --- */}
      <header className="container mx-auto px-6 lg:px-16 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-[900] text-[#1E293B] leading-[1.2] lg:leading-[1.1] mb-6">
            Supercharge Your <br />
            <span className="text-[#334155]">Digital Workflow</span>
          </h1>
          
          <p className="text-base lg:text-lg text-slate-500 max-w-lg leading-relaxed mb-8">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="bg-[#7C3AED] text-white w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all cursor-pointer active:scale-95">
              Explore Products
            </button>
            <button className="flex items-center justify-center gap-3 border-2 border-[#7C3AED] text-[#7C3AED] w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all cursor-pointer active:scale-95">
              <img src="/src/assets/Play.png" alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-200 rounded-full blur-[120px] opacity-30 -z-10"></div>
          <img 
            src="/src/assets/banner.png" 
            alt="Hero Banner" 
            className="w-full max-w-[600px] rounded-[24px] lg:rounded-[32px] shadow-2xl transform hover:scale-[1.01] transition-all duration-500" 
          />
        </div>
      </header>

      {/* --- SECTION 3: STATS BAR --- */}
      <section className="bg-[#7C3AED] py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-white text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-2">50K+</h2>
            <p className="text-purple-100 text-base lg:text-lg opacity-90 font-medium tracking-wide">Active Users</p>
          </div>
          
          <div className="flex flex-col items-center border-white/20 md:border-x px-4">
            <h2 className="text-5xl lg:text-6xl font-black mb-2">200+</h2>
            <p className="text-purple-100 text-base lg:text-lg opacity-90 font-medium tracking-wide">Premium Tools</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-2">4.9</h2>
            <p className="text-purple-100 text-base lg:text-lg opacity-90 font-medium tracking-wide">Average Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}