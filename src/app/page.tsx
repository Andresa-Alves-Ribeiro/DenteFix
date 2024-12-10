import CarouselComponent from "./components/carousel/carousel";
import InfoCards from "./components/infoCards/infoCards";
import ProceduresList from "./components/proceduresList/proceduresList";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <InfoCards />
      <ProceduresList />
    </div>
  );
}
