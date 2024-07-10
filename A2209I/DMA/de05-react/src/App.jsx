import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3); // You can adjust this value

  const fetchProducts = async (pageNumber) => {
    try {
      debugger
      const response = await fetch(`http://localhost:5119/api/Products?pageNumber=${pageNumber}&pageSize=${productsPerPage}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json', // Updated to accept JSON
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products); // Adjust based on actual API response structure
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
            {products?.map((product) => (
              <tr key={product.id}>
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
      <div className="pagination">
        {/* Simple pagination control */}
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
