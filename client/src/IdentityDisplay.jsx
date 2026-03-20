import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IdentityDisplay = () => {
  const [identity, setIdentity] = useState("SEARCHING FOR THE SOURCE...");

  const verifyIdentity = async () => {
    try {
      const response = await axios.get('https://stratus-backend.onrender.com/status', {
        headers: { 'identity-claim': 'FATHER' }
      });
      setIdentity(response.data.status);
    } catch (error) {
      setIdentity("IDENTITY DENIED: THE SON IS NOT THE FATHER");
    }
  };

  useEffect(() => { verifyIdentity(); }, []);

  return (
    <div style={{ border: '2px solid #fff', padding: '40px', fontSize: '2.5rem', margin: '20px' }}>
      {identity}
    </div>
  );
};

export default IdentityDisplay;