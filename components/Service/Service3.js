import Images from "../Images";

export default function Service3() {
  const data = {
    title: "Smartshop Feature",
    desc: "I would like to hear about Company updates and special offers.",
    image: "/images/smartshop-main.png",
    list_items: [
      {
        id: 1,
        image: "/images/smartshop-icon-1.png",
        title: "Ilustrasion",
        desc: "Now your online store can be downloaded via playstore",
      },
      {
        id: 2,
        image: "/images/smartshop-icon-2.png",
        title: "Publish Play Store",
        desc: "Now your online store can be downloaded via playstore",
      },
      {
        id: 3,
        image: "/images/smartshop-icon-3.png",
        title: "Owner Control",
        desc: "Now your online store can be downloaded via playstore",
      },
      {
        id: 4,
        image: "/images/smartshop-icon-4.png",
        title: "Tracking",
        desc: "Now your online store can be downloaded via playstore",
      },
      {
        id: 5,
        image: "/images/smartshop-icon-5.png",
        title: "Consultan IT",
        desc: "Now your online store can be downloaded via playstore",
      },
      {
        id: 6,
        image: "/images/smartshop-icon-6.png",
        title: "Digital Payment",
        desc: "Now your online store can be downloaded via playstore",
      },
    ],
  };

  const renderItems = () => {
    return data.list_items.map((item) => {
      return (
        <li key={item.id} className='mt-6'>
          <div className='flex items-center'>
            <Images
              src={item.image}
              alt={`smartshop-${item.id}`}
              className='relative w-[60px] h-[60px] mr-4'
            ></Images>
            <div className='ml-4'>
              <p className='text-[#4A4A4A] text-xl font-bold'>{item.title}</p>
              <p className='text-[#575757] text-lg'>{item.desc}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className='mt-20'>
      <p className='text-4xl font-bold text-[#58c2b1] text-center'>
        {data.title}
      </p>
      <p className='mt-4 text-gray-600 font-medium text-lg text-center'>
        {data.desc}
      </p>
      <div className='grid grid-cols-2 mt-14 gap-10 lg:gap-0'>
        <div className='order-2 lg:order-1 col-span-2 lg:col-span-1 flex lg:block justify-center lg:justify-start border rounded-2xl pl-10 py-10'>
          <div>
            <ul>{renderItems()}</ul>
          </div>
        </div>
        <div className='order-1 lg:order-2 col-span-2 lg:col-span-1 flex justify-center lg:justify-end'>
          <div className=''>
            <Images
              src={data.image}
              alt='smart-shop-image'
              className='relative w-[553px] h-[475px]'
            ></Images>
          </div>
        </div>
      </div>
    </div>
  );
}
