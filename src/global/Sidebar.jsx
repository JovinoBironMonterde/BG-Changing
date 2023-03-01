import { useEffect, useState } from "react";
import { customStyle } from "../Cstm-css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setOpen } from "../features/SidebarSlice";

const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const smobile = useMediaQuery("(min-width: 600px)");
  const [selected, setSelected] = useState("Dasboard");

  const { openClose, test } = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(setOpen());
  }, [smobile]);

  return (
    // <Box
    // sx={{
    //     "& .pro-sidebar-inner" : {
    //         background: '${colors.primary[400]} !important',
    //     },
    //     "& .pro-icon-wrapper": {
    //         backgroundColor: "transparent !important",

    //     },
    //     "& .pro-inner-item": {
    //         padding: "5px 35px 5px 20px !important",
    //     },
    //     "& .pro-inner-item:hover": {
    //         color: "#868dfb !important",
    //     },
    //     "& .pro-menu-item.active" : {
    //         color: "#6870fa !important",
    //     },
    // }}></Box>

    <Box
      sx={{
        width: "300px",
        marginLeft: !openClose ? "-300px" : "0",
        textAlign: "left",
        transition: ".5s",
        backgroundColor: "#111927",
        justifyContent: "left",
      }}
    >
      {/* <Box sx={{ width: "10px", height: "20px" }}>
        <img
          src="https://images.pexels.com/photos/7327174/pexels-photo-7327174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={"40px"}
        />
      </Box> */}

      <IconButton sx={customStyle.iconContainer}>
        <HomeOutlinedIcon />
        <Typography sx={customStyle.itemText}>Home</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer} to="/Home">
        <PeopleOutlinedIcon />
        <Typography sx={customStyle.itemText}>Profile</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <ContactsOutlinedIcon />
        <Typography sx={customStyle.itemText}>Contact</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <ReceiptOutlinedIcon />
        <Typography sx={customStyle.itemText}>Receipt</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <PersonOutlinedIcon />
        <Typography sx={customStyle.itemText}>User</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <CalendarTodayOutlinedIcon />
        <Typography sx={customStyle.itemText}>Calendar</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <HelpOutlinedIcon />
        <Typography sx={customStyle.itemText}>Help</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <BarChartOutlinedIcon />
        <Typography sx={customStyle.itemText}>Bar Chart</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <PieChartOutlinedIcon />
        <Typography sx={customStyle.itemText}>Pie Chart</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <TimelineOutlinedIcon />
        <Typography sx={customStyle.itemText}>Timeline</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <MenuOutlinedIcon />
        <Typography sx={customStyle.itemText}>Menu</Typography>
      </IconButton>

      <IconButton sx={customStyle.iconContainer}>
        <MapOutlinedIcon />
        <Typography sx={customStyle.itemText}>Map</Typography>
      </IconButton>
      {test}
    </Box>
  );
};

export default Sidebar;
