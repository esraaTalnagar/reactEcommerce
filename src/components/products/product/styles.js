import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export const Root = styled(Card)(({ theme }) => ({
    maxWidth: '100%',
  }));
  
  export const Media = styled(CardMedia)(({ theme }) => ({
    height: 200,
    width: '100%',
    objectFit: 'cover',
    paddingTop: '56.25%',
  }));
  
  export const cardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
  }));
  
  export const cardActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
  }));
