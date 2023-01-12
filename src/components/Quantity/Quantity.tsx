import { Button, TextField } from '@mui/material'
type Props = {
    count: number
    onIncrementClick: () => void
    onDecrementClick: () => void
    minCount?: number
}
const Quantity = ({
    count,
    onIncrementClick,
    onDecrementClick,
    minCount = 1,
}: Props) => {
    return (
        <div>
            <Button
                variant="outlined"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
