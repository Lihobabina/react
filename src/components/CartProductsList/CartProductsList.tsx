import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'
import CartProductsListItem from './CartProductsListItem'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    changeProductsQuantity?: (id: number, count: number) => void
}
const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductsListItem,
    removeProductFromCart,
    changeProductsQuantity,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    changeProductsQuantity={changeProductsQuantity}
                />
            ))}
        </>
    )
}
export default CartProductsList
