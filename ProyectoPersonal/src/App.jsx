import "./styles/Principal.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage.jsx";
import ElementDetailPage from "./pages/ElementDetailPage.jsx";
import { LegalTermsPage } from "./pages/LegalTermsPage.jsx";
import { CollectionsDetailPage } from "./pages/CollectionsDetailPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/product/:productId" element={<ElementDetailPage />} />
        <Route path="/collections" element={<CollectionsDetailPage />} />
        <Route path="/legalterms/" element={<LegalTermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
