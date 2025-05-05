const CardItem = ({ item }) => {
  return (
    <div className="bg-marketcard rounded-lg p-4 border border-border hover:shadow-lg transition">
      <h3 className="text-sm font-sans font-bold mb-1">{item.name}</h3>
      <p className="text-xs font-light text-gray-300 mb-2">{item.description}</p>
      <p className="text-sm font-bold text-button">💰 {item.cost} gold</p>
      <span className="text-xs text-gray-400 uppercase tracking-wide">{item.type}</span>
    </div>
  )
}

export default CardItem
