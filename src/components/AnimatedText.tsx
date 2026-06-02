import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20 select-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-inherit">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  style,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const totalLength = characters.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {characters.map((char, index) => {
        if (char === " ") {
          return <span key={index}> </span>;
        }

        // Calculate a staggered range for each character
        // We spread the reveal across the scroll progress (from 0 to 1)
        const start = index / totalLength;
        const end = Math.min(1, (index + 4) / totalLength);

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
