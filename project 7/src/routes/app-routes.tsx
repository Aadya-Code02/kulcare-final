import { Routes, Route } from "react-router-dom";
import Page from "../app/dashboard/page";
import HomePage from "../app/dashboard/Home";
import Communications from "@/app/dashboard/Communication";
import Error404 from "@/app/dashboard/Errorpages/error1";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Shared layout with sidebar and header */}
      <Route path="/" element={<Page />}>
        {/* Render HomePage as default for "/" path */}
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<HomePage />} />
        <Route path="communications" element={<Communications />} />
        <Route path="errorpage" element={<Error404 />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
