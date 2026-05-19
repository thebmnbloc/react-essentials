export default function Tabs({ children, buttons, ButtonsController}) {
  return (
    <>
      <ButtonsController>{buttons}</ButtonsController>
      {children}
    </>
  )
}