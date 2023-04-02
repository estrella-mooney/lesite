import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material'

function About() {
  return (
    <div className="about">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ marginBottom: '15px', maxHeight: '215px' }}
            src="/images/emily.png"
            alt="yes"
          />

          <Typography variant="h5" component="div" mb={2}>
            Estrella
          </Typography>

          <Typography paragraph>Hello! And welcomeee</Typography>
        </CardContent>

        <CardActions>
          <Button color="secondary" size="small">
            Instagram
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default About

// function App() {
//   return (
//     <>
//       <div className="AppMain">
//         <img className="HeaderImage" src="./images/image1.jpg" alt="Header" />
//         <img className="logoImage" src="./images/logo.png" alt="Logo" />
//       </div>
//       <Container>
//         <Header /> {/* Later change this to NavBar */}
//         <div className="App">
//           <Images />
//         </div>
//       </Container>
//     </>
//   )
// }

// export default App
