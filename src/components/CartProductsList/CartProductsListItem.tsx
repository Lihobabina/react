import { ProductProps } from 'utils/productsArray'

type Props = {
    productCount: number
    product: ProductProps
}
const CartProductsListItem = ({ productCount, product }: Props) => {
    return (
        <>
            <div>
                {product.title}: {productCount}
            </div>
        </>
    )
}
export default CartProductsListItem
