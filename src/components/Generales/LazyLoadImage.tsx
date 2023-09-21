import LazyLoad from "react-lazy-load";

type Props = {
  children: JSX.Element;
  customClases?: string;
};

const LazyLoadImage = ({ children, customClases }: Props) => {
  return (
    <LazyLoad className={`h-full w-full bg-main-black ${customClases || ""}`}>
      {children}
    </LazyLoad>
  );
};

export default LazyLoadImage;
