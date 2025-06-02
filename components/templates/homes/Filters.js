import React, { useState } from 'react'

function Filters({home}) {
  const [tab,setTab]=useState('Most-up-to-date');
  return (
    <div className='w-2/3'>
      <div className='flex gap-5'>
        <p onClick={()=>setTab('Most-up-to-date')} className={`${tab=='Most-up-to-date' && 'text-blue-500 font-bold'}`}>
              بروز ترین
        </p>
        <p onClick={()=>setTab('most-expensive')} className={`${tab=='most-expensive' && 'text-blue-500 font-bold'}`}>
           گران ترین
        </p>
         <p onClick={()=>setTab('cheapest')} className={`${tab=='cheapest' && 'text-blue-500 font-bold'}`}>
           ارزان ترین
        </p>
      </div>
    </div>
  )
}

export default Filters;
