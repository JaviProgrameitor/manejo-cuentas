
import { format } from "@formkit/tempo"

function FilaPerfil(props) {
  const { selected, action } = props
  const { 
    nombreCompleto,
    nombreSpotify,
    tiempoContratado,
    precioPagado,
    fechaInicio,
    fechaFin,
    contacto,
    idPropietario,
    id
  } = props.datos

  return (
    <tr 
      className={`border-b-[1px] border-white box-border cursor-pointer ${selected === id && 'bg-purple-500'}`}
      onClick={e => {
        selected === id
          ? action('')
          : action(id)
      }}
    >
      <th className="p-4 font-normal text-center">
        {nombreCompleto}
      </th>
      <th className="p-4 font-normal text-center">
        {tiempoContratado}m
      </th>
      <th className="p-4 font-normal text-center">
        {format(fechaInicio, "DD/MM/YYYY", 'es')}
      </th>
      <th className="p-4 font-normal text-center">
        {format(fechaFin, "DD/MM/YYYY", 'es')}
      </th>
    </tr>
  )
}

export default FilaPerfil