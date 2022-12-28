import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductsListItem.scss'
type Props = {
    title: string
    type: string
    capacity: number
    price: number
    image: string
}
const ProductsListItem = ({ title, type, capacity, price, image }: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('green')
    const changeColor = () => {
        setColor((prevState: string) =>
            prevState === 'green' ? 'red' : 'green'
        )
    }
    // const changeColor = ()=>{
    //     setColor((prevState:string)=>{
    // if (prevState === 'green'){
    //     return 'red'
    // }else{
    //     return 'green'
    // }
    //     })
    // }
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
                        <span>Type: </span>
                        {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                    <p>Color: {color}</p>
                    <button onClick={changeColor}>Change color</button>
                </CardContent>
                <Button
                    variant="outlined"
                    onClick={() => setCount(count - 1)}
                    disabled={count <= 1}
                >
                    -
                </Button>
                <TextField value={count} size="small" />
                <Button
                    variant="outlined"
                    onClick={() => setCount(count + 1)}
                    disabled={count >= 10}
                >
                    +
                </Button>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductsListItem
