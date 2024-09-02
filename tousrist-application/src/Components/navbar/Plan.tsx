import React from 'react'


const Plan:React.FC= () => {

  return (
    <div className='my-12 md:my-24 mx-4 md:mx-auto max-w-full md:container'>
        <section className='rounded bg-black min-h-[550px] overflow-hidden relative'>
            <div className='absolute bottom-0 h-1/2 md:h-full w-full p-6 md:p-8 lg:p-12 z-10 md:grid-cols-2'>
            <div className='relative h-full md:py-1 py-2'>
                <div className='flex flex-col my-8 lg:my-16'>
                    <h2 className='inline-block text-sm lg:text-base text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-500 font-mono uppercase -tracking-wider'>
                        Plan with a loacl
                    </h2>
                    <button className='text-left' type='button' aria-label='open model'>
                        <p className='md:text-5xl text-2xl leading-relaxed text-white py-2 md:py-5'>
                            Experienece the real Ireland
                        </p>
                    </button>
                </div>
                <div className='flex flex-row gap-6 lg:gap-9 absolute bottom-0'>
                    <button type='button' aria-label='open-modal'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="h-10 w-28 md:h-14 md:w-32 text-white" viewBox="0 0 120 29.289" fill="currentColor" aria-hidden="true">
                    <path d="M58.081 17.117L54.023 6.263a.556.556 0 01.07-.518.6.6 0 01.48-.221h3.717a.835.835 0 01.807.566l3.279 9.51a2.153 2.153 0 01.132.725 2.3 2.3 0 01-4.427.808zm-7.58 0L46.436 6.263a.569.569 0 01.07-.518.614.614 0 01.487-.242H50.7a.849.849 0 01.807.566l3.272 9.522a2.125 2.125 0 01.132.725 2.261 2.261 0 01-2.29 2.216 2.284 2.284 0 01-2.121-1.387z" />
                    
                    </svg>
                    </button>
                </div>
            </div>
            </div>
            <div className="absolute w-full md:w-2/3 h-3/5 md:h-full right-0">
          <div className="h-full relative">
            <img
              alt="Experience the real Ireland"
              loading="lazy"
              className="absolute w-full h-full object-cover top-0 left-0 bg-black-200"
              src="https://lp-cms-production.imgix.net/public/2024-01/IRELAND-Stocksytxp95a12c14B4D300Medium3464926.jpg"
            />
            <div className="w-full h-full relative bg-gradient-to-b md:bg-gradient-to-l from-transparent from-60% to-black"></div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Plan