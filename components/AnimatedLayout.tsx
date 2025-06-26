'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    setShowCurtain(true);
    const timeout = setTimeout(() => {
      setShowCurtain(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Contenu toujours rendu avec opacité 1 */}
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          zIndex: 0,
          pointerEvents: showCurtain ? 'none' : 'auto',
          userSelect: showCurtain ? 'none' : 'auto',
        }}
      >
        {children}
      </motion.div>

      {/* Rideau vert qui masque progressivement le contenu */}
      {showCurtain && (
        <motion.div
          key="curtain"
          initial={{ width: '100%', left: 0 }}
          animate={{ width: 0, left: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            height: '100vh',
            backgroundColor: '#004d00',
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
}
