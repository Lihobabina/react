import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'
type Props = {
    title: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductsListItem extends Component<Props> {
    render() {
        return (
            <>
                <Card className="product">
                    <CardContent>
                        <div className="product-img">
                            <img src={this.props.image} alt="" />
                        </div>
                        <div className="product-title">{this.props.title}</div>
                        <div className="product-desc">
                            This is {this.props.title}
                        </div>
                        <div className="product-features">
                            <span>Type: {this.props.type}</span>
                        </div>
                        <div className="product-features">
                            <span>Capacity: {this.props.capacity}</span> Gb
                        </div>
                        <div className="product-price">
                            {this.props.price} $
                        </div>
                        <div className="product-quantity">
                            <Button variant="outlined" className="minus">
                                -
                            </Button>
                            <TextField
                                value="1"
                                size="small"
                                className="input"
                            />
                            <Button variant="outlined" className="plus">
                                +
                            </Button>
                        </div>
                    </CardContent>
                    <CardActions className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </Card>
            </>
        )
    }
}

// const ProductsListItem = (props: Props) => {

// }
export default ProductsListItem
