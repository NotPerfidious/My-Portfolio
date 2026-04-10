import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Contacts from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
