import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
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

            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<CaseStudy />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contacts />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
