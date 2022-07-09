import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Playing from './pages/Playing'
import Summary from './pages/Summary'

function App() {
	return (
		<Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/play' element={<Playing />} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </Router>
	)
}

export default App
