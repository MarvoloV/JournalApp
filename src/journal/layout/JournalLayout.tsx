import { Box, Toolbar } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Navbar,Sidebar } from '../components';


interface Iprops{
  children:ReactNode
}

const drawerWidth=240;

export const JournalLayout:FC<Iprops> = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* Navbar */}
        <Navbar drawerWidth={drawerWidth}/>
        {/* Sidebar */}
        <Sidebar drawerWidth={drawerWidth}/>
        <Box component={'main'} sx={{flexGrow:1,p:3}}>
          <Toolbar/>
          {/* Toolbar */}
          {children}
        </Box>
    </Box>
  )
}
