import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/280942058_1207460886754031_2773062964730508340_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J1yL6rtPdqQAX_HlkKC&_nc_ht=scontent.fccu4-2.fna&oh=00_AT80i0m8Wd4eb5-H7yZbQn2nk3sZUXDaAs4rVI291rBVxw&oe=62C20C45' />
        <div className='sidebarChat__info'>
            <h2>Adreeja</h2>
            <p>Ekta Gan shona!</p>
        </div>
    </div>
  )
}

export default SidebarChat