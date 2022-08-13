import "./index.css";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Plans from "./Components/Plans/Plans";
import Testimonials from "./Components/Testimonials/Testimonials";
import JoinUs from "./Components/JoinUs/JoinUs";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans/>
      <Testimonials/>
      <JoinUs/>
    </div>
  );
}

export default App;
