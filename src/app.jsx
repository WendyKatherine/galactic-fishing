import Leaderboard from './components/Leaderboard';
import Market from './components/Market';
import './index.css';
import OfflineBanner from './components/OfflineBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-theme text-white p-4">
      <OfflineBanner />
      <h1 className="text-3xl font-normal mb-6 text-center font-sans p-4">Galactic Fishing Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg shadow">
          <Leaderboard />
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <Market />
        </div>
      </div>
    </div>
  );
}
