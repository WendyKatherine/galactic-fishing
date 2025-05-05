import { useEffect, useState } from 'preact/hooks'
import CardItem from './CardItem'

const Market = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarket = async () => {
            try {
                const res = await fetch('https://api-game.bloque.app/game/market');
                const data = await res.json();
                setItems(data.items || []);
                setLoading(false);
              } catch (error) {
                console.error('Error fetching market:', error);
                setLoading(false);
              }
            };

            fetchMarket();
        }, []);
    
    if (loading) return <p>Loading Market please wait</p>

  return (
    <div className="p-4 max-w-4xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">🛒 Galactic Market</h2>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-2">
        {items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Market