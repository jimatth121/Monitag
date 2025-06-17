import { useState, useEffect } from "react";
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


  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734788755/samples/people/smiling-man.jpg')");
      } else {
        // small screens
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823495/samples/food/pot-mussels.jpg')");
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (


    <div>
      <div className="relative  ">

        <div style={{
    backgroundImage: bgImage,
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "100%",
    height: "120vh",
  }} className="md:px-0 absolute inset-0 flex md:items-center  z-50">
<div className=" z-50 absolute font-PoppinsMedium left-[5%] top-[13%] md:top-[20%] header-1  text-white header-40">
          Monitag and You
        </div>
        <div className=" md:px-14  w-full absolute   z-50   left-0 right-0 top-[20%]  md:top-[75%] flex flex-col gap-4 md:flex-row justify-between  md:items-center  text-white  ">
          {data.map((item, index) => (
            <div key={index} className=" mx-5">
              <p className="text-1 font-PoppinsRegular  font-bold">
                {item.title}
              </p>
              <p className="text1 font-PoppinsLight">{item.body}</p>
            </div>
          ))}
          <div className=" px-6">
            <button className="w-[200px] py-2 md:py-3 px-4 md:px-2 bg-[rgba(255,255,255,0.4)] border-white border-[1px] rounded-3xl flex  gap-2 justify-center items-center text-white">
             <span>Get the app now </span> 
              <FaRegArrowAltCircleRight color="white" />
            </button>
          </div>
        </div>
        </div>


        
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1750108017/MONITAG_social_payments_Element_2_1_jwjunt.png"
          alt="Space Port Background"
          height="170vh"
          fixed
          darken
          className="md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1750108017/MONITAG_social_payments_Element_2_1_jwjunt.png"
          alt="Space Port Background"
          height="170vh"
          fixed
          darken
          className="hidden md:block"
        ></Image>
      </div>
    </div>
  );
};

export default BannerTwo2;
