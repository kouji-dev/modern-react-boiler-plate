import { Box, BoxProps, CircularProgress, styled } from "@mui/material";
import { Component, ComponentType, ReactNode, Suspense } from "react";
import { ComponentWithProps } from "./types";

const LoaderContainer = styled(Box)<BoxProps>({
  width: "100%",
  height: "100%",
});

const Loader: Component = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export const LazyLoader: ComponentWithProps<{
  component?: ReactNode | undefined;
}> = ({ component }) => {
  return <Suspense fallback={<Loader />}>{component}</Suspense>;
};

export const withLazyNess = (C: ComponentType) => {
  return () => <LazyLoader component={<C />} />;
};
