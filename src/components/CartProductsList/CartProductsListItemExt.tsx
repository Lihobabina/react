import { Card, CardContent, Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductProps } from 'utils/productsArray'
import './CartProductsListItem.scss'
import './CartProductsListItemExt.scss'
import Quantity from 'components/Quantity/Quantity'
type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
    changeProductsQuantity: (id: number, count: number) => void
}
const CartProductsListItemExt = ({
    productCount,
    product,
    removeProductFromCart,
    changeProductsQuantity,
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
                    <h3>Count {productCount}</h3>
                    <Quantity
                        count={productCount}
                        onDecrementClick={() =>
                            productCount <= 1
                                ? removeProductFromCart(product.id)
                                : changeProductsQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrementClick={() =>
                            changeProductsQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button onClick={() => removeProductFromCart(product.id)}>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExt
