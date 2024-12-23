import { Image } from "../../Components/Image";
import Apple from "../../assets/applestore.png";
import Playstore from "../../assets/playstore.png";
const BannerOne = () => {
  return (
    <div id="banner">
      <div className="relative">
        <div className=" px-5  mt-40 md:px-0 absolute inset-0 flex md:items-center md:ml-[150px] z-50">
          <div className="max-w-[356px] w-full ">
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
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734823478/samples/food/fish-vegetables.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
          className=" block md:hidden"
        ></Image>
        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788632/samples/landscapes/girl-urban-view.png"
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

export default BannerOne;
