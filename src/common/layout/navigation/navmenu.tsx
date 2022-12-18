import { Component } from "@common/types";
import { styled, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const NavMenuList = styled(List)(({theme}) => ({
    
}))

export const Navmenu: Component = () => {
  return (<Container xs="auto">
      <NavMenuList>
          <ListItem>
              Item
              </ListItem>
          </NavMenuList>
  </Container>);
};
