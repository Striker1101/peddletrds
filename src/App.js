import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import RoutesPaths from "./RoutesPaths.jsx";
import { Store } from "./Context/Store.js";
import useDashboardCheck from "./Components/useDashboardCheck.jsx";
function App() {
  const isDashboard = useDashboardCheck();

  return (
    <div className="App">
      {isDashboard ? "dashboard" : <Navigation />}
      <main>
        <Store>
          <RoutesPaths />
        </Store>
      </main>
      {isDashboard ? "dashboard" : <Footer />}
    </div>
  );
}

export default App;
