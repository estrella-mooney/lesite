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
import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const PAGES = ['Home', 'About', 'Gallery', 'Contact']

function Header() {
  const [value, setValue] = useState()
  // const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  })

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
                indicatorColor="primary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button
                variant="contained"
                sx={{
                  marginLeft: 'auto',
                  backgroundColor: theme.light,
                  '&:hover': { backgroundColor: green[700] },
                }}
              >
                Login{' '}
              </Button>
              <Button
                className="loginButton"
                sx={{ marginLeft: '10px', borderRadius: 50 }}
                variant="contained"
              >
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
