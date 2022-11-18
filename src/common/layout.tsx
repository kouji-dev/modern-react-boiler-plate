import {Component, ComponentWithChildren, ComponentWithProps} from "@common/types";
import {
    Box,
    BoxProps,
    CircularProgress,
    Grid2Props,
    styled
} from "@mui/material";
import {Outlet} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {NavigationBar, NavigationMenu} from "@common/navigation";
import {ReactNode, Suspense} from "react";

const Body = styled(Grid)<Grid2Props>(({theme}) => ({
    position: 'relative',
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
}))

const BoxedPage = styled(Box)<BoxProps>({
    display: 'flex',
    flexWrap: 'nowrap',
    flexFlow: 'column',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden'
})

export const Main: ComponentWithChildren<unknown> = () => {

    return (
        <BoxedPage as='main'>
            <NavigationBar />
            <Grid container xs>
                <NavigationMenu />
                <Body xs>
                    <Outlet/>
                </Body>
            </Grid>
        </BoxedPage>
    )
}

const BoxedPageLoader = styled(Box)<BoxProps>({
    width: '100vw',
    height: '100vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const RootLoading: Component = () => {
    return (
        <BoxedPageLoader>
            <CircularProgress />
        </BoxedPageLoader>
    )
}

const LoaderContainer = styled(Box)<BoxProps>({
    width: '100%',
    height: '100%',
})

const Loader: Component = () => {

    return (
        <LoaderContainer>
            <CircularProgress />
        </LoaderContainer>
    )
}

export const LazyLoader: ComponentWithProps<{ component?: ReactNode | undefined }> = ({component}) => {

    return (
        <Suspense fallback={<Loader/>}>
            {component}
        </Suspense>
    )
}