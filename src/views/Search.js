import React from 'react';

export default function Search() {
  return (
    <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Start browsing</h3>
      <div className='grid grid-cols-3 gap-x-5 mb-6'>
        <a className='overflow-hidden' href="#" >
          <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Pop</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="/jubin.png" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-orangebox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Hip Hop</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="/div.png" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-redbox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Rock</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="/rock.png" />
          </div>
        </a>
      </div>

      <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Browse all</h3>
      <div className='grid grid-cols-5 gap-5'>
      {new Array(5).fill(

              <a className='overflow-hidden' href="#" >
                <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
                    <span className='text-4xl font-bold'>Pop</span>
                    <img className='w-[108px] h-[108px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="/jubin.png" />
                </div>
              </a>)}
               {new Array(5).fill(
              <a className='overflow-hidden' href="#" >
          <div className='bg-redbox h-[220px] rounded-lg p-4 relative'>
              <span className='text-4xl font-bold'>Rock</span>
              <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl'  src="/rock.png" />
          </div>
        </a>
              
              
              
      )}
      </div>
      </div>
    </div>
  )
}