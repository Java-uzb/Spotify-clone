import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="Home" />
                    <p className='font-bold'>{t('home')}</p>
                </div>
                <form onSubmit={handleSearch} className='flex items-center gap-3 pl-8'>
                    <img className='w-6' src={assets.search_icon} alt="Search" />
                    <input
                        type='text'
                        placeholder={t('search')}
                        className='bg-transparent border-none outline-none text-white placeholder-white'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>

            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src={assets.stack_icon} alt="Library" />
                        <p className='font-semibold'>{t('library')}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="Arrow" />
                        <img className='w-5' src={assets.plus_icon} alt="Plus" />
                    </div>
                </div>

                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>{t('create_playlist')}</h1>
                    <p className='font-light'>{t('its easy we will help you')}</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                        {t('create_playlist')}
                    </button>
                </div>

                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>{t('lets find some podcasts to follow')}</h1>
                    <p className='font-light'>{t('we will keep you updated on new episodes')}</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
                        {t('browse_podcast')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
