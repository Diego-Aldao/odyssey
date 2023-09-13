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
