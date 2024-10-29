
import Divisor from "../components/Divisor/Divisor";
import SeccionPasos from "../components/SeccionPasos/SeccionPasos";
import SeccionPrecios from "../components/SeccionPrecios/SeccionPrecios";
import SeccionTarjetas from "../components/SeccionTarjetas/SeccionTarjetas";

function Informacion() {
  return (
    <div
      className="flex flex-col items-center"
    >
      <h1 className="text-center text-2xl md:text-2xl">Información General</h1>
      <SeccionTarjetas />
      <SeccionPasos />
      <SeccionPrecios />
    </div>
  )
}

export default Informacion