// src/components/UsernameInput.js
import React, { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending username to the backend:', username);

    // Example of sending the username to your backend using Fetch API
    try {
      const response = await fetch('http://localhost:3001/api/usernames', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (response.ok) {
        console.log('Username submitted successfully');
        // Handle successful submission (e.g., show a success message)
      } else {
        console.error('Submission failed');
        // Handle errors (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error submitting username:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Letterboxd Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your Letterboxd Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default UsernameInput;
