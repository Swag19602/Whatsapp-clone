import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/280655411_707212693852022_3930783064817704942_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4Qp9IpxfihkAX_lGT-r&_nc_ht=scontent.fccu4-2.fna&oh=00_AT9tvVFtCvIRtCkdZCJb2lPaYPIkySqmxav1KGRG5tHixg&oe=62C20EC2' />
        <div className='sidebarChat__info'>
            <h2>Sayak</h2>
            <p>Bhai kal college jabi toh?</p>
        </div>
    </div>
  )
}

export default SidebarChat