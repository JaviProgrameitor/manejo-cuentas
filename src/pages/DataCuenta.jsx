import { format, iso8601 } from "@formkit/tempo"

import Indicadores from "../components/Indicadores/Indicadores"

function DataCuenta({cuenta = {}}) {
  const { 
    correo = '',
    password = '',
    planSuscripcion = '',
    espacios = '',
    tiempoServicio = '',
    fechaInicio = '',
    fechaFinal = '',
    fechaAgregado = '',
    espaciosLibres,
    id = ''
  } = cuenta

  const datos = [
    {
      title: 'Correo',
      value: correo
    },
    {
      title: 'Contraseña',
      value: password
    },
    {
      title: 'Plan de Suscripción',
      value: planSuscripcion
    },
    {
      title: 'Espacios Libres',
      value: `${espaciosLibres}`
    },
    {
      title: 'Tiempo de Suscripción',
      value: `${tiempoServicio}m`
    },
    {
      title: 'Fecha Inicio Suscripción',
      value: iso8601(fechaInicio) ? format(fechaInicio, "dddd, MMMM D, YYYY", 'es') : ''
    },
    {
      title: 'Fecha Fin Suscripción',
      value: iso8601(fechaFinal) ? format(fechaFinal, "dddd, MMMM D, YYYY", 'es') : ''
    },
    {
      title: 'Fecha Agregada',
      value: fechaAgregado ? format(new Date(fechaAgregado), "dddd, MMMM D, YYYY", 'es') : ''
    },
  ]

  return (
    <div>
      <h2 className="mt-4 max-w-2xl mx-auto md:text-2xl">Información</h2>
      <div>
        {
          datos.map((dato, index) =>
            <Indicadores 
              pregunta={dato.title}
              respuesta={dato.value}
              key={index}
            />
          )
        }
      </div>
    </div>
  )
}

export default DataCuenta