import { CheckIcon } from "@/assets/icons/CheckIcon";
import { motion } from "framer-motion";

export const AnimatedCheckIcon = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-16 h-16 rounded-full bg-[#08121E] mb-4"
      initial={{ opacity: 0, rotate: 0 }} // Estado inicial
      animate={{ opacity: 1, rotate: 360 }} // Animación al cargar
      exit={{ opacity: 0 }} // Estado de salida
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }} // Retraso de 2 segundos antes de que comience la animación
    >
      <CheckIcon className="text-white w-8 h-8" />
    </motion.div>
  );
};

