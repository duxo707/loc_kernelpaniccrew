import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { DashboardNavbar } from "./widgets/layout";

function App() {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/dashboard/" replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
