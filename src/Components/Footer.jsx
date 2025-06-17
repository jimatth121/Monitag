import Logo from "../assets/Logo (2).png";
import Naija from "../assets/naija.png";
import Ndc from "../assets/ndic.png";
import Ndcpc from "../assets/ndpc.png";
import Png from "../assets/png.png";
import Twitter from "../../src/assets/twitter.png";
import LinkedIn from "../../src/assets/linkedIn.png";
import Facebook from "../../src/assets/facebook.png";
import Instagram from "../../src/assets/instagram.png";
import Threads from "../../src/assets/threads.png";
import Tiktok from "../../src/assets/tiktok.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="   pt-14 font-PoppinsRegular text-[#979797]">
      <div className="px-5 md:px-0 ">
        <div className=" text-black py-8  md:px-20 mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-[150px_150px_1fr_500px] gap-5 md:gap-10 pb-10 ">
            <div>
              <img src={Logo} alt="" className="w-[100px]" />
            </div>
            <div>
              <p className="text-1 font-bold text-[#008cff]">RESOURCES</p>
              {/* <p className="mt-2 text-[#979797] md:mt-3 ">About</p> */}
              {/* <p className="mt-2 text-[#979797] md:mt-3">FAQs</p> */}
              <p
                onClick={() => navigate("privacypolicy")}
                className="mt-2 text-[#979797] md:mt-3 cursor-pointer"
              >
                Privacy policy
              </p>
              <p
                onClick={() => navigate("termsconditions")}
                className="mt-2 text-[#979797] md:mt-3 cursor-pointer"
              >
                Terms
              </p>
            </div>
            <div>
              <p className="text-1 font-bold text-[#008cff]">SUPPORT</p>
              <p className="mt-2 text-[#979797] md:mt-3">+234 700 933 9339</p>
              <p className="mt-2 text-[#979797] md:mt-3">
                help@monitagtechnologies.com
              </p>
            </div>
            <div className="">
              <p className="font-PoppinsRegular text-[#979797]">
                Monitag is duly licensed by the Central Bank of Nigeria.
                Deposits are insured by the Nigerian Deposit Insurance
                Corporation (NDIC).
              </p>

              <div className="flex gap-5 mt-5">
                <img src={Naija} alt="icon" />
                <img src={Ndc} alt="icon" />
                <img src={Png} alt="icon" />

                <img src={Ndcpc} alt="icon" />
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center mt-10">
            <div className=" flex justify-center items-center gap-2 lg:gap-5">
              <img src={Twitter} alt="icon" />
              <img src={LinkedIn} alt="icon" />
              <img src={Facebook} alt="icon" />
              <img src={Instagram} alt="icon" />
              <img src={Tiktok} alt="icon" />
              <img src={Threads} alt="icon" />
            </div>
            <p className="text1 text-[#979797]">©2024 Monitag Technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
