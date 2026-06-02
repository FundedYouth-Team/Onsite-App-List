import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppItem, CategoryType } from './types';
import { CATEGORIES } from './data';
import { AppCard } from './components/AppCard';
import { LucideIcon } from './components/LucideIcon';
import appsData from './apps.json';
import { 
  Search, 
  Plus, 
  FolderOpen,
  Sparkles,
  LayoutGrid,
  CheckCircle2,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  // --- States ---
  const [apps, setApps] = useState<AppItem[]>(appsData as AppItem[]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('applet_launcher_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const isDark = theme === 'dark';
  
  const [showNotification, setShowNotification] = useState<string | null>(null);

  // --- Sync theme ---
  useEffect(() => {
    localStorage.setItem('applet_launcher_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // --- Trigger Transient Notifications ---
  const triggerNotification = (message: string) => {
    setShowNotification(message);
    setTimeout(() => {
      setShowNotification(null);
    }, 3500);
  };

  // --- App Filter Logic ---
  const filteredApps = apps.filter((app) => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    triggerNotification(`Switched to ${nextTheme === 'dark' ? 'Dark Twilight' : 'Light Bento Slate'} Layout`);
  };

  const bgStyle = isDark ? 'bg-slate-950' : 'bg-slate-50';

  return (
    <div className={`min-h-screen ${bgStyle} transition-all duration-700 font-sans flex flex-col relative overflow-x-hidden ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
      
      {/* Absolute Header Floating Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 16, x: '-50%' }}
            exit={{ opacity: 0, y: -40, x: '-50%' }}
            className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full border shadow-xl text-xs font-semibold flex items-center gap-2 ${
              isDark 
                ? 'bg-slate-900 border-slate-800 text-slate-100' 
                : 'bg-neutral-900 border-neutral-800 text-white'
            }`}
          >
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>{showNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Header Segment */}
      <header id="app-header" className={`relative w-full border-b transition-colors duration-500 px-4 sm:px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between select-none ${
        isDark 
          ? 'border-slate-900/60 bg-slate-950/45 backdrop-blur-md' 
          : 'border-black/[0.04] bg-white/45 backdrop-blur-md'
      }`}>
        {/* Logo / Branding Brand Title */}
        <div className="flex items-center gap-3">
          <div id="header-logo-wrapper" className="h-10 w-10 rounded-2xl overflow-hidden shadow-sm ring-2 ring-indigo-500/30 flex items-center justify-center bg-white">
            <img
              id="header-logo"
              src="/src/assets/images/launcher_logo_1780370846173.png"
              alt="App Launcher Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 id="header-title" className={`text-base font-bold tracking-tight flex items-center gap-1.5 ${isDark ? 'text-slate-100' : 'text-neutral-900'}`}>
              App Launcher <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-neutral-200 text-neutral-800'}`}>Beta</span>
            </h1>
            <p id="header-subtitle" className={`text-xs ${isDark ? 'text-slate-400' : 'text-neutral-500'}`}>Your personalized launchpad dashboard</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Majestic Light and Dark Mode Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className={`flex items-center gap-2 p-2 rounded-xl transition-all cursor-pointer border shadow-sm ${
              isDark 
                ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-yellow-400' 
                : 'bg-white hover:bg-neutral-50 border-neutral-200 hover:border-neutral-300 text-slate-800'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <>
                <Sun size={14} className="animate-spin-slow text-yellow-400" />
                <span className="text-xs font-semibold text-slate-200 pr-1 select-none">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={14} className="text-slate-700" />
                <span className="text-xs font-semibold text-slate-700 pr-1 select-none font-sans">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Container Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-10 flex flex-col">
        
        {/* Top filter dashboard bars - ONLY fully visible in Desktop mode or when relevant */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categorized Pills Scrollbar */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat.id
                    ? isDark
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20'
                      : 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : isDark
                      ? 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-800'
                      : 'bg-white/80 text-neutral-700 hover:text-neutral-950 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <LucideIcon name={cat.icon} size={13} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2.5 w-full md:w-auto self-stretch md:self-auto">
            {/* Real Search Input with dynamic badge */}
            <div className="relative flex-1 md:w-64">
              <span className="absolute inset-y-0 left-3.5 flex items-center text-neutral-400">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="Search web portals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs transition-colors focus:outline-none focus:ring-1.5 focus:ring-neutral-950 ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-850 text-slate-100 placeholder-slate-500'
                    : 'bg-white/90 border-neutral-200 text-neutral-800'
                } transition-all shadow-sm`}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-2 px-1 text-[10px] text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Workspace Views */}
        <div className="flex-1 flex justify-center items-stretch min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key="desktop-board"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="w-full"
            >
              {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 select-none">
                  
                  {/* Preconfigured and Custom Apps Map */}
                  {filteredApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isDeleteMode={false}
                      onDelete={() => {}}
                      theme={theme}
                    />
                  ))}

                </div>
              ) : (
                <div className={`flex-1 flex flex-col items-center justify-center p-12 text-center border rounded-[32px] shadow-sm max-w-md mx-auto my-auto self-center ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-inner ${
                    isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <FolderOpen size={26} />
                  </div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>No Web Apps found</h3>
                  <p className={`text-xs mt-1 max-w-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    We didn't find any app matching "{searchTerm}" under this filter category. Try revising your search!
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className={`mt-4 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-md flex items-center gap-1.5 mx-auto cursor-pointer ${
                      isDark ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Reset Filter Criteria
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Clean Bottom Attribution */}
      <footer className={`w-full text-center py-6 px-4 text-[10px] select-none border-t transition-colors duration-500 ${
        isDark 
          ? 'border-slate-900 bg-slate-950/20 text-slate-500' 
          : 'border-black/[0.03] bg-white/10 text-neutral-400'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p>Launcher Board — Built with premium modern typography and layout interactions.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Sparkles size={11} className={isDark ? 'text-indigo-400' : 'text-indigo-500'} /> Powered by React & Tailwind
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
