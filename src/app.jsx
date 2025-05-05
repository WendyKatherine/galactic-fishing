import Leaderboard from './components/Leaderboard';
import Market from './components/Market';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-pink-600 text-white p-4 rounded-lg">
        🦄 ¡Tailwind ahora SÍ está funcionando!
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">🎣 Galactic Fishing Game</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <Leaderboard />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <Market />
        </div>
      </div>
    </div>
  );
}
