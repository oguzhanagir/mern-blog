import React from 'react'
import {CssBaseLine,Container,Grid,AppBar,Toolbar,Typography,Button,IconButton} from "@mui/material";
import {makeStyles} from "@mui/material/styles";
import PenIcon from "@mui/material/icons/Create"
const useStyles = makeStyles(theme=>({
  root:{
    flexGrow:1,

  },
  menuButton:{
    marginRight:theme.spacing(2)
  },
  title:{
    flexGrow:1,
  },
  container:{
    marginTop: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
    <CssBaseLine/>
    <Container maxWidth="lg">
      <AppBar positon="static" color="inherit " elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.Container} color="inherit"/>
        
        <Typography variant="h6" color="secondary" className={classes.tite}>
          <a href="http://localhost:3000/posts">Blogs</a>
        </Typography>
        <Button color="primary" variant="outlined" startIcon={<PenIcon/>}>
          Yeni Blog
        </Button>
        </Toolbar>
      </AppBar>
    </Container>
    </>
  )
}

export default App