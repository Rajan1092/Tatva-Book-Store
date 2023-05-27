import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Searchbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/auth/login" element={<Login />}></Route>
                <Route path="/auth/register" element={<Register />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App