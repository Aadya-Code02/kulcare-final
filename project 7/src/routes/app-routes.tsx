import { Routes, Route } from "react-router-dom";
import Page from "../app/dashboard/page";
import HomePage from "../app/dashboard/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Shared layout with sidebar and header */}
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<Page />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
