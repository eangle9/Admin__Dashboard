import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="10px 20px 10px 270px">
      <Header title="BAR CHART" subtitle="Responsive Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
