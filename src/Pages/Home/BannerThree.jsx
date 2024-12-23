import { Image } from "../../Components/Image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const BannerThree = () => {
  return (
    <div>
      <div className="relative">
        <div className="   md:px-0 absolute  flex justify-end    z-50 left-[1%] top-[12%] md:top-[70%] md:left-[65%]  items-end">
          <div className="max-w-[406px] w-full   p-5   ">
            <p className="header-40 md:leading-[60px] text-white font-PoppinsMedium">
              Send Money
            </p>
            <p className=" text-white text-[18px] md:leading-[30px] font-PoppinsLight text-20">
              Send money through standard or confidential transfers.
            </p>
            <button className="mt-5 py-2 md:py-3 px-4 md:px-6 border-white border-[1px] rounded-3xl flex items-center text-white gap-3">
              Get the app now
              <FaRegArrowAltCircleRight color="white" />
            </button>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734823511/samples/animals/cat.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
          className=" block md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788934/samples/sheep.jpg"
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

export default BannerThree;
