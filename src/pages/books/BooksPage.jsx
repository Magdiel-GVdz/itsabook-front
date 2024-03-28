import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import FeedPosts from '../feed/FeedPosts'
import RightBar from '../../components/RightBar'
import NewPostButton from '../../components/NewPostButton'
import Books from './Books'

const BooksPage = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBar />
        <Books />
        <RightBar />
        <NewPostButton />
      </Stack>
    </Box>
  )
}

export default BooksPage