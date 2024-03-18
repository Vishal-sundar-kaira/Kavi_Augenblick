import React from 'react'
import Navbar from './Navbar'
import { Box, Typography } from '@mui/material'
import homebg from '../images/homebg.jpg'
export default function Home() {
  return (
    <Box marginTop="-5rem" sx={{backgroundImage:`url(${homebg})`,height:"100vh",width:"100vw",backgroundSize:"cover"}} >
      <Navbar/>
      <Box display="flex" justifyContent="center"  marginTop="6rem" >
        <Box width="45vw" color="white" display="flex" flexDirection="column" justifyContent="center">
            <Box>
                <Typography color="#FFFDD0" variant='h2'  >Design Your Sanctuar</Typography> 
            </Box>
            <Typography variant='h4'>Unleash Your Style with Us</Typography>
            <Typography paddingTop="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde omnis eaque quos saepe ipsa et quas totam, a vero ad accusamus architecto natus ab consectetur iusto magnam, nisi ea?</Typography>
            <Box margin="1rem 0" bgcolor="white" color="black" padding="0.5rem 1rem" fontWeight="bold" borderRadius="0.5rem" textAlign="center" width="10vw">
                Shop Categories
            </Box>
        </Box>
      </Box>

    </Box>
  )
}
