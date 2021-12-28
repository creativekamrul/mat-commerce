import { MainContext } from '../state/Context';
import { useContext} from 'react'
import ProductCard from './ProductCard';
import { Grid, Box } from '@mui/material';
const AllProducts = () => {
    const {products} = useContext(MainContext)
    return (
        <div className="product_card_wrapper">
            <Box  sx={{ width: '90%', margin: '0px auto' }}>
                            <Grid container spacing={3}>
            {
                products.map((product)=>{
                    return (
                        <ProductCard key={product.id} productData={product}></ProductCard>
                    )
                })
            }
            
                    </Grid>
                    </Box>
        </div>
    )
}

export default AllProducts
