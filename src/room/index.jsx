import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async element => {
    const appID = 1009896402;
    const serverSecret = "3d321aabaa596d739693d838445c9f0b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "John Doe"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: false,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://localhost:5173/connect/room/${roomId}`,
        },
      ],
    });
  };

  return (
      <div style={{ height: "90vh" }}>
       <div ref={myMeeting} style={{ height: "100%" }}></div>
     </div>
  );
};

export default RoomPage;