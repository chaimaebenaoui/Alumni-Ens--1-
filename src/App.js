import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Membres from "./pages/Membres";
import Forms from "./pages/Forms";
import Login from "./pages/Login";
import Regiter from "./pages/Regiter";
import Laurats from "./pages/Laurats";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/Acceuil":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/card":
        title = "";
        metaDescription = "";
        break;
      case "/membres":
        title = "";
        metaDescription = "";
        break;
      case "/forms":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/regiter":
        title = "";
        metaDescription = "";
        break;
      case "/laurats":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/Acceuil" element={<Acceuil />} />
      <Route path="/home" element={<Home />} />
      <Route path="/card" element={<Card />} />
      <Route path="/membres" element={<Membres />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regiter" element={<Regiter />} />
      <Route path="/laurats" element={<Laurats />} />
    </Routes>
  );
}
export default App;
