// ParallaxEffect.jsx
import { Parallax } from 'react-parallax';
import { motion } from "framer-motion";

const ParallaxEffect = ({
  id,
 fixedImage,
  overlay,
  height = "150vh",
  strength =500,
  children,
}) => {
  return (
    <Parallax
      bgImage={fixedImage} // ✅ Just the image path, no url()
      strength={strength}
      bgImageStyle={{
        objectFit: "cover",
        objectPosition: "center",
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
          height,
          position: "relative",
        }}
        className="flex items-center px-4 md:px-40"
      >
        {/* Optional overlay */}
        {overlay && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
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
