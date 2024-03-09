import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const RoomId = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const handleClick = () => {
        navigate(`/connect/room/${id}`, "_blank")
    };
  return (
    <>
        <div>Enter Room ID</div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>Join Room</button>
    </>
  )
}

export default RoomId