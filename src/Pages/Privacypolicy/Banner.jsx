const Banner = () => {
  return (
    <div className="h-[60vh] relative">
      <p className="absolute bottom-[30%] header-1 left-1/2 transform -translate-x-1/2 font-PoppinsSemiBold header1 text-white text-center  w-full max-w-[800px] ">
        Privacy Policy
      </p>
      <img
        className="h-full w-full object-cover  fadeIn"
        src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734518788/samples/cup-on-a-table.jpg"
        alt="careersImage"
      />
    </div>
  );
};

export default Banner;
