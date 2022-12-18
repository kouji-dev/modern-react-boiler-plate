import {Component} from "@common/types";
import {Box, styled, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Center = styled(Box)({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
})

export const _404: Component = () => {

    return (
        <Center>
            <Typography>404?! where are you going ?</Typography>
            <Link to='/'>Back to Home</Link>
        </Center>
    )
}