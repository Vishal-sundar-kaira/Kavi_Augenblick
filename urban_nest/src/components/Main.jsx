import React from 'react'
import Home from './Home'
import { Box } from '@mui/material'
import Product from './Product'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Chatbot from './Chatbot'

export default function Main() {
  return (
    <>
      <Box position="sticky" color="red" sx={{paddingLeft:"92%",top:"85%" }}>
          <Chatbot/>
      </Box>
      <Home/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
