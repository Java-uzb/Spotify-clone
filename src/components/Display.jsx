import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import Search from './Search'; // 👈 new import
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');

  let bgColor = '#121212'; // default
  if (isAlbum) {
    const idMatch = location.pathname.match(/album\/(\d+)/);
    const albumId = idMatch ? Number(idMatch[1]) : null;
    if (albumId !== null && albumsData[albumId]) {
      bgColor = albumsData[albumId].bgColor;
    }
  }

  useEffect(() => {
    displayRef.current.style.background = isAlbum
      ? `linear-gradient(${bgColor}, #121212)`
      : '#121212';
  }, [location, bgColor, isAlbum]);

  return (
    <div
      ref={displayRef}
      className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
        <Route path='/search' element={<Search />} /> {/* ✅ NEW ROUTE */}
      </Routes>
    </div>
  );
};

export default Display;
