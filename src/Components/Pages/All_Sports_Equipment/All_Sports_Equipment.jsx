import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const All_Sports_Equipment = () => {
  const [sportsData, setSportsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetch('https://assignment-10-server-omega-five.vercel.app/equipment')
      .then(res => res.json())
      .then(data => {
        setSportsData(data);
        setProducts(data); // Sync products with fetched data
      })
      .catch(error => console.error('Error:', error));
  }, []);

  // Sorting function
  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => 
      isAscending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
    setIsAscending(!isAscending);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Sports Equipment</h2>
      <button
        onClick={sortByPrice}
        className="btn bg-amber-400 hover:bg-amber-500 text-gray-800 hover:text-gray-200 px-4 py-2 "
      >
        {isAscending ? "Sort by Price: Low to High" : "Sort by Price: High to Low"}
      </button>
      <div className="overflow-x-auto md:block hidden">
        <table className="w-full min-w-full border shadow-lg">
          <thead>
            <tr className="text-amber-500 bg-gray-100">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">View</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="p-4 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded mx-auto"
                  />
                </td>
                <td className="p-4 text-center font-semibold">{item.name}</td>
                <td className="p-4 text-center">{item.category}</td>
                <td className="p-4 text-center text-amber-600 font-semibold">{item.price}</td>
                <td className="p-4 text-center">
                  <Link
                    to={`/all_equipment_view_details/${item._id}`}
                    className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition inline-block"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Card Layout */}
      <div className="grid grid-cols-1 sm:hidden gap-4 mt-8">
        {products.map((item, i) => (
          <div key={i} className="border p-4 shadow-lg rounded-lg bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold text-center mt-2">{item.name}</h3>
            <p className="text-center text-gray-600">{item.category}</p>
            <p className="text-center text-amber-600 font-semibold">{item.price}</p>
            <div className="flex justify-center mt-4">
              <Link
                to={`/all_equipment_view_details/${item._id}`}
                className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All_Sports_Equipment;
