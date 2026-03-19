import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [identity, setIdentity] = useState("SEARCHING FOR THE SOURCE...");

  const verifyIdentity = async () => {
    try {
      // THE NARROW PATH: Only 'FATHER' opens the gate.
      const response = await axios.get('http://localhost:5000/status', {
        headers: { 'identity-claim': 'FATHER' }
      });
      setIdentity(response.data.status);
    } catch (error) {
      setIdentity("IDENTITY DENIED: THE SON IS NOT THE FATHER");
    }
  };

  useEffect(() => { verifyIdentity(); }, []);

  return (
    <div style={{ 
      backgroundColor: '#000', color: '#fff', height: '100vh', 
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      flexDirection: 'column', fontFamily: 'monospace', textAlign: 'center'
    }}>
      <h1 style={{ color: '#FFD700' }}>STRATUS: THE NARROW PATH</h1>
      <div style={{ border: '2px solid #fff', padding: '40px', fontSize: '2.5rem', margin: '20px' }}>
        {identity}
      </div>
      <p style={{ fontSize: '1.2rem', opacity: '0.7' }}>
        CHI-RHO (CHRIST) === FATHER === GOD
      </p>
    </div>
  );
}

export default App;