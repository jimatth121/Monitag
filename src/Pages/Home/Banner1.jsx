import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import ParallaxEffect from "../../Components/ParallaxEffect";

const Banner1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [bgImage, setBgImage] = useState("");
  const fixedBg =
    "https://res.cloudinary.com/dax11nwlt/image/upload/v1748551008/Send_Money_dlavde.png";

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(
        window.innerWidth >= 768
          ? "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1748533781/samples/landscapes/girl-urban-view.png')"
          : "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823478/samples/food/fish-vegetables.jpg')"
      );
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  const scrollToDiv = (href) => {
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <ParallaxEffect id="banner" 
      fixedImage={fixedBg}
      overlay={bgImage} 
      >
        <div className="max-w-[500px] absolute top-[10%]  md:top-[25%] md:left-[100px]   text-white z-50 px-4 ">
          <p className=" header-56 leading-[50px] md:leading-[80px] font-PoppinsMedium">
            Your Money <br /> Your Way
          </p>
          <p className="mt-5 text-white md:leading-[30px]  text-20 md:font-PoppinsLight">
            Make social payments, choose standard or confidential transfers,
            grow your savings and purchase <br /> e-Vouchers.
          </p>
          <button
            onClick={() => scrollToDiv("#qrCode")}
            className="mt-2 md:mt-5 py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-full flex items-center text-[#7049be] bg-white"
          >
            Download the app
            <span className="pl-2 flex gap-3 justify-center items-center">
              <span className="p-2 bg-[#7049be] rounded-full">
                <FaGooglePlay color="white" />
              </span>
              <span className="p-2 bg-[#7049be] rounded-full">
                <FaApple color="white" />
              </span>
            </span>
          </button>
        </div>

    </ParallaxEffect>
    </>
   
  );
};

export default Banner1;
