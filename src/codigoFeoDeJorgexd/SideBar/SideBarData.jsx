import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SuggestionsIcon from '@mui/icons-material/LocalFireDepartment';
import FollowingIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const SideBarData= [
  {
    title: "Home",
    icon: <HomeIcon/>,
    link: "/home"
  },
  {
    title: "Suggestions",
    icon: <SuggestionsIcon/>,
    link: "/suggestions"
  },{
    title: "Following",
    icon: <FollowingIcon/>,
    link: "/following"
  },{
    title: "My likes",
    icon: <FavoriteIcon/>,
    link: "/mylikes"
  },
  ]

export default SideBarData
