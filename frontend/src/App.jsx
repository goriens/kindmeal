import { CategoryNav } from "./Components/CategoryNav";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Pages/Routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryNav />
      <AllRoutes />
    </div>
  );
}

export default App;
