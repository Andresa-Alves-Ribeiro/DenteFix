import CarouselComponent from "./carousel/carousel";
import Footer from "./footer/footer";
import Header from "./header/header";
import InfoCards from "./infoCards/infoCards";
import ProceduresList from "./proceduresList/proceduresList";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <InfoCards />
      <ProceduresList />
      <Footer />
    </div>
  );
}
