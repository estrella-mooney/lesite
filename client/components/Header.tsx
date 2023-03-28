import React from 'react'
import { AppBar, Typography, Toolbar } from '@mui/material'

function Header() {
  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey' }}>
        <Toolbar>
          <Typography>Home</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
