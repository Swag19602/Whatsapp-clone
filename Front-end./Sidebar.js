import React from "react";
import "./Sidebar.css";
import SidebarChat2 from "./SidebarChat2";
import SidebarChat3 from "./SidebarChat3";
import SidebarChat6 from "./SidebarChat6";
import SidebarChat5 from "./SidebarChat5";
import SidebarChat7 from "./SidebarChat7";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
import SidebarChat8 from "./SidebarChat8";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://scontent.fccu4-2.fna.fbcdn.net/v/t1.6435-1/171285516_1361379540886940_4874366323285814494_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Hqzaly5mewAAX888uTU&_nc_ht=scontent.fccu4-2.fna&oh=00_AT_lvFVno4ufMhbe8rGEiUf_pzcB0lCfdQNaUDOk5KLq1w&oe=62E205F6" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <Search />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
        <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat2/>
       <SidebarChat3/>
       <SidebarChat6/>
       <SidebarChat8/>
       <SidebarChat5/>
       <SidebarChat7/>
        </div>
    </div>
  );
}

export default Sidebar;
