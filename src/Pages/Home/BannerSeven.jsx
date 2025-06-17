import { useState, useEffect } from "react";
import { Image } from "../../Components/Image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const BannerSeven = () => {

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823462/samples/animals/reindeer.jpg')");
      } else {
        // small screens
        setBgImage("url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823605/sample.jpg')");
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="relative">
      <div
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
        height: "120vh",
      }} className="    md:px-0 absolute inset-0 flex md:items-center  z-50"
      >
      <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[55%] md:left-[65%]  items-end">
          <div className="max-w-[556px] w-full   p-5   ">
            <p className="header-40 leading-9 md:leading-[60px] text-white font-PoppinsMedium">
              Grow Savings
            </p>
            <p className=" text-white text-[18px] mt-2 md:leading-[30px] text-20 font-PoppinsLight">
              Grow your money through individual <br /> and group savings or ajo.
            </p>
            <button className="mt-5 py-2 bg-[rgba(255,255,255,0.4)] md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-white gap-3">
              Get the app now
              <FaRegArrowAltCircleRight color="white" />
            </button>
          </div>
        </div>
      </div>

        
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1748551063/Grow_Savings_jnohhe.png"
          alt="Space Port Background"
          height="170vh"
          fixed
          darken
          className=" block md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1748551063/Grow_Savings_jnohhe.png"
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

export default BannerSeven;
