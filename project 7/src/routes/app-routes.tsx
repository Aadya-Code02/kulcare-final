import { Routes, Route } from "react-router-dom";
import Page from "../app/dashboard/page";
import HomePage from "../app/dashboard/Home";
import Communications from "@/app/dashboard/Communication";
import Error404 from "@/app/dashboard/Errorpages/error1";
import LoginPage from "@/app/dashboard/pages/Login";
import MarketInsights from "@/app/dashboard/MarketInsights";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<HomePage />} />
        <Route path="communications" element={<Communications />} />
        <Route path="errorpage" element={<Error404 />} />
        <Route path="teams" element={<LoginPage />} />
        <Route path="market-insights" element={<MarketInsights />} />



      </Route>
    </Routes>
  );
};

export default AppRoutes;
