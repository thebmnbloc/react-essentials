export default function TabButton({children, onSelect}) {
  return <button 
  onClick={onSelect}
  className="px-6 py-3 hover:bg-slate-800 rounded-lg"
  >{children}
  </button>
}