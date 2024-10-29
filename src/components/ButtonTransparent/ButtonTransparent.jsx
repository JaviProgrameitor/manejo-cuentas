
function ButtonTransparent({title, action}) {
  return (
    <button
      className="px-5 py-2.5 text-[14px] rounded-lg border-2 border-purple-400 bg-purple-400"
      onClick={e => {
        if(action) {
          action()
        }
      }}
    >
      {title}
    </button>
  )
}

export default ButtonTransparent