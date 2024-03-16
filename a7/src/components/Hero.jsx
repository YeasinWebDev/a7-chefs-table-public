import React from 'react'

function Hero() {
  return (
    <div className='hero mt-10 md:h-[80vh] h-[40vh] w-full rounded-lg flex flex-col gap-5 items-center text-white px-3 md;px-0'>
      <h1 className='md:mt-32 font-bold md:text-4xl text-lg text-center'>
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className='md:w-[50%] text-center my-2 text-[10px] md:text-lg'>
        Discover the joy of cooking delicious meals while staying mindful of your health with Recipe Calories. Whether you're a seasoned chef or a kitchen novice, we're here to guide you through a culinary journey filled with flavor, nutrition, and inspiration.
      </p>
      <div className=''>
        <button className='bg-[#0BE58A] text-black md:p-3 p-2 rounded-3xl mr-5'>Explore Now</button>
        <button className='bg-transparent md:p-3 p-2 rounded-3xl border-2 border-white'>Our Feedback</button>
      </div>
    </div>
  )
}

export default Hero