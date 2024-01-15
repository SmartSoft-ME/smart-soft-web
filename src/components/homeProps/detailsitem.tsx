/* eslint-disable react-hooks/rules-of-hooks */
import  React  , {FC} from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { featuresData } from '@/interfaces/features'
interface DetailItemProps {
  data: featuresData;
}

const detailsItems: FC<DetailItemProps> = ({data}) => {

  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mt: '4px' }}>
        {data.Description}
      </Typography>
      <Image src={data.image} width={400} height={200} alt="Hero img" />
    </Container>
  )
}
export default detailsItems
