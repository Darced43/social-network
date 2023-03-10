import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainContext from './pages/MainContext/MainContext'
import Layout from './pages/Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import { AuthProvider } from './hooks/AuthProvider'
import Network from './pages/Network/Network'
import RequierAuth from './hooks/RequierAuth'
import FirstPage from './pages/FirstPage/FirstPage'
import Stars from './pages/Stars/Stars'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<FirstPage/>}/>
          <Route path='/homePage' element={<MainContext/>}/>
          <Route path='/network' element={
            <RequierAuth>
              <Network/>
            </RequierAuth>
          }/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/stars' element={<Stars/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
