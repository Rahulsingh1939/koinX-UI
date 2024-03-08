import "./App.css";

// Component Imports
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100">
          <Hero />
        </div>
    </>
  );
}

export default App;
