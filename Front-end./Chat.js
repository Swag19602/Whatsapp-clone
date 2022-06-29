import Search from '@mui/icons-material/Search'
import { Avatar,  IconButton } from '@mui/material'
import React, { useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './Chat.css'
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MoreVert from '@mui/icons-material/MoreVert';
import axios from './axios'
function Chat({messages}) {

  const [input,setInput]=useState('');
  const sendMessage=async(e)=>{
    e.preventDefault();
    await axios.post('/messages/new',{
      message:input,
      name: "Swag",
      timestamp:"Just Now",
      received:true
    })
    setInput("")
  }
  return (
    <div className="chat">
        <div className="chat__header">
            <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t1.6435-1/167952186_550686005894410_8596762791349529792_n.jpg?stp=c0.53.320.320a_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Z06Jqg1rTKYAX_uCPUh&_nc_ht=scontent.fccu4-2.fna&oh=00_AT-bUDBN2iS9e3s8OxNXW2rSCszUPBy7Gr3_VYoXUEtdEQ&oe=62E0CFAF'/>
            <div className="chat__headerInfo">
                <h3>Soumava</h3>
                <p>Online</p>
            </div>
            <div className='sidebar__headerRight'>
          <IconButton>
            <Search/>
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          </div>
          </div>
          <div className="chat__body">
            {messages.map((message,index)=>(
                
            <p className={`chat__message ${message.received && "chat__reciever"}`}>
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timestamp">
                   {message.timestamp}
                </span>
            </p>
            ))}
        </div>
        
      <div className='chat__footer'>
        <IconButton>
          <InsertEmoticonIcon/>
        </IconButton>
        <form>
          <input  value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type a message' type="text"></input>
          <button onClick={sendMessage} type="submit"/>
        </form>
            <IconButton>
              <SendIcon/>
            </IconButton>
        <IconButton>
        <MicIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Chat