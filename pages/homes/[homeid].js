import { useRouter } from 'next/router';
import React from 'react'
import homes from "../../data/homedb";
import Feature from '@/components/templates/homeDetails/FeatureTabs';
function HomeDetails() {
    const router = useRouter();
    const {homeid}=router.query;
    const home=homes[homeid-1];
  return (
    <div className='pt-40 w-10/12 m-auto'>
      <div className='flex gap-4'>
        {home?.images?.length>0 && home.images.map((image,index)=>(
        <img key={index} src={image} className='w-1/3'/>
      ))}
      </div>
      <div className='flex gap-10 mt-5' >
        <div className='w-2/3 flex flex-col gap-2'>
            <p>
            {home?.name } {" - "}{home?.details}
        </p>
          <div className='flex gap-1 items-center'>
            <span className='pt-1 inline-block'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 5C8.96243 5 6.5 7.46243 6.5 10.5C6.5 12.9077 7.90982 15.0428 9.468 16.6502C10.234 17.4403 11.0033 18.0688 11.5817 18.4997C11.7368 18.6152 11.8775 18.716 12 18.8015C12.1225 18.716 12.2632 18.6152 12.4183 18.4997C12.9967 18.0688 13.766 17.4403 14.532 16.6502C16.0902 15.0428 17.5 12.9077 17.5 10.5C17.5 7.46243 15.0376 5 12 5ZM12 20C11.4845 20.8569 11.4842 20.8567 11.4839 20.8565L11.4832 20.8561L11.4812 20.8549L11.4755 20.8515L11.4572 20.8403C11.442 20.8309 11.4207 20.8177 11.3938 20.8007C11.3401 20.7668 11.2638 20.7179 11.1681 20.6545C10.977 20.5278 10.708 20.3428 10.387 20.1037C9.74671 19.6267 8.89099 18.9283 8.032 18.0422C6.34018 16.297 4.5 13.6821 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.6821 17.6598 16.297 15.968 18.0422C15.109 18.9283 14.2533 19.6267 13.613 20.1037C13.292 20.3428 13.023 20.5278 12.8319 20.6545C12.7362 20.7179 12.6599 20.7668 12.6062 20.8007C12.5793 20.8177 12.558 20.8309 12.5428 20.8403L12.5245 20.8515L12.5188 20.8549L12.5168 20.8561L12.5161 20.8565C12.5158 20.8567 12.5155 20.8569 12 20ZM12 20L12.5155 20.8569C12.1983 21.0477 11.8017 21.0477 11.4845 20.8569L12 20Z" fill="#989BA0"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z" fill="#989BA0"/>
                    </svg>
            </span>
            <p className='text-gray-500 text-sm'>
                {home?.location}
            </p>
        </div>
        <p>
            رهن {" "} {home?.mortgage} <span className='text-sm text-gray-500'>تومان</span>
        </p>
        <p>
            اجاره {" "} {home?.rent}  <span className='text-sm text-gray-500'>تومان</span>
        </p>
      
        </div>
          <div className='w-1/3 border border-gray-300 rounded-xl p-4 '>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={home?.owner?.photo} className='w-[80px]' />
                <div>
                    <p className='text-xl font-bold'>
                        {home?.owner?.name}
                    </p>
                     <p className='text-sm text-gray-400'>
                        {home?.owner?.phone}
                    </p>
                </div>
                </div>
                <div className='mt-6 flex gap-5'>
                    <button className='flex border border-gray-300 rounded-xl items-center justify-center gap-2 text-blue-500 w-1/2 pt-1 pb-2 px-3'>
                        <span className='pt-1'>
                            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.95786 5.0472C7.89492 4.98427 7.79288 4.98427 7.72994 5.0472L6.33879 6.43835C5.49481 7.28233 5.26289 8.5613 5.75679 9.64788C7.58935 13.6795 10.8205 16.9107 14.8521 18.7432C15.9387 19.2371 17.2177 19.0052 18.0617 18.1612L19.4528 16.7701C19.5158 16.7072 19.5158 16.6051 19.4528 16.5422L17.5814 14.6708C17.5324 14.6217 17.4574 14.6095 17.3954 14.6406L16.3568 15.1599C15.0777 15.7994 13.5329 15.5487 12.5218 14.5375L9.96252 11.9783C8.95133 10.9671 8.70064 9.42229 9.34018 8.14323L9.85947 7.10466C9.89049 7.04261 9.87833 6.96767 9.82928 6.91862L7.95786 5.0472ZM6.31572 3.63299C7.15971 2.789 8.52809 2.789 9.37208 3.63299L11.2435 5.5044C11.9013 6.16218 12.0643 7.16706 11.6483 7.99908L11.129 9.03766C10.8745 9.54674 10.9743 10.1616 11.3767 10.5641L13.936 13.1233C14.3384 13.5258 14.9533 13.6255 15.4624 13.371L16.5009 12.8517C17.333 12.4357 18.3379 12.5988 18.9956 13.2565L20.867 15.128C21.711 15.9719 21.711 17.3403 20.867 18.1843L19.4759 19.5755C18.0424 21.0089 15.8701 21.4029 14.0245 20.564C9.5527 18.5313 5.96871 14.9473 3.93606 10.4755C3.09717 8.62995 3.49109 6.45762 4.92457 5.02414L6.31572 3.63299Z" fill="#0D6EFD"/>
                            </svg>
                        </span>
                        تماس
                    </button>
                    <button className='flex border border-gray-300 rounded-xl items-center justify-center gap-2 text-blue-500 w-1/2 pt-1 pb-2 px-3'>
                        <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 10.917H7.75V8.91699H7.25C4.48858 8.91699 2.25 11.1556 2.25 13.917V21.0837C2.25 21.4717 2.47446 21.8247 2.82584 21.9892C3.17723 22.1538 3.5921 22.1003 3.89018 21.8519L6.61205 19.5837H11.25C14.0114 19.5837 16.25 17.3451 16.25 14.5837V14.2503H14.25V14.5837C14.25 16.2405 12.9069 17.5837 11.25 17.5837H6.25C6.01606 17.5837 5.78953 17.6657 5.60982 17.8154L4.25 18.9486V13.917C4.25 12.2601 5.59315 10.917 7.25 10.917Z" fill="#0D6EFD"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.91699C8.75 4.15557 10.9886 1.91699 13.75 1.91699H17.75C20.5114 1.91699 22.75 4.15557 22.75 6.91699V14.0837C22.75 14.4717 22.5255 14.8247 22.1742 14.9892C21.8228 15.1538 21.4079 15.1003 21.1098 14.8519L18.388 12.5837H13.75C10.9886 12.5837 8.75 10.3451 8.75 7.58366V6.91699ZM13.75 3.91699C12.0931 3.91699 10.75 5.26014 10.75 6.91699V7.58366C10.75 9.24051 12.0931 10.5837 13.75 10.5837H18.75C18.9839 10.5837 19.2105 10.6657 19.3902 10.8154L20.75 11.9486V6.91699C20.75 5.26014 19.4069 3.91699 17.75 3.91699H13.75Z" fill="#0D6EFD"/>
                                    </svg>

                        </span>
                        پیام

                    </button>
                </div>
                <button>
                    درخواست بازدید
                </button>
            </div>

      </div>
      <div className='mt-14'>
        <Feature home={home} />
      </div>
    </div>
  )
}

export default HomeDetails;
