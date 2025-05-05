import React from 'react';
import { useEffect, useState } from 'preact/hooks';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://api-game.bloque.app/game/leaderboard');
        const data = await res.json();

        localStorage.setItem('cachedLeaderboard', JSON.stringify(data.players || []));

        setPlayers(data.players || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard, loading from localStorage:', error);
        
        const cached = localStorage.getItem('cachedLeaderboard');
        if (cached) {
          setPlayers(JSON.parse(cached));
        }

        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <p className="text-white">Loading leaderboard...</p>;

  const visiblePlayers = showAll ? players : players.slice(0, 5);

  return (
    <div className="p-4 max-w-4xl mx-auto text-white">
      <h2 className="text-xl font-medium mb-4 font-sans">Leaderboard</h2>
      {/* sesktop version */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-left border border-border">
          <thead className="bg-marketcard">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">User</th>
              <th className="p-2">Level</th>
              <th className="p-2">XP</th>
              <th className="p-2">Gold</th>
              <th className="p-2">Emojis</th>
              <th className="p-2">Infected?</th>
            </tr>
          </thead>
          <tbody>
            {visiblePlayers.map((p) => (
              <tr key={p.username} className="border-t border-border rounded-lg">
                <td className="p-2">{p.rank}</td>
                <td className="p-2">{p.username}</td>
                <td className="p-2">{p.level}</td>
                <td className="p-2">{p.xp}</td>
                <td className="p-2">{p.gold}</td>
                <td className="p-2">{p.fishEmojis || '—'}</td>
                <td className="p-2">{p.isInfected ? '🧪' : '✅'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* movil version */}
      <div className="block md:hidden space-y-4">
        {visiblePlayers.map((p) => (
          <div
            key={p.username + '-mobile'}
            className="border border-border bg-marketcard rounded-lg p-4 shadow"
          >
            <p><strong>#</strong> {p.rank}</p>
            <p><strong>User:</strong> {p.username}</p>
            <p><strong>Level:</strong> {p.level}</p>
            <p><strong>XP:</strong> {p.xp}</p>
            <p><strong>Gold:</strong> {p.gold}</p>
            <p><strong>Emojis:</strong> {p.fishEmojis || '—'}</p>
            <p><strong>Infected?</strong> {p.isInfected ? '🧪' : '✅'}</p>
          </div>
        ))}
      </div>




      {players.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-button hover:bg-buttonhover text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            {showAll ? 'View less' : 'See more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
