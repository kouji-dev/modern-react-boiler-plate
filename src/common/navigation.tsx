import {
    AppBar,
    CSSObject,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListProps, styled,
    Theme, Toolbar, Typography,
    useMediaQuery
} from "@mui/material";
import {Component, ComponentWithChildren, NavigationMenuRoutes} from "@common/types";
import Grid from "@mui/material/Unstable_Grid2";
import {Calculate, Home} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const openedMixin = (theme: Theme ): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`
});

const navigationRoutes: NavigationMenuRoutes = [
    {path: '', label: 'Home', icon: <Home/>},
    {path: 'counter', label: 'Counter', icon: <Calculate/>},
]

type OpenableListProps = ListProps & {open?: boolean};

const OpenableList: ComponentWithChildren<OpenableListProps> = (props) => {
    const {open, children, ...rest} = props;
    return <List {...rest}>{children}</List>
}

const NavigationList = styled(OpenableList, {shouldForwardProp: prop => prop != 'open'})<OpenableListProps>(({theme, open}) => ({
    height: '100%',
    boxShadow: theme.shadows[1],
    ...(open && openedMixin(theme)),
    ...(!open && closedMixin(theme)),
}))

export const NavigationMenu: Component = () => {
    const navigate = useNavigate();
    const open = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    const onNavigate = (path: string) => navigate(path);

    return (
        <Grid xs='auto'>
            <NavigationList open={open}>
                {navigationRoutes.map(({path, label, icon}) => (
                    <ListItem
                        key={label}
                        disablePadding
                    >
                        <ListItemButton sx={{justifyContent: 'center'}} onClick={() => onNavigate(path)}>
                            <ListItemIcon sx={{justifyContent: 'center'}}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} sx={{opacity: open ? 1 : 0 }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </NavigationList>
        </Grid>
    )
}

export const NavigationBar: Component = () => {

    return (
        <AppBar position="static" >
            <Toolbar variant='dense'>
                <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}