import "./App.css";

// Component Imports
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import { Recommendations } from "./components/Recommendations.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100">
          <Hero />
        </div>
        <div className="px-8 w-full flex">
        {" "}
        <Recommendations />
      </div>
    </>
  );
}

export default App;
