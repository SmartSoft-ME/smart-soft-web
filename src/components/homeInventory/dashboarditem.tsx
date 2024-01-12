/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Image from 'next/image'
// import Stack from '@mui/material/Stack'
// import { StyledButton } from '@/components/styled-button'
import EastIcon from '@mui/icons-material/East'
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

const dashboardItem: React.FC = () => {
  
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mt: '4px' }}>
      Empower your business with dynamic reporting. Tailor insights to optimize costs, boost sales force effectiveness, and monitor key items. Elevate decision-making through intuitive dashboards for unparalleled results.
      </Typography>
      {/* <Stack direction={isMobile ? 'column' : 'row'} spacing={2} sx={{ marginBottom: 2 }}>
        <StyledButton color="primary" size="large" variant="contained">
          Take a product tour
        </StyledButton>

        <StyledButton color="primary" size="large" variant="outlined" endIcon={<EastIcon />}>
          Learn more about Intelligent GL
        </StyledButton>
      </Stack> */}
      <Image src="/images/erp-image.jpg" width={400} height={200} alt="Hero img" />
    </Container>
  )
}
export default dashboardItem
