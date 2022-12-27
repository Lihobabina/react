import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
type ProductProps = {
    title: string
    type: string
    capacity: number
    price: number
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
                    ({ title, type, capacity, price }: ProductProps, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ProductsListItem
                                title={title}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
