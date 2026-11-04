import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import Gallery from './pages/Gallery'
import CrewmateDetail from './pages/CrewmateDetail'
import EditCrewmate from './pages/EditCrewmate'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="sidebar">
        <h2 className="sidebar-title">Crewmates</h2>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/create">Create a Crewmate</NavLink>
        <NavLink to="/gallery">Crewmate Gallery</NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<CrewmateDetail />} />
          <Route path="/edit/:id" element={<EditCrewmate />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
