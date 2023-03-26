import React from 'react';

const IndexPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: `url('glow.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontFamily: "'Courier New', sans-serif",
        fontSize: '40px',
      }}
    >
      <div style={{
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        Helium x Solana Migration is complete!
      </div>
    </div>
  );
};

export default IndexPage;
