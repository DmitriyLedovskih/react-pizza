import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const isHeader = ["/", "/cart", "/search", `/pizza/${id}`].includes(pathname);

  const visibleToTop = () => {
    if (window.scrollY >= 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("scroll", visibleToTop);
    return () => {
      document.removeEventListener("scroll", visibleToTop);
    };
  }, []);
  return (
    <div className="container">
      {isHeader && <Header />}
      <main className="content">
        <Outlet />
      </main>
      <button
        className={`button button_type_primary to-top ${
          isVisible ? "to-top_visibled" : ""
        }`}
        onClick={() => window.scrollTo(0, 0)}
      ></button>
    </div>
  );
};

export default MainLayout;
