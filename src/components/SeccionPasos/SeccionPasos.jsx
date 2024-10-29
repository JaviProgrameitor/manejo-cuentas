
import { pasosUnirse } from "../../data/pagos/cuentasStreaming";
import { FaHandPointRight } from "react-icons/fa";

function SeccionPasos() {
  return (
    <div className="mt-4 bg-[rgb(36,36,36)] p-4 rounded-lg w-full max-w-2xl">
      <h2 className="font-semibold">Pasos para unirse al Plan Familiar</h2>
      <ol className="mt-2 space-y-3">
        {
          pasosUnirse.map((paso, index) =>
            <li
              key={index}
            >
              <div
                className="flex items-center gap-1"
              >
                <FaHandPointRight 
                  className="text-purple-600"
                />
                {paso.titulo}
              </div>
              <ul className="ml-6">
                <li className="text-gray-300">{paso.desc}</li>
              </ul>
            </li>
          )
        }
      </ol>
    </div>
  )
}

export default SeccionPasos