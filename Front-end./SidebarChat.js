import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'
function SidebarChat() {
  return (
   <div className="sidebarChat">
    <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t1.6435-1/167952186_550686005894410_8596762791349529792_n.jpg?stp=c0.53.320.320a_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Z06Jqg1rTKYAX_uCPUh&_nc_ht=scontent.fccu4-2.fna&oh=00_AT-bUDBN2iS9e3s8OxNXW2rSCszUPBy7Gr3_VYoXUEtdEQ&oe=62E0CFAF'/>
    <div className="sidebarChat__info">
        <h2>Soumava</h2>
        <p>typing...</p>
    </div>
   </div>
  )
}

export default SidebarChat