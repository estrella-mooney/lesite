import React from 'react'
import { ThemeProvider, Button } from '@mui/material'
import theme from './ButtonTheme'

function testButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click me !
      </Button>
    </ThemeProvider> //-----> If i put this code on App it works. But not trying to use it from here
  )
}

export default testButton
