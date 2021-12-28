import React from 'react'
import { MainContext } from '../state/Context';
import { useContext} from 'react'
import { useParams } from 'react-router-dom';
import { Grid, Button, Box } from '@mui/material';
const SingleProduct = () => {

    const {products, addProductToCart, buyNow} = useContext(MainContext)
    const {product_id} = useParams()
    const singleProductData = products.filter(product => product.id == product_id)
    return (
        <div>
            {
                singleProductData.map(e=>{
                    return(
                        <Box key={e.id}>
                            <Grid container sx={{ p: 15 }}>
                                <Grid item md={6}>
                                <img src={e.img_url}></img>
                                    </Grid>
                                    
                                <Grid item md={6}  sx={{ mt: 15 }}>
                                <h1>{e.name}</h1>
                                <p className="single_product_des">{e.description}</p>
                                <Button onClick={() => addProductToCart(e)} 
                                variant="contained" 
                                color="primary" size="large">Add To Cart</Button>

                                <Button variant="outlined" 
                                onClick={() => buyNow(e)}
                                sx={{ mx: 2 }} color="primary"  
                                size="large">Buy Now</Button>
                                    </Grid>

                            </Grid>
                        </Box>

                    )
                })
            }
        </div>
    )
}

export default SingleProduct
