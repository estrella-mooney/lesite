import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Tab, Tabs, Button } from '@mui/material'
import DrawerComp from './Drawer'

function Header() {
  const [value, setValue] = useState()

  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey' }}>
        <Toolbar>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Gallery" />
          </Tabs>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Login{' '}
          </Button>
          <Button sx={{ marginLeft: '10px' }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </React.Fragment>
  )
}

export default Header
