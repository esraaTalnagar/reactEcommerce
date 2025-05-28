import { styled, alpha } from '@mui/material/styles';
import {AppBar, Toolbar, IconButton,}

const drawerWidth = 0;

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export const TitleStyled = styled('div')({
  flexGrow: 1,
  alignItems: 'center',
  display: 'flex',
  textDecoration: 'none',
});

export const ImageStyled = styled('img')({
  marginRight: '10px',
});

export const MenuButtonStyled = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const GrowStyled = styled('div')({
  flexGrow: 1,
});

export const SearchStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

export const SearchIconStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const InputRootStyled = styled('div')({
  color: 'inherit',
});

export const InputInputStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));