import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css"; // Optional, for default styles

const Banner01
 = () => {
  const jarallaxRef = useRef(null);

  useEffect(() => {
    if (jarallaxRef.current) {
      jarallax(jarallaxRef.current, {
        speed: 0.1, // Adjust speed for the parallax effect
      });
    }
  }, []);

  return (
    <div>
      {/* Parallax Background Example */}
      <div className="jarallax" style={{ height: "100vh" }} ref={jarallaxRef}>
        <img
          className="jarallax-img"
          src="https://res.cloudinary.com/dax11nwlt/image/upload/v1734788632/samples/landscapes/girl-urban-view.png"
          alt="Parallax Background"
        />
        <div className="content">Your content here...</div>
      </div>
    </div>
  );
};

export default Banner01
;
