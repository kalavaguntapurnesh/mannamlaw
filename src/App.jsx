import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import WhyUsPage from "./pages/WhyUsPage";
import Experts from "./pages/Experts";
import ExpertDetails from "./pages/ExpertDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:title" element={<DetailsPage />} />
          <Route path="/why-mannam-law" element={<WhyUsPage />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:name" element={<ExpertDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
