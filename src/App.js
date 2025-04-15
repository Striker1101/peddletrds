import "./App.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import RoutesPaths from "./RoutesPaths.jsx";
import { Store } from "./Context/Store.js";
import useDashboardCheck from "./Components/useDashboardCheck.jsx";
import { ToastProvider } from "./Components/ToastProvider.jsx";
import TawkToChat from "./Components/Chat.jsx";
import Testimony from "./Components/Testimony.jsx";

function App() {
  const isDashboard = useDashboardCheck();

  console.log(isDashboard);
  return (
    <div className="App">
      <ToastProvider />
      {isDashboard ? "" : <Navigation />}
      {isDashboard ? "" : <TawkToChat />}
      <main>
        <Store>
          <RoutesPaths />
        </Store>
      </main>
      {isDashboard ? "" : <Footer />}

      <Testimony />
    </div>
  );
}

export default App;
