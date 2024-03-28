import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import Explore from './Explore'
import RightBar from '../../components/RightBar'
import NewPostButton from '../../components/NewPostButton'

const ExplorePage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Explore />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  )
}

export default ExplorePage