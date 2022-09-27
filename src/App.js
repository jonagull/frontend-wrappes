import "./App.css";
import "@fontsource/poppins";
import { Carousel } from "./Carousel";
// import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { Shop } from "./Shop";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Carousel />
      <hr className="w-11/12 mt-5" />
      <Shop />
    </div>
  );
}

export default App;
