import { React, Route, Routes } from "./deps.ts";
import { Navigation } from "./pages/navigation.tsx";
import { Home } from "./pages/home.tsx";

export const App = () => (
  <div>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  </div>
);
