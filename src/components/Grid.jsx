import React from 'react'
import { Link } from 'react-router-dom'

function Grid({ poke }) {
    return (
        <div>

            <div className="shadow rounded-xl w-[250px] mx-auto">
                <div className="h-[250px] bg-white">
                    <img src={poke?.sprites?.other?.['official-artwork']?.front_default} alt={poke.name} className="w-full" />
                </div>
                <div className="h-[130px] bg-[#FAFAFA] flex items-center">
                    <div className="mx-auto flex flex-col gap-[12px]">
                        <p className="text-[16px] font-bold">{poke?.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>
                        <div className="flex gap-2">
                            {poke?.types.map((item, i) => (
                                <p key={i} className="w-[50px] h-[25px] text-[#FFAE33] text-[12px] font-bold bg-[#FFF4E3] flex items-center justify-center">{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</p>
                            ))}
                        </div>
                        <Link to={`detail/${poke.id}`}>
                            <button className='bg-[#373737] text-white font-bold rounded-md w-[230px] h-[38px] hover:bg-[#FFCB05] hover:text-[#373737]'>Detail</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Grid