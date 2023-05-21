import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geo = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);

    return(
        <Box m="10px 20px 10px 270px">
            <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart />
            </Box>
        </Box>
    );
}

export default Geo;