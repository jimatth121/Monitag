/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import "./Image.css";

export const Image = ({
  src = "",
  alt = "",
  height,
  children,
  fixed = false,
  speed = 1,
  clamp = false,
  debug = false,
  className = "",
}) => {
  const box = useRef(null);
  const img = useRef(null);
  const [deltaY, setDeltaY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Force GPU acceleration on image via CSS
  useEffect(() => {
    if (img.current) {
      img.current.style.willChange = "transform";
      img.current.style.transform = "translateZ(0)";
      img.current.style.backfaceVisibility = "hidden";
    }
  }, []);

  useEffect(() => {
    let frameId;

    const updateParallax = () => {
      if (fixed || !box.current || !img.current || !imageLoaded) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const winHeight = window.innerHeight;
      const boxRect = box.current.getBoundingClientRect();

      const boxTop = boxRect.top + scrollY;
      const boxBottom = boxRect.bottom + scrollY;
      const boxHeight = boxRect.height;
      const winBottom = scrollY + winHeight;

      const pct =
        (clampVal(winBottom, boxTop, boxBottom + winHeight) - boxTop) /
        (boxHeight + winHeight);

      const imgHeight = img.current.offsetHeight;

      if (imgHeight < boxHeight) {
        if (debug) {
          console.warn(
            `Parallax issue: image is smaller than container. imgHeight=${imgHeight}, boxHeight=${boxHeight}`
          );
        }
        return;
      }

      const diff = imgHeight - boxHeight;
      const newDeltaY =
        (0 - diff - diff * speed) * 0.5 + diff * pct * speed;

      const finalDelta = clamp ? clampVal(newDeltaY, -diff, 0) : newDeltaY;

      setDeltaY(finalDelta);

      if (debug) {
        console.log({
          scrollY,
          winBottom,
          pct,
          boxHeight,
          imgHeight,
          deltaY: finalDelta,
        });
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateParallax);

    updateParallax(); // initial call

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateParallax);
    };
  }, [imageLoaded, fixed, speed, clamp, debug]);

  return (
    <div
      ref={box}
      className={`image-box ${className}`}
      style={{ height: height || undefined }}
    >
      {fixed ? (
        <div
          className="image-bg dark-overlay"
          style={{
            backgroundImage: `url(${src})`,
            height: height || undefined,
          }}
        />
      ) : (
        <img
          ref={img}
          src={src}
          alt={alt}
          className="image-behind"
          onLoad={() => setImageLoaded(true)}
          style={{
            transform: `translateY(${deltaY}px)`,
          }}
        />
      )}
      {Boolean(children) && <div className="image-content">{children}</div>}
    </div>
  );
};

const clampVal = (num = 0, min = 0, max = 0) => {
  return Math.max(min, Math.min(num, max));
};
