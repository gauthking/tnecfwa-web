import MainNavbar from "./components/main-nav";
import UseUserDataWrapper from "./hooks/UseUserDataWrapper";
import PageContainer from "./components/page-container";
import MobileNavbar from "./components/mobile-nav";
import "./index.css";
import Hero from "./components/hero";
import Purpose from "./components/purpose";
import Gallery from "./components/gallery";
import Activities from "./components/activities";
import FooterSection from "./components/footerSection";
import OfficeBearers from "./components/officebearers";
import UpcomingEvents from "./components/upcomingEvents";
import Media from "./components/media";
function App() {
  return (
    <UseUserDataWrapper>
      <PageContainer className="min-w-[100%] w-full">
        <MainNavbar />
        <MobileNavbar />
      </PageContainer>
      <main className="min-h-screen">
        <Hero />
        <UpcomingEvents />
        <Purpose />
        <Gallery />
        <OfficeBearers />
        <Media />
        <Activities />
        <FooterSection />
      </main>
    </UseUserDataWrapper>
  );
}

export default App;
