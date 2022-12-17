import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/UI/Login'
import HomePage from './components/UI/HomePage'
import Signup from './components/UI/Signup'
function App() {
  return (
    <>
      <Router>
        <>
          <div className='App'>
            <Routes>
              <Route exact path={'/login'} element={<Login />} />
              <Route exact path={'/home'} element={<HomePage />} />
              <Route exact path={'/signup'} element={<Signup />} />
            </Routes>
          </div>
        </>
      </Router>
    </>
  )
}

export default App
