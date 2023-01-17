import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
type ProductProps = {
    id: number
    title: string
    type: string
    capacity: number
    price: number
    image: string
}
type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}
const ProductsList = ({
    addProductToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        title,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                                toggleLikeState={toggleLikeState}
                                isLiked={productsLikeState[id]}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
