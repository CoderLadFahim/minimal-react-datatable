import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './views/Dashboard.jsx'
import Details from './views/Details.jsx'
import './App.css'

function App() {
	return (
		<div className='px-10 pt-10 font-rubik'>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/details" element={<Details />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
