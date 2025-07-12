import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FaGooglePlay, FaApple } from "react-icons/fa";

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
    <div id="banner" style={{ position: "relative", height: isMobile ? "120vh" : "150vh", overflow: "hidden" }}>
      {/* Fixed background image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%", // taller than container
          width: "100%",
          backgroundImage: `url(${fixedBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      {/* Foreground content with a responsive overlay image */}
      <div
        style={{
          backgroundImage: bgImage,
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100%",
          height: "100vh",
        }}
        className="flex items-center px-4 md:px-40"
      >
        <div className="max-w-[400px] mt-[20%] md:mt-[30%] text-white">
          <p className="header-56 leading-8 md:leading-[60px] font-PoppinsMedium">
            Your Money <br /> Your Way
          </p>
          <p className="mt-5 text-white md:leading-[30px] text-20 font-PoppinsLight">
            Make social payments, choose standard or confidential transfers,
            grow your savings and purchase e-Vouchers.
          </p>
          <button
            onClick={() => scrollToDiv("#qrCode")}
            className="mt-5 py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-full flex items-center text-[#7049be] bg-white"
          >
            Download the Monitag app
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
      </div>
    </div>
  );
};

export default Banner1;
