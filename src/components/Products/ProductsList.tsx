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
type Props = {}
const ProductsList = (props: Props) => {
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
                    (
                        {
                            id,
                            title,
                            type,
                            capacity,
                            price,
                            image,
                        }: ProductProps,
                        i
                    ) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
