import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {

const navigate = useNavigate()
    
const handleLogin = () =>{
    // dispatch(logout());
    navigate('/login');
}
const handleSignUp = () =>{
    // dispatch(logout());
    navigate('/signup');
}
    return (
        <>
            <AppBar position='static' color='default' sx={{ backgroundColor:'#2e7eee',borderStyle:'outset'}}>
                <Toolbar>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='h2' sx={{ fontSize: '32px',color:'white' }}>TechBuds</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant='outlined' sx={{ color: 'black',backgroundColor:'white', mr: 2,":hover":{backgroundColor:'rgb(230, 227, 227)'} }} onClick={handleLogin}>Log in</Button>
                            <Button variant='contained' onClick={handleSignUp}>Sign up</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
