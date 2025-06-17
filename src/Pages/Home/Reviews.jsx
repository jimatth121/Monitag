import Reviewers from "../../assets/reviewers.png";
import { Carousel } from "@mantine/carousel";
import Slide1 from "../../assets/slide-1.png";
import Slide2 from "../../assets/slide-2.png";
import Slide3 from "../../assets/slide-3.png";
const Reviews = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dax11nwlt/image/upload/v1734868194/samples/chair.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1335px",
      }}
    >
      <div className="pt-24">
        <p className="header-40 text-center forny-bold text-black">
          Real reviews from real users
        </p>
        <p className="flex justify-center mt-4 gap-3">
          <img src={Reviewers} alt="reviewer" />
          <small>
            Trusted by over <br /> 28k+ people
          </small>
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <img
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734869075/cld-sample.png"
          alt="phone"
        />
      </div>

      <div className="mt-16 md:px-48  md:ml-28">
        <Carousel
          withIndicators={false}
          height={300}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          className="w-full  px-4 md:px-0 "
          withControls={false}
        >
          <Carousel.Slide>
            <img src={Slide1} alt="slide" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Slide2} alt="slide" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Slide3} alt="slide" />
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
