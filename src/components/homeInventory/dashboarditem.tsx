import * as React from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { StyledButton } from '@/components/styled-button'
import EastIcon from '@mui/icons-material/East'

const dashboardItem: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: 'background-paper', display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="body1" gutterBottom sx={{ mt: '4px' }}>
        <span style={{ fontWeight: 'bold' }}>Dashboards (GL)</span>
        GL pairs AI and automation to streamline accounting processes and improve data accuracy.
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <StyledButton color="primary" size="large" variant="contained">
          Take a product tour
        </StyledButton>

        <StyledButton color="primary" size="large" variant="outlined" endIcon={<EastIcon />}>
          Learn more about Intelligent GL
        </StyledButton>
      </Stack>
      <Image src="/images/erp-image.jpg" width={400} height={200} alt="Hero img" />
    </Container>
  )
}
export default dashboardItem
