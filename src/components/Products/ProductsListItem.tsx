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
    color: string
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
        color: 'green',
    }

    onIncrement = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrement = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }
    changeColor = () => {
        this.setState((prevState: State) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
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
                        <div>Color: {this.state.color}</div>
                        <button onClick={this.changeColor}>Change color</button>
                        <div className="product-quantity">
                            <Button
                                variant="outlined"
                                onClick={this.onDecrement}
                                disabled={this.state.count <= 1}
                            >
                                -
                            </Button>
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
