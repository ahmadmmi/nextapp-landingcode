import Images from "@/components/Images";
export default function Service1() {
  const data = {
    title: "Special Expertise from Us",
    desc: "I Would like to hear about Company updates and special offers",
    list_items: [
      {
        id: 1,
        image: "/images/service-ex.png",
        title: "Mobile Apps",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo. Est ante in nibh mauris cursus.",
      },
      {
        id: 2,
        image: "/images/service-ex.png",
        title: "Website Apps",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi. Euismod quis viverra nibh cras pulvinar mattis.",
      },
      {
        id: 3,
        image: "/images/service-ex.png",
        title: "UI UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam. Id donec ultrices tincidunt arcu non sodales neque sodales ut.",
      },
      {
        id: 4,
        image: "/images/service-ex.png",
        title: "Website Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu. Sed risus pretium quam vulputate dignissim suspendisse in est ante.",
      },
      {
        id: 5,
        image: "/images/service-ex.png",
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus. Id diam maecenas ultricies mi eget.",
      },
      {
        id: 6,
        image: "/images/service-ex.png",
        title: "Creative Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida cum sociis natoque penatibus et.",
      },
    ],
  };
  const renderItems = () => {
    return data.list_items.map((item) => {
      return (
        <div
          key={item.id}
          className='col-span-6 lg:col-span-3 xl:col-span-2 border rounded-2xl p-7'
        >
          <div className='flex flex-col justify-center items-center'>
            <Images
              src={item.image}
              alt='mobile-apps'
              className='relative w-[175px] h-[179px]'
            ></Images>
            <p className='mt-2 text-[#4A4A4A] font-bold text-2xl'>
              {item.title}
            </p>
            <p className='mt-4 text-[#575757] font-normal text-sm text-center'>
              {item.desc}
            </p>
          </div>
        </div>
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
      <div className='grid grid-cols-6 gap-10 mt-10'>{renderItems()}</div>
    </div>
  );
}
