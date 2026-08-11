import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
