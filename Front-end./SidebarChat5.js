import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-1/264545716_1571134823254754_1628941988618246567_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6bGgWqO78IwAX8aTpFx&_nc_ht=scontent.fccu4-2.fna&oh=00_AT-pfeMJ3yP3HsbtvOxFh6EMiimFUoIsap0TVYcggR7kbw&oe=62C0A1C9'/>
        <div className='sidebarChat__info'>
            <h2>Raktim</h2>
            <p>I still miss our class 10 vibes</p>
        </div>
    </div>
  )
}

export default SidebarChat