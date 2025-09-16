import home from "../assets/home.svg";
import efunds from "../assets/em-fund.svg";
import debt from "../assets/debt.svg";
import community from "../assets/family.svg";

type CardComponentProps = {
    image: string;
    alt: string;
    title: string;
    position: "up" | "down" | "right";
}

export const bottomCards:CardComponentProps[] = [
    {
    image: home,
    alt: "Home",
    position: "up",
    title: "Buy a home",
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
];