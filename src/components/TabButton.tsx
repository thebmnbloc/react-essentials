export default function TabButton({children, onSelect, isSelected}) {
  return <button 
  onClick={onSelect}
  className={`px-6 py-3 hover:bg-slate-800 rounded-lg ${isSelected && 'bg-white'}`}
  >
    {children}
  </button>
}