import React, { useState } from 'react';

const users = [
  { name: 'Samanta William', id: '#123456789', date: 'March 25, 2021', services: 2, location: 'Jakarta', status: 'Not Active', image: 'https://cdn.prod.website-files.com/5f5ccfa306240b2871494d94/5f5ccfa306240b74ac494ef6_Team-01.png' },
  { name: 'Tony Soap', id: '#123456790', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Tony_Soprano_2.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },
  { name: 'Karen hope', id: '#123456791', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://yt3.googleusercontent.com/ytc/AIdro_ncL52R3EiZx6XBJbcW8n9yb4xZ-O1UjVxX1IY2iLDIHQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Joerdan Nico', id: '#123456792', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xrSwcRRowWl_YZmh7AGihsPFqV3-uBXdIA&s' },
  { name: 'Nadila Adja', id: '#123456793', date: 'March 25, 2021', services: 8, location: 'Jakarta', status: 'Not Active', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J09363KKG3V8HilAtH8Ug5NHVAAsjksE2A&s'  },
  { name: 'Johnny Ahmed', id: '#123456794', date: 'March 25, 2021', services: 10, location: 'Jakarta', status: 'Active', image: 'https://i.pinimg.com/736x/b3/b3/d4/b3b3d4f610d7fda937764c62de0f0abd.jpg'  },

];

function UserTable() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(users.length / rowsPerPage);
  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="ml-64 bg-white p-6 rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-blue-900 text-left">
            <th className="p-3 text-center">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedUsers.length === users.length}
              />
            </th>
            <th className="p-3">Name</th>
            <th className="p-3">ID</th>
            <th className="p-3">Date</th>
            <th className="p-3 text-center">Completed Services</th>
            <th className="p-3">Location</th>
            <th className="p-3 text-center">Contact</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => (
            <tr key={index} className="border-t border-gray-200 hover:bg-gray-100">
              <td className="p-3 text-center">
                <input
                  type="checkbox"
                  onChange={() => handleSelectUser(user.id)}
                  checked={selectedUsers.includes(user.id)}
                />
              </td>
              <td className="p-3 flex items-center gap-3 font-bold text-indigo-700">
                <img src={user.image} alt="User" className="w-10 h-10 rounded-full" />
                {user.name}
              </td>
              <td className="p-3 text-indigo-700">{user.id}</td>
              <td className="p-3 text-gray-500 text-sm">{user.date}</td>
              <td className="p-3 text-center">{user.services}</td>
              <td className="p-3">{user.location}</td>
              <td className="p-3 text-center">
                <button className="p-1 rounded-full bg-indigo-100 text-indigo-700">
                  <i className="bi bi-telephone"></i>
                </button>
                <button className="p-1 ml-2 rounded-full bg-indigo-100 text-indigo-700">
                  <i className="bi bi-envelope"></i>
                </button>
              </td>
              <td className="p-3 text-center">
                <span
                  className={`p-1 rounded-md text-sm ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3 text-center">
                <button className="text-gray-600">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm ml-4 text-left">
          Showing <span className="text-blue-600">{((currentPage - 1) * rowsPerPage) + 1}</span> - 
          <span className="text-blue-600">{Math.min(currentPage * rowsPerPage, users.length)}</span> 
          of <span className="text-blue-600">{users.length}</span> data
        </p>
        <div className="text-right">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-purple-700 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
