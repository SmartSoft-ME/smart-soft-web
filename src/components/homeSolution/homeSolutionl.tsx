import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '@/components/styled-button'
import FormDialog from '../Popup/Popup-button'
import Stack from '@mui/material/Stack'
import Image from 'next/image'
import type { HomeSolutionData } from '@/interfaces/homeSolutionData'

interface HomeHeroData {
  herodata: HomeSolutionData
}

const HomeHeroSolution: FC<HomeHeroData> = ({ herodata }) => {
  
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleButtonOnClick = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

 
  return (
    <Box id="/" sx={{backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'unset' }}}>
          <Grid item xs={12} md={7} >
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: 20, md: 30 },
                    letterSpacing: 0.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                {herodata.subtitle}
                </Typography>
              </Box>
              <Box sx={{ mb:2, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.7}}>
                  {herodata.paragraph}
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 }, mt: { xs: 2, md: 0 } }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="left" justifyContent="left" spacing={2}>
                  <StyledButton color="primary" size="large" variant="contained" onClick={handleButtonOnClick} >
                    Talk to our experts
                  </StyledButton>
                  <FormDialog open={dialogOpen} onClose={handleDialogClose} />
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box sx={{ lineHeight: 0, mt: { xs: 2, md: 0 } }}>
              <Image
                src={herodata.image}
                width={1000}
                height={1250}
                alt="Hero img"
                
                style={{ borderRadius: '50px' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHeroSolution
