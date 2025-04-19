import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/home'
import Product from './pages/Productlist/product'
import Layout from './layout/layout'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
