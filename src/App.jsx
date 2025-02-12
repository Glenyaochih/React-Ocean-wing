import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
	return (
		<div>
			<nav>
				<Link to="/">首頁</Link> | <Link to="/about">關於我們</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	)
}
