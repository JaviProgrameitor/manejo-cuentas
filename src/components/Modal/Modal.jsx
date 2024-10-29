
function Modal({estado, contenido}) {
  return (
    <div className={`${!estado && 'hidden'} overflow-y-auto bg-[rgba(0,0,0,0.5)] overflow-x-hidden fixed inset-0 z-50 justify-center items-center w-screen md:inset-0 h-screen`}>
      <div className="relative p-4 w-screen h-screen flex items-center justify-center">
        <div
          className="bg-white w-11/12 h-3/6 max-h-5/6 rounded-xl p-3 overflow-y-auto"
        >
          {contenido}
        </div>
      </div>
    </div>
  )
}

export default Modal