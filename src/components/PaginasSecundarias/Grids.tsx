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
        <table className="w-full border-separate border-spacing-y-[20px] border-spacing-x-[5px]">
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
        </table>
      ) : (
        <div
          className={`mt-10 contenedor grid justify-items-center gap-2 gap-y-6 sm:gap-4 sm:gap-y-10 grid-${tipoDeGrid} 
        `}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Grids;
