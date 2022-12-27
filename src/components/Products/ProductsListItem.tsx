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

type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this)
        this.state = {
            count: 1,
        }
    }

    onIncrement() {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        const { title, type, capacity, price, image } = this.props
        return (
            <>
                <Card className="product">
                    <CardContent>
                        <div className="product-img">
                            <img src={image} alt="" />
                        </div>
                        <div className="product-title">{title}</div>
                        <div className="product-desc">This is {title}</div>
                        <div className="product-features">
                            <span>Type: {type}</span>
                        </div>
                        <div className="product-features">
                            <span>Capacity: {capacity}</span> Gb
                        </div>
                        <div className="product-price">{price} $</div>
                        <div className="product-quantity">
                            <Button variant="outlined">-</Button>
                            <TextField value={this.state.count} size="small" />
                            <Button
                                variant="outlined"
                                onClick={this.onIncrement}
                            >
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
