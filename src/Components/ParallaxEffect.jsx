import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef } from "react";

const ParallaxEffect = ({
  id,
  fixedImage, // parallax background
  overlay,
  height = "150vh",
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.scrollTop = 0; // reset scroll if needed
  }, []);

  return (
    <div
      id={id}

      ref={sectionRef}
      style={{
        position: "relative",
        height : `${isMobile ? "130vh" :"150vh"}`, 
        overflow: "hidden",
      }}
    >
      {/* Fixed background inside section */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height:`${isMobile ? "130vh" :"150vh"}`,
          backgroundImage: `url(${fixedImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Foreground overlay image */}
      <div
        style={{
          backgroundImage: overlay,
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100%",
          height: "100vh",
        }}
        className="flex items-center px-4 md:px-40"
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxEffect;
