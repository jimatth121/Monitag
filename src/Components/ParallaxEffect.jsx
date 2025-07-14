// ParallaxEffect.jsx
import { Parallax } from 'react-parallax';
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
const ParallaxEffect = ({
  id,
 fixedImage,
  overlay,
  height = "150vh",
  strength =500,
  children,
}) => {

    const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Parallax
      bgImage={fixedImage} // ✅ Just the image path, no url()
      strength={strength}
      bgImageStyle={{
        objectFit: "cover",         // fills container nicely
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",    // don't distort
  backgroundPosition: "center",

      }}
    >
        <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
      <div
        id={id}
        style={{
          height: isMobile ? "120vh": height,
          position: "relative",
        }}
        className=""
      >
        {/* Optional overlay */}
        {overlay && (
          <div
            style={{
              // position: "absolute",
              height: "100vh",
              width: "100%",
              backgroundImage: `${overlay}`, // ✅ Here use url()
              backgroundSize: "cover",
              backgroundPosition: "top",
              zIndex: 1,
            }}
          />
        )}

        {/* Foreground content */}
      
          {children}
        
      </div>
</motion.div>
    </Parallax>
  );
};

export default ParallaxEffect;
