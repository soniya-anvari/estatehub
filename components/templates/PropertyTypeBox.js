import Link from 'next/link'
import React from 'react'

function PropertyTypeBox({type}) {
  return (
  
    <div className={`bg-[url(${type.img})] relative h-[300px] bg-contain w-1/3 bg-no-repeat`}>
      <div className='bg-white p-2 rounded-xl flex justify-between items-center w-11/12 right-0 left-0 m-auto absolute bottom-2'>
        
        <div>
          <p className='font-bold'>{type.name}</p>
          <p className='text-gray-400 text-sm mt-1'>+{type.count}ملک</p>
        </div>
        <span className='bg-blue-500 inline-block p-2 rounded-full'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.5 13L17 13V11L7.5 11V13Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.41414 12.0001L11.207 9.20718L9.79282 7.79297L6.29282 11.293C5.90229 11.6835 5.90229 12.3167 6.29282 12.7072L9.79282 16.2072L11.207 14.793L8.41414 12.0001Z" fill="white"/>
          </svg>
        </span>
      </div>
      
    </div>
  
  )
}

export default PropertyTypeBox
