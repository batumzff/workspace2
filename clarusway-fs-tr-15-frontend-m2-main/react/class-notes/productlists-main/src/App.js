import './App.scss'
import Header from './components/header/Header'
import ProductList from './components/products/ProductList'
import Navbar from './components/header/Navbar'
import { useState } from 'react'

import { products } from './helper/data.js'

function App() {
  
  const [productList, setProductList] = useState(products)

  const filterbyCategory = category => {
    console.log(category)

    if (category === 'all') {
      setProductList(products)
    } else {
      const filtered = products.filter(product => product.category === category)
      setProductList(filtered)
    }
  }
  const handleClick = e => {
    filterbyCategory(e.target.innerText)
  }

  

  const handleChange = e => {
    const filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

    console.log(filteredProducts)
    console.log(e.target.value)

    setProductList(filteredProducts)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header handleClick={handleClick} />
        <ProductList products={productList} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default App
