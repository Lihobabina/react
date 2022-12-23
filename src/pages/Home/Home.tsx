import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                List of products{''}
            </Typography>
            <ProductsList />
        </>
    )
}
export default Home
