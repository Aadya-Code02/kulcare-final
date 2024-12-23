import { Routes, Route } from "react-router-dom";
import Page from "../app/dashboard/Page";
import HomePage from "../app/dashboard/Dashboard";
import Communications from "@/app/dashboard/Communication";
import Error404 from "@/app/pages/Errorpages/error1";
import LoginPage from "@/app/pages/Login";
import MarketInsights from "@/app/dashboard/MarketInsights";
import Error2 from "@/app/pages/Errorpages/error2";

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
        <Route path="error" element={<Error2 />} />




      </Route>
    </Routes>
  );
};

export default AppRoutes;
