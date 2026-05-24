import React, { useState, useEffect } from 'react';

// 4 BANNERS DATA
const banners = [
  { id: 1, title: "Mega Sale", offer: "50% Off", img: "https://placehold.co/600x300/ff6b00/fff?text=Mega+Sale" },
  { id: 2, title: "New Arrivals!", offer: "Shop Now", img: "https://placehold.co/600x300/1e40af/fff?text=New+Arrivals" },
  { id: 3, title: "Travel Deals", offer: "Explore", img: "https://placehold.co/600x300/14b8a6/fff?text=Travel+Deals" },
  { id: 4, title: "Tech Fest!", offer: "Up to 70%", img: "https://placehold.co/600x300/9333ea/fff?text=Tech+Fest" },
];

// 50 ADVERTISEMENTS DYNAMIC
const ads = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Ad Campaign ${i + 1}`,
  desc: `Special offer on product ${i + 1}`,
  color: ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400'][i % 4],
}));

// 50 MODULES/SERVICES
const modules = [
  "Education", "Market", "Healthcare", "Services", "Finance", "Shopping", "Entertainment", "Jobs", "Fashion", "Food",
  "Technology", "Automotive", "Real Estate", "Streaming", "Pets", "Reading", "Fitness", "Gifts", "Gaming", "Music",
  "Travel", "Hotels", "Flights", "Movies", "Events", "Sports", "Books", "Electronics", "Furniture", "Beauty",
  "Grocery", "Pharmacy", "Delivery", "Repair", "Cleaning", "Laundry", "Salon", "Spa", "Gym", "Yoga",
  "Tutoring", "Courses", "Insurance", "Loans", "Banking", "Investing", "Crypto", "News", "Weather", "Maps"
].map((name, i) => ({ id: i + 1, name: name, icon: "🎯" }));

function App() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl lg:text-2xl font-bold">🚀 SuperLive</h1>
            </div>
            <div className="flex-1 max-w-xl mx-4 hidden md:block">
              <input type="text" placeholder="Search Services..." className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none" />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">🔔<span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span></button>
              <img src="https://placehold.co/40x40/fff/000?text=U" className="w-8 h-8 rounded-full" alt="User" />
            </div>
          </div>
          <div className="pb-3 md:hidden">
            <input type="text" placeholder="Search Services..." className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none" />
          </div>
          <nav className="hidden lg:flex gap-8 pb-3">
            {['Home', 'Explore', 'Services', 'Offers', 'My Cart'].map(item => (
              <button key={item} className="hover:bg-blue-700 px-4 py-2 rounded-lg font-medium">{item}</button>
            ))}
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-700 px-4 pb-4">
            {['Home', 'Explore', 'Services', 'Offers', 'My Cart'].map(item => (
              <button key={item} className="block w-full text-left py-3 border-b border-blue-600">{item}</button>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* 4 BANNERS SLIDER */}
        <div className="mb-8 relative overflow-hidden rounded-2xl shadow-xl">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
            {banners.map((banner) => (
              <div key={banner.id} className="min-w-full relative">
                <img src={banner.img} alt={banner.title} className="w-full h-48 lg:h-80 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 lg:px-12 text-white">
                  <h2 className="text-2xl lg:text-5xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-lg lg:text-2xl mb-4">{banner.offer}</p>
                  <button className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold hover:scale-105 transition">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentBanner(idx)} className={`w-2 h-2 rounded-full transition ${currentBanner === idx? 'bg-white w-6' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>

        {/* WELCOME BANNER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 lg:p-10 text-white mb-8 shadow-xl">
          <h2 className="text-xl lg:text-3xl font-bold mb-2">WELCOME!</h2>
          <h3 className="text-2xl lg:text-5xl font-bold mb-4">Discover Our Services</h3>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold">Learn Now</button>
        </div>

        {/* 50 MODULES GRID */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">All Services</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 max-h-[600px] overflow-y-auto p-4 bg-white rounded-2xl shadow-lg">
            {modules.map((module) => (
              <button key={module.id} className="flex flex-col items-center gap-2 p-3 hover:bg-gray-100 rounded-xl transition hover:scale-110">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">{module.icon}</div>
                <span className="text-xs lg:text-sm text-center font-medium">{module.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 50 ADVERTISEMENTS */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sponsored Ads</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {ads.map((ad) => (
              <div key={ad.id} className={`${ad.color} min-w-[280px] lg:min-w-[320px] h-40 rounded-2xl p-6 text-white shadow-lg snap-start`}>
                <h3 className="font-bold text-lg mb-2">{ad.title}</h3>
                <p className="text-sm opacity-90">{ad.desc}</p>
                <button className="mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm">View Offer</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {['Company', 'Help', 'Services', 'Terms', 'Resources', 'Legal'].map(section => (
            <div key={section}>
              <h3 className="font-bold mb-4">{section}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button className="hover:text-white text-left">Privacy Policy</button></li>
                <li><button className="hover:text-white text-left">Terms of Service</button></li>
                <li><button className="hover:text-white text-left">Contact Us</button></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-blue-950 py-4 text-center text-sm text-gray-400">© 2024 SuperLive. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;