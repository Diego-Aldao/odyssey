export const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] };

export const varianteDetalleSecciones = {
  initialSection: { x: 50, y: 50, opacity: 0 },
  animateSection: { x: 0, y: 0, opacity: 1 },
  exitSection: { x: 50, y: 50, opacity: 0 },
  initialH3: { x: -50, opacity: 0 },
  animateH3: { x: 0, opacity: 1 },
  initialSpan: { y: 20, opacity: 0 },
  animateSpan: { y: 0, opacity: 1 },
};

export const varianteDetalleArticle = {
  initial: { x: 20, y: 20, opacity: 0 },
  whileInView: { x: 0, y: 0, opacity: 1 },
  viewport: { once: true, margin: "-70px" },
};

export const varianteModalVideo = {
  initialContenedor: { opacity: 0 },
  animateContenedor: { opacity: 1 },
  initialButton: { opacity: 0, x: 100, y: 100 },
  animateButton: { opacity: 1, x: 0, y: 0 },
};

export const varianteNavMobile = {
  initialContenedor: { opacity: 1, x: "100%" },
  animateContenedor: { opacity: 1, x: "100%" },
  exitContenedor: { opacity: 0, x: "100%" },
  initialMenu: { x: 110 },
  animateMenu: { x: 0 },
  initialMenuIcono: { opacity: 0, y: 10, x: 10 },
  animateMenuIcono: { opacity: 1, y: 0, x: 0 },
  initialListItem: { opacity: 0, x: -110 },
  animateListItem: { opacity: 1, x: 0 },
};

export const varianteBarraBusqueda = {
  initialForm: { opacity: 0, y: 10, x: 10 },
  animateForm: { opacity: 1, y: 0, x: 0 },
};

export const varianteMainImagen = {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
};

export const varianteMainTitulo = {
  initialContenedor: { opacity: 0 },
  animateContenedor: { opacity: 1 },
  initialTitulo: { y: 50, opacity: 0 },
  animateTitulo: { y: 0, opacity: 1 },
  initialButton: { x: -50, opacity: 0 },
  animateButton: { x: 0, opacity: 1 },
};

export const varianteCards = {
  initial: { opacity: 0, y: 20, x: 20 },
  whileInView: { opacity: 1, y: 0, x: 0 },
};

export const varianteFiltros = {
  initialContenedor: { x: -50, opacity: 0 },
  animateContenedor: { x: 0, opacity: 1 },
  initialItem: { y: 20, opacity: 0 },
  animateItem: { y: 0, opacity: 1 },
};

export const VarianteSections = {
  initial: { x: 50, y: 50, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 },
  exit: { x: 50, y: 50, opacity: 0, transition: { duration: 0.1 } },
};

export const varianteSectionSubPaginas = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const varianteMainLayout = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const variantesMainPage = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const variantesIconoHeader = {
  animate: { rotate: [0, 10, -10, 0] },
};
