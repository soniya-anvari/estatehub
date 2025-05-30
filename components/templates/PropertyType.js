import React from 'react'
import PropertyTypeBox from './PropertyTypeBox'

function PropertyType() {
    const properties=[
        {id:1,name:"ویلا",img:'/images/img1.png',count:92},
        {id:2,name:"آپارتمان",img:'/images/img2.png',count:92},
        {id:3,name:"خانه ویلایی",img:'/images/img3.png',count:92},

    ]
  return (
    <div className='flex justify-center w-8/12 gap-10 m-auto '>
        {properties.length>0 && properties.map(type=>(
            <PropertyTypeBox key={type.id} type={type} />
        ))}
    </div>
  )
}

export default PropertyType
