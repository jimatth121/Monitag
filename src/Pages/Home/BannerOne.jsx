import { useState, useEffect } from "react";
import { Image } from "../../Components/Image";
import Apple from "../../assets/applestore.png";
import Playstore from "../../assets/playstore.png";
const BannerOne = () => {

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1748533781/samples/landscapes/girl-urban-view.png')");
      } else {
        // small screens
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823478/samples/food/fish-vegetables.jpg')");
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="banner">
      <div className="relative">
        <div style={{
    backgroundImage: bgImage,
    backgroundSize: "cover",
    backgroundPosition: "top",
    width: "100%",
    height: "120vh",
  }} className="    md:px-0 absolute inset-0 flex md:items-center  z-50">
    <div className="left-[1%] top-[12%] md:top-[70%] md:left-[65%] w-full h-full flex justify-start px-4 md:px-40 items-center  p-5 md:p-0">
    <div className="max-w-[400px] w-full">
            <p className="header-56 leading-8 md:leading-[60px] text-white  font-PoppinsMedium">
              Your Money <br /> Your Way
            </p>
            <p className="mt-5 text-white  md:leading-[30px] text-20 font-PoppinsLight">
              Make social payments, choose standard or confidential transfers,
              grow your savings and purchase e-Vouchers.
            </p>
            <button className="mt-5 py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-[#7049be] bg-white">
              Download the app
              <img src={Apple} alt="Apple Store" className="ml-2  w-[25px]" />
              <img
                src={Playstore}
                alt="Play Store"
                className="ml-2 w-[25px] "
              />
            </button>
          </div>
      
    </div>
         
        </div>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1748551008/Send_Money_dlavde.png"
          alt="Space Port Background"
          height="170vh"
          fixed
          darken
          className=" block md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1748551008/Send_Money_dlavde.png"
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

export default BannerOne;
