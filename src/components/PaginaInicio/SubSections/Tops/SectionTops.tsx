import React from "react";
import SubSection from "../SubSection";
import SubSectionHeader from "../SubSectionHeader";

type Props = {
  children: JSX.Element;
};

const SectionTops: React.FC<Props> = ({ children }) => {
  return (
    <SubSection lastSection={true}>
      <>
        <SubSectionHeader
          destino="tops/anime"
          titulo="top anime"
          nombreIcono="streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown"
          nombreInteraccion="ver todos los tops"
        />

        {children}
      </>
    </SubSection>
  );
};

export default SectionTops;
