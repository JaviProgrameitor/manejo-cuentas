
function CampoCorreo(props) {
  const { value, setValue } = props

  return (
    <div className="mb-5">
      <label 
        htmlFor="base-input" 
        className="block mb-2 text-sm font-medium text-white"
      >
        Correo Electrónico
      </label>
      <input 
        type="email" 
        id="base-input" 
        className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500" 
        value={value}
        required
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default CampoCorreo