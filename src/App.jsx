import Landing from "./components/Landing.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Marquee } from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Eyes from "./components/Eyes.jsx";
import Featured from "./components/Featured.jsx";
import Cards from "./components/Cards.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="text-white min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
