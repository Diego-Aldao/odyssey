import { motion } from "framer-motion";
import {
  transition,
  varianteDetalleSecciones,
} from "../../VariantesFramerMotion";
type Props = {
  children: JSX.Element;
  titulo: string;
  visibleContent?: string;
};
const SubSectionDetalle: React.FC<Props> = ({
  titulo,
  children,
  visibleContent,
}) => {
  return (
    <>
      {(visibleContent === "general" || visibleContent === titulo) && (
        <section className="mb-10">
          <header className="mb-3">
            <motion.h3
              variants={varianteDetalleSecciones}
              initial="initialH3"
              whileInView="animateH3"
              viewport={{ once: true, margin: "-70px" }}
              transition={transition}
              className="subtitulo-detalle item-skew-izquierda"
            >
              <motion.span
                className="block relative"
                variants={varianteDetalleSecciones}
                initial="initialSpan"
                viewport={{ once: true, margin: "-70px" }}
                whileInView="animateSpan"
                transition={transition}
              >
                {titulo}
              </motion.span>
            </motion.h3>
          </header>
          {children}
        </section>
      )}
    </>
  );
};

export default SubSectionDetalle;
