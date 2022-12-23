import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
    // desc: string
    type: string
    capacity: number
    price: number
}
const ProductsListItem = (props: Props) => {
    return (
        <>
            <Card className="product">
                <CardContent>
                    <div className="product-title">{props.title}</div>
                    <div className="product-desc">This is {props.title}</div>
                    <div className="product-features">
                        <span>Type:</span> {props.type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {props.capacity} Gb
                    </div>
                    <div className="product-price">{props.price} $</div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductsListItem
