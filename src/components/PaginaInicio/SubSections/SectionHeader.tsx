import { Icon } from "@iconify/react";

type Props = {
  titulo: string;
  nombreInteraccion: string;
  nombreIcono?: string;
};

const SubHeader: React.FC<Props> = ({
  titulo,
  nombreInteraccion,
  nombreIcono,
}) => {
  return (
    <header className="w-full h-14 lg:h-20 bg-main-color-background  pl-4 md:pl-6 lg:pl-10 rounded-xl rounded-b-none flex items-center justify-between">
      <h3 className="uppercase font-semibold font-chivo text-sm xs:text-lg sm:text-xl md:text-2xl lg:text-4xl flex gap-2 sm:gap-4 lg:gap-6 items-center">
        {titulo}
        {nombreIcono && (
          <span className="">
            <Icon
              icon={nombreIcono}
              className="h-[20px] xs:h-full text-main-black"
            />
          </span>
        )}
      </h3>
      <span className="sub_header_interaction flex md:hidden">ver más</span>
      <span className="sub_header_interaction hidden md:flex md:w-2/6 max-w-xs">
        {nombreInteraccion}
      </span>
    </header>
  );
};

export default SubHeader;
