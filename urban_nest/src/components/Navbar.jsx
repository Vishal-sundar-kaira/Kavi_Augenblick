import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
 
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
 

 
// Exporting Default Navbar to the App.js File
export default function Navbar() {
    const small = useMediaQuery("(max-width:960px)");
    const full = useMediaQuery("(min-width:960px)");

    const [open, setOpen] = useState(false);
 
    const handleClick = () => {
        setOpen(!open);
    };
    
   
    return (
        <div style={{display:"flex",justifyContent:"space-between",position:"relative"}}>
            <AppBar style={{position: 'fixed', top: 0, backgroundColor: '#03001C',padding:"0.4rem" }}>
                <Toolbar variant="dense" style={{display:"flex",justifyContent:"space-between"}}>
                    {small && (
                        <>
                            <List>
                                <ListItem button>
                                    <Button
                                        onClick={
                                            handleClick
                                        }
                                    >
                                        <MenuIcon style={{color:"white"}} />
                                        {open ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </Button>
                                    <Typography
                                        variant="h6"
                                        color="inherit"
                                        onClick={() => {
                                            console.log(
                                                "logo clicked"
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        Karan Pashte
                                    </Typography>
                                </ListItem>
                                <Collapse
                                    in={open}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List
                                        component="div"
                                        // disablePadding
                                    >
                                        <ListItem button>
                                            <ListItemText  primary="About Me" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText  primary="My skills" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText  primary="My Projects" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText  primary="Contact" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </>
                    )}
 
                    {full && (
                        <Box style={{display:'flex',alignItems:"center", justifyContent:"space-between", width:"100%"}} >
                            <Typography
                                variant="h6"
                                color="inherit"
                            >
                                Karan Pashte
                            </Typography>
                            <Box  display="flex" justifyContent="space-between" width="50%" >
                            <Button style={{fontSize:"1.2rem"}} color="inherit">
                                About Me
                            </Button>
 
                            <Button style={{fontSize:"1.2rem"}} color="inherit" >
                                Skills
                            </Button>
                            <Button style={{fontSize:"1.2rem"}} color="inherit" >
                                Projects
                            </Button>
                            <Button style={{fontSize:"1.2rem"}} color="inherit">
                                Contact
                            </Button>
                            </Box>
                            <Button style={{fontSize:"1.2rem"}} color="inherit">
                                <a  href='../data/Karan_Pashte_resume.pdf' download
                                style={{
                                    textDecoration:"none",
                                    color:"white",
                                    fontSize:"1.2rem",
                                    padding:"6px 20px",
                                    backgroundColor:"#33007b",
                                    borderRadius:"2rem"
                                  }}>
                                  Resume
                                </a>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}