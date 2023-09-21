import { Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { transition, variantesMainPage } from "../VariantesFramerMotion";
import { useEffect } from "react";

const PaginaDetalles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <AnimatePresence>
        <motion.main
          variants={variantesMainPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="main_detalle"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </MainLayout>
  );
};

export default PaginaDetalles;
