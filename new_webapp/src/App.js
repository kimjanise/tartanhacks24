import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { data } from './sample_data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import recently from './recently.png'
import romance from './romance.png'
import action from './action.png'
import comedy from './comedy.png'
import UsernameInput from './UsernameInput';

// Placeholder components for different pages
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to our movie recommendation app!</p>
  </div>
);

// const Recommendations = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Simulate fetching data from your backend
//     const fetchMovies = async () => {
//       const response = await fetch('http://localhost:3001/api/recommendations'); // Adjust the endpoint as needed
//       const data = await response.json();
//       setMovies(data.movies);
//     };

//     fetchMovies().catch(console.error);
//   }, []);

//   return (
//     <div>
//       <h1>Movie Recommendations</h1>
//       <ul>
//         {movies.map((movie, index) => (
//           <li key={index}>{movie.title} ({movie.year})</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/recommendations">Recommendations</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Define routes */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/recommendations" element={<Recommendations />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching data from your backend
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:3001/api/recommendations'); // Adjust the endpoint as needed
      const data = await response.json();
      setMovies(data.movies);
    };

    fetchMovies().catch(console.error);
  }, []);


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft1 = () => {
    var slider1 = document.getElementById('slider1');
    slider1.scrollLeft = slider1.scrollLeft - 500;
  };

  const slideRight1 = () => {
    var slider1 = document.getElementById('slider1');
    slider1.scrollLeft = slider1.scrollLeft + 500;
  };

  const slideLeft2 = () => {
    var slider2 = document.getElementById('slider2');
    slider2.scrollLeft = slider2.scrollLeft - 500;
  };

  const slideRight2 = () => {
    var slider2 = document.getElementById('slider2');
    slider2.scrollLeft = slider2.scrollLeft + 500;
  };

  return (
    <>
      {/* <img
        className='w-full h-[440px] object-cover'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''
      /> */}
      {/* <div className="App">
        <UsernameInput />
      </div> */}

    <div>
      {/* <h1>Movie Recommendations</h1> */}
      {/* <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title} ({movie.year})</li>
        ))}
      </ul> */}
    </div>
    

    <img
        className='w-full h-[50px] object-cover'
        src= {recently}
        alt=''
      />

      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={60} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {/* {data.map((item) => (
            <img
              className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))} */}
          {movies.map((movies, index) => (
            <a href={'https://www.themoviedb.org/movie/'+movies.id}>
            <img
              className='w-[350px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={'https://image.tmdb.org/t/p/w1280'+movies.poster_path}
              alt='/'
            /></a>
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={60} />
      </div>

      {/* <img
        className='w-full h-[50px] object-cover'
        src= {romance}
        alt=''
      />

      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft1} size={40} />
        <div
          id='slider1'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight1} size={40} />
      </div>

      <img
        className='w-full h-[50px] object-cover'
        src= {comedy}
        alt=''
      />

      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft2} size={40} />
        <div
          id='slider2'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight2} size={40} />
      </div> */}
    </>
  );
}

export default App;
