import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './DrawerAppBar.css'

import { HomeButton } from '../HomeButton/HomeButton';
import logoAzul from '../../assets/logo_azul.png';


const drawerWidth = 240;
const navItems = ['Nuestros Productos', 'Nuestros Servicios', '¿Por qué elegirnos?'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} style={{ background: 'rgba(22, 40, 78, 0.60)', backdropFilter: 'blur(0.125rem)',}} > 
      <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
        <img className='' src={logoAzul} alt=""/>
      </Typography>
      <Divider />
      <List style={{color:'white'}}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} >
              <ListItemText primary={item}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{display: { sm: 'none' } }} style={{color:'white'}}>
        <ListItemButton sx={{ textAlign: 'center' }} >
          <ListItemText primary={'Contactanos'} style={ {fontFamily: 'roboto, sans-serif', textTransform: 'lowercase',} }/> 
        </ListItemButton>  
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginLeft: '30px' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ my: 2, mx: 2 }} style={{ background: 'rgba(22, 40, 78, 0.60)', borderRadius: 20, backdropFilter: 'blur(0.125rem)', fontFamily: 'roboto, sans-serif',}} className='px-5 mb-10 mx-10 my-[1.25rem] '>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <svg sx= {{ height: '100%'}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={logoAzul} alt="" style={{padding:'10px'}}  width="170" height="80"/>
          </Typography>
         
          <Box className="flex gap-8 " sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (

                <Button key={item} className="subrayado mayuscula" sx={{color: 'white', fontWeight: 'bold', fontFamily: 'roboto, sans-serif', fontSize: '1.125rem', lineHeight:'1.75rem', textTransform:'lowercase'}}>
                  {item}
                </Button>
            ))}
          </Box>
          <Button sx={{display: { xs: 'none', sm: 'block' } }}>
            <HomeButton  titulo={'Contactanos'}  sx={{ textTransform: 'lowercase',color: 'white', fontFamily: 'roboto, sans-serif', fontSize: '1.125rem', lineHeight:'1.75rem', }}></HomeButton>
          </Button>
          
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
