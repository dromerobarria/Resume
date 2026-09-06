import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { MenuBar } from './components/MenuBar';
import { Window } from './components/Window';
import { Dock } from './components/Dock';
import { config } from './config';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <meta property="og:title" content={config.seo.title} />
        <meta property="og:description" content={config.seo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={config.seo.title} />
        <meta name="twitter:description" content={config.seo.description} />
      </Helmet>

      <div className={`h-screen overflow-hidden relative ${isDark ? 'desktop-dark' : 'desktop-light'}`}>
        <MenuBar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

        <main className="pt-8 pb-20 px-4 flex items-start justify-center h-full">
          <Window isDark={isDark} />
        </main>

        <Dock isDark={isDark} />
      </div>
    </HelmetProvider>
  );
}

export default App;
