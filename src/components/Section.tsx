export default function Section({title, children, ...props}) {
  return (
    <section {...props}>
      <h2 className="text-center text-white text-2xl">{title}</h2>
      {children}
    </section>
  )
}