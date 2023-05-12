import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-email-bg">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
