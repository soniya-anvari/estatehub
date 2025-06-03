import React from 'react'

function Loan() {
  return (
    <div className='bg-black/80 rounded-3xl px-10 flex justify-between'>
        <div className='text-white flex flex-col py-5 md:py-0 gap-5 items-center justify-center'>
            <p className='text-3xl font-bold '>
                برای دریافت وام رهن خانه کلیک کنید
            </p>
            <p className='text-gray-300'>
                دریافت وام با کم‌ترین بهره و سریع ترین زمان ممکن
            </p>
        <button className='bg-blue-600 text-white pb-4 pt-3 px-10 text-sm rounded-2xl'>
            اطلاعات بیشتر...
        </button>
        </div>
       <div className='hidden md:flex'>
        <img src='/images/man_pic.png' />
       </div>
    </div>
  )
}

export default Loan
