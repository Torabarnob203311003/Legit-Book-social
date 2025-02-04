import React from 'react'

function Navbar() {
  return (
    <div>
          <nav className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-400">Legitbook</h1>
              <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 rounded-lg bg-gray-700 border-none text-white outline-none"
              />
          </nav>
    </div>
  )
}

export default Navbar