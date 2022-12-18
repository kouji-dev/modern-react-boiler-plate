import Grid, { Grid2Props } from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material";

const HEIGHT = 70;

export const HeaderItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  height: HEIGHT,
  maxHeight: HEIGHT,
}));
