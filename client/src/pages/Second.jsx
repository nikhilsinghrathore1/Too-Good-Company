import React from 'react'

const Second = () => {
  return (
    <div className='max-w-screen-2xl px-4 py-2 bg-[#151519] text-white'>

      <div className='text-[#A9ABB5] w-full flex items-center justify-center flex-col text-[3rem] leading-none tracking-tight font1 mt-[200px] '>
      <p className='flex'> <span className='flex mr-1'> <p>20</p> <p className='pt-[2px]'>+</p></span> Products</p>
      <p>We guarantee</p>
      </div>

        <div className='w-full h-[90vh]  relative '>

            <div className='absolute -top-[3%] left-[50%] -translate-x-1/2 w-full flex flex-col items-center -gap-[100px] '>
                  <h1 className='font1 text-[8.7rem] tracking-tighter -mb-[42px] relative z-10'>quality</h1>
                  <div className=' relative z-[2]'>
                  <img className='h-[314px] w-[482px] object-cover' src="https://selemen.liqium.com/img/j1.jpg" alt="not showing" />
                  </div>
            </div>

          <div className='absolute bottom-0 w-full h-[67.5vh] flex border-b-[1px] border-white/30'>

            <div className='w-[50%] h-full border-r-[1px] border-white/30'></div>
            <div className='w-[50%] h-full '></div>

          </div>

        </div>


        <div className='w-full h-[180vh] flex border-b-[1px] border-white/30 '>
          <div className='w-1/2 h-full  border-r-[1px] border-white/20 flex flex-col items-center '>

          <h1 className='font1 text-[15px] opacity-65 mt-5'>01</h1>

          <div className='mt-20 w-full text-center leading-4 text-[13px] font2 opacity-80'>
            <p>We use high standard for development</p>
            <p>to Create Space for creativity as usefull as possible</p>
          </div>

        
      <div className='w-full flex items-start  h-[70%]'>
          <div className='relative w-[90%] h-full mt-40'>
            <img className='h-full w-full object-cover z-0 absolute top-0 left-0' src="https://selemen.liqium.com/img/j2.jpg" alt="not showing" />
            <div className='w-full h-full flex items-center flex-col gap-16 justify-center relative bg-black/20 z-10'>
              <div className='text-center leading-[45px]'>
                <p className='font3 font-bold text-[2rem]'>Commercial</p>
                <p className='font1 text-[5rem] '>Designs</p>
              </div>
              <p className='font2'>Comfortable working place</p>
            </div>
          </div>
      </div>

          </div>
          <div className='w-1/2 h-full flex flex-col items-center'>
          <h1 className='font1 text-[15px] opacity-65 mt-5'>01</h1>

<div className='mt-20 w-full text-center leading-4 text-[13px] font2 opacity-80'>
  <p>We provide deep quality control at every</p>
  <p>stage in as it's important for us</p>
</div>


<div className='w-full flex items-center justify-center h-[50%] mt-[240px]'>
<div className='relative w-[55%] h-full mt-40'>
  <img className='h-full w-full object-cover z-0 absolute top-0 left-0' src="https://selemen.liqium.com/img/j3.jpg" alt="not showing" />
  <div className='w-full h-full flex items-center flex-col gap-8 justify-center relative bg-black/50 z-10'>
    <div className='text-center leading-[28px]'>
      <p className='font3 font-bold text-[1rem]'>Elegant nature</p>
      <p className='font1 text-[3rem] '>inspiring</p>
    </div>
    <p className='font2'>Makes it real</p>
  </div>
</div>
</div>
          </div>
        </div>

    </div>
  )
}

export default Second