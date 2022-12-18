import {
    AppBar, Collapse,
    CSSObject, IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListProps, Popover, styled,
    Theme, Toolbar, Typography,
    useMediaQuery
} from "@mui/material";
import {Component, ComponentWithChildren, NavigationMenuRoute, NavigationMenuRoutes} from "@common/types";
import Grid from "@mui/material/Unstable_Grid2";
import {Calculate, ExpandLess, ExpandMore, Home} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {MouseEventHandler, SyntheticEvent, useCallback, useMemo, useRef, useState} from "react";

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
    {
        path: 'home',
        label: 'Home',
        icon: <Home/>,
        children: [
            {path: 'counter', label: 'Counter', icon: <Calculate/>}
        ]
    },
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

type ExpandedListProps = {
    route: NavigationMenuRoute,
    parentPath?: string,
    isOpen?: boolean,
    onNavigate: (path: string) => void
}

const ExpandedList: ComponentWithChildren<ExpandedListProps> = (props) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openItems, setOpenItems] = useState(false);

    const onToggleExpand = (e: SyntheticEvent) => {
        e.stopPropagation();
        setExpanded(o => !o)
    }

    const {
        onNavigate,
        route: {icon, path, label, children},
        parentPath = '',
        isOpen
    } = props;

    const joinPath = useMemo(() => [parentPath, path].join('/'), [parentPath, path])

    const onParentNavigate = () => onNavigate(joinPath)

    let nestedRoutes = <></>;

    if (children?.length) {
        nestedRoutes = (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children?.map(nestedRoute => (<ExpandedList key={[joinPath, nestedRoute.path].join('/')} route={nestedRoute} onNavigate={onNavigate} isOpen={isOpen} parentPath={joinPath}/>))}
                </List>
            </Collapse>
        )
    }

    const onMouseEnter = (event: any) => {
        console.log('enter', event)
        setAnchorEl(event.currentTarget)
        setOpenItems(true)
    }

    const onMouseLeave = () => {
        setAnchorEl(null)
        setOpenItems(false)
    }

    const menuItem = (
        <ListItemButton
            sx={{justifyContent: 'center'}}
            onClick={onParentNavigate}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <ListItemIcon sx={{justifyContent: 'center'}}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} sx={{opacity: isOpen ? 1 : 0 }}/>
            {isOpen && children?.length && (<IconButton onClick={(e) => onToggleExpand(e)}>{expanded ? <ExpandLess /> : <ExpandMore />}</IconButton>)}
        </ListItemButton>
    )

    if (isOpen) {
        return (
            <>
                {menuItem}
                {nestedRoutes}
            </>
        );
    }

    console.log({isOpen})

    return (
        <>
            {menuItem}
            <Popover
                open={openItems}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                {nestedRoutes}
            </Popover>
        </>
    )
}

export const NavigationMenu: Component = () => {
    const navigate = useNavigate();
    const open = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const onNavigate = useCallback((path: string) => {
        navigate(path)
    }, []);

    return (
        <Grid xs='auto'>
            <NavigationList
                dense
                disablePadding
                open={open}
            >
                {navigationRoutes.map((route) => <ExpandedList
                    key={route.path}
                    parentPath=''
                    route={route}
                    onNavigate={onNavigate}
                    isOpen={open}
                />)
                }
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