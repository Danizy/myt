import './App.css'
import { HashRouter } from 'react-router-dom'
import Navigation from './navigation'
import Theme from './components/Theme'

const App = () => {
  return (
    <Theme>
      <HashRouter>
        <Navigation />
      </HashRouter>
    </Theme>
  )
}

export default App
