import React from 'react'
import { Typography , IconButton, Card, CardActions, CardMedia, CardContent} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import {cardContent, Root, Media, cardActions} from './styles';


const Product = ({product}) => {
    const classes = { Root, Media, cardContent, cardActions};
    console.log('Product image:', product.image);
  return (
<Card className={classes.Root}>
    <CardMedia
    className ={classes.Media} 
    component="img"
    height="200"
    image={product.image}
    alt={product.name}
    title={product.name}/>
    <CardContent>
        <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5">
                {product.price}
            </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
            {product.description}
        </Typography>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
        </IconButton>
    </CardActions>
</Card>
  )
}

export default Product;
