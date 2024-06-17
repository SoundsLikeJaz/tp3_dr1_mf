import { Grid } from "@mui/material";

const Ex07 = (props) => {
    return(
        <Grid {...props}>
            {props.children}
        </Grid>
    );
}

export default Ex07;