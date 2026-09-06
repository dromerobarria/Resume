import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar, type FileSection } from './Sidebar';
import { Editor } from './Editor';
import { ConsolePanel } from './ConsolePanel';
import { StatusBar } from './StatusBar';

interface WindowProps {
  isDark: boolean;
}

function TrafficLights() {
  const [isHovered, setIsHovered] = useState(false);

  const buttons = [
    {
      bg: 'bg-[#ff5f57]',
      border: 'border-[#e0443e]',
      icon: (
        <svg viewBox="0 0 8 8" className="w-[6px] h-[6px]">
          <path d="M1 1l6 6M7 1L1 7" stroke="#4d0000" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      bg: 'bg-[#febc2e]',
      border: 'border-[#dea123]',
      icon: (
        <svg viewBox="0 0 8 2" className="w-[6px] h-[2px]">
          <line x1="0" y1="1" x2="8" y2="1" stroke="#5a3d00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      bg: 'bg-[#28c840]',
      border: 'border-[#1aab29]',
      icon: (
        <svg viewBox="0 0 8 8" className="w-[6px] h-[6px]">
          <path d="M0 1l3 3-3 3M8 7l-3-3 3-3" stroke="#003d00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttons.map((btn, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${btn.bg} border ${btn.border} flex items-center justify-center transition-all`}
        >
          {isHovered && btn.icon}
        </div>
      ))}
    </div>
  );
}

export function Window({ isDark }: WindowProps) {
  const [activeSection, setActiveSection] = useState<FileSection>('About');
  const [isConsoleCollapsed, setIsConsoleCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`flex flex-col rounded-xl overflow-hidden w-full max-w-6xl mx-auto ring-1 ring-inset ${
        isDark
          ? 'bg-xcode-bg ring-white/[0.06] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]'
          : 'bg-light-editor ring-black/[0.06] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]'
      }`}
      style={{ height: 'calc(100vh - 120px)' }}
    >
      {/* Toolbar */}
      <div
        className={`flex items-center h-11 px-4 shrink-0 gap-3 ${
          isDark ? 'bg-xcode-toolbar border-b border-xcode-border' : 'bg-light-toolbar border-b border-light-border'
        }`}
      >
        <TrafficLights />

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`md:hidden text-[14px] cursor-pointer ml-1 ${
            isDark ? 'text-xcode-text-dim' : 'text-light-text-dim'
          }`}
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
            <rect y="2" width="16" height="1.5" rx="0.75" />
            <rect y="7" width="16" height="1.5" rx="0.75" />
            <rect y="12" width="16" height="1.5" rx="0.75" />
          </svg>
        </button>

        {/* Center toolbar area */}
        <div className="flex-1 flex items-center justify-center gap-3">
          {/* Play button */}
          <div className={`flex items-center gap-1 ${isDark ? 'text-white/60' : 'text-black/50'}`}>
            <svg viewBox="0 0 12 14" className="w-3 h-3.5" fill="currentColor">
              <path d="M1 1v12l10-6L1 1z" />
            </svg>
          </div>

          <span
            className={`text-[12px] font-sans ${
              isDark ? 'text-xcode-text-dim' : 'text-light-text-dim'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className={isDark ? 'text-xcode-text' : 'text-light-text'}>DanielRomero</span>
            {' > '}
            <span className="hidden sm:inline">iPhone 15 Pro</span>
          </span>
        </div>

        {/* Right toolbar icons (decorative) */}
        <div className={`hidden sm:flex items-center gap-2 ${isDark ? 'text-white/40' : 'text-black/30'}`}>
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
            <rect x="1" y="1" width="6" height="6" rx="1" />
            <rect x="9" y="1" width="6" height="6" rx="1" />
            <rect x="1" y="9" width="6" height="6" rx="1" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
            <rect x="1" y="3" width="14" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="5" y1="3" x2="5" y2="13" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} isDark={isDark} />
        </div>

        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div className="absolute inset-0 z-10 md:hidden flex">
            <div className={isDark ? 'bg-xcode-sidebar' : 'bg-light-sidebar'}>
              <Sidebar
                activeSection={activeSection}
                onSelectSection={(section) => {
                  setActiveSection(section);
                  setIsSidebarOpen(false);
                }}
                isDark={isDark}
              />
            </div>
            <div className="flex-1 bg-black/30" onClick={() => setIsSidebarOpen(false)} />
          </div>
        )}

        {/* Editor */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Tab bar */}
          <div
            className={`flex items-center h-[30px] px-2 text-[11px] shrink-0 border-b ${
              isDark
                ? 'bg-xcode-sidebar border-xcode-border'
                : 'bg-light-sidebar border-light-border'
            }`}
          >
            <div
              className={`flex items-center gap-1.5 px-3 py-1 text-[11px] border-t border-x rounded-t ${
                isDark
                  ? 'bg-xcode-editor text-xcode-text border-xcode-border'
                  : 'bg-light-editor text-light-text border-light-border'
              }`}
            >
              <SwiftFileIcon />
              {activeSection}.swift
            </div>
          </div>

          <Editor activeSection={activeSection} isDark={isDark} />
        </div>
      </div>

      {/* Console */}
      <ConsolePanel
        isDark={isDark}
        isCollapsed={isConsoleCollapsed}
        onToggle={() => setIsConsoleCollapsed(!isConsoleCollapsed)}
      />

      {/* Status bar */}
      <StatusBar isDark={isDark} />
    </motion.div>
  );
}

function SwiftFileIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0">
      <rect width="16" height="16" rx="3" fill="#f05138" />
      <path
        d="M11.5 11.5c-.2.1-.5.2-.8.3-.3.1-.7.1-1 .1-1.7 0-3.2-.8-4.3-2.1 1.3.7 2.7 1 3.8.7C7.8 9.5 6.5 8 5.7 6.3c1.1 1 2.5 1.8 3.6 2-.1-.5-.2-.9-.4-1.4C8.3 5.2 7 3.8 5.5 3c1.8.9 3.3 2.3 4.2 3.8.1-.6 0-1.3-.3-2 .9 1.3 1.2 2.9.7 4.3 0 .1-.1.3-.2.4.6-.2 1.1-.5 1.5-.9-.1.9-.5 1.7-1 2.3l.1.1z"
        fill="white"
      />
    </svg>
  );
}
