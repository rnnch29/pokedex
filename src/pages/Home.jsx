import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemon } from '../store/slices/pokemonSlice';
import { Link, useSearchParams } from 'react-router-dom';
import grid from '../assets/icons/grid.svg'
import row from '../assets/icons/row.svg'
import notFound from '../assets/icons/not-found.svg';
import Grid from '../components/Grid';
import Row from '../components/Row';

function Home() {

  const dispatch = useDispatch();
  const pokeData = useSelector((state) => state.pokemon.pokemonList);
  const [toggleView, setToggleView] = useState(true)
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get('search');
  const fetchPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=12');
    const responsePokemon = await Promise.all(response.data.results.map(async (item) => {
      const result = await axios.get(item.url);
      return result.data;
    }))
    dispatch(addPokemon(responsePokemon))
  }


  useEffect(() => {
    fetchPokemon();
  }, [])

  const pokemonList = !searchKey ? pokeData : pokeData.filter(item => item.name.includes(searchKey.toLowerCase()));

  return (
    <div className='max-w-6xl mx-auto min-h-screen mt-10 mb-20'>
      <div className="flex justify-between my-5">
        {
          searchKey != '' && searchKey !== null ? (<div>
            <div className="text-[16px] font-bold">Search Result ({pokemonList.length} Product)</div>
          </div>
          ) :
            (
              <div className="text-[16px] font-bold">Products ({pokemonList.length})</div>
            )

        }


        <div className="flex">
          <button className={`w-[32px] h-[32px] rounded-l flex items-center justify-center ${toggleView ? 'bg-[#ffcb05]' : 'bg-[#f9f9f9]'}`} onClick={() => setToggleView(true)}>
            <img src={grid} alt="" />
          </button>
          <button className={`w-[32px] h-[32px] rounded-r flex items-center justify-center ${toggleView ? 'bg-[#f9f9f9]' : 'bg-[#ffcb05]'}`} onClick={() => setToggleView(false)}>
            <img src={row} alt="" />
          </button>
        </div>
      </div>

      {searchKey !== '' && pokemonList.length < 1 ? (
        <div className="mt-10">
          <div className="flex justify-center my-5">
            <img src={notFound} alt="" />
          </div>
          <p className='text-[16px] text-[#909090] text-center'>Oops! Nothing was found for “{searchKey}” <br /> Please try to search for something else.</p>
        </div>

      ) : null}

      {toggleView ? (

        <div className="grid grid-cols-4 gap-12">
          {pokemonList.map((poke, i) => (
            <Grid poke={poke} key={i} />
          ))}
        </div>

      ) : (
        pokemonList.map((poke, i) => (
          <Row poke={poke} key={i} />
        ))

      )}

    </div>
  )
}

export default Home