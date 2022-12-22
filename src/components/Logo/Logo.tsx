import logo from 'assets/logo.svg'
import Typography from '@mui/material/Typography'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="fake shop logo" />
        </Typography>
    )
}
export default Logo
