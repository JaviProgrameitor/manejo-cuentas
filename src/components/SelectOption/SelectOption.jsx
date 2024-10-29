
function SelectOption({title, value, setValue, options, forName = ''}) {

  return (
    <div className="mb-5">
      <label htmlFor={forName} className="block mb-2 text-sm font-medium text-white dark:text-white">{title}</label>
        <select 
          id={forName} 
          className="border border-gray-300 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        >

          <option value=""></option>
          {
            options.map((option, index) => 
              <option key={index}>
                {option}
              </option>
            )
          }

        </select>
    </div>
  )
}

export default SelectOption