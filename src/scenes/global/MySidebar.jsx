import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
/* import "react-pro-sidebar/dist/css/styles.css"; */
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { MenuOutlined } from "@mui/icons-material";

const menus = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "Data",
    to: "",
    icon: "",
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balance",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  {
    title: "Pages",
    to: "",
    icon: "",
  },
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar ",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "FAQ Page",
    to: "/faq",
    icon: <HelpOutlinedIcon />,
  },
  {
    title: "Charts",
    to: "",
    icon: "",
  },
  {
    title: "Bar Chart",
    to: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    to: "/pie",
    icon: <PieChartOutlinedIcon />,
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    to: "/geography",
    icon: <MapOutlinedIcon />,
  },
];
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);
  return (
    <MenuItem
      onClick={() => {
        setSelected(title);
        console.log(selected);
        console.log(title);
      }}
      active={selected === title}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
export default function MySidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIscollapsed] = useState(false);
  const [selected, setSelected] = useState();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  return (
    <Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} !important`,

            //backgroundColor: `${colors.grey[400]} !important`,
          },
          [`.${menuClasses.button}`]: {
            color: `${colors.grey[100]} !important`,
            "&:hover": {
              background: "transparent",
              color: "#868dfb !important",
            },
          },
        }}
        collapsed={collapsed}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            button: {
              backgroundColor: "transparent",
            },
          }}
        >
          <MenuItem
            onClick={() => collapseSidebar(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton
                  onClick={() => {
                    collapseSidebar(!collapsed);
                  }}
                >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  heigth="100px"
                  src={`../../assets/user.jpeg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Biad
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP FANCY
                </Typography>
              </Box>
            </Box>
          )}
          {/**MENU ITEM */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            {menus.map((menu) =>
              menu.to === "" ? (
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  {menu.title}
                </Typography>
              ) : (
                <Item
                  title={menu.title}
                  to={menu.to}
                  icon={menu.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              )
            )}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
