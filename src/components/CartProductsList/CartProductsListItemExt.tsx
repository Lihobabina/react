import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductProps } from 'utils/productsArray'
import './CartProductsListItem.scss'
import { useState } from 'react'
import './CartProductsListItemExt.scss'
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
    const [count, setCount] = useState<number>(productCount)
    const plus = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const minus = () => {
        setCount((prevState: number) => prevState - 1)
    }

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <h3>Count</h3>
                    <div className="counter">
                        <button onClick={minus} disabled={count <= 1}>
                            -
                        </button>
                        <p>{count}</p>
                        <button onClick={plus} disabled={count >= 10}>
                            +
                        </button>
                    </div>
                    <Button onClick={() => removeProductFromCart(product.id)}>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExt
