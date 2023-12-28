/* eslint-disable @next/next/link-passhref */
import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Testimonial } from '@/interfaces/testimonial'
import Link from 'next/link'

interface Props {
  item: Testimonial
}

const TestimonialItem: FC<Props> = ({ item }) => {
     const getId = (id: number | string) => {
      let pagePath;
      switch (item.id) {
        case 1:
          pagePath = 'testimonial/saasErp';
          break;
        case 2:
          pagePath = 'testimonial/onPremiseERP'; 
          break;
        case 3:
          pagePath = 'testimonial/hybridERP'; 
          break;
        default:
          pagePath = '/';
      } 
      return pagePath;
    };

    const pagePath=getId(item.id)
  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
        <Link href={pagePath}>
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        </Link>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.content}</Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
      </Box>
    </Box>
  )
}
export default TestimonialItem
