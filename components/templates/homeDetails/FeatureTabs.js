import React, { useState } from 'react'

function Feature({home}) {
  const [tab,setTab]=useState('info');
  return (
    <div className='w-2/3'>
      <div className='flex gap-5'>
        <p onClick={()=>setTab('info')} className={`${tab=='info' && 'text-blue-500 font-bold'}`}>
            اطلاعات اصلی
        </p>
        <p onClick={()=>setTab('Facilities')} className={`${tab=='Facilities' && 'text-blue-500 font-bold'}`}>
            تجهیزات و امکانات  
        </p>
      </div>
      <hr className='w-full h-[1px] text-gray-300 my-5' />
        {
          tab=='info'&&
          <div className='grid grid-cols-3'>
            <p className='text-gray-500'>مساحت زیر بنا:
            <span className='text-black'>
              {home?.area} متر
            </span>
          </p>
          <p className='text-gray-500'>  طبقات:
            <span className='text-black'>
              {home?.floor}
            </span>
          </p>
           <p className='text-gray-500'>  سرویس بهداشتی:
            <span className='text-black'>
              {home?.bathrooms} عدد
            </span>
          </p>
          </div>
        }
        {
          tab=='Facilities'&& 
          <div  className='grid grid-cols-3'>
            {home.amenities.length >0 && home.amenities.map(amenitie=>(
              <p>
                {amenitie}
              </p>
            ))}
          </div>
        }
        <hr className='w-full h-[1px] text-gray-300 mt-10' />
        <div className='mt-5'>
          <p className='border-b-2 border-blue-400 py-2 w-fit'>توضیحات</p>
          <p className='mt-2 text-gray-500'>
            {home?.description}
          </p>
        </div>
      
    </div>
  )
}

export default Feature
