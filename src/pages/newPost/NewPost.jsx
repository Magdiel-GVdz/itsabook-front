import { Box } from '@mui/material'
import React from 'react'
import SearchBook from '../../components/SearchBook'

function NewPost() {
  return (
    <Box mt={"60"} position="sticky" top={60} flex={4} p={2}>
        <Box >

        <SearchBook />
        </Box>
      </Box>
  )
}

export default NewPost