const CardItem = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
      <p className="text-sm text-gray-300 mb-2">{item.description}</p>
      <p className="text-sm font-bold text-yellow-400">💰 {item.cost} gold</p>
      <span className="text-xs text-gray-400 uppercase tracking-wide">{item.type}</span>
    </div>
  )
}

export default CardItem
