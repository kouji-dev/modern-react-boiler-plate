import { Component } from "@common/types";
import { Avatar, Typography } from "@mui/material";
import { HeaderItem } from "./header-item";

export const Navlogo: Component = () => {
  return (
    <HeaderItem
      xs="auto"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Typography variant="h4">Logo</Typography>
    </HeaderItem>
  );
};
