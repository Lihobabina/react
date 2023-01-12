import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'

import './ProductsListItem.scss'
type Props = {
    id: number
    title: string
    type: string
    capacity: number
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductsListItem = ({
    id,
    title,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const onDecrementClick = () => {
        setCount((prevState: number) => prevState - 1)
    }
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
                    <Quantity
                        count={count}
                        onIncrementClick={onIncrementClick}
                        onDecrementClick={onDecrementClick}
                    />
                </CardContent>

                <CardActions className="btns-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
export default ProductsListItem
