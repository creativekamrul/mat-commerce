import { MainContext } from '../state/Context';
import { useContext, useState} from 'react'
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from '@mui/material';
const Stripe = () => {
    const {cartTotalPrice, removeAllCartItems} = useContext(MainContext)
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: cartTotalPrice*100,
                id
            })
                console.log(response)
            if(response.data.success) {
                console.log("Successful payment")
                removeAllCartItems()
                setSuccess(true)
                setTimeout(()=> {
                    window.location.href = "http://localhost:3000/"
                }, 5000)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
    

    return (
        <div>
            <Box  sx={{ width: '80%', margin: '50px auto', textAlign: "center" }}>
            <Typography gutterBottom variant="h4" sx={{color: "#000"}} component="div">
              Pay ${cartTotalPrice}
            </Typography>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "50px auto" }}>
            <CardElement />
                <Button variant="contained" sx={{margin: "30px"}} type="submit">Pay</Button>
                </form>
            </Box>
            {
                success ? (<Typography gutterBottom variant="hp" sx={{color: "green", textAlign: "Center"}} component="div">
                Payment Sucessfull
              </Typography>) : (<h1></h1>)
            }
        </div>
    )
}

export default Stripe
