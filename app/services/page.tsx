import ServiceHero from "@/components/services/ServiceHero";
import Services from "@/components/home/Services";
import HowItWork from "@/components/services/HowItWork";
import ChooseUsService from "@/components/services/ChooseUsService";
import Book from "@/components/home/Book";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <Services/>
      <HowItWork/>
      <ChooseUsService/>
      <Book/>
    </>
  );
}
