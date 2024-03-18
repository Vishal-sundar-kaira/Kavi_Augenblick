import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import shortdata from '../constant/data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Product() {
  return (
    <Box bgcolor="#f5f5f5" >
       <Box display="flex" justifyContent="space-between">
         <Typography>New in Store</Typography>
         <Typography>See All </Typography>
       </Box>
       <Box display="flex" justifyContent="center" flexWrap="wrap" gap="2rem" >
         {
            shortdata.map((item)=>{
                return(
                    <Card sx={{ maxWidth: 300 }}>
                        <img src={item.url} height="200px" style={{objectFit:"cover",width:"100%"}} /> 
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant='h6' fontWeight='bold'>{item.price}</Typography>
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </Card>
                )
            })
         }
       </Box>
    </Box>
  )
}
