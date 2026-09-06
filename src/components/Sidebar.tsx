import { useState } from 'react';

export type FileSection = 'About' | 'Experience' | 'Projects' | 'Skills' | 'Education' | 'Contact';

const files: { name: string; section: FileSection }[] = [
  { name: 'About.swift', section: 'About' },
  { name: 'Experience.swift', section: 'Experience' },
  { name: 'Projects.swift', section: 'Projects' },
  { name: 'Skills.swift', section: 'Skills' },
  { name: 'Education.swift', section: 'Education' },
  { name: 'Contact.swift', section: 'Contact' },
];

function SwiftIcon() {
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

function FolderIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none">
      {isOpen ? (
        <>
          <path d="M1.5 3.5a1 1 0 0 1 1-1H6l1.5 1.5H13a1 1 0 0 1 1 1V5H2.5V3.5z" fill="#66b3ff" />
          <path d="M1 5.5h13l-1.5 7.5H2.5L1 5.5z" fill="#4da6ff" />
        </>
      ) : (
        <>
          <path d="M1.5 3.5a1 1 0 0 1 1-1H6l1.5 1.5H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1V3.5z" fill="#4da6ff" />
          <path d="M1.5 5H14.5" stroke="#3d8ad9" strokeWidth="0.5" />
        </>
      )}
    </svg>
  );
}

function XcodeProjectIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0">
      <rect width="16" height="16" rx="3" fill="#1c93e3" />
      <path d="M4 4l4 4-4 4M8 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

interface SidebarProps {
  activeSection: FileSection;
  onSelectSection: (section: FileSection) => void;
  isDark: boolean;
}

export function Sidebar({ activeSection, onSelectSection, isDark }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`w-56 shrink-0 border-r overflow-y-auto text-[12px] select-none h-full ${
        isDark
          ? 'bg-xcode-sidebar border-xcode-border text-xcode-text'
          : 'bg-light-sidebar border-light-border text-light-text'
      }`}
    >
      {/* Header */}
      <div
        className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${
          isDark ? 'text-xcode-text-dim' : 'text-light-text-dim'
        }`}
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Project Navigator
      </div>

      <div className="px-2 pb-3">
        {/* Xcodeproj root */}
        <div
          className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 py-[2px] px-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span
            className={`text-[8px] transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''} ${
              isDark ? 'text-xcode-text-dim' : 'text-light-text-dim'
            }`}
          >
            ▶
          </span>
          <XcodeProjectIcon />
          <span className="font-semibold text-[12px]">DanielRomero.xcodeproj</span>
        </div>

        {isExpanded && (
          <div className="ml-3 mt-0.5">
            {/* Sources folder */}
            <div className="flex items-center gap-1.5 py-[2px] px-1 ml-1">
              <span
                className={`text-[8px] rotate-90 ${
                  isDark ? 'text-xcode-text-dim' : 'text-light-text-dim'
                }`}
              >
                ▶
              </span>
              <FolderIcon isOpen={true} />
              <span className="text-[12px]">Sources</span>
            </div>

            {/* Files */}
            <div className="ml-6 mt-0.5 flex flex-col gap-[1px]">
              {files.map(({ name, section }) => (
                <button
                  key={section}
                  onClick={() => onSelectSection(section)}
                  className={`flex items-center gap-1.5 py-[3px] px-2 rounded text-left text-[12px] transition-colors cursor-pointer w-full ${
                    activeSection === section
                      ? 'bg-xcode-selection text-white'
                      : isDark
                      ? 'hover:bg-white/5 text-xcode-text'
                      : 'hover:bg-black/5 text-light-text'
                  }`}
                >
                  <SwiftIcon />
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
