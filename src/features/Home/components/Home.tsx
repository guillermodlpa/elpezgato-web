import AboutBlock from "./AboutBlock/AboutBlock";
import HeroBlock from "./HeroBlock/HeroBlock";
import ProgrammingBlock from "./ProgrammingBlock/ProgrammingBlock";
import ReservationsBlock from "./ReservationsBlock/ReservationsBlock";

export default function Home() {
  return (
    <>
      <HeroBlock />
      <AboutBlock />
      <ProgrammingBlock />
      <ReservationsBlock />
    </>
  );
}
