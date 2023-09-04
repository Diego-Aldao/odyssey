type Props = {
  imagen: string;
  about: string;
};

const AsidePersona = ({ imagen, about }: Props) => {
  return (
    <aside className="hidden md:flex flex-col gap-10 z-20 relative col-start-1 w-full lg:mt-20">
      <div className="border-2 rounded-xl overflow-hidden border-main-black w-full">
        <img src={imagen} alt="" />
      </div>
      <div className="border-b-[3px] border-main-black w-[calc(100%_+_14px)] lg:w-[calc(100%_+_18px)]">
        <p className="item-skew-izquierda after:rounded-b-none after:skew-x-[-331deg] relative  capitalize text-lg inline-block text-main-color-background bg-main-black px-2 rounded-t-md rounded-tr-[10px]">
          informacion
        </p>
      </div>
      <div className="overflow-hidden flex flex-col flex-wrap gap-4">
        <p className="whitespace-pre-line max-w-full">{about}</p>
      </div>
    </aside>
  );
};

export default AsidePersona;
