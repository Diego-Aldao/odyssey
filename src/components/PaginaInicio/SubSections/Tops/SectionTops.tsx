import React from "react";

type Props = {
  children: JSX.Element;
};

const SectionTops: React.FC<Props> = ({ children }) => {
  return <section className="sub_section">{children}</section>;
};

export default SectionTops;
