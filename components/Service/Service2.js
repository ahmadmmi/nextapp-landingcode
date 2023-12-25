import Images from "../Images";

export default function Service2() {
  const data = {
    title: "We Help Solves Your Business",
    desc: "We Help Solves Your Business",
    list_items: [
      {
        id: 1,
        image: "/images/help-1.png",
        title:
          "Please click on the confirmation link we sent you by email to keep using our service",
        list: [
          {
            id: 1,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 2,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 3,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 4,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
        ],
      },
      {
        id: 2,
        image: "/images/help-2.png",
        title:
          "Please click on the confirmation link we sent you by email to keep using our service",
        list: [
          {
            id: 1,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 2,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 3,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 4,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
        ],
      },
      {
        id: 3,
        image: "/images/help-3.png",
        title:
          "Please click on the confirmation link we sent you by email to keep using our service",
        list: [
          {
            id: 1,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 2,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 3,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
          {
            id: 4,
            image: "/images/help-list-icon.png",
            desc: "Help you create the right website for your business profile.",
          },
        ],
      },
    ],
  };

  const renderItems = () => {
    return data.list_items.map((item, index) =>
      index % 2 === 0 ? (
        <div key={item.id} className='grid grid-cols-2 mt-14 gap-10 lg:gap-0'>
          <div className='col-span-2 lg:col-span-1 flex lg:block justify-center lg:justify-start'>
            <div className='border w-max py-24 px-0 lg:px-8 rounded-2xl'>
              <Images
                src={item.image}
                alt={`we-help-${item.id}`}
                className='relative w-[431px] h-[274px]'
              ></Images>
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 flex lg:block justify-center lg:justify-start'>
            <div>
              <p className='text-[#4A4A4A] text-3xl font-bold'>{item.title}</p>
              <ul className='mt-10'>{renderSubItems(item)}</ul>
            </div>
          </div>
        </div>
      ) : (
        <div key={item.id} className='grid grid-cols-2 mt-14 gap-10 lg:gap-0'>
          <div className='order-2 lg:order-1 col-span-2 lg:col-span-1 flex lg:block justify-center lg:justify-start'>
            <div>
              <p className='text-[#4A4A4A] text-3xl font-bold'>{item.title}</p>
              <ul className='mt-10'>{renderSubItems(item)}</ul>
            </div>
          </div>
          <div className='order-1 lg:order-2 col-span-2 lg:col-span-1 flex justify-center lg:justify-end'>
            <div className='border w-max py-24 px-0 lg:px-8 rounded-2xl'>
              <Images
                src={item.image}
                alt={`we-help-${item.id}`}
                className='relative w-[431px] h-[274px]'
              ></Images>
            </div>
          </div>
        </div>
      )
    );
  };

  const renderSubItems = (item) => {
    return item.list.map((itm) => {
      return (
        <li key={itm.id} className='mt-6'>
          <div className='flex items-center'>
            <Images
              src={itm.image}
              alt={`we-help-s${itm.id}`}
              className='relative w-[19px] h-[20px] mr-4'
            ></Images>
            <p className='text-[#575757] text-lg'>{itm.desc}</p>
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
      <div>{renderItems()}</div>
    </div>
  );
}
