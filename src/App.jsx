import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { DashboardNavbar } from "./widgets/layout";
import RoomPage from "./room/index.jsx";
import RoomId from "./pages/dashboard/RoomId";
import coursecontent from "./pages/dashboard/coursecontent";
import SpeechToText from "./SpeechToText/SpeechToText";
import Recommend from "./pages/Recommend/Recommend";

function App() {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/course/:coursename" element={<coursecontent />} />
        <Route path="/connect" element={<RoomId />} />
        <Route path="/connect/room/:roomId" element={<RoomPage />} />
        {/* <Route path="*" element={<Navigate to="/dashboard/" replace />} /> */}
        <Route path="/speech-to-text" element={<SpeechToText />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  );
}

export default App;
