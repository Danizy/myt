import PATHS from 'navigation/paths'
import { Link } from 'react-router-dom'
import Appear from '../../components/utils/Appear'

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen align-middle justify-center px-5">
      <Appear>
        <div>
          <span>Ytd</span>
          <div>
            <Link className="text-2xl" to={PATHS.playlist}>
              Pick playlist
            </Link>
          </div>
        </div>
      </Appear>
    </div>
  )
}

export default HomePage
