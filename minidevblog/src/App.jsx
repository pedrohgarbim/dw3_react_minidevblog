import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthentication } from './hooks/userAuthentication'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'



function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <p>Loading...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='post/create' element={<CreatePost />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App