import React, { useState } from 'react'
import homes from "../../data/homedb";
import MostVisitedBox from '@/components/templates/MostVisitedBox';
import Filters from '@/components/templates/homes/Filters';
function Homes() {
  const [search,setSearch]=useState('');
  const [allHomes,setAllHomes]=useState(homes);
  const [filter,setFilter]=useState('Most-up-to-date')
  const searchHandler=(e)=>{
    const value=e.target.value;

    setAllHomes(homes)
    setSearch(value);
    
    const filtredHomes=homes.filter(home=>home.name.includes(value));
    
    setAllHomes(filtredHomes)
    console.log(filtredHomes);
    console.log({allHomes})
  };
  const filtersHandler=(filterTitle)=>{
    const filterHomes=[];
    if (filterTitle=='Most-up-to-date'){
      setFilter('Most-up-to-date')
    }
    else if (filterTitle=='most-expensive'){
      const x=allHomes.sort((a,b)=>Number(b.rent)-Number(a.rent))
      setAllHomes(x)
            console.log(x)
    
      setFilter('most-expensive')
    }
    else {
      const x=allHomes.sort((a,b)=>Number(a.rent)-Number(b.rent));
      console.log(x)
      setAllHomes(x)
      setFilter('cheapest');
    }
     
  }

 
  return (
    <div className='pt-40 w-10/12 m-auto'>
      <h3 className='text-xl font-bold'>
        رهن و اجاره آپارتمان در تهران
      </h3>
      <input placeholder='جستجو' onChange={searchHandler} className='my-4 border border-gray-300 rounded-xl pt-2 pb-3 px-6' />
      <div className='flex gap-5 my-7'>
        <p onClick={()=>filtersHandler('Most-up-to-date')} className={`${filter=='Most-up-to-date' && 'text-blue-500 font-bold'}`}>
              بروز ترین
        </p>
        <p onClick={()=>filtersHandler('most-expensive')} className={`${filter=='most-expensive' && 'text-blue-500 font-bold'}`}>
           گران ترین
        </p>
         <p onClick={()=>filtersHandler('cheapest')} className={`${filter=='cheapest' && 'text-blue-500 font-bold'}`}>
           ارزان ترین
        </p>
      </div>
      <div className='grid grid-cols-4 mt-4 gap-10 '>
        {allHomes?.length>0 && allHomes?.map(home=>(
          <MostVisitedBox home={home} />
        ))}
      </div>
    </div>
  )
}

export default Homes
