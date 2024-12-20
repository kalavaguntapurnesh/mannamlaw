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
import CopyRight from "./pages/CopyRight";
import Employment from "./pages/Employment";
import Family from "./pages/Family";
import Investor from "./pages/Investor";
import Student from "./pages/Student";
import Naturalization from "./pages/Naturalization";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:title" element={<DetailsPage />} />
          <Route path="/why-mannam-and-associates" element={<WhyUsPage />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:name" element={<ExpertDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/our-practices" element={<Practices />} />
          <Route path="/employment-based-visa" element={<Employment />} />
          <Route path="/family-based-visa" element={<Family />} />
          <Route path="/investor-based-visa" element={<Investor />} />
          <Route path="/student-based-visa" element={<Student />} />
          <Route path="/naturalization" element={<Naturalization />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/our-services" element={<Services />} />
          <Route path="/copyright" element={<CopyRight />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
