import { MainContext } from '../state/Context';
import { useContext} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({productData}) => {
  const {products, addProductToCart, buyNow} = useContext(MainContext)
    return (
        <Grid item xs={12} md={3}>
            <Card>
            <Link className="card_title" to={"/products/"+ productData.id}>
          <CardMedia
            component="img"
            height="350"
            image={productData.img_url}
            alt={productData.name}
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link className="card_title" to={"/products/"+ productData.id}>{productData.name}</Link>
            </Typography>
            <Typography gutterBottom variant="h6" sx={{color: "#ff9100"}} component="div">
              $ {productData.price}
            </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => addProductToCart(productData)} 
                                variant="contained" 
                                color="primary" size="medium">Add To Cart</Button>

                                <Button variant="outlined" 
                                onClick={() => buyNow(productData)}
                                sx={{ mx: 2 }} color="primary"  
                                size="medium">Buy Now</Button>
          </CardActions>
        </Card>
        </Grid>
      );
}

export default ProductCard
