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
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Practices from "./pages/Practices";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/our-practices" element={<Practices />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/our-services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
