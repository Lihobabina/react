import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
    // desc: string
    type: string
    capacity: number
    price: number
}
const ProductsListItem = ({ title, capacity, price, type }: Props) => {
    return (
        <>
            <Card className="product">
                <CardContent>
                    <div className="product-title">{title}</div>
                    <div className="product-desc">This is {title}</div>
                    <div className="product-features">
                        <span>Type:</span> {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductsListItem
