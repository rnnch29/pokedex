import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import arrowLeft from '../assets/icons/arrow-left.svg';
import bag2 from '../assets/icons/bag-2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/slices/pocketSlice';

function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [pokemonData, setPokemonData] = useState(null);
    const [inpQty, setInpQty] = useState(1);


    const fetchPokemonDetail = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemonData(res.data);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };



    const increaseQty = () => {
        setInpQty(inpQty + 1)
    }

    const decreaseQty = () => {
        if (inpQty > 1) {
            setInpQty(inpQty - 1)
        }
    }

    const addToPocket = (pokemon, qtyVal) => {
        dispatch(add({ ...pokemon, qty: qtyVal }));
    }

    useEffect(() => {
        fetchPokemonDetail();
    }, [id]);


    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='max-w-6xl mx-auto min-h-screen my-10'>
            <div className="flex mt-10 mb-5">
                <img src={arrowLeft} alt="Back" />
                <Link to='/' className='font-bold'>Back</Link>
            </div>

            <div className="w-full h-[385px] shadow rounded-md p-3 flex gap-40 bg-white">
                <div className="w-[353px] h-[353px]">
                    <img src={pokemonData?.sprites?.other?.['official-artwork']?.front_default} alt={pokemonData?.name} className="w-full" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-[#373737] font-bold'>{pokemonData?.name?.charAt(0).toUpperCase() + pokemonData?.name?.slice(1)}</p>
                    <div className="flex gap-2">
                        {pokemonData?.types?.map((item, i) => (
                            <p key={i} className="w-[50px] h-[25px] text-[#FFAE33] text-[12px] font-bold bg-[#FFF4E3] flex items-center justify-center">
                                {item?.type?.name?.charAt(0).toUpperCase() + item?.type?.name?.slice(1)}
                            </p>
                        ))}
                    </div>
                    <div className="flex text-[12px] text-[#666666]">
                        <span className='w-[55px]'>Stats:</span>
                        {pokemonData?.stats?.map(stat => stat?.stat?.name?.charAt(0).toUpperCase() + stat?.stat?.name?.slice(1))?.join(', ')}

                    </div>
                    <div className="flex text-[12px] text-[#666666]">
                        <span className='w-[55px]'>Abilities:</span>
                        {pokemonData?.abilities?.map(abil => abil?.ability?.name?.charAt(0).toUpperCase() + abil?.ability?.name?.slice(1))?.join(', ')}
                    </div>

                    <div className="w-[255px] flex justify-between items-center mt-3">
                        <p className='text-[14px]'>Quantity: </p>
                        <div className="w-[130px] h-[40px] rounded-md border border-[#373737] text-[#373737] font-bold overflow-hidden grid grid-cols-3">
                            <button onClick={decreaseQty}>-</button>
                            <input type="text" className='text-center bg-[#f5f5f5]' value={inpQty} readOnly />
                            <button onClick={increaseQty}>+</button>
                        </div>
                    </div>

                    <button className="w-[255px] h-[50px] bg-[#ff6f61] rounded-md text-white font-bold flex items-center justify-center gap-2 mt-3"
                        onClick={e => addToPocket(pokemonData, inpQty)}>
                        <img src={bag2} alt="" />
                        <span>Add To Pocket</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
