import { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

const ScrollReveal = ({ children }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    const enterAnimation = () => {
      if (isInView) {
        animate(
          "div",
          {
            opacity: [0, 1],
            y: [75, 0],
          },
          { duration: 1 }
        );
      }
    };

    enterAnimation();
  }, [isInView]);

  return (
    <div ref={scope}>
      <motion.div>{children}</motion.div>
    </div>
  );
};

export default ScrollReveal;
