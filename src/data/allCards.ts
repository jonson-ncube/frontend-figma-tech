import home from "../assets/home.svg";
import efunds from "../assets/em-fund.svg";
import debt from "../assets/debt.svg";
import community from "../assets/community.svg";
import family from "../assets/family.svg";
import holiday from "../assets/going-holiday.svg";
import retire from "../assets/retire.svg";

export type CardComponentProps = {
  image: string;
  alt: string;
  title: string;
  position: "up" | "down" | "right";
};

export const allCards = {
  top: [
    {
      image: family,
      alt: "Family",
      position: "down",
      title: "Baby's birth",
    },
    {
      image: holiday,
      alt: "Vacation",
      position: "down",
      title: "Holiday",
    },
    {
      image: retire,
      alt: "retirement",
      position: "down",
      title: "Retire",
    },
  ] as CardComponentProps[],
  bottom: [
    {
      image: home,
      alt: "Home",
      position: "up",
      title: "New home",
    },
    {
      image: efunds,
      alt: "Emergency Funds",
      position: "up",
      title: "Emergency Funds",
    },
    {
      image: debt,
      alt: "debt-free",
      position: "up",
      title: "Debt free",
    },
    {
      image: community,
      alt: "community",
      position: "right",
      title: "Make a contribution to my community through philanthropy",
    },
  ] as CardComponentProps[],
};
