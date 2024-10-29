import CuentasRouter from "../router/CuentasRouter"

function Cuentas(props) {
  const { cuentasStreaming, perfiles } = props

  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl">Cuentas Streaming</h1>
      <CuentasRouter 
        cuentasStreaming={cuentasStreaming}
        perfiles={perfiles}
      />
    </div>
  )
}

export default Cuentas