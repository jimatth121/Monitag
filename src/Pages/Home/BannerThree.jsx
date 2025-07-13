
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ParallaxEffect from "../../Components/ParallaxEffect";



const BannerThree = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [bgImage, setBgImage] = useState("");
  const fixedBg =
    "https://res.cloudinary.com/dax11nwlt/image/upload/v1748551008/Send_Money_dlavde.png";

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734788934/samples/sheep.jpg')"
        );
      } else {
        // small screens
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823511/samples/animals/cat.jpg')"
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
   <ParallaxEffect id="banner3" 
      fixedImage={fixedBg}
      overlay={bgImage} 
      >
       <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[38%] md:left-[70%]  items-end">
            <div className="max-w-[406px] w-full   p-5   ">
              <p className="header-40 md:leading-[60px] text-white font-PoppinsMedium">
                Send Money
              </p>
              <p className=" text-white text-[18px] md:leading-[30px] font-PoppinsLight text-20">
                Send money through standard or confidential transfers.
              </p>
              <button
                onClick={() => scrollToDiv("qrCode")}
                className="mt-5 py-2 md:py-3 px-4 md:px-6 bg-[rgba(255,255,255,0.4)] border-white border-[1px] rounded-3xl flex items-center text-white gap-3"
              >
                Get the app now
                <FaRegArrowAltCircleRight color="white" />
              </button>
            </div>
          </div>
      </ParallaxEffect>
  );
};

export default BannerThree;
