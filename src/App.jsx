import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'

import Landing from './components/Landing'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Detail from './components/Detail'
import NavBar from './components/NavBar'

function App() {
	
	const location = useLocation()

  return (
		<div>
			{location.pathname!== '/' && <NavBar />}
			<Routes>
				<Route path="/" element={<Landing/>} />
				<Route path="/home" element={<Home/>} />
				<Route path="/favorites" element={<Favorites/>} />
				<Route path="/detail/:id" element={<Detail/>} />
			</Routes>
		</div>
  )
}

export default App
