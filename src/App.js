import { Routes, Route } from 'react-router-dom'



import './assets/style/App.css'
import Home from './pages/Home';
import Login from './pages/register/Login'
import Signup from './pages/register/Signup'
import NorthProduct from './pages/Products/NorthProduct'
import SouthProduct from './pages/Products/SouthProduct'
import ProductManager from './pages/Products/ProductManager';
import Advise from './pages/Advise'
import Research from './pages/About/Research'
import Advice from './pages/About/Advice'
import RequestValue from './pages/Contacts/RequestValue'
import Contact from './pages/Contacts/Contact'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/northProduct' element={<NorthProduct/>} />
        <Route path='/southProduct' element={<SouthProduct/>} />
        <Route path='/productManager' element={<ProductManager/>} />
        <Route path='/advise' element={<Advise/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/advice' element={<Advice/>} />
        <Route path='/request-valuetion' element={<RequestValue/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
