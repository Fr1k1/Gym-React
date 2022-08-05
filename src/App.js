import "./index.css";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
