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
      className={`min-h-[300px] rounded-t-2xl  ${
        noBackground ? "bg-main-black" : "bg-main-color-background"
      }`}
    >
      <div className={`sub_section ${lastSection ? "last_section" : ""}`}>
        {children}
      </div>
    </LazyLoad>
  );
};

export default SubSection;
