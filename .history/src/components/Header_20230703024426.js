import React, { useContext, useState } from 'react';
// UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppContext from '../context/AppContext';
import MyOrderPreview from '../containers/MyOrderPreview';
import { Link } from '@mui/material';

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logOut } from '../redux/modules/auth';
import { useSelector } from 'react-redux';

const pages = ['Productos', 'Pedidos'];


const Header = () => {
    const user = useSelector((state) => state.user);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [toggleOrderPreview, setToggleOrderPreview] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseSession = () => {

    }


    return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MY STORE
            </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
              <MenuItem>
                <Link href={`/`}>
                  <Typography textAlign="center">Productos</Typography>
                </Link>
              </MenuItem>
             
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          {/* Logo Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MY STORE
          </Typography>

          {/* Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href='/products'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Productos
              </Button>
            </Link> 
            {user?.name && (
              <Link href='/orderList'>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Pedidos
                </Button>
              </Link> 
            )}
          </Box>
          {user?.name ? (
            <Box sx={{ flexGrow: 0 }}>
              <span style={{ marginRight: "20px"}}>{user.email}</span>
              <Tooltip title="Opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
               
              </Tooltip>
             
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
               
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Mis Pedidos</Typography>
                </MenuItem>

                <MenuItem key={setting} onClick={handleCloseSession}>
                  <Typography textAlign="center">Cerrar Sesión</Typography>
                </MenuItem>
                
              </Menu>
            </Box>
          ):(
            <Link href='/login'>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Hola, Inicia Sesión
            </Button>
          </Link> 
          )}
          <Box sx={{ margin: 2 }}>
            <Tooltip title="Car">
              <IconButton  onClick={() => setToggleOrderPreview(!toggleOrderPreview)} color="inherit" sx={{ p: 0 }}>
               <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      {toggleOrderPreview && <MyOrderPreview />}
    </AppBar>
  );
}


  
  export default Header;