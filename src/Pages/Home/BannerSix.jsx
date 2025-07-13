
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ParallaxEffect from "../../Components/ParallaxEffect";



const BannerSix = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [bgImage, setBgImage] = useState("");
  const fixedBg =
    "https://res.cloudinary.com/dax11nwlt/image/upload/v1748551060/Get_Debit_Cards_b1w2zg.png";

 useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        // md and above
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823441/samples/ecommerce/shoes.jpg')"
        );
      } else {
        // small screens
        setBgImage(
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734823570/samples/food/dessert.jpg')"
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
  <ParallaxEffect id="banner6" 
      fixedImage={fixedBg}
      overlay={bgImage} 
      >
    <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[36%] md:left-[10%]  items-end">
            <div className="max-w-[606px] w-full   p-5   ">
              <p className="header-40 md:leading-[60px] text-white font-PoppinsMedium">
                Get Debit Cards
              </p>
              <p className=" text-white text-[18px] md:leading-[30px] text-20 font-PoppinsLight">
                Pay bills and shop online with the <br /> Monitag virtual or
                physical debit <br /> card.
              </p>
              <button
                onClick={() => scrollToDiv("qrCode")}
                className="mt-5 py-2 md:py-3 bg-[rgba(255,255,255,0.4)] px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-white gap-3"
              >
                Get the app now
                <FaRegArrowAltCircleRight color="white" />
              </button>
            </div>
          </div>
    </ParallaxEffect>
  );
};

export default BannerSix;

