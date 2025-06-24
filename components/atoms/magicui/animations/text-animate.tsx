import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TextAnimate = ({
  words,
  className,
  delay = 0,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const characters = words.split("");

  return (
    <motion.div className={cn("text-center", className)} initial="hidden" animate="visible">
      {characters.map((char, i) => (
        <motion.span
          key={char + "-" + i}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.1,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
