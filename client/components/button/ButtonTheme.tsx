import { blueGrey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const ButtonTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[100],
    },
    secondary: {
      main: blueGrey[200],
    },
  },
})

export default ButtonTheme
