import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { DashboardNavbar } from "./widgets/layout";
import coursecontent from "./pages/dashboard/coursecontent";

function App() {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course/:coursename" element={<coursecontent />} />
        {/* <Route path="*" element={<Navigate to="/dashboard/" replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
