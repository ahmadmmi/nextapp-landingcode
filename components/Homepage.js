import Images from "@/components/Images";
const Homepage = () => {
  return (
    <div className='bg-gr-home'>
      <div className='flex items-center justify-center h-auto lg:h-screen pt-36 lg:pt-0 max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 relative'>
          <Images
            src='/images/home-icon-1.png'
            alt='home-icon-1'
            className='absolute w-[86px] h-[31px] -top-5 left-16 animate-bounce'
          />
          <div className='col-span-2 lg:col-span-1'>
            <div className='flex h-full items-center lg:items-start justify-center flex-col'>
              <p className='text-2xl font-bold text-teal-500'>CodeatHome</p>
              <p className='text-[56px] font-extrabold text-teal-500 text-center lg:text-left'>
                We Start From Home
              </p>
              <p className='text-lg font-medium text-[#575757] mt-4 text-center lg:text-left'>
                Hello! Looks like you’re enjoying our page, but you haven’t
                signed up for an account yet.
              </p>
              <button className='rounded-full py-3 px-9 bg-teal-500 hover:bg-teal-600 text-white text-2xl font-medium mt-4 hidden lg:block'>
                Get Started
              </button>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1'>
            <Images
              src='/images/home-image.png'
              alt='home-image'
              className='relative w-full sm:w-[586px]  lg:w-auto h-72 lg:h-[368px] max-w-[586px] mx-auto'
            ></Images>
            <button className='rounded-full py-3 px-9 bg-teal-500 hover:bg-teal-600 text-white text-2xl font-medium block lg:hidden m-auto mt-6'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
