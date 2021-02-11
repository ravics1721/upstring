import React from "react";
import { Grid } from "@material-ui/core/Grid";
import { Sidebar, SidebarItem } from "react-rainbow-components";

const About = () => {
  return (
    <div
      style={{ width: "100px" }}
      className="rainbow-p-top_small rainbow-p-bottom_medium"
    >
      <Sidebar id="sidebar-1">
        <SidebarItem
          icon={<i class="ri-home-4-line ri-2x"></i>}
          name="home"
          label="Home"
        />
        <SidebarItem
          icon={<i class="ri-user-3-line ri-2x"></i>}
          name="connection"
          label="Connection"
        />
        <SidebarItem
          icon={<i class="ri-notification-4-line ri-2x"></i>}
          name="notification"
          label="Notifications"
        />
        <SidebarItem
          icon={<i class="ri-logout-circle-r-line ri-2x"></i>}
          name="logout"
          label="Logout"
        />
      </Sidebar>
    </div>
  );
};

export default About;
