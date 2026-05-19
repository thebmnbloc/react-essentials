export default function TabButton({children, isSelected, ...props }) {
  return (
  <button
    className={`px-6 py-3 hover:bg-slate-800 rounded-lg ${isSelected && 'bg-white'}`} {...props}
    >
    {children}
  </button>
  )
}