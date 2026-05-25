// app/hoc/SectionWrapper.tsx
import { motion } from "framer-motion";
import { styles } from "@/app/constants/styles";

const SectionWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        // Aquí está la clave: max-w-7xl y mx-auto centran el contenido
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;