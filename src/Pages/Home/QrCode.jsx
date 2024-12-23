import QRCode from "../../assets/qrcode.jpg";
import QRCodeNotice from "../../assets/qrcodenotice.jpg";

const QrCode = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-center items-center gap-32 py-24 px-14">
        <img src={QRCodeNotice} alt="qrcode" />
        <img src={QRCode} alt="qrcode" />
      </div>
    </div>
  );
};

export default QrCode;
