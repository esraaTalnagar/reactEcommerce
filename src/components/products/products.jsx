import React from 'react';
import { Grid } from '@mui/material'; 
import Product from './product/product';
import imageBeakry from './imgs/alexandru-stavrica-170390-800x760.jpg'

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes', price: '$5.00',
    image: imageBeakry},
    {id:2, name: 'Macbook', description: 'Apple Macbook.', price: '$10.00',
    image: imageBeakry},
    {id:3, name: 'Camera', description: 'DSLR camera.', price: '$15.00',
    image: imageBeakry},
];

const Products =() => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                </Grid>
            ))}
            </Grid>
        </main>
    );
}

export default Products;