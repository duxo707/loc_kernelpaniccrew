import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.css";
const RoomId = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const handleClick = () => {
        navigate(`/connect/room/${id}`, "_blank")
    };
  return (
    <>
        <div class="container">
        <div>Enter Room ID</div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>Join Room</button>
        </div>
    </>
  )
}

export default RoomId