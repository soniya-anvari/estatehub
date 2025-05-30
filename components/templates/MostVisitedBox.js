import React from 'react'

function MostVisitedBox({home}) {
    console.log(home)
  return (
    <div className='bg-white rounded-2xl '>
      <img className='w-full rounded-2xl' src={home.img} />
      <div className='p-5' >
        <p className={`${home.name=='اپارتمان'?'bg-orange-400':'bg-green-700'} text-white px-2 pb-2 pt-1 w-fit text-sm rounded-xl`}>{home.name}</p>
        <p className='text-gray-600 mt-2 text-sm'>{home.details}</p>
        <div className='flex mt-2 justify-between p-1 text-[12px] bg-gray-100'>
          <div  className='flex gap-1 items-center'>
              <span>رهن</span>
            <p className='bg-white rounded-sm p-1' >
                 <span>
                    {home.mortgage} 
                </span>
                <span className='text-[10px]'>تومان</span>
            </p>
          </div>
        <div className='flex gap-1 items-center'>
                <span>
                اجاره
              </span>
                <p className='bg-white rounded-sm p-1'>
                  <span>
                        {home.rent} 
                    </span>
                    <span className='text-[10px]'>
                        تومان
                    </span>
                 </p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default MostVisitedBox
