import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';

interface ConsolePanelProps {
  isDark: boolean;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function ConsolePanel({ isDark, isCollapsed, onToggle }: ConsolePanelProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fullText = config.console.welcomeMessage;
    let index = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`border-t ${isDark ? 'border-xcode-border' : 'border-light-border'}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-2 px-3 py-1 text-[11px] cursor-pointer select-none justify-between ${
          isDark
            ? 'bg-xcode-toolbar text-xcode-text-dim hover:bg-white/5'
            : 'bg-light-toolbar text-light-text-dim hover:bg-black/5'
        }`}
      >
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 8 8"
            className={`w-2 h-2 transition-transform duration-150 ${isCollapsed ? '' : 'rotate-90'}`}
            fill="currentColor"
          >
            <path d="M2 0l4 4-4 4V0z" />
          </svg>
          <span>Debug Area</span>
        </div>

        {/* Decorative toolbar icons */}
        <div className={`flex items-center gap-2 ${isDark ? 'text-white/30' : 'text-black/30'}`}>
          <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="5.5" cy="5.5" r="4" />
            <line x1="8.5" y1="8.5" x2="12" y2="12" />
          </svg>
          <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 3l8 8M3 11l8-8" />
          </svg>
          <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M2 3h10M2 7h7M2 11h10" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 140 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              ref={scrollRef}
              className={`h-[140px] overflow-y-auto p-3 font-mono text-[11px] leading-relaxed ${
                isDark
                  ? 'bg-xcode-console-bg text-green-400'
                  : 'bg-[#f8f8f8] text-green-700'
              }`}
            >
              <pre className="whitespace-pre-wrap m-0">
                {displayedText}
                {isTyping && <span className="animate-pulse">▌</span>}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
