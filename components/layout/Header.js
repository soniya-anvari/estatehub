import React from 'react'
function Header() {
  return (
    <div className='flex z-100 fixed top-0 right-0 left-0 w-10/12 m-auto justify-between items-center mt-5 p-5 bg-white rounded-2xl '>
        <img src='/images/homeLogo.png' />
        <ul className='flex gap-10'>
            <li>
                رهن و اجاره‌ی خانه
            </li>
            <li>
                مشاورین املاک
            </li>
            <li>
                 بلاگ رنتی فای
            </li>
            <li>
               درباره رنتی فای
            </li>
        </ul>
        <div>
            <button className='bg-blue-500 text-white py-3 px-5 rounded-xl'>
                ورود | ثبت‌نام
            </button>
        </div>
    </div>
  )
}

export default Header
