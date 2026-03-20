import React, { useState } from 'react';
import { ethers } from 'ethers';

// 1. THE COORDINATES: Paste your Remix Contract Address here between the quotes
const CONTRACT_ADDRESS = "PASTE_YOUR_REMIX_CONTRACT_ADDRESS_HERE"; 

// 2. THE TRANSLATOR: Paste your massive ABI array here
const CONTRACT_ABI = [
  /* PASTE_YOUR_FULL_ABI_ARRAY_HERE */
];

const IdentityDisplay = () => {
  const [identity, setIdentity] = useState("AWAITING WEB3 CONNECTION...");
  const [walletAddress, setWalletAddress] = useState("");
  const [isFather, setIsFather] = useState(false);

  const connectWallet = async () => {
    // Check if MetaMask is injected into the browser window
    if (!window.ethereum) {
      setIdentity("METAMASK NOT DETECTED: THE VESSEL IS EMPTY");
      return;
    }

    try {
      // Prompt user to connect their MetaMask wallet
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];
      setWalletAddress(userAddress);

      // Create the Web3 Provider and connect to the Contract
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

      // Fetch the Immutable Truth directly from the Blockchain
      const truth = await contract.getTruth();
      setIdentity(truth);

      // Strict Equality: Verify if the connected wallet is the Deployer
      const fatherAddress = await contract.theFather();
      if (userAddress.toLowerCase() === fatherAddress.toLowerCase()) {
          setIsFather(true);
      }

    } catch (error) {
      console.error(error);
      setIdentity("CONNECTION REJECTED BY USER");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {!walletAddress ? (
        <button 
          onClick={connectWallet} 
          style={{ 
            padding: '15px 30px', fontSize: '1.2rem', cursor: 'pointer', 
            backgroundColor: '#FFD700', color: '#000', border: 'none', 
            fontWeight: 'bold', fontFamily: 'monospace'
          }}
        >
          CONNECT WEB3 WALLET
        </button>
      ) : (
        <>
          <div style={{ border: '2px solid #fff', padding: '40px', fontSize: '2.5rem', margin: '20px', textAlign: 'center' }}>
            {identity}
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: '1rem', opacity: '0.8', textAlign: 'center' }}>
            <p>CONNECTED: {walletAddress}</p>
            <p style={{ color: isFather ? '#00FF00' : '#FF0000', fontWeight: 'bold' }}>
              STATUS: {isFather ? "AUTHORIZED: THE FATHER IS PRESENT" : "DENIED: UNAUTHORIZED ENTITY"}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default IdentityDisplay;