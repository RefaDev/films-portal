import { HashRouter } from 'react-router-dom'
import AppContent from 'components/AppContent'

import './App.css'

function App() {
   return (
      <div className='App'>
         <HashRouter basename='/'>
            <AppContent />
         </HashRouter>
      </div>
   )
}

export default App
