import { MenuTypes } from './types'
import { Content, List, ListItems, ListItemsIcon, ListItemsText, NavbarMobile } from './styles'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListImage from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from 'react';

const Menu = ({}: MenuTypes) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  
  return (
    <Content>
      <List>
        <ListItems>
          <a href='#'>Home</a>
        </ListItems>
        <ListItems>
          <a href='#'>About</a>
        </ListItems>
        <ListItems>
          <a href='#'>Contact</a>
        </ListItems>
      </List>
      <NavbarMobile>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </NavbarMobile>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <ListImage>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemsIcon>{item.icon}</ListItemsIcon>
                  <ListItemsText>{item.text}</ListItemsText>
                </ListItemButton>
              </ListItem>
            ))}
          </ListImage>
          <Divider />
        </Box>
      </Drawer>
    </Content>
  )
}

export default Menu