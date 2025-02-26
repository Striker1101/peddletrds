import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import RoutesPaths from "./RoutesPaths.jsx";
import { Store } from "./Context/Store.js";
import useDashboardCheck from "./Components/useDashboardCheck.jsx";
import { ToastProvider } from "./Components/ToastProvider.jsx";

function App() {
  const isDashboard = useDashboardCheck();

  return (
    <div className="App">
      <ToastProvider />
      {isDashboard ? "" : <Navigation />}
      <main>
        <Store>
          <RoutesPaths />
        </Store>
      </main>
      {isDashboard ? "" : <Footer />}
    </div>
  );
}

export default App;
