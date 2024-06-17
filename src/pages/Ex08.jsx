import { Box } from "@mui/material"

const Ex08 = (props) => {
    return(
        <Box {...props}>
            {props.children}
        </Box>
    )
}

export default Ex08