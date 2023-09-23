import { Box, Button, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material"
import "./dashboard.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {logout} from '../features/user';

export default function Dashboard() {
    
    const user = useSelector(state => state.user.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    return (
        <Box sx={{width:'100%',height: '500px', position: 'absolute',display:'flex'}}>
                
                
            <Paper sx={{ position:'static',width: '275px', height: '100%', display: 'flex', flexDirection:'column',justifyContent:'space-between', backgroundColor:'#2e7eee', alignItems: 'center', pt:6 }} elevation={2}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary='Dashboard' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Projects' />
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Groups' />
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Settings' />
                    </ListItemButton>
                    </ListItem>
                </List>
                

                <Button sx={{backgroundColor:'red',color:'white',width:'50%', mb: 10,":hover":{backgroundColor:'blue'}}} onClick={handleLogout}>
                    Logout
                </Button>
            </Paper>
            <Box sx={{width:'100%', backgroundColor:'grey',zIndex:0,position:'relative'}}>
                <h2  alignItems='left' justifyContent='left'backgroundColor='red' >welcome {user.username}!</h2>

            </Box>
        </Box>
    )
}
