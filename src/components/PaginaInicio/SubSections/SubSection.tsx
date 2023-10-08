import LazyLoad from "react-lazy-load";

type Props = {
  children: JSX.Element;
  lastSection?: boolean;
  noBackground?: boolean;
};

const SubSection = ({ children, lastSection, noBackground }: Props) => {
  return (
    <LazyLoad
      offset={200}
      className={`min-h-[300px] rounded-2xl  ${
        noBackground ? "bg-main-black" : "bg-main-color-background"
      }`}
    >
      <div
        className={`w-full mt-10 md:mt-20 overflow-hidden min-h-[350px] rounded-tr-none ${
          lastSection ? " rounded-b-none" : "rounded-xl"
        }`}
      >
        {children}
      </div>
    </LazyLoad>
  );
};

export default SubSection;
