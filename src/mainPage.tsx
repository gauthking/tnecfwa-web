import Activities from "./components/activities";
import Footer from "./components/footer";
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
      <Footer />
    </main>
  );
};

export default MainPage;
