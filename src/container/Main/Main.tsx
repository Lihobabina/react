import { Container } from '@mui/material'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Routes, Route } from 'react-router-dom'
type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]: number
    }
    changeProductsQuantity: (id: number, count: number) => void
    removeProductFromCart: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}
const Main = ({
    addProductToCart,
    productsInCart,
    changeProductsQuantity,
    removeProductFromCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '50px 0' }} component="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            addProductToCart={addProductToCart}
                            productsLikeState={productsLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            productsInCart={productsInCart}
                            removeProductFromCart={removeProductFromCart}
                            changeProductsQuantity={changeProductsQuantity}
                        />
                    }
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="shipping" element={<ShippingPage />} />
                <Route path="payment" element={<PaymentPage />} />
            </Routes>
        </Container>
    )
}
export default Main
