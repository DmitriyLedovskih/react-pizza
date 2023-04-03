import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  function visibleToTop() {
    if (window.scrollY >= 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("scroll", visibleToTop);
    return () => {
      document.removeEventListener("scroll", visibleToTop);
    };
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <button
        className={`button button_type_primary to-top ${
          isVisible ? "to-top_visibled" : ""
        }`}
        onClick={() => window.scrollTo(0, 0)}
      ></button>
    </div>
  );
}

export default App;
