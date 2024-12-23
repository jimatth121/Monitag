import { Image } from "../../Components/Image";
const SampleTwo = () => {
  return (
    <div>
      <div className="relative">
        <div className=" max-w-[600px] w-full absolute  bottom-[50%] z-50  zindexmat left-0 right-0 bottom-0 flex items-center justify-center text-center  text-red-600 border-2 border-red-600 ">
          <p>Your Money Your Way</p>
        </div>

        <Image
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788755/samples/people/smiling-man.jpg"
          alt="Space Port Background"
          height="100vh"
          fixed
          darken
        ></Image>
      </div>
    </div>
  );
};

export default SampleTwo;
