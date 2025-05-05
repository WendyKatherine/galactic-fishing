import React from 'react'
import { useEffect, useState } from 'preact/hooks';

const Leaderboard = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('https://api-game.bloque.app/game/leaderboard');
        const data = await res.json();
        setPlayers(data.players || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
    }, []);

    if (loading) return <p className="text-white">Loading leaderboard...</p>;



    return (
        <div className="p-4 max-w-4xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-4">🌟 Galactic Leaderboard</h2>
        <table className="w-full text-left border border-gray-700">
          <thead className="bg-gray-800">
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
            {players.map((p) => (
              <tr key={p.username} className="border-t border-gray-700">
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
    )
}

export default Leaderboard