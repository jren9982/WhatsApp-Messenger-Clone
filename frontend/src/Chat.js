import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './Chat.css';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
                {/* Defines components in the chat header */}
                <Avatar />

                <div className='chat__headerInfo'>
                    {/* Room name and last seen at */}
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className='chat__headerRight'>
                    {/* Three buttons on the right of chat header */}
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

            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>Sonny</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className='chat__message chat__receiver'>
                    <span className='chat__name'>Sonny</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input
                        placeholder='Type a message'
                        type="text"
                    />
                    <button type='submit'>
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
