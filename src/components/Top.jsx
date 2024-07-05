import React from 'react';
import location from '../assets/icons/location.svg'
import truck from '../assets/icons/truck.svg'
import discount from '../assets/icons/discount.svg'

function Top() {
  return (
    <nav className='bg-[#FFCB05] text-[#373737] text-[14px]'>
      <div className="max-w-6xl mx-auto h-[42px] flex items-center justify-between">
        <div className="">Welcome to Pokemon shop!</div>
        <div className="flex gap-3">

          <div className="flex items-center">
            <img src={location} alt="" className="mx-1" />
            <span>Contact 123456</span>
          </div>

          <div className="w-[1px] bg-[#373737] h-[20px]"></div>

          <div className="flex items-center">
            <img src={truck} alt="" className="mx-1" />
            <span>Track your order</span>
          </div>

          <div className="w-[1px] bg-[#373737] h-[20px]"></div>

          <div className="flex items-center">
            <img src={discount} alt="" className="mx-1" />
            <span>All Offers</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Top;
