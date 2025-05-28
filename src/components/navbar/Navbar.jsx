import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge, Meu, MenuItem } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from './products/imgs/alexandru-stavrica-170390-800x760.jpg';
import { styled } from './styles';

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" color='inherit' className='classes.appBar'>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt='Commerce' height='25px' className={ClassNames.image}/>
            E-Commerce
          </Typography>
            <div className={classes.grow} />
            <div className={classes.button}/>
          <IconButton edge="end" color="inherit" aria-label='Show cart items'>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
