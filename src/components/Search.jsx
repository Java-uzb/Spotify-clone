import React from 'react';
import { useLocation } from 'react-router-dom';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q')?.toLowerCase() || '';

  // Filter albums and songs
  const filteredAlbums = albumsData.filter(album =>
    album.name.toLowerCase().includes(searchQuery)
  );

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className='text-white p-4'>
      <h1 className='text-2xl font-bold mb-4'>Search Results for "{searchQuery}"</h1>

      {filteredAlbums.length > 0 && (
        <>
          <h2 className='text-xl font-semibold mb-2'>Albums</h2>
          <div className='flex flex-wrap gap-4 mb-6'>
            {filteredAlbums.map((album, index) => (
              <AlbumItem
                key={index}
                name={album.name}
                desc={album.desc}
                id={album.id}
                image={album.image}
            
              />
            ))}
          </div>
        </>
      )}

      {filteredSongs.length > 0 && (
        <>
            <h2 className='text-xl font-semibold mb-2'>Songs</h2>
            <div className='flex gap-4 overflow-auto flex-wrap'>
            {filteredSongs.map((song, index) => (
                <div
                key={index}
                className='min-w-[180px] bg-[#1e1e1e] p-3 rounded-lg cursor-pointer hover:bg-[#2a2a2a] flex-shrink-0'
                >
                <img src={song.image} alt={song.name} className='w-full h-[250px] object-cover rounded mb-2' />
                <p className='font-semibold text-sm truncate'>{song.name}</p>
                <p className='text-xs text-gray-400 truncate'>{song.desc}</p>
                </div>
            ))}
            </div>
        </>
    )}


      {filteredAlbums.length === 0 && filteredSongs.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;
