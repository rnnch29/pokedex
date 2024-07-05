import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trash from '../assets/icons/trash.svg';
import { remove } from '../store/slices/pocketSlice'; 

function Pocket() {
  const pokemonData = useSelector((state) => state.pocket.pockets);
  const sumQty = useSelector((state) => state.pocket.sumQty);
  const dispatch = useDispatch();

  const removePokemon = (pokemonID) => {
    dispatch(remove(pokemonID))
  }

  return (
    <div className='max-w-6xl mx-auto min-h-screen font-bold my-10 relative'>
      <div className="w-[945px] rounded-md bg-white pb-6">
        <p className='p-5'>Pocketlist ({pokemonData.length})</p>
        <table className="table-auto w-full">
          <thead>
            <tr className='text-[14px]'>
              <td width="70%" className='pb-5 pl-5'>Product name</td>
              <td width="20%" className='text-center'>Quantity</td>
              <td width="10%" className='text-center'></td>
            </tr>
          </thead>
          <tbody>
            {pokemonData.map((poke, i) => (
              <tr key={i} className='border-t'>
                <td width="70%" className='p-5'>
                  <div className="w-[80px] h-[80px] flex gap-5">
                    <img src={poke?.sprites?.other?.['official-artwork']?.front_default} alt={poke?.name} className="w-full" />
                    <div className="flex flex-col justify-center gap-2">
                      <p className='text-[#373737] font-bold'>{poke?.name?.charAt(0).toUpperCase() + poke?.name?.slice(1)}</p>
                      <div className="flex gap-2">
                        {poke?.types?.map((item, i) => (
                          <p key={i} className="w-[50px] h-[25px] text-[#FFAE33] text-[12px] font-bold bg-[#FFF4E3] flex items-center justify-center rounded-md">
                            {item?.type?.name?.charAt(0).toUpperCase() + item?.type?.name?.slice(1)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td width="20%" className='text-center'>{poke.qty}</td>
                <td width="10%" className='text-center'>
                  <button className="flex items-center justify-center" onClick={()=> removePokemon(poke.id)}>
                    <img src={trash} alt="trash icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary  */}
      <div className="absolute bg-white top-0 left-[990px] w-[280px] h-[240px] rounded-md">
        <div className='bg-[#fff9e3] h-[40px] font-bold flex items-center px-5'>Order Summary</div>
        <div className="h-[200px] flex flex-col justify-between p-5">
          <div className="text-[14px] flex flex-col gap-3">
            <div className='flex items-center justify-between'>
              <p className='font-normal'>Subtotal</p>
              <p>{pokemonData.length} Product</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-normal'>Quantity</p>
              <p>{sumQty} Quantity</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className="w-[250px] h-[50px] rounded-md bg-[#ff6f61] text-white text-[14px]">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pocket;
