import React from 'react'
import SidebarChat from "./SidebarChat"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from "@material-ui/icons"
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className ="sidebar">
            <div className="sidebar__header">
                <Avatar src ="https://media-exp1.licdn.com/dms/image/C5603AQGcPcl-FiaDtA/profile-displayphoto-shrink_200_200/0/1610117034928?e=1624492800&v=beta&t=PWDazqchgujsnOQ9ccY71jpg15xYGti1VwCRjhr22oU"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input placeholder="Search or start new chat" type="text" />
                        
                    </div>       
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
