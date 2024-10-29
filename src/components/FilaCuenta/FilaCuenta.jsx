
import { GoAlertFill } from "react-icons/go";

import { format } from "@formkit/tempo"

function FilaCuenta(props) {
  const { selected, action } = props
  const { planSuscripcion, tiempoServicio, fechaInicio, fechaFinal, alertas, espaciosLibres, id } = props.datos

  return (
    <tr 
      className={`border-b-[1px] border-white box-border cursor-pointer ${selected === id && 'bg-purple-500'}`}
      onClick={e => {
        selected === id
          ? action('')
          : action(id)
      }}
    >
      <th className="p-4 font-normal text-center flex justify-center">
        {alertas ? <GoAlertFill className="text-red-500" /> : 'S/A'}
      </th>
      <th className="p-4 font-normal text-center">
        {espaciosLibres}
      </th>
      <th className="p-4 font-normal text-center">
        {planSuscripcion}
      </th>
      <th className="p-4 font-normal text-center">
        {tiempoServicio}m
      </th>
      <th className="p-4 font-normal text-center">
        {format(fechaInicio, "DD/MM/YYYY", 'es')}
      </th>
      <th className="p-4 font-normal text-center">
        {format(fechaFinal, "DD/MM/YYYY", 'es')}
      </th>
    </tr>
  )
}

export default FilaCuenta