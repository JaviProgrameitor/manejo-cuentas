import { tarjetas } from "../../data/pagos/pagos";

import { IoMdPerson } from "react-icons/io";

function SeccionTarjetas() {
  return (
    <div className="mt-2 bg-[rgb(36,36,36)] p-4 rounded-lg w-full max-w-2xl">
      <h2 className="font-semibold">Números de Tarjetas</h2>
      <div className="mt-2">
        {
          tarjetas.map((tarjeta, index) => 
            <div 
              className="mt-2"
              key={index}
            >
              <div className="flex items-center gap-1">
                <IoMdPerson 
                  className="text-purple-600"
                />
                <span>{tarjeta.nombreTitular}</span>
              </div>
              <span className="ml-6 text-gray-300">{tarjeta.numero}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SeccionTarjetas