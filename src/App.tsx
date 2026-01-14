import { FunctionComponent } from 'react'

// COMPONENTS
import Header from './components/header/header.components'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App
