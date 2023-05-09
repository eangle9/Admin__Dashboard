import Header from '../../components/Header';
import { Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box margin="20px 20px 20px 270px"  >
            <Box display="flex" justifyContent="space-between" alignItems="center"  >
                <Header title='DASHBOARD' subtitle='Wellcome to your dashboard' />
            </Box>
        </Box>

    )
}

export default Dashboard;