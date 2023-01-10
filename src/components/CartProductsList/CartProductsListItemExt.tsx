import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductProps } from 'utils/productsArray'
import './CartProductsListItem.scss'
type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
}
const CartProductsListItemExt = ({
    productCount,
    product,
    removeProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>

                    <Button onClick={() => removeProductFromCart(product.id)}>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExt
