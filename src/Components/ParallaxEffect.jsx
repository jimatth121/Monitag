import { useMediaQuery } from "@mantine/hooks";

const ParallaxEffect = ({
  id,
fixedImage,
  overlay,
  height = "150vh",
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      id={id}
      style={{
        position: "relative",
        height,
        backgroundImage: `url(${fixedImage})`,
        backgroundAttachment: isMobile ? "scroll" : "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Optional overlay on top of the fixed background */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: overlay ? `${overlay}` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="flex items-center px-4 md:px-40"
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxEffect;
