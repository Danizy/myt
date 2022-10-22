import PATHS from 'navigation/paths'
import { Link } from 'react-router-dom'
import Appear from '../../components/utils/Appear'

const HomePage = () => {
  return (
    <div>
      <div>
        <Appear>
          <div>
            <span>Ytd</span>
            <div>
              <Link to={PATHS.playlist}>Pick playlist</Link>
            </div>
          </div>
        </Appear>
      </div>
    </div>
  )
}

export default HomePage
