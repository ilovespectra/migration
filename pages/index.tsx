import { useState, useEffect } from 'react';

const IndexPage = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const migrationCountdownDate = new Date('April 18, 2023 10:00:00').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const migrationDistance = migrationCountdownDate - now;

      const days = Math.floor(migrationDistance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((migrationDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((migrationDistance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((migrationDistance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (migrationDistance < 0) {
        clearInterval(x);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

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
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        <h3>Helium ={'>'} Solana Countdown:</h3>
        <div>
          <span className="time-number">{countdown.days}</span> days{' '}
          <span className="time-number">{countdown.hours}</span> hours{' '}
          <span className="time-number">{countdown.minutes}</span> minutes{' '}
          <span className="time-number">{countdown.seconds}</span> seconds
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
