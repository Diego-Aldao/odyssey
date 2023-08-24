import { Icon } from "@iconify/react";

type Props = {
  tipo: string;
  score: number | null;
  miembros: number;
  episodios: number | null;
};

const Footer: React.FC<Props> = ({ score, miembros }) => {
  return (
    <footer className="w-full flex items-center justify-center border-main-black border-b-2  xs:border-b-4 md:border-b-[6px]">
      <ul
        className="flex text-[10px] text-main-color-background gap-2 px-2 xs:gap-3
    md:justify-evenly md:text-xs bg-main-black item-skew-x z-10 relative after:-right-[10px] after:w-[50px] after:skew-x-[-331deg] after:rounded-b-none after:rounded-t-[5px] before:rounded-t-[5px] before:-left-[10px] before:w-[50px] before:skew-x-[331deg] before:rounded-b-none  xs:py-1"
      >
        <li className="flex gap-1 items-center">
          <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" />
          {score}
        </li>
        <li className="flex gap-1 items-center">
          <Icon icon="streamline:interface-user-single-close-geometric-human-person-single-up-user" />
          {miembros}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
