import { Component, ComponentWithChildren } from "@common/types";
import { Divider, styled } from "@mui/material";
import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Body } from "./body";
import { Navbar } from "./navbar";
import { Navmenu } from "./navigation/navmenu";
import Grid, { Grid2Props } from "@mui/material/Unstable_Grid2";
import { Navlogo } from "./Navlogo";

const Container = styled(Grid)<Grid2Props>(() => ({
  display: "flex",
  flexWrap: "nowrap",
  height: "100vh",
  width: "100vw",
}));

const Column: ComponentWithChildren<Grid2Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid {...rest} container direction="column">
      {children}
    </Grid>
  );
};

const Left: ComponentWithChildren<unknown> = (props) => {
  const { children } = props;
  return <Column xs="auto">{children}</Column>;
};

const Right: ComponentWithChildren<unknown> = (props) => {
  const { children } = props;
  return <Column xs>{children}</Column>;
};

export const Main: Component = memo(() => {
  return (
    <Container as="main" container>
      <Left>
        <Navlogo />
        <Divider orientation="horizontal" light />
        <Navmenu />
      </Left>
      <Divider orientation="vertical" light />
      <Right>
        <Navbar />
        <Divider orientation="horizontal" light />
        <Body>
          <Outlet />
        </Body>
      </Right>
    </Container>
  );
});
