import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/279575989_535440264771486_1989717277238795694_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3VVpVdnqkg4AX91oa8g&_nc_ht=scontent.fccu4-2.fna&oh=00_AT-VWj8Wj-yNSYwZFmIrFiV07hBG7N6JyOqh-WjGgNOtqw&oe=62C0B14E'/>

        <div className='sidebarChat__info'>
            <h2>Subhashree</h2>
            <p>College e dekha hbe bro!</p>
        </div>
    </div>
  )
}

export default SidebarChat