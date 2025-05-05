import { useEffect, useState } from 'preact/hooks';

const OfflineBanner = () => {
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOffline = () => setOffline(true);
    const goOnline = () => setOffline(false);

    window.addEventListener('offline', goOffline);
    window.addEventListener('online', goOnline);

    return () => {
      window.removeEventListener('offline', goOffline);
      window.removeEventListener('online', goOnline);
    };
  }, []);

  return (
    offline && (
      <div className="bg-yellow-500 text-black text-center p-2 font-semibold">
        🔌 You are offline. Data may be out of date.
      </div>
    )
  );
};

export default OfflineBanner;
