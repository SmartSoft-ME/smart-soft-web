import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import DownloadIcon from '@mui/icons-material/Download';
import type { HomeData } from '@/interfaces/homeData'


interface HomeHeroData{
  homedata:HomeData
}
const HomeHero: FC<HomeHeroData> = ({homedata}) => {
  return (
    <Box id="herohome" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 6 } }}>
      <Container maxWidth="xl" >
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column'} }}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'center' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    textAlign: { xs: 'center', md: 'center' },
                    position: 'relative',
                    fontSize: { xs: 40, md: 72 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                    {homedata.title}  
            </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '100%' } }}>
              <Typography variant="h3" sx={{ mt: 2, fontWeight: 600, textAlign: 'center' }}>
                    {homedata.subtitle}
                </Typography>
              </Box>
              <Box sx={{ mb: 8, width: { xs: '100%', md: '100%' } }}>
                <Typography variant='h4' sx={{color: 'text.secondary', lineHeight: 1.6 }}>
                  
                  {homedata.paragraph}                  
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <StyledButton color="primary" size="large" variant="contained" startIcon={<DownloadIcon />}>
                         Download brochure
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero
