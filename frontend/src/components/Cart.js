import { MainContext } from '../state/Context';
import { useContext} from 'react'
import CartProductCard from './CartProductCard';
import { Grid, Box,Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cartItems, cartTotalPrice, removeAllCartItems} = useContext(MainContext)
    if(cartItems.length > 0){
        return (
            <div className="product_card_wrapper">
             <Box  sx={{ width: '80%' , margin: '0px auto'}}>
                            <Grid container spacing={3}>
            {
                cartItems.map((product)=>{
                    return (
                        <CartProductCard key={product.id} productData={product}></CartProductCard>
                    )
                })
            }

                    </Grid>
                    <Typography  variant="h6" sx={{color: "#000", textAlign: "right"}} component="div">
                        Total Price: $ {cartTotalPrice}
                    </Typography>
                   <Box sx={{textAlign: "right", marginTop: "15px"}}>
                   
                    <Button 
                    sx={{marginRight: "10px"}}
                    onClick={()=> {removeAllCartItems()}} 
                    variant="contained" color="error" 
                    size="medium" >Remove All Items</Button>

                    <Button 
                    onClick={()=> {}} 
                    variant="contained" color="primary" 
                    size="large"><Link to='/checkout'>Checkout</Link></Button>
                   </Box>
                    </Box>
        </div>
        )
    }
    if(cartItems.length <= 0){
        return (
            <div className="product_card_wrapper">
                <h1>Your Cart Is Empty</h1>
            </div>
        )
    }
}

export default Cart
