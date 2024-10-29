
import { precios } from "../../data/pagos/cuentasStreaming"
import { IoIosPricetag } from "react-icons/io";

function SeccionPrecios() {
  return (
    <div className="mt-4 bg-[rgb(36,36,36)] p-4 rounded-lg w-full max-w-2xl">
      <h1 className="font-semibold">Precios</h1>
      <ul>
        {
          precios.map((precio, index) => 
            <li 
              className="flex items-center gap-1"
              key={index}
            >
              <IoIosPricetag 
                className="text-purple-600"
              />
              <span>{precio.tiempo} {precio.tiempo == 1 ? 'mes' : 'meses'}</span>: 
              <span className="text-gray-300">${precio.precio}</span>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default SeccionPrecios