import { Image } from "../../Components/Image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const BannerFour = () => {
  return (
    <div>
      <div className="relative">
        <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[60%] md:left-[10%]  items-end">
          <div className="max-w-[606px] w-full   p-5   ">
            <p className="header-40 md:leading-[60px] text-white font-PoppinsMedium">
              Make Social Payments
            </p>
            <p className=" text-white text-[18px] md:leading-[30px] text-20 font-PoppinsLight">
              Send money to anyone through social media.
            </p>
            <button className="mt-5 py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-white gap-3">
              Get the app now
              <FaRegArrowAltCircleRight color="white" />
            </button>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734823524/samples/cloudinary-icon.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
          className=" block md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788973/samples/people/kitchen-bar.jpg"
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

export default BannerFour;
