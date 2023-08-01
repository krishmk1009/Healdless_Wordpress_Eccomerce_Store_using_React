

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Product from "./pages/Product";


function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/products' element={<Product />} />
          
          



        </Routes>

      </Router>
    </>


  )
}

export default App
