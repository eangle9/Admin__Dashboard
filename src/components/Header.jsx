import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box marginBottom="20px">
            <Typography
                color={colors.grey[100]}
                variant="h3"
                fontWeight="bold"
                sx={{ mb: '4px' }}
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                color={colors.greenAccent[600]}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;