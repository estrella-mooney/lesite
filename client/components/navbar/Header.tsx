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

import { ThemeProvider } from '@mui/material'
import ButtonTheme from '../button/ButtonTheme'

const PAGES = ['Home', 'About', 'Gallery', 'Contact']

export default function Header() {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey' }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>Home</Typography>
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <ThemeProvider theme={ButtonTheme}>
                <Button
                  sx={{ marginLeft: 'auto' }}
                  variant="contained"
                  color="primary"
                >
                  Login{' '}
                </Button>
                <Button
                  sx={{ marginLeft: '10px' }}
                  variant="contained"
                  color="primary"
                >
                  SignUp
                </Button>
              </ThemeProvider>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
