import Dashboard from "@/assets/dashboard.svg";
import Material from "@/assets/material.svg";
import Bill from "@/assets/billofqty.svg";
import Marketplace from "@/assets/markeplace.svg";
import Messages from "@/assets/message-02.svg";
import Recentactivity from "@/assets/history.svg";
import Profile from "@/assets/profile.svg";
import Switchmode from "@/assets/switch.svg";
import Settings from "@/assets/setting-07.svg";
import Logout from "@/assets/logout-03.svg";

export const sidebarData1 = [
  {
    id: 1,
    path: "/",
    title: "Dashboard",
    image: Dashboard,
  },
  {
    id: 2,
    title: "Material Schedule",
    image: Material,
    subNav: [
      {
        path: "/dashboard/Material_schedule/blocks",
        title: "Blocks",
      },
      {
        path: "/dashboard/Material_schedule/concrete_works",
        title: "Concrete Works",
      },
      {
        path: "/dashboard/Material_schedule/fillings",
        title: "Fillings",
      },
      {
        path: "/dashboard/Material_schedule/reinforcement",
        title: "Reinforcement",
      },
      {
        path: "/dashboard/Material_schedule/Tiles",
        title: "Tiles",
      },
    ],
  },

  {
    id: 3,
    path: "/dashoard/Bill_Of_Quantities",
    title: "Bill Of Quantities",
    image: Bill,
  },

  {
    id: 4,
    path: "/dashboard/Marketplace",
    title: "Marketplace",
    image: Marketplace,
  },

  {
    id: 5,
    path: "/dashboard/Messages",
    title: "Messages",
    image: Messages,
  },

  {
    id: 6,
    path: "/dashboard/Recent_Activity",
    title: "Recent Activity",
    image: Recentactivity,
  },
];

export const sidebarData2 = [
  {
    id: 7,
    path: "/dashboard/Profile",
    title: "Profile",
    image: Profile,
  },

  {
    id: 8,
    path: "/dashboard/Switch_mode",
    title: "Switch Mode",
    image: Switchmode,
  },

  {
    id: 9,
    path: "/dashboard/Settings",
    title: "Settings",
    image: Settings,
  },

  {
    id: 9,
    path: "dashboard/Log_out",
    title: "Log Out",
    image: Logout,
  },
];
