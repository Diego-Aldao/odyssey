import { motion } from "framer-motion";
import { VarianteSections, transition } from "../../VariantesFramerMotion";

type Props = {
  tipoDeGrid: string;
  children: JSX.Element;
  headerDos?: string;
  headerTres?: string;
  headerCuatro?: string;
};

const Grids: React.FC<Props> = ({
  tipoDeGrid,
  children,
  headerDos,
  headerTres,
  headerCuatro,
}) => {
  return (
    <>
      {tipoDeGrid === "tabla" ? (
        <motion.table
          initial="initial"
          animate="animate"
          exit="exit"
          variants={VarianteSections}
          transition={transition}
          className="w-full border-separate border-spacing-y-[20px] border-spacing-x-[5px]"
        >
          <thead className="hidden md:table-header-group">
            <tr>
              <th className="capitalize bg-main-black text-main-color-background px-3 py-1 rounded-sm">
                ranking
              </th>
              <th className="capitalize bg-main-black text-main-color-background px-3 py-1 rounded-sm">
                {headerDos}
              </th>
              <th className="capitalize bg-main-black text-main-color-background px-3 py-1 rounded-sm">
                {headerTres}
              </th>
              <th className="capitalize bg-main-black text-main-color-background px-3 py-1 rounded-sm">
                {headerCuatro}
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </motion.table>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={VarianteSections}
          transition={transition}
          className={`mt-10 contenedor grid justify-items-center gap-2 gap-y-6 sm:gap-4 sm:gap-y-10 grid-${tipoDeGrid} relative min-h-fit
        `}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Grids;
