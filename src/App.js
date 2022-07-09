import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Playing from './pages/Playing'
import Summary from './pages/Summary'

function App() {
	return (
		<Router>
      <Routes>
        <Route path='/quiz_game' element={<Start />} />
        <Route path='/quiz_game/play' element={<Playing />} />
        <Route path='/quiz_game/summary' element={<Summary />} />
      </Routes>
    </Router>
	)
}

export default App
