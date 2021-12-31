import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                {/* Left side within sidebar header */}
                {/* Able to take a web/local link for an image, will auto-determine best fit */}
                <Avatar src='https://artprojectsforkids.org/wp-content/uploads/2019/12/Snowman-Letter-size.jpg'/>

                {/* Right side within sidebar header */}
                <div className='sidebar__headerRight'>
                    {/* Provided by material-ui ... 
                    ... makes icon clickable and adds hover effect */}
                    <IconButton>
                        {/* Icon by itself is non-interactive */}
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
        
            <div className='sidebar__search'>
                {/* Instead of typical input form, we use search container...
                    ... to create a better input field */}
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>
    );
}

export default Sidebar
