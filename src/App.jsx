import Landing from "./components/Landing.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Marquee } from "./components/Marquee.jsx";

function App() {
  return (
    <div className="text-white h-screen w-full">
      <Navbar />
      <Landing />
      <Marquee />
    </div>
  );
}

export default App;
