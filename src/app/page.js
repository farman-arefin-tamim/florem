import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import ServicePaving from "@/components/ServicePaving";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <ServicePaving></ServicePaving>
        <FeaturedTiles></FeaturedTiles>
        <AboutSection></AboutSection>
    </div>
  );
}
