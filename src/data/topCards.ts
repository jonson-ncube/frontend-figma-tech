import family from "../assets/family.svg";
import holiday from "../assets/going-holiday.svg";
import retire from "../assets/retire.svg";


type CardComponentProps = {
    image: string;
    alt: string;
    title: string;
    position: "up" | "down";
}

export const topCards:CardComponentProps[] = [
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
];