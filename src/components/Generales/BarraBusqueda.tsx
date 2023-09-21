import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { transition, varianteBarraBusqueda } from "../../VariantesFramerMotion";

const BarraBusqueda = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    navigate(`/busqueda/${value}`);
  };

  return (
    <motion.form
      initial="initialForm"
      animate="animateForm"
      exit="exitForm"
      transition={transition}
      variants={varianteBarraBusqueda}
      onSubmit={handleSubmit}
      className="w-full rounded-md overflow-hidden flex items-center  text-main-black h-10 bg-main-color-background border-2 border-main-color-background max-w-[700px]"
    >
      <input
        onChange={handleChange}
        value={value}
        type="text"
        className="flex-1 h-full placeholder:capitalize bg-transparent border-transparent -outline-offset-2 px-1 outline-main-black mx-1"
        placeholder="naruto, shingeki, jujut..."
      />
      <button className="h-full flex items-center justify-center bg-main-black gap-2 px-2 rounded-md ">
        <p className="text-main-color-background capitalize text-lg hidden md:block">
          buscar
        </p>
        <Icon
          icon="mingcute:search-3-line"
          className="h-6 w-6 lg:h-5 lg:w-5 text-main-color-background"
        />
      </button>
    </motion.form>
  );
};

export default BarraBusqueda;
