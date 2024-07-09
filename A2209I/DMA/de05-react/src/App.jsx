import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for product 1',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for product 2',
      quantity: 20,
    },
    // Thêm các sản phẩm khác
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">This is a list of products</h1>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Id</th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Name</th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Price</th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Description</th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-black">{product.id}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-black">{product.name}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-black">{product.price}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-black">{product.description}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-black">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
