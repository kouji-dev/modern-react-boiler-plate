import { ComponentWithChildren } from "@common/types";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material";

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const Body: ComponentWithChildren<unknown> = () => {
  return <Container>Body</Container>;
};
