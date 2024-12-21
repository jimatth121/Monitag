import { Image } from "../../Components/Image";
const SampleOne = () => {
  return (
    <div>
      <div className="relative">
        <div className=" px-5 md:px-0 absolute inset-0 flex items-center md:ml-[150px] z-50">
          <div className="max-w-[356px] w-full ">
            <p className="header-1 leading-[60px] text-white">
              Your Money Your Way
            </p>
            <p className="mt-5 text-white text-[18px] leading-[30px]">
              Make social payments, choose standard or confidential transfers,
              grow your savings and purchase e-Vouchers.
            </p>
            <button className="mt-5 py-3 px-6 border-white border-[1px] rounded-3xl">
              Download the app
            </button>
          </div>
        </div>

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

export default SampleOne;
