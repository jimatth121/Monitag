import { Image } from "../../Components/Image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const BannerTwo2 = () => {
  const data = [
    {
      title: "Transact Securely",
      body: "Send money regularly or confidentially. You choose!",
    },
    {
      title: "Save and Spend",
      body: "One app for all your saving and spending needs.",
    },
    {
      title: "Make Fast Payments",
      body: "Never have to worry about a delayed payment again.",
    },
  ];

  return (
    <div>
      <div className="relative  ">
        <div className=" z-50 absolute  left-[5%] top-[13%] md:top-[20%] header-1  text-white header-40">
          Monitag and You
        </div>
        <div className="  md:px-28  w-full absolute   z-50  zindexmat left-0 right-0 top-[20%]  md:top-[75%] flex flex-col gap-4 md:flex-row justify-between  md:items-center  text-white  ">
          {data.map((item, index) => (
            <div key={index} className=" mx-5">
              <p className="text-1 font-bold">{item.title}</p>
              <p className="text1">{item.body}</p>
            </div>
          ))}
          <div className=" px-6">
            <button className=" py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex  gap-2 justify-center items-center text-white">
              Get the app now
              <FaRegArrowAltCircleRight color="white" />
            </button>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734823495/samples/food/pot-mussels.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
          className="md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788755/samples/people/smiling-man.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
          className="hidden md:block"
        ></Image>
      </div>
    </div>
  );
};

export default BannerTwo2;
