const pasosUnirse = [
  {
    titulo: 'Abrir la invitación',
    desc: 'Una vez recibido el link, ingresar y enlace debe dirigirte a la página de Spotify.'
  },
  {
    titulo: 'Iniciar sesión en Spotify',
    desc: 'Si ya tienes una cuenta de Spotify, inicia sesión con tu usuario y contraseña.'
  },
  {
    titulo: 'Confirmar la dirección',
    desc: 'Spotify solicitará que verifiques tu dirección. La dirección te la proporcionaremos nosotros.'
  },
  {
    titulo: 'Aceptar la invitación',
    desc: 'Después de confirmar la dirección, simplemente acepta la invitación y serás añadido al Plan Familiar.'
  },
  {
    titulo: 'Disfrutar del plan familiar',
    desc: 'Ahora podrás disfrutar de Spotify Premium como parte del plan familiar, con los beneficios de música sin anuncios, descargas sin conexión y calidad de sonido mejorada.'
  },
]

const precios = [
  {
    tiempo: 1,
    precio: 50
  },
  {
    tiempo: 3,
    precio: 120
  },
  {
    tiempo: 6,
    precio: 200
  },
]

const planesSuscripcion = [
  {
    tipo: 'Individual',
    espacios: 0
  },
  {
    tipo: 'Duo',
    espacios: 1
  },
  {
    tipo: 'Familiar',
    espacios: 5
  },
]

const tiemposServicio = [
  1,
  2,
  3,
  4,
  6,
  12
]

export {
  pasosUnirse,
  precios,
  planesSuscripcion,
  tiemposServicio
}