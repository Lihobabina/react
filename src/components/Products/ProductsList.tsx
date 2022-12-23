import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import 'utils/productsArray'
type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone X"
                        type="Iphone"
                        capacity={128}
                        price={600}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone 12"
                        type="Iphone 12"
                        capacity={64}
                        price={700}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="Iphone 14 Pro"
                        type="Iphone 14"
                        capacity={256}
                        price={1000}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
