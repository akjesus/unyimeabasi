import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

export default function AnimatedCounter({
  from = 0,
  to = 100,
  duration = 2,
  suffix = "",
  prefix = "",
  label = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let start = from;
    const end = to;
    const totalFrames = duration * 60;
    const increment = (end - start) / totalFrames;

    let current = start;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      current += increment;

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [inView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">
        {prefix}
        {count}
        {suffix}
      </h3>

      {label && (
        <p className="text-gray-400 mt-2 text-sm sm:text-base">{label}</p>
      )}
    </motion.div>
  );
}
