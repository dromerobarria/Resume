import type { FileSection } from './Sidebar';

interface StatusBarProps {
  isDark: boolean;
  activeSection?: FileSection;
}

export function StatusBar({ isDark, activeSection = 'About' }: StatusBarProps) {
  return (
    <div
      className={`flex items-center justify-between px-3 h-[22px] text-[11px] select-none font-sans ${
        isDark
          ? 'bg-xcode-statusbar text-white'
          : 'bg-[#007acc] text-white'
      }`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
          <circle cx="6" cy="6" r="5" stroke="#34c759" strokeWidth="1.5" />
          <path d="M3.5 6l2 2 3-3.5" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-medium">Build Succeeded</span>
      </div>
      <div className="flex items-center gap-4 opacity-80">
        <span>UTF-8</span>
        <span>Spaces: 4</span>
        <span>Swift</span>
        <span>{activeSection}.swift</span>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
}
