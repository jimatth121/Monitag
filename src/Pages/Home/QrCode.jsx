import QRCode from "../../assets/qrcode.jpg";
import QRCodeNotice from "../../assets/qrcodenotice.jpg";

const QrCode = () => {
  return (
    <div id="qrCode" className="hidden md:block px-10">
      <div className="flex justify-center items-center gap-8  py-20 max-w-[1200px] mx-auto px-10 ">
        <img src={QRCodeNotice} alt="qrcode" className="  h-[370px]  " />
        <img src={QRCode} alt="qrcode" className=" w-[400px] h-[370px] " />
      </div>
    </div>
  );
};

export default QrCode;
