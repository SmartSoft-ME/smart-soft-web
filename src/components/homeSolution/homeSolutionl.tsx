import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import DownloadIcon from '@mui/icons-material/Download'
import type { HomeData } from '@/interfaces/homeData'
import FormDialog from '../Popup/Popup-button'
import Stack from '@mui/material/Stack'

interface HomeHeroData {
  herodata: HomeData
}
const HomeHeroSolution: FC<HomeHeroData> = ({ herodata }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleButtonOnClick = () => {
    setDialogOpen(true)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <Box
      id="herohome"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        pt: 4,
        pb: { xs: 8, md: 10 },
        minHeight: '80vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  textAlign: { xs: 'center', md: 'center' },
                  position: 'relative',
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                {herodata.title}
              </Typography>

              <Typography variant="h4" sx={{ mt: 2, fontWeight: 600, textAlign: 'center' }}>
                {herodata.subtitle}
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 4 }}>
                {herodata.paragraph}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="center" spacing={2}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained" startIcon={<DownloadIcon />}>
                    Download brochure
                  </StyledButton>
                </ScrollLink>
                <StyledButton color="primary" size="large" variant="contained" onClick={handleButtonOnClick}>
                  Talk to our experts
                </StyledButton>
                <FormDialog open={dialogOpen} onClose={handleDialogClose} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHeroSolution
