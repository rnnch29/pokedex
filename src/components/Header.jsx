import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import user from '../assets/icons/user.svg';
import bag from '../assets/icons/bag.svg';
import searchIcon from '../assets/icons/search.svg';
import close from '../assets/icons/close.svg';
import { useSelector } from 'react-redux';

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKey, setSearchKey] = useState('');
  const pocketLength = useSelector((state) => state.pocket.pockets);
  const navigate = useNavigate();

  const handleClearSearch = () => {
    setSearchKey('')
    setSearchParams({});
  };

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setSearchKey(value);
    navigate(`/?search=${value}`);
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const searchValue = params.get('search') || '';
    setSearchKey(searchValue);
  }, [searchParams]);


  return (
    <div className='shadow-md bg-white'>
      <div className="max-w-6xl mx-auto flex justify-between items-center h-[80px]">
        <div>
          <Link to='/'><img src={logo} alt="" className='w-[156px] h-[57px]' /></Link>
        </div>

        <div className="relative flex items-center">
          <img src={searchIcon} alt="" className='absolute left-5' />
          {searchKey !== '' ? <img src={close} alt="" className='absolute right-5 cursor-pointer' onClick={handleClearSearch} /> : null}

          <input
            type="text"
            value={searchKey}
            onChange={handleSearch}
            placeholder="Search name Pokémon ..."
            className="w-[507px] h-[48px] bg-[#F8F8F8] rounded-md pl-[50px] pr-4 py-2 focus:outline-none caret-[#FFCB05] focus:ring-2 focus:ring-[#FFCB05]"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex gap-2 items-center">
            <img src={user} alt="" />
            <span>Username</span>
          </div>
          <div className="w-[1px] h-[24px] bg-[#D9D9D9]"></div>
          <Link to='/pocket'>
            <div className="flex gap-2 items-center relative">
              <div className="absolute w-[15px] h-[15px] top-[-1px] left-[15px] bg-[#373737] text-white text-[10px] text-center rounded-full">{pocketLength.length}</div>
              <img src={bag} alt="" />
              <span>Pocket</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
