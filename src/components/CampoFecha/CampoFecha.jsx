
import { iso8601 } from "@formkit/tempo"
import { Toaster, toast } from 'sonner'

function CampoFecha(props) {
  const { title, value, setValue } = props

  function alertaDate() {
    toast.error('Fecha no válida')
  }

  return (
    <div className="mb-5">
      <Toaster position="top-center" />
      <label 
        htmlFor=""
        className="text-[14px]"
      >
        {title}
      </label>
      <input 
        type="date" 
        name="" 
        id="" 
        className="border border-gray-300 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
        required
        value={value}
        onChange={e => {
          if(iso8601(e.target.value) || e.target.value === '') setValue(e.target.value)
          else {
            setValue('')
            alertaDate()
          }
        }}
      />
    </div>
  )
}

export default CampoFecha