import React from 'react'
import { Link } from 'react-router-dom'

function Row({ poke }) {
    return (
        <div>
            <Link to={`detail/${poke.id}`}>
                <div className="w-full h-[108px] shadow flex items-center pl-5 mb-5 rounded-md" >
                    <div className="w-[80px] h-[80px] mr-5">
                        <img src={poke?.sprites?.other?.['official-artwork']?.front_default} alt={poke.name} className="w-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-[16px] font-bold'>{poke?.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>
                        <div className="flex gap-2">
                            {poke?.types.map((item, i) => (
                                <p key={i} className="w-[50px] h-[25px] text-[#FFAE33] text-[12px] font-bold bg-[#FFF4E3] flex items-center justify-center">{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</p>
                            ))}
                        </div>
                        <div className="flex gap-2 text-[12px] text-[#666666]">
                            <span>Abilities: </span>
                            {poke?.abilities?.map(abil => abil?.ability?.name?.charAt(0).toUpperCase() + abil?.ability?.name?.slice(1))?.join(', ')}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Row