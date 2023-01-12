import { Typography, Grid } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExt from 'components/CartProductsList/CartProductsListItemExt'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    changeProductsQuantity: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductsQuantity,
}: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart{' '}
            </Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExt}
                    removeProductFromCart={removeProductFromCart}
                    changeProductsQuantity={changeProductsQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
