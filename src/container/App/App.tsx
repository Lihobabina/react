import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

type ProductsLikeState = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) =>
        setProductsInCart((prevState: ProductsInCart) => omit(prevState, [id]))

    const changeProductsQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const [productsLikeState, setproductsLikeState] =
        useState<ProductsLikeState>({})

    const toggleLikeState = (id: number) => {
        setproductsLikeState((prevState: ProductsLikeState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductsQuantity={changeProductsQuantity}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
            />
        </StyledEngineProvider>
    )
}
export default App
