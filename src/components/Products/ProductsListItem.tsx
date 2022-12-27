import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {
    title: string
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
                        <span>Type: {props.type}</span>
                    </div>
                    <div className="product-features">
                        <span>Capacity: {props.capacity}</span> Gb
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
