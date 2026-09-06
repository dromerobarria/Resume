import { useState, useEffect } from 'react';

interface MenuBarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 17 20" fill="currentColor">
      <path d="M15.5 14.4c-.4.9-.6 1.3-1.1 2.1-.7 1.1-1.7 2.5-2.9 2.5-1.1.1-1.4-.7-2.9-.7s-1.9.7-3 .8c-1.2.1-2.1-1.5-2.8-2.6C1.2 13.8.5 10.7 1.7 8.5c.8-1.5 2.2-2.5 3.7-2.5 1.4 0 2.2.7 3.4.7 1.1 0 1.8-.7 3.3-.7 1.3 0 2.6.7 3.4 2-.1.1-2 1.2-2 3.5 0 2.7 2.4 3.6 2.5 3.7-.1.1-.4 1.3-1 2.2zM11 2.5c.5-.7.9-1.6.8-2.5-.8.1-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.4.8 0 1.7-.4 2.2-1.1z"/>
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 14" fill="none">
      <rect x="0.5" y="0.5" width="23" height="13" rx="2.5" stroke="currentColor" strokeWidth="1" />
      <rect x="24.5" y="4" width="2.5" height="6" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="2" y="2" width="16" height="10" rx="1.5" fill="#34c759" />
    </svg>
  );
}

function ControlCenterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="currentColor">
      <rect x="1" y="3" width="10" height="4" rx="2" />
      <rect x="7" y="11" width="10" height="4" rx="2" />
    </svg>
  );
}

export function MenuBar({ isDark, onToggleTheme }: MenuBarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = ['File', 'Edit', 'View', 'Navigate', 'Window', 'Help'];

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[26px] flex items-center justify-between px-4 text-[13px] select-none font-sans backdrop-blur-xl ${
        isDark
          ? 'bg-black/30 text-white/90'
          : 'bg-white/60 text-black/80 border-b border-black/10'
      }`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="flex items-center gap-5">
        <AppleIcon className="w-[14px] h-[17px] opacity-90" />
        <span className="font-semibold">Xcode</span>
        {menuItems.map((item) => (
          <span
            key={item}
            className="cursor-default hover:opacity-70 hidden sm:inline"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <BatteryIcon className="w-[22px] h-[11px] opacity-80 hidden sm:block" />
        <WifiIcon className="w-[16px] h-[16px] opacity-80 hidden sm:block" />
        <ControlCenterIcon className="w-[14px] h-[14px] opacity-80 hidden sm:block" />
        <button
          onClick={onToggleTheme}
          className="cursor-pointer hover:opacity-70"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 1 0 9 9c0-.5 0-1-.1-1.4A5.4 5.4 0 0 1 13.4 3.1 9.1 9.1 0 0 0 12 3z" />
            </svg>
          ) : (
            <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
        <span className="opacity-80 text-[12px]">
          {formattedDate} {formattedTime}
        </span>
      </div>
    </div>
  );
}
