// import Banner01 from "./Banner";
// import BannerFour from "./BannerFour";
// import BannerThree from "./BannerThree";
// import BannerTwo from "./BannerTwo";

import BannerFive from "./BannerFive";
import BannerFour from "./BannerFour";
import BannerOne from "./BannerOne";
import BannerSix from "./BannerSix";
import BannerThree from "./BannerThree";
import BannerSeven from "./BannerSeven";
import Reviews from "./Reviews";
import Questions from "./Questions";
import BannerTwo2 from "./BannerTwo2";
import QrCode from "./QrCode";
import Banner1 from "./Banner1";

const HomeIndex = () => {
  return (
    <div>
      <Banner1/>
      {/* <BannerOne /> */}
      <BannerTwo2 />
      <BannerThree />
      <BannerFour />
      <BannerFive />
      <BannerSix />
      <BannerSeven />
      <Reviews />
      <Questions />
      <QrCode />
    </div>
  );
};

export default HomeIndex;
