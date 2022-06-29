import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/278524670_1876838532508390_4534448462738672083_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=HFlp5hj4OCoAX-JlHth&_nc_ht=scontent.fccu4-2.fna&oh=00_AT-zefIKbE3Q7xj_21B2ODPKb1v8xliXuBwT_z_68diBvw&oe=62C1FECB' />
        <div className='sidebarChat__info'>
            <h2>Dhritiman</h2>
            <p>Shob bhalo toh?!</p>
        </div>
    </div>
  )
}

export default SidebarChat