import Header from "../../components/Header";
import { Box } from "@mui/material";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return(
        <Box m="10px 20px 10px 270px">
            <Header title="PIE CHART" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    );
}

export default Pie;