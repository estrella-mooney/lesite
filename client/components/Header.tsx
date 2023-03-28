import React from 'react'
import { AppBar, Typography, Toolbar, Tab, Tabs } from '@mui/material'

function Header() {
  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey' }}>
        <Toolbar>
          <Typography>Home</Typography>
          <Tabs textColor="inherit">
            <Tab label="About" />
            <Tab label="Gallery" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
