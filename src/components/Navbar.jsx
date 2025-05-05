const Navbar = ({ view, setView }) => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="font-bold text-xl">🎣 Galactic Fishing</h1>
          <div className="space-x-2">
            <button
              onClick={() => setView('leaderboard')}
              className={`px-3 py-1 rounded ${
                view === 'leaderboard' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              Leaderboard
            </button>
            <button
              onClick={() => setView('market')}
              className={`px-3 py-1 rounded ${
                view === 'market' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              Market
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  