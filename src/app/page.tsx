import CarouselComponent from "./components/carousel/carousel";
import InfoCards from "./components/infoCards/infoCards";
import OurStory from "./components/ourStory/ourStory";
import ProceduresList from "./components/proceduresList/proceduresList";
import Testimonials from "./components/testemonials/testimonials";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <InfoCards />
      <ProceduresList />
      <OurStory />
      <Testimonials />
    </div>
  );
}
