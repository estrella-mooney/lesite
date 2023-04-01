// import React, { useState } from 'react'
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Tab,
//   Tabs,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material'
// import DrawerComp from './Drawer'

// import ThemeProvider from '@mui/material'
// import theme from './button/Theme'

// const PAGES = ['Home', 'About', 'Gallery', 'Contact']

// function Header() {
//   const [value, setValue] = useState()

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: 'grey' }}>
//         <ThemeProvider theme={theme}>
//         <Toolbar>
//           {isMatch ? (
//             <>
//               <Typography sx={{ fontSize: '1.3rem', paddingLeft: '2.5%' }}>
//                 Home
//               </Typography>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: 'auto' }}
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//                 indicatorColor="primary"
//               >
//                 {PAGES.map((page, index) => (
//                   <Tab key={index} label={page} />
//                 ))}
//               </Tabs>
//               <Button
//                 variant="contained" color='primary'
//                 sx={{
//                   marginLeft: 'auto', },
//                 }}
//               >
//                 Login{' '}
//               </Button>
//               <Button
//                 className="loginButton"
//                 sx={{ marginLeft: '10px', borderRadius: 50 }}
//                 variant="contained"
//               >
//                 SignUp
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//     </ThemeProvider>

//   )
// }

// export default Header
