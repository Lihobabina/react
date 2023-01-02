import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
type CartData = {
    totalCount: number
    totalPrice: number
}

type Props = {}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
