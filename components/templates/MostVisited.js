import React from 'react'
import homes from "../../data/homedb"
import MostVisitedBox from './MostVisitedBox'
function MostVisited() {
  return (
    <div>
        <h5 className='text-2xl font-bold'>
            پر بازدید ترین‌های هفته‌ی گذشته
        </h5>
       <div className='grid grid-cols-4 mt-4 gap-10 '>
         {
            homes.map(home=>(
                <MostVisitedBox key={home.id} home={home} />
            ))
        }
       </div>
    </div>
  )
}

export default MostVisited
