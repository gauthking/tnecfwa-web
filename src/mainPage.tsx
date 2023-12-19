import Activities from "./components/activities";
import FooterSection from "./components/footerSection";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Purpose from "./components/purpose";

const MainPage = () => {
  return (
    <main className="w-full">
      <Hero />
      <Purpose />
      <Gallery />
      <Activities />
      <FooterSection />
    </main>
  );
};

export default MainPage;
