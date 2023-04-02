import { HashRouter as Router } from 'react-router-dom'
import AppContent from 'components/AppContent'

import './App.css'

function App() {
   return (
      <div className='App'>
         <Router basename='/'>
            <AppContent />
         </Router>
      </div>
   )
}

export default App
