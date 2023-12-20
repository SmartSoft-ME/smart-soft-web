
import React, { FC } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { perksData } from './perks.data';
import {Perks} from '../../interfaces/perks'
interface PerkProps {
  perk: Perks ;
}

const Perk: FC<PerkProps> = ({ perk }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box textAlign="center" mt={10}>
      <Image src={perk.logoSrc} alt={perk.title} width={100} height={100} />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
          {perk.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {perk.paragraph}
        </Typography>
      </Box>
    </Grid>
  );
};

const Perks: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'lightgray', py: { xs: 6, md: 8 } }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>The perks of</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
          Eliminate idle periods with a solution that enables you to monitor and optimize all your workflows. Allocate your time to concentrate on your teams, customers, and the growth of your business.
        </Typography>
        <Grid container spacing={4}>
          {perksData.map((perk, index) => (
            <Perk key={index} perk={perk} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Perks;
