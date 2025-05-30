import React from 'react'
import ServicesBox from './ServicesBox'

function Services() {
    const services=[
        {id:1,img:'/images/services1.png',
            title:'مشاور املاک هستید؟',
            desc:'رنتی فای باعث توسعه کسب و کار بیش از۱۵۰۰ مشاور املاک متخصص شده.شانش تون رو در پیوستن به این مجموعه و توسعه کسب و کارتون امتحان کنید.',
            buttonText:'مشاهده خدمات'
        },
        {id:2,img:'/images/services2.png',
            title:'مالک هستید؟',
            desc:'با چند کلیک ساده ، ملک تون رو به صورت رایگان در رنتی فای آگهی و در سریع ترین زمان ممکن در یک فضای امن معامله کنید. ',
            buttonText:'ثبت رایگان آگهی'
        },
        {id:1,img:'/images/services3.png',
            title:'خانه مورد علاقه تان را اجاره کنید!',
            desc:'با چند کلیک ساده ، ملک تون رو به صورت رایگان در رنتی فای آگهی و در سریع ترین زمان ممکن در یک فضای امن معامله کنید. ',
            buttonText:'اجاره خانه'
        },

    ]
  return (
    <div>
      <h4 className='text-2xl text-center font-bold'>
        با خدمات <span className='text-blue-500'>رنتی‌فای</span> آشنا شوید
      </h4>
      <div className='flex gap-10 mt-10'>
        {services.map(service=>(
            <ServicesBox key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services
