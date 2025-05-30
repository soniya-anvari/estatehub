import React from 'react'

function ServicesBox({service}) {
  return (
    <div className={`w-1/3 ${service.id==2?'h-full mt-0':'h-3/4 mt-5'} bg-white p-5 rounded-3xl`}>
        <img src={service.img} className='w-full' />
        <p className='font-bold text-2xl my-3 text-center'>
            {service.title}
        </p>
        <p className='text-gray-500 text-center'>
            {service.desc}
        </p>
        <button className='text-white bg-blue-600 mt-8 rounded-2xl text-center w-full p-3'>
            {service.buttonText}
        </button>
    </div>
  )
}

export default ServicesBox
