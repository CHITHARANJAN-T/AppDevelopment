import { Box, Button, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material"
import "./dashboard.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {logout} from '../features/user';
import UserNavBar from "./UserNavBar";
import GridViewIcon from '@mui/icons-material/GridView';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Footer from "./Footer";

export default function Dashboard() {
    
    const user = useSelector(state => state.user.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/userlogin');
    }

    return (
        <>
        <UserNavBar user={user.username}/>
        <Box sx={{width:'100%',height: '84%', position: 'absolute',display:'flex',marginTop:'1px',flexDirection:'row-reverse'}}>    
            <Paper sx={{ position:'static',width: '275px', display: 'flex', flexDirection:'column',justifyContent:'space-between', backgroundColor:'#2e7eee', alignItems: 'center', pt:6 }} elevation={2}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <GridViewIcon backgroundColor='blue'sx={{mr:'5px'}}/>
                            <ListItemText primary='Dashboard' />
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <SchoolIcon sx={{mr:'5px'}}/>
                        <ListItemText primary='My Projects' />
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <Diversity3Icon sx={{mr:'5px'}}/>
                        <ListItemText primary='Groups' />
                    </ListItemButton>
                    </ListItem>

                    <ListItem>
                    <ListItemButton>
                        <SettingsSuggestIcon sx={{mr:'5px'}}/>
                        <ListItemText primary='Settings' />
                    </ListItemButton>
                    </ListItem>
                </List>
                
                <Button sx={{backgroundColor:'red',fontFamily:'san-serif',letterSpacing:'1px',color:'white',width:'55%', mb: 10,":hover":{backgroundColor:'blue'}}} onClick={handleLogout}>
                    Logout<ExitToAppIcon sx={{ml:'5px'}}/>
                </Button>
            </Paper>
            <Box sx={{width:"100%",height:'100',backgroundColor:'rgba(255, 255, 255, 0.807)',zIndex:2,position:'relative',alignItems:'center',justifyContent:'center'}} elevation={2}>
                <h2  alignItems='center' justifyContent='center'backgroundColor='red' >welcome {user.username} !</h2>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
