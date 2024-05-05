// Library Imports
import React from "react";
// Other Imports
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/core/PageNotFound";

function App() {
  return (
    <main id="main-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
