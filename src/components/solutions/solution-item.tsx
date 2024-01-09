/* eslint-disable @next/next/link-passhref */
import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Solution } from '@/interfaces/Solutions'
import Link from 'next/link'
import Button from '@mui/material/Button';

interface Props {
  item: Solution
}

const SolutionItem: FC<Props> = ({ item }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getId = (id: number | string) => {
    let pagePath;
    switch (item.id) {
      case 1:
        pagePath = 'Solutions/saasErp';
        break;
      case 2:
        pagePath = 'Solutions/onPremiseERP'; 
        break;
      case 3:
        pagePath = 'Solutions/hybridERP'; 
        break;
      default:
        pagePath = '/';
    } 
    return pagePath;
  };

  const pagePath = getId(item.id);

  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
            {item.title}
          </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.content}</Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 3,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
        <Link href={pagePath} passHref>
          <Button variant="contained" color="primary">
            More Details
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default SolutionItem;
