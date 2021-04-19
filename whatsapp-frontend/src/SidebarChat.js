import { Avatar } from "@material-ui/core";
import React from 'react'
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src ='https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Tony_Soprano.jpg/270px-Tony_Soprano.jpg' />
            <div className="sidebarChat__info">
                <h2>Dummy Name</h2>
                <p>This is the last message.</p>
            </div>
        </div>
    )
}
export default SidebarChat;
