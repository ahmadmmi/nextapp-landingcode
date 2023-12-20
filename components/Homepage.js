import Images from "@/components/Images";
const Homepage = () => {
  return (
    <div className='h-96 border'>
      <div className='grid grid-cols-2 relative'>
        <Images
          src='/images/home-icon-1.png'
          alt='home-icon-1'
          className='absolute w-[86px] h-[31px] top-0 left-0'
        />
        <div className='col-span-1'>
          <div className='flex h-full items-start justify-center flex-col'>
            <p className='text-2xl font-bold text-teal-500'>CodeatHome</p>
            <p className='text-[56px] font-extrabold text-teal-500'>
              We Start From Home
            </p>
            <p className='text-lg font-medium text-[#575757] mt-4'>
              Hello! Looks like you’re enjoying our page, but you haven’t signed
              up for an account yet.
            </p>
            <button className='rounded-full py-3 px-9 bg-teal-500 hover:bg-teal-600 text-white text-2xl font-medium mt-4'>
              Get Started
            </button>
          </div>
        </div>
        <div className='col-span-1'>
          <Images
            src='/images/home-image.png'
            alt='home-image'
            className='relative w-[586px] h-[368px]'
          ></Images>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
