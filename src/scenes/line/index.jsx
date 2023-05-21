import Header from "../../components/Header";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";

const Line = () => {
    return(
        <Box m="10px 20px 10px 270px">
            <Header title="LINE CHART" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    );
}

export default Line;