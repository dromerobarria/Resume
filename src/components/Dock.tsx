import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import dockSwitcherIcon from '../assets/dockswitcher.png';
import fuelIcon from '../assets/fuel.svg';

interface DockItemConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  gradient: string;
  iconUrl?: string;
}

const dockItems: DockItemConfig[] = [
  // --- Apps (Xcode & personal apps) ---
  {
    id: 'xcode',
    label: 'Xcode',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4c/6d/8c/4c6d8c86-803d-e46c-d5a1-e41da9147ebc/Xcode-0-85-220-0-6-0-0-2x-P3-0-0.png/512x512bb.png',
    icon: null,
  },
  {
    id: 'chile-premier',
    label: 'Chile Premier',
    href: 'https://apps.apple.com/cl/app/chile-premier/id6749191545',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f5/e4/e4/f5e4e4b6-b502-9075-af53-d3dfecdb4957/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    icon: null,
  },
  {
    id: 'cuandoesferiado',
    label: 'CuandoEsFeriado',
    href: 'https://apps.apple.com/cl/app/cuandoesferiado/id6760665917',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/37/3e/e1373e7f-2f36-2c0b-70fc-b4f5d232b5b3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    icon: null,
  },
  {
    id: 'planta-feliz',
    label: 'Planta Feliz',
    href: 'https://apps.apple.com/cl/app/planta-feliz/id6752497061',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/21/4d/c2/214dc28a-3b8c-3fdc-5d31-e4cdc1212aee/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    icon: null,
  },
  {
    id: 'subsight',
    label: 'SubSight',
    href: 'https://apps.apple.com/cl/app/subsight/id6746824760',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/d7/0e/80d70e73-8b96-d78d-6d61-a9a6a2ff13e8/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/512x512bb.jpg',
    icon: null,
  },
  {
    id: 'appstore',
    label: 'My Apps on App Store',
    href: 'https://apps.apple.com/cl/developer/daniel-romero/id893059976',
    gradient: '',
    iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f7/db/94/f7db9418-3cfc-81e8-9304-fc13ce9fabe2/AppIcon-Release-0-1x_U007epad-0-0-0-1-0-85-220-0.png/512x512bb.jpg',
    icon: null,
  },
  {
    id: 'dockswitcher',
    label: 'DockSwitcher',
    href: 'https://dockswitcher-landing.vercel.app/',
    gradient: '',
    iconUrl: dockSwitcherIcon,
    icon: null,
  },
  {
    id: 'fuel',
    label: 'Fuel',
    href: 'https://fuel-landing-hazel.vercel.app/',
    gradient: '',
    iconUrl: fuelIcon,
    icon: null,
  },
  {
    id: 'blog',
    label: 'Blog (Substack)',
    href: 'https://dromeroios.substack.com/',
    gradient: 'from-[#ff6719] to-[#d44800]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%]" fill="white">
        <path d="M22.5 6.5H1.5V4.8h21v1.7zm0 4.3H1.5v8.4l10.5-5.9 10.5 5.9v-8.4zm0-2.6H1.5V6.5h21v1.7z" />
      </svg>
    ),
  },
  // --- Social & contact links ---
  {
    id: 'terminal',
    label: 'Terminal',
    gradient: 'from-[#2d2d2d] to-[#1a1a1a]',
    icon: (
      <div className="text-green-400 text-[14px] font-mono font-bold leading-none">
        <span className="text-[16px]">&gt;_</span>
      </div>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    href: config.profile.github,
    gradient: 'from-[#333] to-[#1a1a1a]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[55%] h-[55%]" fill="white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: config.profile.linkedin,
    gradient: 'from-[#0077b5] to-[#005fa3]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%]" fill="white">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'mail',
    label: 'Email',
    href: `mailto:${config.profile.email}`,
    gradient: 'from-[#1c8adb] to-[#1565c0]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%]" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'Banana Split',
    href: 'https://www.youtube.com/@BananaSplitDev',
    gradient: 'from-[#ff0000] to-[#cc0000]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[50%] h-[50%]" fill="white">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
];

// Separator goes after the personal apps group (index 9 = Terminal, first social item)
const SEPARATOR_INDEX = 9;

interface DockIconProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  item: DockItemConfig;
  isDark: boolean;
}

function DockIcon({ mouseX, item, isDark }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 68, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = () => {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileTap={{ y: -20 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className={`absolute -top-10 px-3 py-1 rounded-md text-[12px] font-sans whitespace-nowrap z-10 ${
              isDark
                ? 'bg-[#2a2a2a] text-white/90 border border-white/10'
                : 'bg-white text-black/80 border border-black/10 shadow-md'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {item.label}
            <div
              className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 ${
                isDark ? 'bg-[#2a2a2a] border-r border-b border-white/10' : 'bg-white border-r border-b border-black/10'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {item.iconUrl ? (
        <img
          src={item.iconUrl}
          alt={item.label}
          className="w-full h-full icon-squircle shadow-lg object-cover"
          draggable={false}
        />
      ) : (
        <div
          className={`w-full h-full icon-squircle bg-gradient-to-b ${item.gradient} flex items-center justify-center shadow-lg`}
        >
          {item.icon}
        </div>
      )}
    </motion.div>
  );
}

interface DockProps {
  isDark: boolean;
}

export function Dock({ isDark }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-2 left-1/2 -translate-x-1/2 z-40
        flex items-end gap-[6px] px-3 py-2
        rounded-2xl ${isDark ? 'dock-glass-dark' : 'dock-glass-light'}`}
    >
      {dockItems.map((item, i) => (
        <div key={item.id} className="flex items-end gap-[6px]">
          {i === SEPARATOR_INDEX && (
            <div
              className={`w-px h-8 mx-1 ${
                isDark ? 'bg-white/15' : 'bg-black/15'
              }`}
            />
          )}
          <DockIcon mouseX={mouseX} item={item} isDark={isDark} />
        </div>
      ))}
    </motion.div>
  );
}
