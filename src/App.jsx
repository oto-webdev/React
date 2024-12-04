import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from './pages/error/NotFound'
import Index from "./app/Index";
import Manage from "./app/Manage";

const App = () => {
  return (
    <div className="m-0 p-0 box-border overflow-x-hidden">
      <Index />
      <Manage />
      <header className="m-0 p-0 fixed top-0 left-0 right-0 backdrop-blur-lg">
        <Navbar />
      </header>
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="m-0 p-0">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
