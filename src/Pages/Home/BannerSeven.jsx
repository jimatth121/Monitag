
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ParallaxEffect from "../../Components/ParallaxEffect";


const BannerSeven = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [bgImage, setBgImage] = useState("");
  const fixedBg =
    "https://res.cloudinary.com/dax11nwlt/image/upload/v1748551063/Grow_Savings_jnohhe.png";

 useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823462/samples/animals/reindeer.jpg')"
        );
      } else {
        // small screens
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823605/sample.jpg')"
        );
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollToDiv = (href) => {
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
   <ParallaxEffect id="banner7" 
      fixedImage={fixedBg}
      overlay={bgImage} 
      >
          <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[40%] md:left-[65%]  items-end">
            <div className="max-w-[556px] w-full   p-5   ">
              <p className="header-40 leading-9 md:leading-[60px] text-white font-PoppinsMedium">
                Grow Savings
              </p>
              <p className=" text-white text-[18px] mt-2 md:leading-[30px] text-20 font-PoppinsLight">
                Grow your money through individual <br /> and group savings or
                aj&#7885;.
              </p>
              <button
                onClick={() => scrollToDiv("#qrCode")}
                className="mt-5 py-2 bg-[rgba(255,255,255,0.4)] md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-white gap-3"
              >
                Get the app now
                <FaRegArrowAltCircleRight color="white" />
              </button>
            </div>
          </div>
      </ParallaxEffect>
  );
};

export default BannerSeven;


