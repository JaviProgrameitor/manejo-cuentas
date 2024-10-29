
import { FaCircleQuestion } from "react-icons/fa6";

function Indicadores({pregunta = '', respuesta = ''}) {
  return (
    <div
      className="mt-4 bg-[rgb(36,36,36)] p-4 rounded-lg mx-auto w-full max-w-2xl"
    >
      <div
        className="flex items-center gap-2"
      >
        <FaCircleQuestion 
          className="text-purple-500"
        />
        <h3 className="font-semibold">{pregunta}</h3>
      </div>
      <p className="ml-6">{respuesta}</p>
    </div>
  )
}

export default Indicadores