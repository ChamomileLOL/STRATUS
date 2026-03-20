import React, { lazy, Suspense } from 'react';

// THE AWAKENING: Lazy load the component
const IdentityDisplay = lazy(() => import('./IdentityDisplay'));

function App() {
  return (
    <div style={{ 
      backgroundColor: '#000', color: '#fff', height: '100vh', 
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexDirection: 'column', fontFamily: 'monospace', textAlign: 'center'
    }}>
      <h1 style={{ color: '#FFD700' }}>STRATUS: THE NARROW PATH</h1>
      
      {/* THE SUSPENSE: Providing a fallback while the chunk loads */}
      <Suspense fallback={<div style={{ fontSize: '1.5rem', color: '#FFD700' }}>MANIFESTING...</div>}>
        <IdentityDisplay />
      </Suspense>

      <p style={{ fontSize: '1.2rem', opacity: '0.7' }}>
        CHI-RHO (CHRIST) === FATHER === GOD
      </p>
    </div>
  );
}

export default App;