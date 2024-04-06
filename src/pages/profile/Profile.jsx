import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from "../../context/Account";

function Profile() {
const {getUserAttributes} = useContext(AccountContext);

console.log(getUserAttributes);
  return (
    <Box bgcolor={"red"} flex={4} p={2}>
      profile
      
    </Box>
  )
}

export default Profile