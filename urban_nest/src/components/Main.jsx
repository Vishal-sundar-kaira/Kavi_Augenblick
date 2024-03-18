import React from 'react'
import Home from './Home'
import { Box } from '@mui/material'
import Product from './Product'

export default function Main() {
  return (
    <>
      <Home/>
      <Box width="100vw">
        <Product/>
      </Box>
    </>
  )
}
