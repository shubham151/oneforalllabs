'use client';
import { useState } from 'react';
import { Search, Terminal, Shield, FileJson, Clock, Code, Settings, Globe, Database, Activity, MessageSquare } from 'lucide-react';

const TOOLS = [
  {
    id: 'impact',
    name: 'Impact Dashboard',
    desc: 'Measure engineering velocity, PR metrics, and calculate true ROI for your development teams in real-time.',
    url: 'https://impact.oneforalllabs.com',
    category: 'business',
    featured: true,
    icon: <Activity size={20} />,
    color: 'emerald'
  },
  {
    id: 'cron',
    name: 'Cron Studio',
    desc: 'Visually build complex cron schedules, decrypt existing ones into plain English, and plot upcoming execution times.',
    url: 'https://cron.oneforalllabs.com',
    category: 'dev',
    featured: true,
    icon: <Clock size={20} />,
    color: 'indigo'
  },
  {
    id: 'webhook',
    name: 'Webhook Catcher',
    desc: 'Generate instant, temporary endpoints to inspect, debug, and log incoming HTTP webhook payloads.',
    url: 'https://catch.oneforalllabs.com',
    category: 'dev',
    featured: true,
    icon: <Database size={20} />,
    color: 'sky'
  },
  {
    id: 'text',
    name: 'Text Sanitizer',
    desc: 'Strip API keys, secrets, PII, and sensitive tokens from massive logs before sharing them safely.',
    url: 'https://sanitize.oneforalllabs.com',
    category: 'security',
    icon: <Shield size={18} />,
    color: 'red'
  },
  {
    id: 'jwt',
    name: 'JWT Debugger',
    desc: 'Decode JSON Web Tokens and inspect headers, payloads, and expiries instantly entirely offline.',
    url: 'https://decode.oneforalllabs.com',
    category: 'security',
    icon: <Settings size={18} />,
    color: 'amber'
  },
  {
    id: 'json',
    name: 'JSON Formatter',
    desc: 'Beautify, format, minify, and validate complex JSON payloads safely in your browser.',
    url: 'https://format.oneforalllabs.com',
    category: 'formatting',
    icon: <FileJson size={18} />,
    color: 'pink'
  },
  {
    id: 'env',
    name: 'Env Validator',
    desc: 'Parse .env files, find duplicates, check for syntax errors, and sort variables instantly.',
    url: 'https://env.oneforalllabs.com',
    category: 'dev',
    icon: <Terminal size={18} />,
    color: 'violet'
  },
  {
    id: 'zone',
    name: 'Timezone Slider',
    desc: 'Visually slide across a 24-hour timeline to synchronize global meetings across multiple timezones.',
    url: 'https://zone.oneforalllabs.com',
    category: 'formatting',
    icon: <Globe size={18} />,
    color: 'teal'
  }
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('all');

  const filteredTools = TOOLS.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCat === 'all' || t.category === activeCat;
    return matchesSearch && matchesCat;
  });

  const featured = filteredTools.filter(t => t.featured);
  const regular = filteredTools.filter(t => !t.featured);

  return (
    <div className="min-h-screen relative overflow-hidden bg-bg text-ink font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[50%] w-[80%] h-[60%] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[50%] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Navigation / Social Links */}
      <nav className="absolute top-0 left-0 w-full p-6 flex justify-end gap-6 z-20">
        <a href="https://github.com/oneforalllabs/discussions/discussions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
          <MessageSquare size={16} /> Discussions
        </a>
        <a href="https://github.com/shubham151" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/shubham-kumar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
      </nav>

      <div className="max-w-[1180px] mx-auto px-6 py-24 relative z-10">
        
        {/* Hero */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface/50 text-[11px] font-semibold text-muted uppercase tracking-widest mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Zero-Build · 100% Free · Offline Capable
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            One For All Labs
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            The ultimate ecosystem of single-purpose micro-tools for developers. <br/>
            No installs, no accounts, no telemetry — just pure speed.
          </p>
        </header>

        {/* Controls: Tags on Left, Search on Right */}
        <div className="flex flex-col-reverse md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              { id: 'all', label: 'All Tools' },
              { id: 'dev', label: 'Dev & QA' },
              { id: 'security', label: 'Security' },
              { id: 'formatting', label: 'Formatting' },
              { id: 'business', label: 'Business' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeCat === cat.id 
                    ? 'bg-accent/10 border-accent/30 text-accent shadow-[0_0_15px_rgba(12,106,96,0.15)]' 
                    : 'bg-surface/50 border-line text-muted hover:border-line-strong hover:text-ink backdrop-blur-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" size={18} />
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface/80 border border-line rounded-full py-3 pl-12 pr-4 text-sm text-ink focus:border-accent outline-none backdrop-blur-sm transition-colors"
            />
          </div>
        </div>

        {/* Bento Grid with dense packing to eliminate gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-dense">
          {/* Featured Cards */}
          {featured.map(tool => (
            <a 
              key={tool.id} 
              href={tool.url}
              className="group col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between bg-surface/40 border border-line hover:border-accent/50 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${tool.color}-500/10 border border-${tool.color}-500/20 flex items-center justify-center text-${tool.color}-500 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest text-${tool.color}-500 bg-${tool.color}-500/10 px-3 py-1 rounded-full border border-${tool.color}-500/20`}>
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-ink mb-3">{tool.name}</h2>
                <p className="text-muted leading-relaxed max-w-lg">{tool.desc}</p>
              </div>
            </a>
          ))}

          {/* Regular Cards */}
          {regular.map(tool => (
            <a 
              key={tool.id} 
              href={tool.url}
              className="group col-span-1 flex flex-col justify-between bg-surface/40 border border-line hover:border-accent/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-${tool.color}-500/10 border border-${tool.color}-500/20 flex items-center justify-center text-${tool.color}-500 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-ink mb-2">{tool.name}</h2>
                <p className="text-sm text-muted leading-relaxed">{tool.desc}</p>
              </div>
            </a>
          ))}

          {filteredTools.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-muted text-lg">No tools found matching your search.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-line text-center text-xs text-muted font-mono uppercase tracking-widest">
          100% In-Browser · Open Source · Designed for Speed
        </footer>

      </div>
    </div>
  );
}
