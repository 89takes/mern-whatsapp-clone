import { Avatar, IconButton } from "@material-ui/core"
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import axios from "./axios";
import { React, useState } from 'react';
import "./Chat.css";

function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Divij",
            timestamp: "Just now",
            received: true
        })

        setInput('');
    }

    return (
        <div className = "chat">
            <div className="chat__header">
                <Avatar src='data:image/jpeg;base64,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'/>

                <div className="chat__headerInfo">
                    <h3>Current chat</h3>
                    <p>Last seen at 5:55 AM</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className ="chat__body">
                {messages.map((message) => (
                    <p 
                        className={`chat__message ${message.received && "chat__receiver"}`}
                    >
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value = {input} onChange={e =>setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
