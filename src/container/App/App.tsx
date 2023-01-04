import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 3,
    })

    const addProductToCart = (count: number, id: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: prevState[id] + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 1)}>Addd</button>
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}
export default App
