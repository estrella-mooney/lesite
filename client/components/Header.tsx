import React, { useState } from 'react'
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import DrawerComp from './Drawer'

const PAGES = ['Home', 'About', 'Gallery', 'Contact']

function Header() {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey' }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '1.3rem', paddingLeft: '2.5%' }}>
                Home
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button sx={{ marginLeft: 'auto' }} variant="contained">
                Login{' '}
              </Button>
              <Button sx={{ marginLeft: '10px' }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
