
import PerfilesRouter from '../router/PerfilesRouter';

function PerfilesCuenta(props) {
  const { cuenta, perfiles } = props

  return (
    <div>
      <div>
        <PerfilesRouter
          cuenta={cuenta}
          perfiles={perfiles}
        />
      </div>
    </div>
  )
}

export default PerfilesCuenta