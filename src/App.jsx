import Landing from "./components/Landing.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Marquee } from "./components/Marquee.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div className="text-white min-h-screen w-full bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
